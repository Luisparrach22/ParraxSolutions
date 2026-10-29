import Image from 'next/image';
import type { Dictionary } from '@/i18n/config';
import { NodeDot, Reveal, Rich, Section, SectionHeader } from '@/components/ui';
import { founder } from '@/config/site';

/** «Quién está detrás»: foto y LinkedIn solo se muestran cuando están configurados en `founder`. */
export function About({ t }: { t: Dictionary['about'] }) {
  return (
    <Section id="quien" labelledBy="about-title" className="border-t border-obsidian-line">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
        <Reveal className="md:col-span-5 lg:col-span-4">
          <figure>
            {founder.photo && (
              <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-lg border border-obsidian-line bg-obsidian-raised md:max-w-none">
                <Image
                  src={founder.photo}
                  alt={t.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 40vw, 320px"
                  className="object-cover"
                />
              </div>
            )}
            <figcaption className={founder.photo ? 'mt-4' : undefined}>
              <p className="flex items-center gap-2 font-semibold text-white">
                <NodeDot size="xs" />
                {founder.name}
              </p>
              <p className="mt-0.5 text-sm text-slate-400">{t.role}</p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <SectionHeader id="about-title" eyebrow={t.eyebrow} title={t.title} />
          <Reveal delay={80} className="mt-6 max-w-[60ch] space-y-4 text-[0.9375rem] leading-7 text-slate-300 sm:text-base sm:leading-7">
            {t.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          {founder.linkedin && (
            <Reveal delay={120} className="mt-7">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-white underline decoration-slate-600 underline-offset-4 transition-colors hover:decoration-node"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-node" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                {t.linkedin}
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
