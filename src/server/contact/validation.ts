import { invalidContactFields, type ContactType, type Urgency } from '@/lib/contact-schema';

export type ContactRequest = {
  type: ContactType;
  name: string;
  company: string;
  email: string;
  message: string;
  urgency: string;
  privacy: boolean;
};

/** Solicitud que ha superado la validación: la urgencia es una de las permitidas. */
export type ValidContactRequest = ContactRequest & { urgency: Urgency };

/**
 * Normaliza el cuerpo recibido: recorta espacios en los extremos.
 * No trunca: un campo demasiado largo debe rechazarse en la validación, no recortarse.
 */
export function parseContactRequest(body: Record<string, unknown>): ContactRequest {
  const str = (k: string) => (typeof body[k] === 'string' ? (body[k] as string).trim() : '');
  return {
    type: str('type') === 'auditoria' ? 'auditoria' : 'sesion',
    name: str('name'),
    company: str('company'),
    email: str('email'),
    message: str('message'),
    urgency: str('urgency'),
    privacy: body.privacy === true,
  };
}

export function isValidContactRequest(data: ContactRequest): data is ValidContactRequest {
  return invalidContactFields(data).length === 0;
}
