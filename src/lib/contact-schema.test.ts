import { describe, expect, it } from 'vitest';
import { es } from '@/content/es';
import { CONTACT_TYPES, URGENCY_VALUES, invalidContactFields, isUrgency, type ContactFields } from './contact-schema';

const valid: ContactFields = {
  name: 'Ana',
  company: 'Acme',
  email: 'ana@acme.es',
  message: 'x'.repeat(20),
  urgency: 'urgente',
  privacy: true,
};

describe('contact-schema', () => {
  it('las opciones del diccionario coinciden con las aceptadas por el servidor', () => {
    expect(es.contact.form.urgency.map((o) => o.value)).toEqual([...URGENCY_VALUES]);
    expect(es.contact.form.types.map((o) => o.value)).toEqual([...CONTACT_TYPES]);
  });

  it('cada campo inválido del diccionario tiene un mensaje de error', () => {
    for (const field of invalidContactFields({ name: '', company: '', email: '', message: '', urgency: '', privacy: false })) {
      expect(es.contact.form.errors[field]).toBeTruthy();
    }
  });

  it('devuelve los campos inválidos en el orden del formulario', () => {
    expect(invalidContactFields(valid)).toEqual([]);
    expect(invalidContactFields({ name: '', company: '', email: '', message: '', urgency: '', privacy: false })).toEqual([
      'name',
      'company',
      'email',
      'message',
      'urgency',
      'privacy',
    ]);
  });

  it.each(['toString', 'constructor', '__proto__', 'hasOwnProperty', ''])('isUrgency rechaza "%s"', (value) => {
    expect(isUrgency(value)).toBe(false);
  });
});
