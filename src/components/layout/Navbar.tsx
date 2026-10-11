'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import type { Dictionary } from '@/i18n/config';
import { cn } from '@/lib/cn';
import { Button, Logo, NodeDot } from '@/components/ui';

type NavbarProps = {
  t: Dictionary['nav'];
  a11y: Dictionary['a11y'];
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navbar({ t, a11y }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Fondo sólido + borde al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Al cambiar de página se cierra el menú
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll-spy: solo en la home. Se re-engancha al volver desde otra página
  // (el Navbar vive en el layout y no se desmonta entre rutas).
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const ids = t.links.map((l) => l.href.replace('#', ''));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [t.links, isHome]);

  // Si se agranda la ventana a escritorio con el menú abierto, se cierra
  // (si no, el scroll del body quedaría bloqueado con el menú oculto).
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Menú móvil: bloquear scroll, Escape para cerrar, foco atrapado dentro
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (window.matchMedia('(min-width: 1024px)').matches) {
      firstLinkRef.current?.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !menuRef.current || !toggleRef.current) return;
      const items = [toggleRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /**
   * Navegación a anclas de la home. Si ya estamos en la home, cerramos el menú,
   * liberamos el scroll y desplazamos de forma fiable.
   */
  const go = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      setOpen(false);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';

      const id = href.split('#')[1];
      if (!isHome || !id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTimeout(() => {
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
      }, 50);
    },
    [isHome],
  );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        open
          ? 'fixed inset-0 h-dvh flex flex-col bg-obsidian lg:inset-x-0 lg:bottom-auto lg:h-[var(--nav-h)]'
          : 'h-[var(--nav-h)] border-b',
        !open && (scrolled || !isHome ? 'border-obsidian-line bg-obsidian/95 backdrop-blur-md' : 'border-transparent bg-transparent'),
      )}
    >
      <nav aria-label="Principal" className="container-x flex h-[var(--nav-h)] shrink-0 items-center justify-between gap-4 border-b border-obsidian-line lg:border-none">
        <Link
          href="/"
          aria-label={a11y.home}
          className="shrink-0"
          onClick={(e) => {
            setOpen(false);
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (window.location.hash) window.history.pushState(null, '', '/');
            }
          }}
        >
          {/* Logo adaptativo: más compacto en móviles pequeños */}
          <span className="block sm:hidden">
            <Logo variant="lockup" surface="dark" height={26} priority alt="Parrax Solutions" />
          </span>
          <span className="hidden sm:block">
            <Logo variant="lockup" surface="dark" height={32} priority alt="Parrax Solutions" />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.links.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            const href = `/${link.href}`;
            return (
              <li key={link.href}>
                <Link
                  href={href}
                  onClick={(e) => go(e, href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'group flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors',
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white',
                  )}
                >
                  <NodeDot
                    size="xs"
                    state={isActive ? 'active' : 'idle'}
                    className={cn('transition-opacity', isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <Button href="/#agendar-sesion" size="md" className="hidden sm:inline-flex" onClick={(e) => go(e, '/#agendar-sesion')}>
            <span className="lg:hidden">{t.ctaShort}</span>
            <span className="hidden lg:inline">{t.cta}</span>
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-slate-700 bg-obsidian text-white transition-colors [-webkit-tap-highlight-color:transparent] hover:border-slate-500 hover:bg-white/[0.04] focus-visible:outline-node lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h9" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil a pantalla completa */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className={cn(
          'flex-1 overflow-y-auto overscroll-contain bg-obsidian lg:hidden',
          open && 'menu-enter',
        )}
      >
        <div className="container-x flex min-h-full flex-col justify-between pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6">
          <div className="space-y-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">Navegación</p>
            <ul className="divide-y divide-obsidian-line border-y border-obsidian-line">
              {t.links.map((link, i) => {
                const isActive = active === link.href.replace('#', '');
                const href = `/${link.href}`;
                return (
                  <li key={link.href}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={href}
                      onClick={(e) => go(e, href)}
                      aria-current={isActive ? 'location' : undefined}
                      className="group flex min-h-[56px] items-center justify-between py-3 text-lg font-medium text-slate-200 transition-colors active:text-white hover:text-white"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-slate-500">0{i + 1}</span>
                        <span>{link.label}</span>
                      </span>
                      <NodeDot
                        size="xs"
                        state={isActive ? 'active' : 'idle'}
                        className={cn(isActive ? 'opacity-100' : 'opacity-20 group-hover:opacity-100')}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Acceso rápido a auditoría en el menú móvil */}
            <div className="rounded-lg border border-slate-800 bg-obsidian-raised p-4">
              <span className="inline-block rounded-sm border border-slate-700 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-node">
                Sin compromiso
              </span>
              <p className="mt-2 text-sm font-medium text-white">¿Quieres revisar tu operativa?</p>
              <p className="mt-1 text-sm text-slate-400">Solicita una auditoría digital gratuita en 60 minutos.</p>
              <Link
                href="/#solicitar-auditoria"
                onClick={(e) => go(e, '/#solicitar-auditoria')}
                className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-node hover:underline"
              >
                <span>Solicitar auditoría</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-obsidian-line pt-6">
            <Button href="/#agendar-sesion" size="lg" className="w-full" onClick={(e) => go(e, '/#agendar-sesion')}>
              {t.cta}
            </Button>
            <p className="mt-4 text-center text-sm text-slate-500">
              O escríbenos a{' '}
              <a href="mailto:contacto@parraxsolutions.com" className="text-slate-300 underline underline-offset-4">
                contacto@parraxsolutions.com
              </a>
            </p>
            <p className="mt-3 text-center">
              <a
                href="https://instagram.com/parraxsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                aria-label="Instagram @parraxsolutions"
              >
                <svg className="h-4 w-4 shrink-0 text-node" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram: @parraxsolutions</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
