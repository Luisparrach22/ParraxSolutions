import { describe, expect, it } from 'vitest';
import { pageMetadata } from './metadata';

describe('pageMetadata', () => {
  it('no repite el nombre del sitio en el título (lo añade la plantilla del layout)', () => {
    const m = pageMetadata({ lang: 'es', path: '/cookies', title: 'Cookies', description: 'd' });
    expect(m.title).toBe('Cookies');
    expect(m.openGraph?.title).toBe('Cookies · Parrax Solutions');
    expect(m.twitter?.title).toBe('Cookies · Parrax Solutions');
  });

  it('usa el título completo sin plantilla en la home', () => {
    const m = pageMetadata({ lang: 'en', path: '/', title: 'Parrax Solutions · X', description: 'd', absoluteTitle: true });
    expect(m.title).toEqual({ absolute: 'Parrax Solutions · X' });
    expect(m.openGraph?.title).toBe('Parrax Solutions · X');
  });

  it('declara OG completo por página: url, locale genérico e imagen del idioma', () => {
    const m = pageMetadata({ lang: 'en', path: '/servicios/tiendas-online', title: 'T', description: 'd' });
    expect(m.openGraph).toMatchObject({ url: '/en/servicios/tiendas-online', locale: 'en', siteName: 'Parrax Solutions' });
    expect(m.openGraph?.images).toEqual([expect.objectContaining({ url: '/og/en.png', width: 1200, height: 630 })]);
    expect(m.alternates?.canonical).toBe('/en/servicios/tiendas-online');
  });

  it('marca noindex solo cuando se pide', () => {
    expect(pageMetadata({ lang: 'es', path: '/', title: 't', description: 'd' }).robots).toBeUndefined();
    expect(pageMetadata({ lang: 'es', path: '/aviso-legal', title: 't', description: 'd', noindex: true }).robots).toEqual({ index: false, follow: true });
  });
});
