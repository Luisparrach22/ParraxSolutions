import type { Metadata } from 'next';
import { contactEmail, founder, instagram, siteUrl } from '@/config/site';
import { getDictionary, localePath, locales, type Locale } from '@/i18n/config';
import { jsonLd } from '@/lib/json-ld';
import { pageMetadata } from '@/lib/metadata';
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

export function homeMetadata(lang: Locale): Metadata {
  const { meta } = getDictionary(lang);
  return pageMetadata({ lang, path: '/', title: meta.title, description: meta.description, absoluteTitle: true });
}

/** Organización / servicio profesional. Sin dirección: se trabaja en remoto (TODO_LUIS si se quiere publicar una). */
function organizationJsonLd(lang: Locale) {
  const t = getDictionary(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: t.meta.siteName,
    url: `${siteUrl}${localePath(lang, '/')}`,
    logo: `${siteUrl}/svg/LogoLightSinFondo.svg`,
    image: `${siteUrl}/svg/LogoLightSinFondo.svg`,
    description: t.meta.description,
    email: contactEmail,
    areaServed: 'Worldwide',
    knowsLanguage: [...locales],
    founder: { '@type': 'Person', name: founder.name, ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}) },
    sameAs: [instagram.url, ...(founder.linkedin ? [founder.linkedin] : [])],
    makesOffer: t.services.shops.packages
      .map((p) => p.name)
      .concat(t.services.automation.sprint.name)
      .map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  };
}

export function HomeScreen({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd(lang)) }} />
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
