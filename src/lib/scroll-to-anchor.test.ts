// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { scrollToAnchor } from './scroll-to-anchor';

let scrollSpy: Mock<(arg?: boolean | ScrollIntoViewOptions) => void>;

function setReducedMotion(reduce: boolean) {
  vi.stubGlobal('matchMedia', (q: string) => ({ matches: reduce && q.includes('reduce') }));
}

beforeEach(() => {
  document.body.innerHTML = '<section id="contacto"></section>';
  scrollSpy = vi.fn<(arg?: boolean | ScrollIntoViewOptions) => void>();
  Element.prototype.scrollIntoView = scrollSpy;
  window.history.replaceState(null, '', '/');
  setReducedMotion(false);
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('scrollToAnchor', () => {
  it('devuelve false y no hace nada si el ancla no existe', () => {
    const onHash = vi.fn();
    window.addEventListener('hashchange', onHash);
    expect(scrollToAnchor('no-existe')).toBe(false);
    expect(scrollSpy).not.toHaveBeenCalled();
    expect(window.location.hash).toBe('');
    window.removeEventListener('hashchange', onHash);
    expect(onHash).not.toHaveBeenCalled();
  });

  it('desplaza suavemente, actualiza el hash y emite hashchange', () => {
    const onHash = vi.fn();
    window.addEventListener('hashchange', onHash);
    expect(scrollToAnchor('contacto')).toBe(true);
    window.removeEventListener('hashchange', onHash);

    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(window.location.hash).toBe('#contacto');
    expect(onHash).toHaveBeenCalledOnce();
  });

  it('emite hashchange aunque el hash ya sea el mismo (navegación repetida)', () => {
    scrollToAnchor('contacto');
    const onHash = vi.fn();
    window.addEventListener('hashchange', onHash);
    scrollToAnchor('contacto');
    window.removeEventListener('hashchange', onHash);
    expect(onHash).toHaveBeenCalledOnce();
  });

  it('respeta prefers-reduced-motion', () => {
    setReducedMotion(true);
    scrollToAnchor('contacto');
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' });
  });
});
