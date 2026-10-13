import type { Dictionary } from '@/i18n/config';
import { Badge, Button, NodeDot, Reveal, Rich, Section, SectionHeader } from '@/components/ui';

export function Proof({ t }: { t: Dictionary['proof'] }) {
  return (
    <Section id="casos" labelledBy="proof-title">
      <SectionHeader id="proof-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-12">
        {/* Estado vacío diseñado: estructura real de un futuro caso */}
        <Reveal className="lg:col-span-7">
          <div className="relative h-full rounded-lg border border-dashed border-slate-700 p-5 sm:p-6 md:p-10">
            <Badge variant="placeholder">{t.empty.badge}</Badge>
            <h3 className="mt-6 text-h3 text-white">{t.empty.title}</h3>
            <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-7 text-slate-400">{t.empty.text}</p>

            <div aria-hidden="true" className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
              {t.empty.fields.map((f, i) => (
                <div key={f} className="rounded border border-obsidian-line bg-obsidian-raised p-4">
                  <p className="flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.14em] text-slate-400">
                    <NodeDot size="xs" state="idle" />
                    {f}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-slate-800" />
                    <div className={i === 2 ? 'h-1.5 w-1/3 rounded-full bg-slate-800' : 'h-1.5 w-3/4 rounded-full bg-slate-800'} />
                  </div>
                  {i === 2 && <p className="mt-4 font-mono text-2xl font-semibold tracking-tight text-slate-700">—</p>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Oferta para ganar los primeros casos */}
        <Reveal delay={100} className="lg:col-span-5">
          <article id="auditoria" className="flex h-full scroll-mt-[calc(var(--nav-h)+24px)] flex-col rounded-lg border border-slate-600 bg-obsidian-raised p-5 sm:p-6 md:p-10">
            <Badge variant="node" className="self-start">{t.audit.badge}</Badge>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:mt-6 sm:text-2xl">{t.audit.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-7 text-slate-400">{t.audit.text}</p>
            <ul className="mt-6 space-y-3">
              {t.audit.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                  <NodeDot size="xs" className="mt-[7px]" />
                  <span>
                    <Rich text={p} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <Button href="#solicitar-auditoria" size="lg" arrow className="w-full sm:w-auto">
                {t.audit.cta}
              </Button>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
