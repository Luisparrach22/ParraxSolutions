import type { Dictionary } from '@/i18n/config';
import { Button, NodeDot, Reveal, Rich } from '@/components/ui';
import { calendarUrl, contactEmail, instagram } from '@/config/site';
import { ContactForm } from './ContactForm';

export function Contact({ t }: { t: Dictionary['contact'] }) {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="relative overflow-hidden bg-obsidian py-section-sm md:py-section">
      {/* Anclas para CTAs (preseleccionan el tipo correspondiente en el formulario) */}
      <span id="solicitar-auditoria" className="absolute top-0" aria-hidden="true" />
      <span id="agendar-sesion" className="absolute top-0" aria-hidden="true" />
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />

      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">
              <NodeDot size="xs" pulse />
              {t.eyebrow}
            </p>
            <h2 id="contact-title" className="mt-4 text-h2 text-white">
              {t.title}
            </h2>
            <p className="mt-5 max-w-[48ch] text-lead text-slate-400">{t.intro}</p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <h3 className="text-micro uppercase text-slate-400">{t.stepsTitle}</h3>
            <ol className="mt-5 space-y-4">
              {t.steps.map((s, i) => (
                <li key={s} className="grid grid-cols-[28px_1fr] gap-3 text-[0.9375rem] text-slate-300">
                  <span className="font-mono text-sm text-slate-400">0{i + 1}</span>
                  <span>
                    <Rich text={s} />
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Reserva directa en calendario */}
          <Reveal delay={140} className="mt-8 rounded-lg border border-dashed border-slate-700 p-5 sm:mt-10 sm:p-6">
            <p className="font-medium text-white">{t.calendar.title}</p>
            <p className="mt-1 text-sm text-slate-400">{t.calendar.text}</p>
            {calendarUrl ? (
              <Button href={calendarUrl} variant="ghost" className="mt-5" target="_blank" rel="noopener noreferrer">
                {t.calendar.cta}
              </Button>
            ) : (
              <div className="mt-5">
                <Button href="#contacto-formulario" variant="ghost" arrow className="w-full sm:w-auto">
                  {t.calendar.cta}
                </Button>
                <p className="mt-2.5 text-xs text-slate-400">
                  <Rich text={t.calendar.placeholder} />
                </p>
              </div>
            )}
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <p>
              {t.directEmail}{' '}
              <a href={`mailto:${contactEmail}`} className="text-white underline decoration-slate-600 underline-offset-4 hover:decoration-node">
                {contactEmail}
              </a>
            </p>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-slate-400 transition-colors hover:text-white sm:min-h-0"
              aria-label="Instagram de Parrax Solutions"
            >
              <svg className="h-4 w-4 shrink-0 text-node" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>{instagram.handle}</span>
            </a>
          </div>
        </div>

        <Reveal delay={100} className="lg:col-span-7">
          <div id="contacto-formulario" className="rounded-lg border border-obsidian-line bg-obsidian-raised scroll-mt-[calc(var(--nav-h)+24px)]">
            <ContactForm t={t.form} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
