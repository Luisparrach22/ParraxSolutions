import { describe, expect, it } from 'vitest';
import { isValidContactRequest, parseContactRequest, type ContactRequest } from './validation';

const valid: ContactRequest = {
  type: 'sesion',
  name: 'Ana López',
  company: 'Acme SL',
  email: 'ana@acme.es',
  message: 'Necesitamos automatizar la facturación mensual.',
  urgency: 'explorando',
  privacy: true,
};

describe('parseContactRequest', () => {
  it('recorta espacios de los campos de texto', () => {
    const data = parseContactRequest({ name: '  Ana  ', company: ' Acme ', email: ' ana@acme.es ' });
    expect(data.name).toBe('Ana');
    expect(data.company).toBe('Acme');
    expect(data.email).toBe('ana@acme.es');
  });

  it('convierte en cadena vacía los campos ausentes o que no son texto', () => {
    const data = parseContactRequest({ name: 123, company: null, email: ['a@b.es'], message: { x: 1 } });
    expect(data).toMatchObject({ name: '', company: '', email: '', message: '', urgency: '' });
  });

  it('solo acepta "auditoria" como tipo alternativo; cualquier otro valor es "sesion"', () => {
    expect(parseContactRequest({ type: 'auditoria' }).type).toBe('auditoria');
    expect(parseContactRequest({ type: 'otro' }).type).toBe('sesion');
    expect(parseContactRequest({}).type).toBe('sesion');
  });

  it('solo considera aceptada la privacidad con el booleano true', () => {
    expect(parseContactRequest({ privacy: true }).privacy).toBe(true);
    expect(parseContactRequest({ privacy: 'true' }).privacy).toBe(false);
    expect(parseContactRequest({ privacy: 1 }).privacy).toBe(false);
  });

  it('no recorta los campos largos: los conserva para que la validación los rechace (FUNC-003)', () => {
    const data = parseContactRequest({
      name: 'n'.repeat(500),
      company: 'c'.repeat(500),
      email: 'e'.repeat(500),
      message: 'm'.repeat(5000),
      type: 'auditoria'.repeat(5),
    });
    expect(data.name).toHaveLength(500);
    expect(data.company).toHaveLength(500);
    expect(data.email).toHaveLength(500);
    expect(data.message).toHaveLength(5000);
    expect(data.type).toBe('sesion');
  });
});

describe('isValidContactRequest', () => {
  it('acepta una solicitud completa y válida', () => {
    expect(isValidContactRequest(valid)).toBe(true);
  });

  it('acepta los valores mínimos exactos', () => {
    expect(isValidContactRequest({ ...valid, name: 'Al', company: 'Io', message: 'x'.repeat(20) })).toBe(true);
  });

  it('acepta los valores máximos exactos', () => {
    const email = `${'a'.repeat(200 - '@acme.es'.length)}@acme.es`;
    expect(email).toHaveLength(200);
    expect(
      isValidContactRequest({ ...valid, name: 'n'.repeat(120), company: 'c'.repeat(160), email, message: 'm'.repeat(4000) }),
    ).toBe(true);
  });

  it.each([
    ['nombre de 121 caracteres', { name: 'n'.repeat(121) }],
    ['empresa de 161 caracteres', { company: 'c'.repeat(161) }],
    ['email de 201 caracteres', { email: `${'a'.repeat(201 - '@acme.es'.length)}@acme.es` }],
    ['mensaje de 4001 caracteres', { message: 'm'.repeat(4001) }],
  ])('rechaza por exceso de longitud: %s', (_label, override) => {
    expect(isValidContactRequest({ ...valid, ...override })).toBe(false);
  });

  it.each([
    ['nombre de 1 carácter', { name: 'A' }],
    ['empresa de 1 carácter', { company: 'A' }],
    ['mensaje de 19 caracteres', { message: 'x'.repeat(19) }],
    ['urgencia vacía', { urgency: '' }],
    ['urgencia desconocida', { urgency: 'mañana' }],
    ['privacidad no aceptada', { privacy: false }],
  ])('rechaza: %s', (_label, override) => {
    expect(isValidContactRequest({ ...valid, ...override })).toBe(false);
  });

  it.each(['explorando', '3-meses', 'urgente'])('acepta la urgencia "%s"', (urgency) => {
    expect(isValidContactRequest({ ...valid, urgency })).toBe(true);
  });

  it.each(['', 'ana', 'ana@', '@acme.es', 'ana@acme', 'ana@acme.e', 'ana @acme.es', 'ana@ac me.es'])(
    'rechaza el email "%s"',
    (email) => {
      expect(isValidContactRequest({ ...valid, email })).toBe(false);
    },
  );

  it.each(['ana@acme.es', 'ana.lopez+web@sub.acme.com'])('acepta el email "%s"', (email) => {
    expect(isValidContactRequest({ ...valid, email })).toBe(true);
  });

  // Regresión SEC-004: las claves heredadas de Object.prototype no son urgencias válidas.
  it.each(['toString', 'constructor', 'valueOf', '__proto__'])(
    '[SEC-004] rechaza la urgencia heredada "%s"',
    (urgency) => {
      expect(isValidContactRequest({ ...valid, urgency })).toBe(false);
    },
  );

  // Regresión FUNC-003: un mensaje demasiado largo se rechaza en lugar de recortarse.
  it('[FUNC-003] rechaza un mensaje de más de 4000 caracteres en lugar de recortarlo', () => {
    const data = parseContactRequest({ ...valid, message: 'm'.repeat(4001) });
    expect(isValidContactRequest(data)).toBe(false);
  });
});
