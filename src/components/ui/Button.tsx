'use client';

import Link from 'next/link';
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { scrollToAnchor } from '@/lib/scroll-to-anchor';

type Variant = 'primary' | 'ghost' | 'ghost-light' | 'solid-light';
type Size = 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Muestra una flecha que se desplaza en hover */
  arrow?: boolean;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

const base =
  'group relative inline-flex max-w-full items-center justify-center gap-2 rounded text-center font-medium leading-snug transition-colors duration-200 [-webkit-tap-highlight-color:transparent] disabled:cursor-not-allowed disabled:opacity-60 sm:whitespace-nowrap';

const variants: Record<Variant, string> = {
  // Cian reservado al CTA principal
  primary: 'bg-node text-obsidian hover:bg-node-hover',
  // Secundario sobre oscuro: borde fino, nodo cian aparece en hover
  ghost: 'border border-slate-700 text-white hover:border-slate-500 hover:bg-white/[0.03]',
  // Secundario sobre claro
  'ghost-light': 'border border-slate-300 text-ink hover:border-slate-400 hover:bg-white',
  // Primario sobre claro (azul de marca, el cian no tiene contraste suficiente sobre Paper)
  'solid-light': 'bg-brand text-white hover:bg-brand-hover',
};

const sizes: Record<Size, string> = {
  md: 'min-h-10 px-4 py-2 text-sm',
  lg: 'min-h-12 px-6 py-3 text-[0.9375rem]',
};

function Inner({ children, arrow, variant }: { children: ReactNode; arrow?: boolean; variant: Variant }) {
  return (
    <>
      {(variant === 'ghost' || variant === 'ghost-light') && (
        <span
          aria-hidden="true"
          className={cn(
            'h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200',
            variant === 'ghost' ? 'bg-slate-600 group-hover:bg-node' : 'bg-slate-400 group-hover:bg-brand',
          )}
        />
      )}
      <span>{children}</span>
      {arrow && (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, children, arrow, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in rest && rest.href !== undefined) {
    const { href, onClick, ...anchorProps } = rest as ButtonAsLink;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;

      const id = href.split('#')[1];
      if (!id) return;
      const isHome = window.location.pathname === '/';
      if ((isHome || href.startsWith('#')) && scrollToAnchor(id)) {
        e.preventDefault();
      }
    };

    return (
      <Link href={href} onClick={handleClick} className={classes} {...anchorProps}>
        <Inner arrow={arrow} variant={variant}>{children}</Inner>
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof BaseProps>;
  return (
    <button className={classes} {...buttonProps}>
      <Inner arrow={arrow} variant={variant}>{children}</Inner>
    </button>
  );
}
