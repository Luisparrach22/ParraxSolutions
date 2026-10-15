import type { MetadataRoute } from 'next';
import { siteUrl } from '@/config/site';
import { defaultLocale, getDictionary, htmlLang, localePath, locales } from '@/i18n/config';

type Entry = MetadataRoute.Sitemap[number];

// Sin lastModified: una fecha de build en todas las URLs es inexacta en cada despliegue (OPT-001).
export default function sitemap(): MetadataRoute.Sitemap {
  const t = getDictionary(defaultLocale);

  // Una entrada por idioma; cada una declara sus equivalentes (hreflang).
  const withLanguages = (path: string, rest: Pick<Entry, 'changeFrequency' | 'priority'>): Entry[] => {
    const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], `${siteUrl}${localePath(l, path)}`]));
    return locales.map((l) => ({ url: `${siteUrl}${localePath(l, path)}`, ...rest, alternates: { languages } }));
  };

  return [
    ...withLanguages('/', { changeFrequency: 'weekly', priority: 1.0 }),
    ...t.solutions.items.flatMap((item) =>
      withLanguages(`/soluciones/${item.slug}`, { changeFrequency: 'monthly', priority: 0.8 }),
    ),
    ...withLanguages('/aviso-legal', { changeFrequency: 'yearly', priority: 0.2 }),
    ...withLanguages('/politica-de-privacidad', { changeFrequency: 'yearly', priority: 0.2 }),
    ...withLanguages('/cookies', { changeFrequency: 'yearly', priority: 0.2 }),
  ];
}
