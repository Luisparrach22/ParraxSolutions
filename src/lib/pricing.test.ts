import { describe, expect, it } from 'vitest';
import { pricing } from '@/config/site';
import { priceFrom } from './pricing';

describe('priceFrom', () => {
  it('devuelve null mientras el precio no esté configurado', () => {
    expect(priceFrom('clave-inexistente', 'es')).toBeNull();
  });

  it('formatea el importe según el idioma con la moneda de referencia', () => {
    pricing.from.test = 1500;
    expect(priceFrom('test', 'es')).toBe(`1500 ${pricing.currency}`.replace('1500', new Intl.NumberFormat('es-ES').format(1500)));
    expect(priceFrom('test', 'en')).toBe(`1,500 ${pricing.currency}`);
    delete pricing.from.test;
  });
});
