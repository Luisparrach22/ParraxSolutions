const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const URGENCY: Record<string, string> = {
  explorando: 'Estoy explorando',
  '3-meses': 'En los próximos 3 meses',
  urgente: 'Es urgente',
};

export type ContactRequest = {
  type: 'auditoria' | 'sesion';
  name: string;
  company: string;
  email: string;
  message: string;
  urgency: string;
  privacy: boolean;
};

/** Normaliza el cuerpo recibido: recorta y limita la longitud de cada campo. */
export function parseContactRequest(body: Record<string, unknown>): ContactRequest {
  const str = (k: string, max = 2000) => (typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, max) : '');
  return {
    type: str('type', 20) === 'auditoria' ? 'auditoria' : 'sesion',
    name: str('name', 120),
    company: str('company', 160),
    email: str('email', 200),
    message: str('message', 4000),
    urgency: str('urgency', 20),
    privacy: body.privacy === true,
  };
}

export function isValidContactRequest(data: ContactRequest): boolean {
  return (
    data.name.length >= 2 &&
    data.company.length >= 2 &&
    EMAIL_RE.test(data.email) &&
    data.message.length >= 20 &&
    data.urgency in URGENCY &&
    data.privacy
  );
}
