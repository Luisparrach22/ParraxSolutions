import type { ContactType, Urgency } from '@/lib/contact-schema';
import type { ValidContactRequest } from './validation';

export type ContactEmail = { subject: string; text: string; html: string };

/** Etiquetas del email interno (las de la web viven en el diccionario). */
const TYPE_LABELS: Record<ContactType, string> = {
  auditoria: 'Auditoría digital gratuita',
  sesion: 'Sesión estratégica',
};

const URGENCY_LABELS: Record<Urgency, string> = {
  explorando: 'Estoy explorando',
  '3-meses': 'En los próximos 3 meses',
  urgente: 'Es urgente',
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function buildContactEmail(data: ValidContactRequest): ContactEmail {
  const typeLabel = TYPE_LABELS[data.type];
  const urgencyLabel = URGENCY_LABELS[data.urgency];
  const subject = `Nueva solicitud: ${typeLabel} · ${data.company}`;
  const text = [
    `Tipo: ${typeLabel}`,
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    `Email: ${data.email}`,
    `Urgencia: ${urgencyLabel}`,
    '',
    data.message,
  ].join('\n');
  const html = `<h2>${esc(subject)}</h2><ul><li><b>Tipo:</b> ${esc(typeLabel)}</li><li><b>Nombre:</b> ${esc(data.name)}</li><li><b>Empresa:</b> ${esc(data.company)}</li><li><b>Email:</b> ${esc(data.email)}</li><li><b>Urgencia:</b> ${esc(urgencyLabel)}</li></ul><p style="white-space:pre-wrap">${esc(data.message)}</p>`;
  return { subject, text, html };
}
