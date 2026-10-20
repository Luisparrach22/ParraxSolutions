import { describe, expect, it } from 'vitest';
import { BOOKING_ANCHOR, bookingLink, hasBookingUrl } from './booking';

// En los tests no hay NEXT_PUBLIC_CALENDAR_URL: se comprueba el respaldo al formulario.
describe('bookingLink sin enlace de reserva', () => {
  it('apunta al formulario de la home del idioma, sin pestaña nueva', () => {
    expect(hasBookingUrl).toBe(false);
    expect(bookingLink('es')).toEqual({ href: `/#${BOOKING_ANCHOR}`, external: false });
    expect(bookingLink('en')).toEqual({ href: `/en#${BOOKING_ANCHOR}`, external: false });
  });
});
