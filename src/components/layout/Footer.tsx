import Link from 'next/link';
import type { Dictionary } from '@/i18n/config';
import { Logo, NodeDot, Rich } from '@/components/ui';
import { contactEmail, instagram } from '@/config/site';

export function Footer({ t }: { t: Dictionary['footer'] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-obsidian-line bg-obsidian" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>
      <div className="container-x grid gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-4">
          {/* Firma de marca: presencia clara sin competir con el texto en móvil */}
          <span className="block md:hidden">
            <Logo variant="wordmark" surface="dark" height={51} alt="Parrax Solutions" />
          </span>
          {/* En tablet la columna es estrecha (4/12): tamaño intermedio para no desbordar */}
          <span className="hidden md:block lg:hidden">
            <Logo variant="wordmark" surface="dark" height={56} alt="Parrax Solutions" />
          </span>
          <span className="hidden lg:block">
            <Logo variant="wordmark" surface="dark" height={72} alt="Parrax Solutions" />
          </span>
          <p className="mt-5 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-400">{t.tagline}</p>
          <p className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <NodeDot size="xs" />
            {t.location}
          </p>
          <p className="mt-1.5 text-sm text-slate-300">
            <a href={`mailto:${contactEmail}`} className="inline-flex min-h-[44px] items-center underline decoration-slate-600 underline-offset-4 hover:decoration-node sm:min-h-0">
              {contactEmail}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-300">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 text-xs sm:text-sm text-slate-400 transition-colors hover:text-white sm:min-h-0"
                aria-label="Instagram de Parrax Solutions"
              >
                <svg className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110 group-hover:text-node" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>{instagram.handle}</span>
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
        <div className="container-x flex flex-col gap-3 py-6 pb-24 text-xs text-slate-400 sm:pb-6 md:flex-row md:items-center md:justify-between">
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
