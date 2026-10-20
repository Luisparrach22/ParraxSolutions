import type { Dictionary } from '@/i18n/config';
import { Reveal, Rich, Section, SectionHeader } from '@/components/ui';
import { jsonLd } from '@/lib/json-ld';

/** Preguntas de compra con <details> nativo (accesible sin JS) y datos estructurados FAQPage. */
export function Faq({ t }: { t: Dictionary['faq'] }) {
  // Solo se publican en FAQPage las respuestas confirmadas: nada de marcadores TODO en los datos estructurados.
  const answered = t.items.filter((item) => !item.a.includes('['));
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: answered.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a.replace(/\u2060/g, '') },
    })),
  };

  return (
    <Section id="preguntas" tone="light" labelledBy="faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+48px)]">
            <SectionHeader id="faq-title" tone="light" eyebrow={t.eyebrow} title={t.title} />
          </div>
        </div>

        <Reveal className="lg:col-span-7 lg:col-start-6">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {t.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[0.9375rem] font-medium text-ink sm:text-base [&::-webkit-details-marker]:hidden">
                  <h3 className="!text-ink">{item.q}</h3>
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="max-w-[62ch] pb-5 pr-8 text-[0.9375rem] leading-7 text-slate-600">
                  <Rich text={item.a} />
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
