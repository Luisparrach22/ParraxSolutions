import Link from 'next/link';
import type { Dictionary } from '@/i18n/config';
import { Logo, NodeDot, Rich, plain } from '@/components/ui';

export function Footer({ t, email }: { t: Dictionary['footer']; email: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-obsidian-line bg-obsidian" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>
      <div className="container-x grid gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-4">
          <Logo variant="wordmark" surface="dark" height={38} alt="Parrax Solutions" />
          <p className="mt-5 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">{t.tagline}</p>
          <p className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <NodeDot size="xs" />
            {t.location}
          </p>
          <p className="mt-1.5 text-sm text-slate-300">
            <a href={`mailto:${plain(email)}`} className="inline-flex min-h-[44px] items-center underline decoration-slate-600 underline-offset-4 hover:decoration-node sm:min-h-0">
              <Rich text={email} />
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:col-start-6">
          {t.columns.map((col, idx) => (
            <nav key={col.title} aria-label={col.title} className={idx === 2 ? 'col-span-2 sm:col-span-1' : ''}>
              <p className="text-micro uppercase text-slate-300">{col.title}</p>
              <ul className="mt-3 sm:mt-4 sm:space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-[40px] items-center text-sm text-slate-400 transition-colors hover:text-white sm:min-h-0">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-obsidian-line">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Parrax Solutions. {t.rights}
          </p>
          <p>
            <Rich text={t.legalLine} />
          </p>
        </div>
      </div>
    </footer>
  );
}
