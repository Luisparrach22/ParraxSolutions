import type { MetadataRoute } from 'next';
import { siteUrl } from '@/config/site';
import { defaultLocale, getDictionary } from '@/i18n/config';

// Sin lastModified: una fecha de build en todas las URLs es inexacta en cada despliegue (OPT-001).
export default function sitemap(): MetadataRoute.Sitemap {
  const t = getDictionary(defaultLocale);

  const solutionRoutes = t.solutions.items.map((item) => ({
    url: `${siteUrl}/soluciones/${item.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...solutionRoutes,
    {
      url: `${siteUrl}/aviso-legal`,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${siteUrl}/cookies`,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ];
}
