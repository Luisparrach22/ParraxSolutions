import { URGENCY, type ContactRequest } from './validation';

export type ContactEmail = { subject: string; text: string; html: string };

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function buildContactEmail(data: ContactRequest): ContactEmail {
  const typeLabel = data.type === 'auditoria' ? 'Auditoría digital gratuita' : 'Sesión estratégica';
  const subject = `Nueva solicitud: ${typeLabel} · ${data.company}`;
  const text = [
    `Tipo: ${typeLabel}`,
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    `Email: ${data.email}`,
    `Urgencia: ${URGENCY[data.urgency]}`,
    '',
    data.message,
  ].join('\n');
  const html = `<h2>${esc(subject)}</h2><ul><li><b>Tipo:</b> ${esc(typeLabel)}</li><li><b>Nombre:</b> ${esc(data.name)}</li><li><b>Empresa:</b> ${esc(data.company)}</li><li><b>Email:</b> ${esc(data.email)}</li><li><b>Urgencia:</b> ${esc(URGENCY[data.urgency])}</li></ul><p style="white-space:pre-wrap">${esc(data.message)}</p>`;
  return { subject, text, html };
}
