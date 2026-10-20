'use client';

import type { ComponentProps, MouseEvent, ReactNode } from 'react';
import { getDictionary, type Locale } from '@/i18n/config';
import { bookingLink } from '@/lib/booking';
import { Button } from './Button';

type ButtonProps = ComponentProps<typeof Button>;

type BookingButtonProps = Pick<ButtonProps, 'variant' | 'size' | 'className' | 'arrow'> & {
  lang: Locale;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

/** CTA «Agendar sesión»: abre el calendario (pestaña nueva) o baja al formulario. */
export function BookingButton({ lang, children, onClick, ...rest }: BookingButtonProps) {
  const { href, external } = bookingLink(lang);
  return (
    <Button
      {...rest}
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {external && <span className="sr-only"> {getDictionary(lang).a11y.newTab}</span>}
    </Button>
  );
}
