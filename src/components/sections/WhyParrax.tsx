import type { Dictionary } from '@/i18n/config';
import { NodeDot, Reveal, Section, SectionHeader } from '@/components/ui';

export function WhyParrax({ t }: { t: Dictionary['why'] }) {
  return (
    <Section id="por-que" labelledBy="why-title" className="border-t border-obsidian-line">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+48px)]">
            <SectionHeader id="why-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

            <Reveal delay={120} className="mt-8 sm:mt-10">
              {/* Vista móvil: tarjetas de contraste directo sin scroll */}
              <div className="space-y-2.5 sm:hidden">
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  {t.compare.mobileHeading}
                </p>
                {t.compare.rows.map(([label, generic, parrax]) => (
                  <div key={label} className="rounded-lg border border-obsidian-line bg-obsidian-raised p-3">
                    <p className="text-xs font-semibold text-slate-200">{label}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded border border-obsidian-line bg-obsidian p-2 text-slate-400">
                        <span className="block text-[10px] text-slate-400">{t.compare.genericShort}</span>
                        <span className="mt-0.5 block">{generic}</span>
                      </div>
                      <div className="rounded border border-slate-700 bg-obsidian p-2 text-white">
                        <span className="flex items-center gap-1 text-[10px] text-node">
                          <NodeDot size="xs" /> Parrax
                        </span>
                        <span className="mt-0.5 block font-medium">{parrax}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vista desktop: tabla estructurada */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                  <caption className="sr-only">{t.compare.caption}</caption>
                  <thead>
                    <tr className="border-b border-obsidian-line">
                      {t.compare.headers.map((h, i) => (
                        <th
                          key={i}
                          scope="col"
                          className={i === 2 ? 'py-3 pl-4 font-medium text-white' : 'py-3 pr-4 font-medium text-slate-400'}
                        >
                          {i === 2 ? (
                            <span className="inline-flex items-center gap-2">
                              <NodeDot size="xs" />
                              {h}
                            </span>
                          ) : (
                            h || <span className="sr-only">{t.compare.criterion}</span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.compare.rows.map(([label, generic, parrax]) => (
                      <tr key={label} className="border-b border-obsidian-line">
                        <th scope="row" className="py-3 pr-4 font-normal text-slate-300">
                          {label}
                        </th>
                        <td className="py-3 pr-4 text-slate-400">{generic}</td>
                        <td className="border-l border-obsidian-line py-3 pl-4 font-medium text-white">{parrax}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {t.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 50}
              className="group grid grid-cols-[28px_1fr] gap-3 border-t border-obsidian-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[40px_1fr] sm:gap-4 sm:py-8 lg:first:pt-2"
            >
              <span className="font-mono text-xs text-slate-400 sm:text-sm">0{i + 1}</span>
              <div>
                <h3 className="text-base font-semibold text-white sm:text-h3">
                  {item.title}
                  <NodeDot size="xs" className="ml-2 inline-block align-middle opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </h3>
                <p className="mt-1.5 max-w-[52ch] text-sm leading-6 text-slate-400 sm:mt-2 sm:text-[0.9375rem] sm:leading-7">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
