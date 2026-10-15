import type { Metadata } from 'next';
import { alternatesFor, getDictionary, type Locale } from '@/i18n/config';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Solutions } from '@/components/sections/Solutions';
import { Method } from '@/components/sections/Method';
import { WhyParrax } from '@/components/sections/WhyParrax';
import { Audit } from '@/components/sections/Audit';
import { Contact } from '@/components/sections/Contact';

export const homeMetadata = (lang: Locale): Metadata => ({ alternates: alternatesFor(lang, '/') });

export function HomeScreen({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <>
      <Hero t={t.hero} />
      <Problems t={t.problems} />
      <Solutions lang={lang} t={t.solutions} />
      <Method t={t.method} />
      <WhyParrax t={t.why} />
      <Audit t={t.audit} />
      <Contact lang={lang} t={t.contact} />
    </>
  );
}
