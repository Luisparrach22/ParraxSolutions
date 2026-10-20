import type { Dictionary, Locale } from '@/i18n/config';
import { BookingButton, Reveal, Rich, Section, SectionHeader } from '@/components/ui';
import { priceFrom } from '@/lib/pricing';

type T = Dictionary['services'];

function Check({ className = 'text-brand' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`mt-[3px] h-4 w-4 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Precio «Desde X USD», o el marcador TODO mientras no esté configurado. */
function Price({ lang, t, priceKey, monthly, tone }: { lang: Locale; t: T; priceKey: string; monthly?: boolean; tone: 'light' | 'dark' }) {
  const value = priceFrom(priceKey, lang);
  return (
    <p className={tone === 'light' ? 'text-slate-600' : 'text-slate-400'}>
      <span className="text-sm">{t.from} </span>
      <span className={`text-xl font-semibold tabular-nums tracking-tight ${tone === 'light' ? 'text-ink' : 'text-white'}`}>
        {value ?? <Rich text={t.priceMissing} />}
      </span>
      {monthly && <span className="text-sm">{t.perMonth}</span>}
    </p>
  );
}

export function Services({ lang, t }: { lang: Locale; t: T }) {
  const { shops, automation } = t;
  const { sprint, maintenance } = automation;

  return (
    <Section id="servicios" tone="light" labelledBy="services-title">
      <SectionHeader id="services-title" tone="light" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      {/* Línea 1 · Webs y tiendas online: tres paquetes de alcance cerrado */}
      <div className="mt-12 md:mt-16">
        <Reveal className="max-w-[60ch]">
          <h3 className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl">{shops.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-7 text-slate-600">{shops.text}</p>
        </Reveal>

        <ul className="mt-6 grid gap-4 lg:grid-cols-3">
          {shops.packages.map((pkg, i) => (
            <Reveal as="li" key={pkg.key} delay={i * 60} className="flex">
              <article className="flex w-full flex-col rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight !text-ink">{pkg.name}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pkg.forWho}</p>

                <p className="mt-5 text-micro uppercase text-slate-500">{t.includesLabel}</p>
                <ul className="mt-3 space-y-2.5">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                      <Check />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <dl className="flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
                    <div>
                      <dt className="text-xs text-slate-500">{t.timelineLabel}</dt>
                      <dd className="mt-0.5 text-sm font-medium text-ink">
                        <Rich text={pkg.timeline} />
                      </dd>
                    </div>
                    <div className="text-right">
                      <dt className="sr-only">{t.from}</dt>
                      <dd>
                        <Price lang={lang} t={t} priceKey={pkg.key} tone="light" />
                      </dd>
                    </div>
                  </dl>
                  <BookingButton lang={lang} variant="ghost-light" className="mt-5 w-full">
                    {pkg.cta}
                  </BookingButton>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-5 flex flex-col gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="flex gap-2.5 text-sm font-medium text-ink">
            <Check />
            {shops.guarantee}
          </p>
          <p className="pl-[26px] text-sm text-slate-600 sm:pl-0">{t.localCurrency}</p>
        </Reveal>
      </div>

      {/* Línea 2 · Automatización: el Sprint, sobre superficie oscura para separar las dos ofertas */}
      <div className="mt-16 md:mt-24">
        <Reveal className="max-w-[60ch]">
          <h3 className="text-xl font-semibold tracking-tight !text-ink sm:text-2xl">{automation.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-7 text-slate-600">{automation.text}</p>
        </Reveal>

        <Reveal className="mt-6 overflow-hidden rounded-lg border border-obsidian-line bg-obsidian text-slate-400 [color-scheme:dark]">
          <div className="grid gap-10 p-5 sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h4 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">{sprint.name}</h4>
              <p className="mt-2 text-lead text-slate-300">{sprint.title}</p>
              <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-7">{sprint.text}</p>

              <div className="mt-6 rounded border border-obsidian-line bg-obsidian-raised p-4 sm:p-5">
                <p className="text-micro uppercase text-slate-400">{sprint.exampleLabel}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{sprint.example}</p>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                {sprint.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs text-slate-400">{f.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-white">{f.value}</dd>
                  </div>
                ))}
                <div className="col-span-2 sm:col-span-1">
                  <dt className="sr-only">{t.from}</dt>
                  <dd>
                    <Price lang={lang} t={t} priceKey="sprint" tone="dark" />
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col lg:col-span-5 lg:border-l lg:border-obsidian-line lg:pl-10">
              <p className="text-micro uppercase text-slate-400">{sprint.deliverablesLabel}</p>
              <ul className="mt-4 space-y-3">
                {sprint.deliverables.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[0.9375rem] leading-6 text-slate-200">
                    <Check className="text-node" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 lg:mt-auto lg:pt-8">
                <BookingButton lang={lang} size="lg" arrow className="w-full sm:w-auto">
                  {sprint.cta}
                </BookingButton>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-obsidian-line bg-obsidian-raised/60 p-5 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10">
            <div className="max-w-[62ch]">
              <p className="font-medium text-white">{maintenance.name}</p>
              <p className="mt-1 text-sm leading-6">
                <Rich text={maintenance.text} />
              </p>
            </div>
            <div className="shrink-0">
              <Price lang={lang} t={t} priceKey="maintenance" monthly tone="dark" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
