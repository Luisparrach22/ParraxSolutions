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

/**
 * Precios «desde» de la sección Servicios, en una sola moneda de referencia
 * (el presupuesto final se da en la moneda local del cliente).
 * null = se muestra un marcador TODO_LUIS visible.
 */
export const pricing = {
  currency: 'USD',
  from: {
    /** TODO_LUIS: precio desde de Landing / web de presentación (número, sin símbolo). */
    landing: null,
    /** TODO_LUIS: precio desde de Tienda online. */
    store: null,
    /** TODO_LUIS: precio desde de Tienda + operación. */
    storeOps: null,
    /** TODO_LUIS: precio desde del Sprint de automatización. */
    sprint: null,
    /** TODO_LUIS: precio desde del mantenimiento mensual. */
    maintenance: null,
  } as Record<string, number | null>,
};

/** Enlaces y capturas de la sección Proyectos (clave = `key` del diccionario). Vacío = marcador. */
export const projectLinks: Record<string, { url: string; image: string }> = {
  /** TODO_LUIS: enlace y captura (en /public) de tu tienda online. */
  store: { url: '', image: '' },
  site: { url: siteUrl, image: '/img/proyectos/parraxsolutions.webp' },
  /** TODO_LUIS: enlace (vídeo o demo) y captura de la demo de automatización pedido → factura. */
  automation: { url: '', image: '' },
};
