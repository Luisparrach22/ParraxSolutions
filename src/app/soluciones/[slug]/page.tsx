import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteUrl } from '@/config/site';
import { getDictionary } from '@/i18n/config';
import { Button, NodeDot, Reveal, Section } from '@/components/ui';

type Props = {
  params: Promise<{ slug: string }>;
};

const t = getDictionary('es');

export async function generateStaticParams() {
  return t.solutions.items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = t.solutions.items.find((i) => i.slug === slug);
  if (!item) return {};

  return {
    title: `${item.kicker} · Parrax Solutions`,
    description: item.text,
    alternates: {
      canonical: `/soluciones/${slug}`,
    },
    openGraph: {
      title: `${item.kicker} · Parrax Solutions`,
      description: item.text,
      url: `/soluciones/${slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = t.solutions.items.find((i) => i.slug === slug);
  const detail = t.solutionDetails.pages[slug];

  if (!item || !detail) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.kicker,
    description: item.text,
    provider: {
      '@type': 'Organization',
      name: 'Parrax Solutions',
      url: siteUrl,
    },
    areaServed: ['ES', 'VE'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero de la solución */}
      <section className="relative overflow-hidden bg-obsidian pt-[calc(var(--nav-h)+24px)] pb-12 md:pb-24">
        <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <Reveal>
            <nav aria-label="Miga de pan" className="mb-6">
              <Link
                href="/#soluciones"
                className="inline-flex min-h-[44px] items-center gap-2 text-xs uppercase tracking-wider text-slate-400 transition-colors hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.solutionDetails.back}
              </Link>
            </nav>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex items-center gap-2">
              <NodeDot size="xs" />
              <p className="eyebrow">{item.kicker}</p>
            </div>
            <h1 className="mt-3 text-h2 text-white">{item.title}</h1>
            <p className="mt-4 max-w-prose text-lead text-slate-300">{detail.lead}</p>
          </Reveal>

          <Reveal delay={120} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/#agendar-sesion" size="lg" arrow className="w-full sm:w-auto">
              Agendar sesión estratégica
            </Button>
            <Button href="/#metodo" size="lg" variant="ghost" className="w-full sm:w-auto">
              Conocer nuestro método
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Qué incluye y Encaja si (en superficie Paper) */}
      <Section tone="light" id="detalles">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl md:text-3xl">
              {t.solutionDetails.includesTitle}
            </h2>
            <ul className="mt-6 space-y-3.5">
              {detail.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-slate-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-sm sm:text-[0.9375rem] leading-relaxed">{inc}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl md:text-3xl">
              {t.solutionDetails.fitTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.fit.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 text-slate-700 sm:p-4">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs sm:text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Qué cambia en tu día a día */}
        <Reveal delay={120} className="mt-12 rounded-lg border border-slate-200 bg-white p-5 sm:rounded-xl sm:p-8 md:p-10">
          <p className="text-micro uppercase text-slate-500">{t.solutionDetails.outcomeTitle}</p>
          <p className="mt-2 text-lg font-medium tracking-tight text-ink sm:text-xl md:text-2xl">
            «{detail.outcome}»
          </p>
        </Reveal>
      </Section>

      {/* CTA final contextual */}
      <section className="border-t border-obsidian-line bg-obsidian py-12 md:py-20">
        <div className="container-x text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
              {t.solutionDetails.ctaTitle}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              {t.solutionDetails.ctaText}
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/#agendar-sesion" size="lg" arrow className="w-full sm:w-auto">
                Agendar sesión estratégica
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
