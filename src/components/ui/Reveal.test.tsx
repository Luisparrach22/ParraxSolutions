// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
type RevealModule = typeof import('./Reveal');
let Reveal: RevealModule['Reveal'];

let observers: { callback: IntersectionObserverCallback; observed: Element[] }[] = [];

class FakeIntersectionObserver {
  observed: Element[] = [];
  constructor(public callback: IntersectionObserverCallback) {
    observers.push(this);
  }
  observe(el: Element) {
    this.observed.push(el);
  }
  unobserve(el: Element) {
    this.observed = this.observed.filter((o) => o !== el);
  }
  disconnect() {}
}

function mockLayout({ top, reducedMotion = false }: { top: number; reducedMotion?: boolean }) {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ top } as DOMRect);
  vi.stubGlobal('matchMedia', (query: string) => ({ matches: reducedMotion && query.includes('reduce') }));
}

beforeEach(async () => {
  // Módulo nuevo en cada test: el observador compartido es estado de módulo.
  vi.resetModules();
  ({ Reveal } = await import('./Reveal'));
  observers = [];
  vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver);
  Object.defineProperty(window, 'innerHeight', { value: 800, configurable: true });
});

afterEach(() => cleanup());

const block = () => screen.getByText('Contenido').parentElement as HTMLElement;
const renderReveal = () => render(<Reveal><p>Contenido</p></Reveal>);

describe('Reveal', () => {
  it('el HTML del servidor es visible: data-reveal vacío, sin estado oculto', () => {
    const html = renderToString(<Reveal><p>Contenido</p></Reveal>);
    expect(html).toContain('data-reveal=""');
    expect(html).not.toContain('pending');
  });

  it('no oculta lo que ya está en pantalla al hidratar (FIAB-001 / PERF-001)', () => {
    mockLayout({ top: 100 });
    renderReveal();
    expect(block().dataset.reveal).toBe('');
    expect(observers).toHaveLength(0);
  });

  it('oculta lo que está por debajo de la pantalla y lo muestra al entrar en el viewport', () => {
    mockLayout({ top: 2000 });
    renderReveal();
    expect(block().dataset.reveal).toBe('pending');
    expect(observers[0].observed).toEqual([block()]);

    act(() => {
      observers[0].callback([{ isIntersecting: true, target: block() } as unknown as IntersectionObserverEntry], observers[0] as unknown as IntersectionObserver);
    });
    expect(block().dataset.reveal).toBe('visible');
  });

  it('no anima con prefers-reduced-motion', () => {
    mockLayout({ top: 2000, reducedMotion: true });
    renderReveal();
    expect(block().dataset.reveal).toBe('');
  });

  it('sin IntersectionObserver deja el contenido visible', () => {
    mockLayout({ top: 2000 });
    vi.stubGlobal('IntersectionObserver', undefined);
    // `'IntersectionObserver' in window` sigue siendo true con valor undefined: se elimina la propiedad
    delete (window as { IntersectionObserver?: unknown }).IntersectionObserver;
    renderReveal();
    expect(block().dataset.reveal).toBe('');
  });

  it('todos los bloques comparten un único IntersectionObserver (PERF-004)', () => {
    mockLayout({ top: 2000 });
    render(
      <>
        <Reveal><p>Uno</p></Reveal>
        <Reveal><p>Dos</p></Reveal>
        <Reveal><p>Tres</p></Reveal>
      </>,
    );
    expect(observers).toHaveLength(1);
    expect(observers[0].observed).toHaveLength(3);
  });

  it('si se desmonta antes de entrar en pantalla no lo deja oculto', () => {
    mockLayout({ top: 2000 });
    const { unmount } = renderReveal();
    const el = block();
    unmount();
    expect(el.dataset.reveal).toBe('visible');
  });
});
