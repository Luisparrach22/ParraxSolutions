import { NextResponse } from 'next/server';
import { rateLimited } from '@/server/contact/rate-limit';
import { isValidContactRequest, parseContactRequest } from '@/server/contact/validation';
import { buildContactEmail } from '@/server/contact/email-template';
import { sendContactEmail } from '@/server/contact/mailer';

/**
 * Endpoint del formulario de contacto.
 * En desarrollo sin credenciales de email, se valida y registra en log.
 */
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

  const data = parseContactRequest(body);
  if (!isValidContactRequest(data)) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const sent = await sendContactEmail(buildContactEmail(data), data.email);
  if (!sent) {
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  // Registro mínimo (sin volcar el mensaje completo en logs: minimización RGPD)
  console.info('[contacto] nueva solicitud', { type: data.type, company: data.company, urgency: data.urgency, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
