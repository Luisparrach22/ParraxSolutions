import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Endpoint del formulario de contacto.
 *
 * Envío de email:
 * 1. SMTP directo (Gmail u otro servidor) si se configuran SMTP_USER y SMTP_PASS.
 * 2. Vía API REST de Resend si se configuran RESEND_API_KEY y CONTACT_TO_EMAIL.
 * 3. En desarrollo sin credenciales, se valida y registra en log.
 * Ver .env.example.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URGENCY: Record<string, string> = {
  explorando: 'Estoy explorando',
  '3-meses': 'En los próximos 3 meses',
  urgente: 'Es urgente',
};

// Nota arquitectónica: En entornos serverless (Vercel), este limitador opera en la
// memoria de cada instancia/worker individual y no se comparte globalmente entre instancias.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const MAX_TRACKED_IPS = 5000;
const hits = new Map<string, number[]>();

function pruneExpired(now: number): void {
  for (const [ip, timestamps] of hits.entries()) {
    const activeTimestamps = timestamps.filter((t) => now - t < WINDOW_MS);
    if (activeTimestamps.length === 0) {
      hits.delete(ip);
    } else if (activeTimestamps.length < timestamps.length) {
      hits.set(ip, activeTimestamps);
    }
  }

  while (hits.size > MAX_TRACKED_IPS) {
    const oldestKey = hits.keys().next().value;
    if (oldestKey !== undefined) {
      hits.delete(oldestKey);
    } else {
      break;
    }
  }
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size >= MAX_TRACKED_IPS) {
    pruneExpired(now);
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
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

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '');
  const contactTo = process.env.CONTACT_TO_EMAIL || smtpUser;

  // 1. Prioridad: SMTP directo (Gmail u otro)
  if (smtpUser && smtpPass && contactTo) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Parrax Solutions Web" <${smtpUser}>`,
        to: contactTo,
        replyTo: data.email,
        subject,
        text,
        html,
      });
    } catch (err) {
      console.error('[contacto] error enviando email vía SMTP', err);
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
  } else if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    // 2. Alternativa: Resend API
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || 'Parrax Web <onboarding@resend.dev>';

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), reply_to: data.email, subject, text, html }),
      });
      if (!res.ok) {
        console.error('[contacto] error enviando email vía Resend', res.status, await res.text().catch(() => ''));
        return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
      }
    } catch (err) {
      console.error('[contacto] error de red enviando email vía Resend', err);
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
  } else if (process.env.NODE_ENV === 'production') {
    console.warn('[contacto] Ni SMTP ni Resend están configurados: la solicitud solo se registra en el log');
  }

  // Registro mínimo (sin volcar el mensaje completo en logs: minimización RGPD)
  console.info('[contacto] nueva solicitud', { type: data.type, company: data.company, urgency: data.urgency, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
