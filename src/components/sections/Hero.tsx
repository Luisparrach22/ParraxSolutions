import type { Dictionary, Locale } from '@/i18n/config';
import { BookingButton, Button, NodeDot, Rich } from '@/components/ui';
import { HeroMockup } from './HeroMockup';

export function Hero({ lang, t }: { lang: Locale; t: Dictionary['hero'] }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-obsidian pt-[calc(var(--nav-h)+24px)] md:pt-[calc(var(--nav-h)+80px)]">
      {/* Rejilla técnica sutil, sin manchas de color */}
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />

      <div className="container-x relative grid grid-cols-1 items-center gap-10 pb-16 md:pb-section lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-6 lg:pr-6">
          <div>
            <p className="eyebrow flex-wrap sm:flex-nowrap">
              <NodeDot size="xs" pulse />
              <span>{t.eyebrow}</span>
            </p>
          </div>
          <div>
            <h1 id="hero-title" className="mt-4 text-display text-white sm:mt-5 lg:text-[clamp(2.5rem,4.2vw,3.25rem)]">
              <span>{t.titleA}</span>{' '}
              <span className="text-slate-400">{t.titleB}</span>
            </h1>
          </div>
          <div>
            <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-relaxed text-slate-400 sm:mt-5 sm:text-lead">{t.subtitle}</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <BookingButton lang={lang} size="lg" arrow className="w-full sm:w-auto">
              {t.ctaPrimary}
            </BookingButton>
            <Button href="#servicios" size="lg" variant="ghost" className="w-full sm:w-auto">
              {t.ctaSecondary}
            </Button>
          </div>
          <div>
            <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm text-slate-300">
              {t.reassurance.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-node" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <HeroMockup t={t.mockup} />
        </div>
      </div>
    </section>
  );
}
