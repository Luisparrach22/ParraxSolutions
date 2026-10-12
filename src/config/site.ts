/** Configuración global del sitio (independiente del idioma). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://parraxsolutions.com').replace(/\/$/, '');

/** Datos de contacto públicos (independientes del idioma). */
export const contactEmail = 'contacto@parraxsolutions.com';
export const instagram = { url: 'https://instagram.com/parraxsolutions', handle: '@parraxsolutions' } as const;

/** Enlace de reserva (Cal.com / Calendly). Opcional. */
export const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;
