/**
 * Reglas del formulario de contacto compartidas por el cliente (ContactForm)
 * y el servidor (/api/contact). Sin dependencias de servidor: se puede
 * importar desde componentes de cliente.
 */

export const CONTACT_TYPES = ['sesion', 'auditoria'] as const;
export type ContactType = (typeof CONTACT_TYPES)[number];

export const URGENCY_VALUES = ['explorando', '3-meses', 'urgente'] as const;
export type Urgency = (typeof URGENCY_VALUES)[number];

export const CONTACT_LIMITS = {
  name: { min: 2, max: 120 },
  company: { min: 2, max: 160 },
  email: { max: 200 },
  message: { min: 20, max: 4000 },
} as const;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ContactField = 'name' | 'company' | 'email' | 'message' | 'urgency' | 'privacy';

/** Campos que se validan (los textos ya recortados de espacios). */
export type ContactFields = {
  name: string;
  company: string;
  email: string;
  message: string;
  urgency: string;
  privacy: boolean;
};

/** Compara contra la lista explícita: no acepta claves heredadas como "toString" (SEC-004). */
export function isUrgency(value: string): value is Urgency {
  return (URGENCY_VALUES as readonly string[]).includes(value);
}

const inRange = (value: string, { min = 0, max }: { min?: number; max: number }) =>
  value.length >= min && value.length <= max;

/** Devuelve los campos inválidos en el orden en que aparecen en el formulario. */
export function invalidContactFields(v: ContactFields): ContactField[] {
  const invalid: ContactField[] = [];
  if (!inRange(v.name, CONTACT_LIMITS.name)) invalid.push('name');
  if (!inRange(v.company, CONTACT_LIMITS.company)) invalid.push('company');
  if (!inRange(v.email, CONTACT_LIMITS.email) || !EMAIL_RE.test(v.email)) invalid.push('email');
  if (!inRange(v.message, CONTACT_LIMITS.message)) invalid.push('message');
  if (!isUrgency(v.urgency)) invalid.push('urgency');
  if (v.privacy !== true) invalid.push('privacy');
  return invalid;
}
