import { defaultLocale, getDictionary } from '@/i18n/config';
import { Hero } from '@/components/sections/Hero';
import { QuickServices } from '@/components/sections/QuickServices';
import { Problems } from '@/components/sections/Problems';
import { Solutions } from '@/components/sections/Solutions';
import { Method } from '@/components/sections/Method';
import { WhyParrax } from '@/components/sections/WhyParrax';
import { Engagement } from '@/components/sections/Engagement';
import { Proof } from '@/components/sections/Proof';
import { Security } from '@/components/sections/Security';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  const t = getDictionary(defaultLocale);
  return (
    <>
      <Hero t={t.hero} />
      <QuickServices t={t.quickServices} />
      <Problems t={t.problems} />
      <Solutions t={t.solutions} />
      <Method t={t.method} />
      <WhyParrax t={t.why} />
      <Engagement t={t.engagement} />
      <Proof t={t.proof} />
      <Security t={t.security} />
      <Contact t={t.contact} />
    </>
  );
}
