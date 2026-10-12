/** Configuración global del sitio (independiente del idioma). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://parraxsolutions.com').replace(/\/$/, '');

/** Enlace de reserva (Cal.com / Calendly). Opcional. */
export const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;
