import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, localePath, type Locale } from '@/i18n/config';
import { pageMetadata } from '@/lib/metadata';
import { ServicePage } from './ServicePage';

// Los slugs son los mismos en todos los idiomas.
export const solutionSlugs = getDictionary('es').solutions.items.map((item) => item.slug);

export function solutionMetadata(lang: Locale, slug: string): Metadata {
  const item = getDictionary(lang).solutions.items.find((i) => i.slug === slug);
  if (!item) return {};
  return pageMetadata({ lang, path: `/soluciones/${slug}`, title: item.kicker, description: item.text });
}

export function SolutionScreen({ lang, slug }: { lang: Locale; slug: string }) {
  const t = getDictionary(lang);
  const item = t.solutions.items.find((i) => i.slug === slug);
  const detail = t.solutionDetails.pages[slug];

  if (!item || !detail) {
    notFound();
  }

  return (
    <ServicePage
      lang={lang}
      path={`/soluciones/${slug}`}
      kicker={item.kicker}
      title={item.title}
      description={item.text}
      detail={detail}
      visual={item.visual}
      back={{ href: localePath(lang, '/#soluciones'), label: t.solutionDetails.back }}
      secondaryCta={{ href: localePath(lang, '/#metodo'), label: t.solutionDetails.ctaSecondary }}
    />
  );
}
