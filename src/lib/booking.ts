import { BOOKING_URL } from '@/config/site';
import { localePath, type Locale } from '@/i18n/config';

/** Ancla del formulario de contacto: respaldo cuando no hay enlace de reserva. */
export const BOOKING_ANCHOR = 'agendar-sesion';

export const hasBookingUrl = BOOKING_URL.trim() !== '';

/**
 * Props de enlace para cualquier CTA de reserva: calendario externo en pestaña
 * nueva si está configurado; si no, el formulario de la home.
 */
export function bookingLink(lang: Locale): { href: string; external: boolean } {
  return hasBookingUrl
    ? { href: BOOKING_URL, external: true }
    : { href: localePath(lang, `/#${BOOKING_ANCHOR}`), external: false };
}
