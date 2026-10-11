import type { Dictionary } from '@/i18n/config';
import { Button, Reveal, Section, SectionHeader } from '@/components/ui';

export function Engagement({ t }: { t: Dictionary['engagement'] }) {
  return (
    <Section id="modelos" tone="light" labelledBy="engagement-title">
      <SectionHeader id="engagement-title" tone="light" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
        {t.models.map((m, i) => (
          <Reveal as="li" key={m.name} delay={i * 80}>
            <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 sm:p-6 md:p-8">
              <p className="font-mono text-xs text-slate-500">0{i + 1}</p>
              <h3 className="mt-3 text-h3 !text-ink">{m.name}</h3>
              <p className="mt-3 text-[0.9375rem] leading-7 text-slate-600">{m.summary}</p>

              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-8 text-sm text-slate-600">
                <span className="font-medium text-ink">{t.bestFor}: </span>
                {m.bestFor}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex flex-col items-stretch gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 md:mt-12 md:px-8">
        <p className="text-[0.9375rem] text-slate-700">{t.note}</p>
        <Button href="#contacto" variant="solid-light" size="lg" arrow className="w-full shrink-0 sm:w-auto">
          {t.cta}
        </Button>
      </Reveal>
    </Section>
  );
}
