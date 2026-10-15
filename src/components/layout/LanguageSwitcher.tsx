'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';
import { localeNames, locales, localePath, stripLocale, type Locale } from '@/i18n/config';
import { cn } from '@/lib/cn';

/**
 * Selector de idioma. Lleva a la misma página en el otro idioma y conserva el
 * ancla (#contacto…) para no perder la posición en la home.
 */
export function LanguageSwitcher({ lang, label, className }: { lang: Locale; label: string; className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const path = stripLocale(pathname);

  const onClick = (e: MouseEvent<HTMLAnchorElement>, target: Locale) => {
    if (target === lang) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    router.push(localePath(target, path) + window.location.hash);
  };

  return (
    <div role="group" aria-label={label} className={cn('inline-flex items-center rounded border border-slate-700 p-0.5 text-xs font-medium', className)}>
      {locales.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={localePath(l, path)}
            lang={l}
            hrefLang={l}
            aria-current={active ? 'true' : undefined}
            aria-label={localeNames[l]}
            title={localeNames[l]}
            onClick={(e) => onClick(e, l)}
            className={cn(
              'inline-flex min-h-[32px] min-w-[36px] items-center justify-center rounded-sm px-2 uppercase tracking-wider transition-colors',
              active ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white',
            )}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
