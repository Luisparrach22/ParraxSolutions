import Link from 'next/link';
import type { Dictionary } from '@/i18n/config';
import { Badge, NodeDot, Reveal } from '@/components/ui';

export function QuickServices({ t }: { t: Dictionary['quickServices'] }) {
  return (
    <section aria-labelledby="quick-services-title" className="relative border-b border-obsidian-line bg-obsidian-raised py-10 md:py-16">
      <div className="container-x">
        <Reveal className="flex flex-col gap-1.5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
              <NodeDot size="xs" />
              {t.eyebrow}
            </p>
            <h2 id="quick-services-title" className="mt-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
              {t.title}
            </h2>
          </div>
          <p className="max-w-[50ch] text-xs text-slate-400 sm:text-sm">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Rejilla de 6 servicios de escaneo instantáneo */}
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal as="li" key={item.num} delay={i * 30}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col justify-between rounded-lg border border-obsidian-line bg-obsidian p-4 transition-all duration-200 hover:border-slate-500 hover:bg-white/[0.02] sm:p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-medium text-slate-500 transition-colors group-hover:text-node">
                      {item.num}
                    </span>
                    <Badge variant="neutral" className="border-slate-800 text-[10px] text-slate-400 group-hover:border-slate-700">
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="mt-2.5 text-[0.9375rem] font-semibold text-white group-hover:text-white sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-3.5 flex items-center gap-1.5 border-t border-obsidian-line/60 pt-2.5 text-xs font-medium text-slate-400 transition-colors group-hover:text-node">
                  <span>Explorar solución</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
