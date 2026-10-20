import type { Metadata } from 'next';
import { STORE_PATH } from '@/config/site';
import { getDictionary, localePath, type Locale } from '@/i18n/config';
import { pageMetadata } from '@/lib/metadata';
import { ServicePage } from './ServicePage';

export function storeMetadata(lang: Locale): Metadata {
  const p = getDictionary(lang).storePage;
  return pageMetadata({ lang, path: STORE_PATH, title: p.metaTitle, description: p.metaDescription });
}

export function StoreScreen({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const p = t.storePage;
  return (
    <ServicePage
      lang={lang}
      path={STORE_PATH}
      kicker={p.kicker}
      title={p.title}
      description={p.metaDescription}
      detail={p}
      visual="web"
      back={{ href: localePath(lang, '/#servicios'), label: t.services.eyebrow }}
      secondaryCta={{ href: localePath(lang, '/#servicios'), label: t.solutionDetails.packagesLink }}
    />
  );
}
