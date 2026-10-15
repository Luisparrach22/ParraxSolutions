// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import type { AnchorHTMLAttributes } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

const push = vi.fn();
let pathname = '/';

vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
  useRouter: () => ({ push }),
}));
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; hrefLang?: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

beforeEach(() => {
  push.mockReset();
  window.location.hash = '';
});
afterEach(cleanup);

describe('LanguageSwitcher', () => {
  it('desde la home en español enlaza a /en y marca ES como actual', () => {
    pathname = '/';
    render(<LanguageSwitcher lang="es" label="Idioma" />);
    expect(screen.getByRole('link', { name: 'English' }).getAttribute('href')).toBe('/en');
    expect(screen.getByRole('link', { name: 'Español' }).getAttribute('aria-current')).toBe('true');
    expect(screen.getByRole('link', { name: 'English' }).getAttribute('aria-current')).toBeNull();
  });

  it('conserva la página al cambiar de idioma, en ambos sentidos', () => {
    pathname = '/en/soluciones/sistemas-de-gestion';
    render(<LanguageSwitcher lang="en" label="Language" />);
    expect(screen.getByRole('link', { name: 'Español' }).getAttribute('href')).toBe('/soluciones/sistemas-de-gestion');
  });

  it('navega con el router conservando el ancla actual', () => {
    pathname = '/';
    window.location.hash = '#contacto';
    render(<LanguageSwitcher lang="es" label="Idioma" />);
    fireEvent.click(screen.getByRole('link', { name: 'English' }));
    expect(push).toHaveBeenCalledWith('/en#contacto');
  });

  it('no navega al pulsar el idioma actual', () => {
    pathname = '/';
    render(<LanguageSwitcher lang="es" label="Idioma" />);
    fireEvent.click(screen.getByRole('link', { name: 'Español' }));
    expect(push).not.toHaveBeenCalled();
  });
});
