import type { Metadata } from 'next';
import { alternatesFor, getDictionary, localePath, locales, ogLocale, type Locale } from '@/i18n/config';

type PageMetaInput = {
  lang: Locale;
  /** Ruta sin prefijo de idioma ("/", "/cookies", "/soluciones/x"). */
  path: string;
  /** Título de la página; el layout añade « · Parrax Solutions» (title.template). */
  title: string;
  description: string;
  /** Título completo, sin plantilla (solo la home). */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

/**
 * Metadatos completos por página. openGraph y twitter se declaran enteros porque
 * Next fusiona la metadata de forma superficial: un openGraph parcial en la página
 * borraría el del layout (siteName, locale…).
 */
export function pageMetadata({ lang, path, title, description, absoluteTitle, noindex }: PageMetaInput): Metadata {
  const t = getDictionary(lang);
  const fullTitle = absoluteTitle ? title : `${title} · ${t.meta.siteName}`;
  // Tarjeta 1200×630 por idioma (public/og); se repite en cada página por la fusión superficial.
  const image = { url: `/og/${lang}.png`, width: 1200, height: 630, alt: t.meta.ogAlt };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: alternatesFor(lang, path),
    openGraph: {
      type: 'website',
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: localePath(lang, path),
      siteName: t.meta.siteName,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
