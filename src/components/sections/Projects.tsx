import Image from 'next/image';
import type { Dictionary } from '@/i18n/config';
import { Badge, Reveal, Rich, Section, SectionHeader, plain } from '@/components/ui';
import { projectLinks } from '@/config/site';

/** Proyectos propios y demostrativos, siempre etiquetados como tales (no hay casos de clientes). */
export function Projects({ t }: { t: Dictionary['projects'] }) {
  return (
    <Section id="proyectos" tone="light" labelledBy="projects-title" className="border-t border-slate-200">
      <SectionHeader id="projects-title" tone="light" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item, i) => {
          const link = projectLinks[item.key] ?? { url: '', image: '' };
          return (
            <Reveal as="li" key={item.key} delay={i * 60} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="relative aspect-[16/10] border-b border-slate-200 bg-slate-100">
                  {link.image ? (
                    <Image
                      src={link.image}
                      alt={`${t.imageAlt} ${plain(item.name)}`}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-slate-600">
                      <Rich text={t.imageMissing} />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <Badge variant="light" className="self-start">
                    {item.tag}
                  </Badge>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight !text-ink">
                    <Rich text={item.name} />
                  </h3>

                  <dl className="mt-4 space-y-3 text-sm leading-6">
                    {(
                      [
                        [t.problemLabel, item.problem],
                        [t.builtLabel, item.built],
                        [t.techLabel, item.tech],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-medium text-slate-500">{label}</dt>
                        <dd className="mt-0.5 text-slate-700">
                          <Rich text={value} />
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto pt-5">
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
                      >
                        {t.open}
                        <span className="sr-only">: {plain(item.name)}</span>
                        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 11l6-6M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-sm text-slate-500">
                        <Rich text={t.linkMissing} />
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
