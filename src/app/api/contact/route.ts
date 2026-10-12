import { NextResponse } from 'next/server';
import type { ContactErrorCode, ContactResponse } from '@/lib/contact-schema';
import { rateLimited } from '@/server/contact/rate-limit';
import { isValidContactRequest, parseContactRequest } from '@/server/contact/validation';
import { buildContactEmail } from '@/server/contact/email-template';
import { sendContactEmail } from '@/server/contact/mailer';

/**
 * Endpoint del formulario de contacto.
 * En desarrollo sin credenciales de email, se valida y registra en log.
 */
// Límite de ejecución de la función: cubre los timeouts del mailer con margen (PERF-002).
export const maxDuration = 30;

const ok = () => NextResponse.json<ContactResponse>({ ok: true });
const fail = (error: ContactErrorCode, status: number) => NextResponse.json<ContactResponse>({ ok: false, error }, { status });

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'local';
  if (rateLimited(ip)) {
    return fail('rate_limited', 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail('invalid_json', 400);
  }
  if (!body || typeof body !== 'object') {
    return fail('invalid_json', 400);
  }

  // Honeypot: si un bot rellena el campo oculto, respondemos OK sin procesar
  if (typeof body.website === 'string' && body.website.length > 0) {
    return ok();
  }

  const data = parseContactRequest(body);
  if (!isValidContactRequest(data)) {
    return fail('validation', 422);
  }

  const sent = await sendContactEmail(buildContactEmail(data), data.email);
  if (!sent) {
    return fail('send_failed', 502);
  }

  // Registro mínimo (sin volcar el mensaje completo en logs: minimización RGPD)
  console.info('[contacto] nueva solicitud', { type: data.type, company: data.company, urgency: data.urgency, at: new Date().toISOString() });

  return ok();
}
