import Link from 'next/link';
import type { ReactNode } from 'react';
import { getDictionary, localePath, type Locale } from '@/i18n/config';

/** Estructura común de las páginas legales (aviso legal, privacidad, cookies). */
export function LegalPage({ lang, title, subtitle, children }: { lang: Locale; title: string; subtitle: string; children: ReactNode }) {
  const t = getDictionary(lang);
  return (
    <article className="min-h-screen bg-obsidian pt-[calc(var(--nav-h)+48px)] pb-24">
      <div className="container-x max-w-[800px]">
        <nav aria-label={t.a11y.breadcrumb} className="mb-8">
          <Link href={localePath(lang, '/')} className="text-xs uppercase tracking-wider text-slate-400 hover:text-white">
            {t.legal.backHome}
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold text-white md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-400">{subtitle}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">{children}</div>
      </div>
    </article>
  );
}
