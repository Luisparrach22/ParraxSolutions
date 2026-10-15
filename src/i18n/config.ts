/**
 * Configuración i18n. Idiomas: español (por defecto, sin prefijo en la URL) e inglés (/en).
 *
 * Para añadir otro idioma:
 * 1) crear src/content/<locale>.ts tipado como `Dictionary`
 * 2) añadirlo a `locales`, `dictionaries`, `htmlLang`, `ogLocale` y `localeNames`
 * 3) ajustar src/proxy.ts si el idioma no debe llevar prefijo
 */
import { es } from '@/content/es';
import { en } from '@/content/en';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Cabecera de petición con la que src/proxy.ts le indica el idioma a global-not-found. */
export const LOCALE_HEADER = 'x-locale';

export const htmlLang: Record<Locale, string> = { es: 'es-ES', en: 'en' };
export const ogLocale: Record<Locale, string> = { es: 'es_ES', en: 'en_US' };
/** Nombre de cada idioma en su propio idioma (para el selector). */
export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English' };

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

/**
 * Convierte una ruta del sitio ("/", "/#contacto", "/soluciones/x") en la ruta
 * del idioma. El idioma por defecto no lleva prefijo.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Quita el prefijo de idioma de una ruta ("/en/cookies" → "/cookies"). */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return '/';
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

/** Idioma de una ruta visible en el navegador. */
export function localeFromPath(pathname: string): Locale {
  return locales.find((l) => l !== defaultLocale && (pathname === `/${l}` || pathname.startsWith(`/${l}/`))) ?? defaultLocale;
}

/** `alternates` de metadata: canónica del idioma actual + hreflang de todos. */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [htmlLang[l], localePath(l, path)])),
      'x-default': localePath(defaultLocale, path),
    },
  };
}
