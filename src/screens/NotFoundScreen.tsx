import type { Metadata } from 'next';
import { Button, NodeDot } from '@/components/ui';
import { getDictionary, localePath, type Locale } from '@/i18n/config';

export const notFoundMetadata = (lang: Locale): Metadata => ({
  title: `${getDictionary(lang).notFound.title} · Parrax Solutions`,
  robots: { index: false, follow: true },
});

export function NotFoundScreen({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).notFound;
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-obsidian pb-16 pt-[calc(var(--nav-h)+48px)]">
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <p className="eyebrow">
          <NodeDot size="xs" state="idle" />
          {t.code}
        </p>
        <h1 className="mt-4 max-w-[18ch] text-h2 text-white">{t.heading}</h1>
        <p className="mt-4 max-w-[52ch] text-lead text-slate-400">{t.text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={localePath(lang, '/')} size="lg" arrow className="w-full sm:w-auto">
            {t.home}
          </Button>
          <Button href={localePath(lang, '/#soluciones')} size="lg" variant="ghost" className="w-full sm:w-auto">
            {t.solutions}
          </Button>
        </div>
      </div>
    </section>
  );
}
