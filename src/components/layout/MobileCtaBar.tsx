'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary, localePath, type Locale } from '@/i18n/config';
import { BOOKING_ANCHOR, bookingLink } from '@/lib/booking';
import { NodeDot } from '@/components/ui';
import { scrollToAnchor } from '@/lib/scroll-to-anchor';

/**
 * Barra de acción fija solo en móvil (< sm). Aparece al pasar el hero y se
 * oculta cuando el formulario de contacto o el pie están en pantalla, para no
 * tapar contenido ni duplicar el CTA.
 */
export function MobileCtaBar({ lang, label, sub }: { lang: Locale; label: string; sub: string }) {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > Math.min(560, window.innerHeight * 0.8));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    const targets = [document.getElementById('contacto'), document.querySelector('footer')].filter(Boolean) as Element[];
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setBlocked(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  const show = pastHero && !blocked;
  const booking = bookingLink(lang);
  if (!show) return null;

  return (
    <div className="bar-enter fixed inset-x-0 bottom-0 z-40 border-t border-obsidian-line bg-obsidian/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md sm:hidden">
      <div className="container-x flex items-center justify-between gap-3 py-2.5">
        <p className="min-w-0 text-xs leading-tight text-slate-400">
          <span className="flex items-center gap-1.5 font-medium text-white">
            <NodeDot size="xs" pulse />
            {sub}
          </span>
        </p>
        <Link
          href={booking.href}
          {...(booking.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          onClick={(e) => {
            if (booking.external) return;
            if (pathname === localePath(lang, '/') && (scrollToAnchor(BOOKING_ANCHOR) || scrollToAnchor('contacto'))) {
              e.preventDefault();
            }
          }}
          className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded bg-node px-4 text-sm font-medium text-obsidian transition-colors active:bg-node-hover"
        >
          {label}
          {booking.external && <span className="sr-only"> {getDictionary(lang).a11y.newTab}</span>}
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
