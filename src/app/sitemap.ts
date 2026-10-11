import type { MetadataRoute } from 'next';
import { getDictionary, siteUrl } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const t = getDictionary('es');
  const now = new Date();

  const solutionRoutes = t.solutions.items.map((item) => ({
    url: `${siteUrl}/soluciones/${item.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...solutionRoutes,
    {
      url: `${siteUrl}/aviso-legal`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ];
}
