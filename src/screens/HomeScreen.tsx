import type { Metadata } from 'next';
import { alternatesFor, getDictionary, type Locale } from '@/i18n/config';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Services } from '@/components/sections/Services';
import { Solutions } from '@/components/sections/Solutions';
import { Projects } from '@/components/sections/Projects';
import { Method } from '@/components/sections/Method';
import { WhyParrax } from '@/components/sections/WhyParrax';
import { About } from '@/components/sections/About';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export const homeMetadata = (lang: Locale): Metadata => ({ alternates: alternatesFor(lang, '/') });

export function HomeScreen({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} t={t.hero} />
      <Problems t={t.problems} />
      <Services lang={lang} t={t.services} />
      <Solutions lang={lang} t={t.solutions} />
      <Projects t={t.projects} />
      <Method t={t.method} />
      <WhyParrax t={t.why} />
      <About t={t.about} />
      <Faq t={t.faq} />
      <Contact lang={lang} t={t.contact} />
    </>
  );
}
