import Link from 'next/link';
import { localePath, type Dictionary, type Locale } from '@/i18n/config';
import { NodeDot, Reveal, Section, SectionHeader } from '@/components/ui';

/** Bloque secundario: las líneas a medida, en formato compacto bajo los servicios principales. */
export function Solutions({ lang, t }: { lang: Locale; t: Dictionary['solutions'] }) {
  return (
    <Section id="soluciones" labelledBy="solutions-title">
      <SectionHeader id="solutions-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <ul className="mt-10 grid border-t border-obsidian-line md:mt-12 md:grid-cols-2 md:gap-x-10">
        {t.items.map((item, i) => (
          <Reveal as="li" key={item.slug} delay={(i % 2) * 50} className="border-b border-obsidian-line">
            <Link
              href={localePath(lang, `/soluciones/${item.slug}`)}
              className="group flex min-h-[44px] items-start justify-between gap-4 py-5"
            >
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-medium text-white">
                  <NodeDot size="xs" state="idle" className="transition-colors group-hover:bg-node" />
                  {item.kicker}
                </span>
                <span className="mt-1 block pl-[14px] text-sm leading-6 text-slate-400">{item.text}</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-node" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
