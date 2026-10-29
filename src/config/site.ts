/** Configuración global del sitio (independiente del idioma). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://parraxsolutions.com').replace(/\/$/, '');

/** Datos de contacto públicos (independientes del idioma). */
export const contactEmail = 'contacto@parraxsolutions.com';
export const instagram = { url: 'https://instagram.com/parraxsolutions', handle: '@parraxsolutions' } as const;

/**
 * Enlace de reserva de la sesión de 20 min (Cal.com, Google Calendar…).
 * Todos los botones «Agendar sesión» lo abren en una pestaña nueva; si está vacío,
 * hacen scroll al formulario de contacto (src/lib/booking.ts).
 * TODO_LUIS: pega aquí tu enlace de reserva, o defínelo como NEXT_PUBLIC_CALENDAR_URL en Vercel.
 */
export const BOOKING_URL: string = process.env.NEXT_PUBLIC_CALENDAR_URL ?? '';

/** Datos del fundador para la sección «Quién está detrás». Vacío = se muestra un marcador. */
export const founder = {
  name: 'Luis Parra',
  /** TODO_LUIS: ruta de tu foto en /public (p. ej. '/img/luis-parra.jpg'), cuadrada, mínimo 640×640 px. */
  photo: '',
  /** TODO_LUIS: URL de tu perfil de LinkedIn. */
  linkedin: '',
} as const;

/** Página comercial de tiendas online (misma ruta en todos los idiomas, con prefijo /en en inglés). */
export const STORE_PATH = '/servicios/tiendas-online';
