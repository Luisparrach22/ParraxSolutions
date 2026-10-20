import Link from 'next/link';
import type { ReactNode } from 'react';
import { siteUrl } from '@/config/site';
import type { ServiceDetail } from '@/content/types';
import { getDictionary, localePath, type Locale } from '@/i18n/config';
import { BookingButton, Button, NodeDot, Reveal, Rich, Section } from '@/components/ui';
import { SolutionVisual } from '@/components/sections/SolutionVisual';
import { jsonLd } from '@/lib/json-ld';

type ServicePageProps = {
  lang: Locale;
  path: string;
  kicker: string;
  title: string;
  description: string;
  detail: ServiceDetail;
  visual: string;
  back: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

const unbreak = (s: string) => s.replace(/⁠/g, '');

/** Plantilla de página de servicio: problema, enfoque, qué incluye, plazo, FAQ y CTA. */
export function ServicePage({ lang, path, kicker, title, description, detail, visual, back, secondaryCta }: ServicePageProps) {
  const t = getDictionary(lang).solutionDetails;
  const answered = detail.faq.filter((f) => !f.a.includes('['));

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: kicker,
      description,
      url: `${siteUrl}${localePath(lang, path)}`,
      provider: { '@type': 'ProfessionalService', name: 'Parrax Solutions', url: siteUrl },
      areaServed: 'Worldwide',
      availableLanguage: ['es', 'en'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: answered.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: unbreak(f.a) } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      {/* Hero del servicio */}
      <section className="relative overflow-hidden bg-obsidian pb-12 pt-[calc(var(--nav-h)+24px)] md:pb-20">
        <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <Reveal>
            <nav aria-label={getDictionary(lang).a11y.breadcrumb} className="mb-6">
              <Link
                href={back.href}
                className="inline-flex min-h-[44px] items-center gap-2 text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {back.label}
              </Link>
            </nav>
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow">
              <NodeDot size="xs" />
              {kicker}
            </p>
            <h1 className="mt-3 max-w-[24ch] text-h2 text-white">{title}</h1>
            <p className="mt-4 max-w-prose text-lead text-slate-300">{detail.lead}</p>
          </Reveal>

          <Reveal delay={120} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BookingButton lang={lang} size="lg" arrow className="w-full sm:w-auto">
              {t.ctaPrimary}
            </BookingButton>
            <Button href={secondaryCta.href} size="lg" variant="ghost" className="w-full sm:w-auto">
              {secondaryCta.label}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* El problema típico, con un ejemplo concreto */}
      <Section labelledBy="problem-title" className="border-t border-obsidian-line !py-14 md:!py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <p className="text-micro uppercase text-slate-400">{t.problemTitle}</p>
            <h2 id="problem-title" className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
              {detail.problem.title}
            </h2>
            <p className="mt-4 max-w-[60ch] text-[0.9375rem] leading-7 text-slate-300 sm:text-base">{detail.problem.text}</p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <figure className="rounded-lg border border-obsidian-line bg-obsidian-raised p-5 sm:p-6">
              <figcaption className="text-micro uppercase text-slate-400">{t.exampleLabel}</figcaption>
              <blockquote className="mt-3 text-[0.9375rem] leading-7 text-slate-200">{detail.problem.example}</blockquote>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Cómo lo resuelvo + qué incluye */}
      <Section tone="light" labelledBy="approach-title">
        <Reveal>
          <h2 id="approach-title" className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl md:text-3xl">
            {t.approachTitle}
          </h2>
        </Reveal>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {detail.approach.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 2) * 60} className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
              <p className="font-mono text-xs text-slate-500" aria-hidden="true">
                0{i + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight !text-ink sm:text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-[0.9375rem] sm:leading-7">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl md:text-3xl">{t.includesTitle}</h2>
            <ul className="mt-6 space-y-3.5">
              {detail.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-slate-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-sm leading-relaxed sm:text-[0.9375rem]">{inc}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl md:text-3xl">{t.fitTitle}</h2>
            <ul className="mt-6 space-y-3">
              {detail.fit.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 text-slate-700 sm:p-4">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs leading-relaxed sm:text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 grid items-center gap-8 rounded-lg border border-slate-200 bg-white p-5 sm:rounded-xl sm:p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-micro uppercase text-slate-500">{t.outcomeTitle}</p>
            <p className="mt-2 text-lg font-medium tracking-tight text-ink sm:text-xl md:text-2xl">«{detail.outcome}»</p>
          </div>
          <SolutionVisual kind={visual} />
        </Reveal>
      </Section>

      {/* Plazo orientativo y preguntas frecuentes */}
      <Section labelledBy="faq-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{t.timelineTitle}</h2>
            <p className="mt-3 text-[0.9375rem] leading-7 text-slate-300">
              <Rich text={detail.timeline} />
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7 lg:col-start-6">
            <h2 id="faq-title" className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {t.faqTitle}
            </h2>
            <div className="mt-5 divide-y divide-obsidian-line border-y border-obsidian-line">
              {detail.faq.map((f) => (
                <FaqItem key={f.q} q={f.q}>
                  <Rich text={f.a} />
                </FaqItem>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA final */}
      <section className="border-t border-obsidian-line bg-obsidian py-12 md:py-20">
        <div className="container-x text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">{t.ctaTitle}</h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">{t.ctaText}</p>
            <div className="mt-6 flex justify-center">
              <BookingButton lang={lang} size="lg" arrow className="w-full sm:w-auto">
                {t.ctaPrimary}
              </BookingButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, children }: { q: string; children: ReactNode }) {
  return (
    <details className="group">
      <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.9375rem] font-medium text-white [&::-webkit-details-marker]:hidden">
        <h3>{q}</h3>
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 3v10M3 8h10" strokeLinecap="round" />
        </svg>
      </summary>
      <p className="max-w-[62ch] pb-5 pr-8 text-[0.9375rem] leading-7 text-slate-400">{children}</p>
    </details>
  );
}
