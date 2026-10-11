import { NextResponse } from 'next/server';

/**
 * Endpoint del formulario de contacto.
 *
 * Envío de email (opcional, sin dependencias): si existen las variables
 * RESEND_API_KEY y CONTACT_TO_EMAIL se envía la solicitud por email vía la API
 * REST de Resend. Si no están configuradas, la solicitud se valida y se
 * registra en el log del servidor (útil en desarrollo).
 * Ver .env.example.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URGENCY: Record<string, string> = {
  explorando: 'Estoy explorando',
  '3-meses': 'En los próximos 3 meses',
  urgente: 'Es urgente',
};

// Límite simple anti-abuso: 5 envíos por IP cada 10 minutos (memoria del proceso)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // evita crecimiento ilimitado
  return recent.length > MAX_HITS;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'local';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: si un bot rellena el campo oculto, respondemos OK sin procesar
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const str = (k: string, max = 2000) => (typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, max) : '');
  const data = {
    type: str('type', 20) === 'auditoria' ? 'auditoria' : 'sesion',
    name: str('name', 120),
    company: str('company', 160),
    email: str('email', 200),
    message: str('message', 4000),
    urgency: str('urgency', 20),
    privacy: body.privacy === true,
  };

  const valid =
    data.name.length >= 2 &&
    data.company.length >= 2 &&
    EMAIL_RE.test(data.email) &&
    data.message.length >= 20 &&
    data.urgency in URGENCY &&
    data.privacy;

  if (!valid) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'Parrax Web <onboarding@resend.dev>';

  if (apiKey && to) {
    const typeLabel = data.type === 'auditoria' ? 'Auditoría digital gratuita' : 'Sesión estratégica';
    const subject = `Nueva solicitud: ${typeLabel} · ${data.company}`;
    const text = [
      `Tipo: ${typeLabel}`,
      `Nombre: ${data.name}`,
      `Empresa: ${data.company}`,
      `Email: ${data.email}`,
      `Urgencia: ${URGENCY[data.urgency]}`,
      '',
      data.message,
    ].join('\n');
    const html = `<h2>${esc(subject)}</h2><ul><li><b>Tipo:</b> ${esc(typeLabel)}</li><li><b>Nombre:</b> ${esc(data.name)}</li><li><b>Empresa:</b> ${esc(data.company)}</li><li><b>Email:</b> ${esc(data.email)}</li><li><b>Urgencia:</b> ${esc(URGENCY[data.urgency])}</li></ul><p style="white-space:pre-wrap">${esc(data.message)}</p>`;

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), reply_to: data.email, subject, text, html }),
      });
      if (!res.ok) {
        console.error('[contacto] error enviando email', res.status, await res.text().catch(() => ''));
        return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
      }
    } catch (err) {
      console.error('[contacto] error de red enviando email', err);
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
  } else if (process.env.NODE_ENV === 'production') {
    console.warn('[contacto] RESEND_API_KEY / CONTACT_TO_EMAIL no configurados: la solicitud solo se registra en el log');
  }

  // Registro mínimo (sin volcar el mensaje completo en logs: minimización RGPD)
  console.info('[contacto] nueva solicitud', { type: data.type, company: data.company, urgency: data.urgency, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
