import type { Dictionary } from '@/i18n/config';
import { cn } from '@/lib/cn';
import { NodeDot, Reveal, Section, SectionHeader } from '@/components/ui';

export function Method({ t }: { t: Dictionary['method'] }) {
  return (
    <Section id="metodo" labelledBy="method-title">
      <SectionHeader id="method-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <div className="relative mt-10 md:mt-16">
        {/* Línea de conexión horizontal (desktop) */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-obsidian-line lg:block">
          <div className="flow-h h-px w-full" />
        </div>

        <ol className="grid gap-0 lg:grid-cols-5 lg:gap-6">
          {t.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.name}
              delay={i * 60}
              className={cn(
                'relative pb-8 pl-8 lg:pb-0 lg:pl-0',
                // Línea vertical continua y limpia en móvil
                i < t.steps.length - 1 && 'before:absolute before:bottom-0 before:left-[7.5px] before:top-4 before:w-px before:bg-slate-800 lg:before:hidden',
              )}
            >
              <span className="absolute left-0 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-slate-700 bg-obsidian lg:static">
                <NodeDot size="xs" />
              </span>

              <p className="font-mono text-xs text-slate-500 lg:mt-6">0{i + 1}</p>
              <h3 className="mt-1 text-base font-semibold text-white sm:text-h3">{step.name}</h3>
              <p className="mt-1.5 max-w-[42ch] text-xs leading-relaxed text-slate-400 sm:text-sm sm:leading-6">{step.text}</p>

              <div className="mt-4 rounded border border-obsidian-line bg-obsidian-raised/70 p-3 text-xs sm:mt-5 sm:border-0 sm:bg-transparent sm:p-0 sm:border-t sm:pt-4 sm:text-sm">
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400 sm:text-[0.6875rem]">{t.deliverableLabel}</p>
                <p className="mt-1 font-medium text-slate-200">{step.deliverable}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
