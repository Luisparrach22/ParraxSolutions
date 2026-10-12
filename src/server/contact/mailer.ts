import nodemailer from 'nodemailer';
import type { ContactEmail } from './email-template';

/** Tiempo máximo por fase de la conexión con el proveedor de correo (PERF-002). */
export const MAIL_TIMEOUT_MS = 10_000;

/**
 * Resumen de un error del proveedor apto para logs: solo tipo y códigos.
 * El mensaje completo puede contener direcciones de email o respuestas del servidor (SEC-011).
 */
export function describeMailError(err: unknown) {
  if (typeof err !== 'object' || err === null) return { name: typeof err };
  const e = err as { name?: unknown; code?: unknown; responseCode?: unknown };
  return { name: e.name, code: e.code, responseCode: e.responseCode };
}

/**
 * Envío de email:
 * 1. SMTP directo (Gmail u otro servidor) si se configuran SMTP_USER y SMTP_PASS.
 * 2. Vía API REST de Resend si se configuran RESEND_API_KEY y CONTACT_TO_EMAIL.
 * 3. Sin credenciales: en desarrollo no se envía nada y se considera correcto;
 *    en producción es un error de configuración y se devuelve false (SEC-010).
 * Ver .env.example.
 *
 * Devuelve false si el envío falla.
 */
export async function sendContactEmail(email: ContactEmail, replyTo: string): Promise<boolean> {
  const { subject, text, html } = email;
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
        connectionTimeout: MAIL_TIMEOUT_MS,
        greetingTimeout: MAIL_TIMEOUT_MS,
        socketTimeout: MAIL_TIMEOUT_MS,
      });

      await transporter.sendMail({
        from: `"Parrax Solutions Web" <${smtpUser}>`,
        to: contactTo,
        replyTo,
        subject,
        text,
        html,
      });
    } catch (err) {
      console.error('[contacto] error enviando email vía SMTP', describeMailError(err));
      return false;
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
        body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), reply_to: replyTo, subject, text, html }),
        signal: AbortSignal.timeout(MAIL_TIMEOUT_MS),
      });
      if (!res.ok) {
        console.error('[contacto] error enviando email vía Resend', { status: res.status });
        return false;
      }
    } catch (err) {
      console.error('[contacto] error de red enviando email vía Resend', describeMailError(err));
      return false;
    }
  } else if (process.env.NODE_ENV === 'production') {
    console.error('[contacto] Ni SMTP ni Resend están configurados: la solicitud no se ha enviado');
    return false;
  }

  return true;
}
