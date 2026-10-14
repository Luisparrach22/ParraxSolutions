import Link from 'next/link';
import type { Dictionary } from '@/i18n/config';
import { Reveal, Section, SectionHeader } from '@/components/ui';
import { SolutionVisual } from './SolutionVisual';

type Item = Dictionary['solutions']['items'][number];

function MoreLink({ item, label }: { item: Item; label: string }) {
  return (
    <Link
      href={`/soluciones/${item.slug}`}
      className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-medium text-brand after:absolute after:inset-0 after:rounded-lg hover:text-brand-hover"
    >
      {label}
      <span className="sr-only">: {item.kicker}</span>
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export function Solutions({ t }: { t: Dictionary['solutions'] }) {
  const [featured, ...rest] = t.items;

  return (
    <Section id="soluciones" tone="light" labelledBy="solutions-title">
      <SectionHeader id="solutions-title" tone="light" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      {/* Servicio destacado: la puerta de entrada más habitual */}
      <Reveal className="mt-10 md:mt-14">
        <article className="group relative grid grid-cols-1 gap-8 rounded-lg border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-slate-400 sm:p-6 md:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 text-micro uppercase text-slate-600">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-node" />
              {featured.kicker}
            </p>
            <h3 className="mt-4 text-h2 !text-ink">{featured.title}</h3>
            <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-7 text-slate-600">{featured.text}</p>
            <MoreLink item={featured} label={t.more} />
          </div>
          <SolutionVisual kind={featured.visual} />
        </article>
      </Reveal>

      <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((item, i) => (
          <Reveal as="li" key={item.slug} delay={(i % 3) * 60}>
            <article className="group relative flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-slate-400 sm:p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold tracking-tight !text-ink">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-node" />
                {item.kicker}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              <MoreLink item={item} label={t.more} />
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
