import Link from 'next/link';
import type { Dictionary } from '@/i18n/config';
import { cn } from '@/lib/cn';
import { Reveal, Section, SectionHeader } from '@/components/ui';
import { SolutionVisual } from './SolutionVisual';

// Distribución bento en 12 columnas
const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-12'];

export function Solutions({ t }: { t: Dictionary['solutions'] }) {
  return (
    <Section id="soluciones" tone="light" labelledBy="solutions-title">
      <SectionHeader id="solutions-title" tone="light" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-12">
        {t.items.map((item, i) => {
          const wide = i === t.items.length - 1;
          return (
            <Reveal as="li" key={item.slug} delay={(i % 3) * 60} className={cn(spans[i], wide && 'md:col-span-2')}>
              <article
                className={cn(
                  'group relative flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-slate-400 sm:p-6 md:p-8',
                  wide && 'lg:flex-row lg:items-center lg:gap-12',
                )}
              >
                <div className={cn('flex flex-1 flex-col', wide && 'lg:max-w-[520px]')}>
                  <p className="flex items-center gap-2 text-micro uppercase text-slate-600">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-node" />
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 text-h3 !text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-prose text-[0.9375rem] leading-7 text-slate-600">{item.text}</p>

                  {!wide && item.visual !== 'consulting' && (
                    <div className={cn('mt-8', i < 2 ? 'mb-8' : 'mb-6')}>
                      <SolutionVisual kind={item.visual} />
                    </div>
                  )}

                  <Link
                    href={`/soluciones/${item.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 self-start pt-2 text-sm font-medium text-brand after:absolute after:inset-0 after:rounded-lg hover:text-brand-hover"
                  >
                    {t.more}
                    <span className="sr-only">: {item.kicker}</span>
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {wide && 'stack' in item && item.stack && (
                  <ul className="mt-8 flex flex-1 flex-wrap gap-2 lg:mt-0 lg:justify-end" aria-label="Ejemplos de tecnologías con las que trabajamos">
                    {item.stack.map((s) => (
                      <li key={s} className="rounded-sm border border-slate-200 bg-paper px-3 py-1.5 font-mono text-xs text-slate-600">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
