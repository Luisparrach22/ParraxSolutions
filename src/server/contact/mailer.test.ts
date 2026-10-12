import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContactEmail } from './email-template';

// Ningún test abre conexiones reales: nodemailer y fetch están simulados.
const { sendMail, createTransport } = vi.hoisted(() => {
  const sendMail = vi.fn();
  const createTransport = vi.fn(() => ({ sendMail }));
  return { sendMail, createTransport };
});
vi.mock('nodemailer', () => ({ default: { createTransport } }));

import { sendContactEmail } from './mailer';

const email: ContactEmail = { subject: 'Asunto', text: 'Texto', html: '<p>HTML</p>' };
const replyTo = 'cliente@empresa.es';

const ENV_KEYS = ['SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL', 'RESEND_API_KEY', 'CONTACT_FROM_EMAIL'] as const;

function setEnv(values: Partial<Record<(typeof ENV_KEYS)[number], string>>) {
  for (const key of ENV_KEYS) vi.stubEnv(key, values[key] ?? '');
}

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  sendMail.mockReset();
  createTransport.mockClear();
  fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);
  vi.spyOn(console, 'error').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  setEnv({});
});

describe('sendContactEmail · SMTP', () => {
  beforeEach(() => {
    setEnv({ SMTP_USER: 'web@example.test', SMTP_PASS: 'abcd efgh ijkl mnop', CONTACT_TO_EMAIL: 'buzon@example.test' });
  });

  it('envía por SMTP con la contraseña sin espacios y los datos del email', async () => {
    sendMail.mockResolvedValue({});
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(true);

    expect(createTransport).toHaveBeenCalledWith({
      service: 'gmail',
      auth: { user: 'web@example.test', pass: 'abcdefghijklmnop' },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    });
    expect(sendMail).toHaveBeenCalledWith({
      from: '"Parrax Solutions Web" <web@example.test>',
      to: 'buzon@example.test',
      replyTo,
      subject: 'Asunto',
      text: 'Texto',
      html: '<p>HTML</p>',
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('usa SMTP_USER como destinatario si falta CONTACT_TO_EMAIL', async () => {
    setEnv({ SMTP_USER: 'web@example.test', SMTP_PASS: 'secret' });
    sendMail.mockResolvedValue({});
    await sendContactEmail(email, replyTo);
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({ to: 'web@example.test' }));
  });

  it('devuelve false y registra el error si el servidor SMTP falla', async () => {
    sendMail.mockRejectedValue(new Error('SMTP caído'));
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(false);
    expect(console.error).toHaveBeenCalled();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('tiene prioridad sobre Resend cuando ambos están configurados', async () => {
    setEnv({ SMTP_USER: 'web@example.test', SMTP_PASS: 'secret', RESEND_API_KEY: 're_test', CONTACT_TO_EMAIL: 'buzon@example.test' });
    sendMail.mockResolvedValue({});
    await sendContactEmail(email, replyTo);
    expect(sendMail).toHaveBeenCalledOnce();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('sendContactEmail · Resend', () => {
  beforeEach(() => {
    setEnv({ RESEND_API_KEY: 're_test', CONTACT_TO_EMAIL: 'a@example.test, b@example.test' });
  });

  it('envía por la API de Resend con los destinatarios separados y el remitente por defecto', async () => {
    fetchMock.mockResolvedValue(new Response('{}', { status: 200 }));
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(true);

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://api.resend.com/emails');
    expect(init.method).toBe('POST');
    expect(init.headers).toMatchObject({ Authorization: 'Bearer re_test', 'Content-Type': 'application/json' });
    expect(JSON.parse(init.body as string)).toEqual({
      from: 'Parrax Web <onboarding@resend.dev>',
      to: ['a@example.test', 'b@example.test'],
      reply_to: replyTo,
      subject: 'Asunto',
      text: 'Texto',
      html: '<p>HTML</p>',
    });
    expect(init.signal).toBeInstanceOf(AbortSignal);
    expect(createTransport).not.toHaveBeenCalled();
  });

  it('devuelve false si Resend no responde a tiempo', async () => {
    fetchMock.mockRejectedValue(new DOMException('The operation timed out.', 'TimeoutError'));
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(false);
    expect(console.error).toHaveBeenCalled();
  });

  it('usa CONTACT_FROM_EMAIL como remitente si está definido', async () => {
    setEnv({ RESEND_API_KEY: 're_test', CONTACT_TO_EMAIL: 'a@example.test', CONTACT_FROM_EMAIL: 'Web <web@example.test>' });
    fetchMock.mockResolvedValue(new Response('{}', { status: 200 }));
    await sendContactEmail(email, replyTo);
    const body = JSON.parse((fetchMock.mock.calls[0] as [string, RequestInit])[1].body as string);
    expect(body.from).toBe('Web <web@example.test>');
  });

  it('devuelve false si Resend responde con error', async () => {
    fetchMock.mockResolvedValue(new Response('quota exceeded', { status: 429 }));
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(false);
    expect(console.error).toHaveBeenCalled();
  });

  it('devuelve false si la petición a Resend falla por red', async () => {
    fetchMock.mockRejectedValue(new TypeError('fetch failed'));
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(false);
    expect(console.error).toHaveBeenCalled();
  });

  it('no usa Resend si falta CONTACT_TO_EMAIL', async () => {
    setEnv({ RESEND_API_KEY: 're_test' });
    await sendContactEmail(email, replyTo);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('sendContactEmail · sin transporte configurado', () => {
  it('en desarrollo no envía nada y devuelve true', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(true);
    expect(createTransport).not.toHaveBeenCalled();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('en producción solo avisa en el log (comportamiento actual)', async () => {
    vi.stubEnv('NODE_ENV', 'production');
    await sendContactEmail(email, replyTo);
    expect(console.warn).toHaveBeenCalledOnce();
    expect(createTransport).not.toHaveBeenCalled();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  // Defecto conocido SEC-010 (mejoras.md): sin transporte en producción se informa de éxito.
  // Al corregirlo en T-09, convertir en `it`.
  it.fails('[SEC-010] en producción devuelve false si no hay transporte configurado', async () => {
    vi.stubEnv('NODE_ENV', 'production');
    await expect(sendContactEmail(email, replyTo)).resolves.toBe(false);
  });
});
