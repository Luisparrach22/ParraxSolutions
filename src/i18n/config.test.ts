import { describe, expect, it } from 'vitest';
import { alternatesFor, getDictionary, hasLocale, localeFromPath, localePath, locales, stripLocale } from './config';

describe('localePath', () => {
  it('no añade prefijo al idioma por defecto', () => {
    expect(localePath('es', '/')).toBe('/');
    expect(localePath('es', '/#contacto')).toBe('/#contacto');
    expect(localePath('es', '/cookies')).toBe('/cookies');
  });

  it('añade /en al resto de idiomas', () => {
    expect(localePath('en', '/')).toBe('/en');
    expect(localePath('en', '/#contacto')).toBe('/en#contacto');
    expect(localePath('en', '/soluciones/x')).toBe('/en/soluciones/x');
  });
});

describe('stripLocale / localeFromPath', () => {
  it('invierten localePath', () => {
    for (const path of ['/', '/cookies', '/soluciones/sistemas-de-gestion']) {
      for (const l of locales) {
        expect(stripLocale(localePath(l, path))).toBe(path);
        expect(localeFromPath(localePath(l, path))).toBe(l);
      }
    }
  });

  it('no confunde rutas que solo empiezan igual', () => {
    expect(stripLocale('/english')).toBe('/english');
    expect(localeFromPath('/english')).toBe('es');
  });
});

describe('hasLocale', () => {
  it('acepta solo idiomas soportados', () => {
    expect(hasLocale('en')).toBe(true);
    expect(hasLocale('es')).toBe(true);
    expect(hasLocale('fr')).toBe(false);
    expect(hasLocale('toString')).toBe(false);
  });
});

describe('alternatesFor', () => {
  it('declara canónica, hreflang y x-default', () => {
    expect(alternatesFor('en', '/cookies')).toEqual({
      canonical: '/en/cookies',
      languages: { 'es-ES': '/cookies', en: '/en/cookies', 'x-default': '/cookies' },
    });
  });
});

/** Estructura (claves, longitudes de listas y datos no traducibles) sin los textos. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]));
  }
  return typeof value;
}

describe('diccionarios', () => {
  const es = getDictionary('es');

  it.each(locales)('%s tiene la misma estructura que es', (l) => {
    expect(shape(getDictionary(l))).toEqual(shape(es));
  });

  it.each(locales)('%s mantiene slugs, rutas, valores y iconos del español', (l) => {
    const d = getDictionary(l);
    expect(d.solutions.items.map((i) => [i.slug, i.visual])).toEqual(es.solutions.items.map((i) => [i.slug, i.visual]));
    expect(d.problems.items.map((i) => i.icon)).toEqual(es.problems.items.map((i) => i.icon));
    expect(d.nav.links.map((x) => x.href)).toEqual(es.nav.links.map((x) => x.href));
    expect(d.footer.columns.map((c) => c.links.map((x) => x.href))).toEqual(es.footer.columns.map((c) => c.links.map((x) => x.href)));
    expect(d.contact.form.types.map((x) => x.value)).toEqual(es.contact.form.types.map((x) => x.value));
    expect(d.contact.form.urgency.map((x) => x.value)).toEqual(es.contact.form.urgency.map((x) => x.value));
    expect(Object.keys(d.solutionDetails.pages)).toEqual(Object.keys(es.solutionDetails.pages));
  });

  it('cada solución tiene su página de detalle', () => {
    for (const l of locales) {
      const d = getDictionary(l);
      for (const item of d.solutions.items) expect(d.solutionDetails.pages[item.slug]).toBeDefined();
    }
  });
});
