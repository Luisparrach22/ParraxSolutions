'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Fade + translate sutil al entrar en viewport.
 * El contenido se renderiza visible: solo se oculta (data-reveal="pending") si al
 * hidratar está por debajo de la pantalla, para animarlo cuando el usuario llegue.
 * Así nunca queda oculto si el JS no carga, y lo visible al abrir la página no
 * espera a la hidratación (FIAB-001, PERF-001). Con prefers-reduced-motion no se anima.
 */
// Un único observador para todos los Reveal de la página (PERF-004).
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  sharedObserver ??= new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.reveal = 'visible';
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  return sharedObserver;
}

export function Reveal({ as: Tag = 'div', delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = 'pending';
    const observer = getObserver();
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      // Si se desmonta antes de entrar en pantalla, no lo dejamos oculto.
      if (el.dataset.reveal === 'pending') el.dataset.reveal = 'visible';
    };
  }, []);

  return (
    <Tag ref={ref} data-reveal="" className={className} style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}>
      {children}
    </Tag>
  );
}
