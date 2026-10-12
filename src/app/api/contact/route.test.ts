import { beforeEach, describe, expect, it, vi } from 'vitest';

// El envío real se sustituye por un mock: estas pruebas cubren solo el controlador.
const { sendContactEmail } = vi.hoisted(() => ({ sendContactEmail: vi.fn() }));
vi.mock('@/server/contact/mailer', () => ({ sendContactEmail }));

type RouteModule = typeof import('./route');
let POST: RouteModule['POST'];

const validBody = {
  type: 'auditoria',
  name: 'Ana López',
  company: 'Acme SL',
  email: 'ana@acme.es',
  message: 'Necesitamos automatizar la facturación mensual.',
  urgency: 'urgente',
  privacy: true,
  website: '',
};

let ipCounter = 0;
/** IP distinta por defecto para que el rate limit no interfiera entre casos. */
const freshIp = () => `10.0.0.${++ipCounter}`;

function post(body: unknown, opts: { ip?: string | null; headers?: Record<string, string>; raw?: boolean } = {}) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', ...opts.headers };
  const ip = opts.ip === undefined ? freshIp() : opts.ip;
  if (ip !== null) headers['x-forwarded-for'] = ip;
  return POST(
    new Request('http://localhost/api/contact', {
      method: 'POST',
      headers,
      body: opts.raw ? (body as string) : JSON.stringify(body),
    }),
  );
}

beforeEach(async () => {
  // Módulo nuevo en cada test: el estado en memoria del rate limit empieza vacío.
  vi.resetModules();
  ({ POST } = await import('./route'));
  sendContactEmail.mockReset();
  sendContactEmail.mockResolvedValue(true);
  vi.spyOn(console, 'info').mockImplementation(() => {});
});

describe('POST /api/contact · respuestas', () => {
  it('200 con una solicitud válida y envía el email con reply-to del cliente', async () => {
    const res = await post(validBody);
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });

    expect(sendContactEmail).toHaveBeenCalledOnce();
    const [mail, replyTo] = sendContactEmail.mock.calls[0];
    expect(replyTo).toBe('ana@acme.es');
    expect(mail.subject).toBe('Nueva solicitud: Auditoría digital gratuita · Acme SL');
  });

  it('registra la solicitud sin volcar el mensaje ni el email en el log', async () => {
    await post(validBody);
    expect(console.info).toHaveBeenCalledOnce();
    const logged = JSON.stringify((console.info as unknown as ReturnType<typeof vi.fn>).mock.calls[0]);
    expect(logged).not.toContain(validBody.message);
    expect(logged).not.toContain(validBody.email);
  });

  it('400 invalid_json si el cuerpo no es JSON', async () => {
    const res = await post('no-json', { raw: true });
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ ok: false, error: 'invalid_json' });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('400 invalid_json si el cuerpo es null', async () => {
    const res = await post('null', { raw: true });
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ ok: false, error: 'invalid_json' });
  });

  it.each([
    ['nombre corto', { name: 'A' }],
    ['email inválido', { email: 'ana@acme' }],
    ['mensaje corto', { message: 'corto' }],
    ['urgencia desconocida', { urgency: 'ya' }],
    ['sin privacidad', { privacy: false }],
    ['privacidad como texto', { privacy: 'true' }],
  ])('422 validation: %s', async (_label, override) => {
    const res = await post({ ...validBody, ...override });
    expect(res.status).toBe(422);
    await expect(res.json()).resolves.toEqual({ ok: false, error: 'validation' });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('422 validation si el cuerpo es un array JSON', async () => {
    const res = await post([validBody]);
    expect(res.status).toBe(422);
  });

  it('502 send_failed si el proveedor de correo falla', async () => {
    sendContactEmail.mockResolvedValue(false);
    const res = await post(validBody);
    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toEqual({ ok: false, error: 'send_failed' });
    expect(console.info).not.toHaveBeenCalled();
  });

  // Defecto conocido SEC-004: la urgencia "toString" supera la validación y la plantilla lanza
  // un TypeError (500 sin controlar). Al corregirlo en T-05, convertir en `it`.
  it.fails('[SEC-004] 422 con una urgencia heredada de Object.prototype', async () => {
    const res = await post({ ...validBody, urgency: 'toString' });
    expect(res.status).toBe(422);
  });

  // Comportamiento actual documentado para SEC-005 (se corrige en T-07): se acepta text/plain.
  it.fails('[SEC-005] 415 si el Content-Type no es application/json', async () => {
    const res = await post(validBody, { headers: { 'Content-Type': 'text/plain' } });
    expect(res.status).toBe(415);
  });
});

describe('POST /api/contact · honeypot', () => {
  it('responde 200 sin enviar nada si el campo oculto está relleno', async () => {
    const res = await post({ ...validBody, website: 'https://spam.example' });
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
    expect(sendContactEmail).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
  });

  it('responde 200 aunque el resto de campos sean inválidos', async () => {
    const res = await post({ website: 'bot' });
    expect(res.status).toBe(200);
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('ignora el honeypot vacío', async () => {
    await post({ ...validBody, website: '' });
    expect(sendContactEmail).toHaveBeenCalledOnce();
  });
});

describe('POST /api/contact · rate limiting', () => {
  it('permite 5 peticiones por IP y responde 429 a partir de la sexta', async () => {
    const ip = '192.0.2.10';
    const statuses: number[] = [];
    for (let i = 0; i < 7; i++) statuses.push((await post(validBody, { ip })).status);
    expect(statuses).toEqual([200, 200, 200, 200, 200, 429, 429]);
    expect(sendContactEmail).toHaveBeenCalledTimes(5);
  });

  it('el 429 tiene el formato de error esperado', async () => {
    const ip = '192.0.2.11';
    for (let i = 0; i < 5; i++) await post(validBody, { ip });
    const res = await post(validBody, { ip });
    await expect(res.json()).resolves.toEqual({ ok: false, error: 'rate_limited' });
  });

  it('cuenta también las peticiones inválidas (el límite se aplica antes de validar)', async () => {
    const ip = '192.0.2.12';
    for (let i = 0; i < 5; i++) expect((await post('x', { ip, raw: true })).status).toBe(400);
    expect((await post(validBody, { ip })).status).toBe(429);
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('no afecta a otras IPs', async () => {
    for (let i = 0; i < 6; i++) await post(validBody, { ip: '192.0.2.13' });
    expect((await post(validBody, { ip: '192.0.2.14' })).status).toBe(200);
  });

  it('usa la primera IP de x-forwarded-for', async () => {
    for (let i = 0; i < 5; i++) await post(validBody, { ip: `198.51.100.1, 203.0.113.${i}` });
    expect((await post(validBody, { ip: '198.51.100.1' })).status).toBe(429);
  });

  it('usa x-real-ip si no hay x-forwarded-for', async () => {
    for (let i = 0; i < 5; i++) await post(validBody, { ip: null, headers: { 'x-real-ip': '198.51.100.2' } });
    expect((await post(validBody, { ip: null, headers: { 'x-real-ip': '198.51.100.2' } })).status).toBe(429);
  });

  it('agrupa en una misma clave las peticiones sin cabeceras de IP', async () => {
    for (let i = 0; i < 5; i++) await post(validBody, { ip: null });
    expect((await post(validBody, { ip: null })).status).toBe(429);
  });
});
