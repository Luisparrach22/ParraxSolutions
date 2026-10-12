/**
 * Configuración i18n. Hoy solo existe "es". Para añadir inglés:
 * 1) crear src/content/en.ts con la misma forma que es.ts
 * 2) añadirlo a `dictionaries` y a `locales`
 * 3) mover las rutas a src/app/[locale]/ y usar generateStaticParams
 */
import { es } from '@/content/es';

export const locales = ['es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const htmlLang: Record<Locale, string> = { es: 'es-ES' };
export const ogLocale: Record<Locale, string> = { es: 'es_ES' };

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}
