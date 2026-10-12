'use client';

import { useEffect, useState } from 'react';
import { Logo } from '@/components/ui';
import { cn } from '@/lib/cn';

/**
 * Animación de bienvenida (Splash Screen) cinematográfica.
 * Se muestra la primera vez que el usuario abre la web en la sesión.
 * Presenta el imagotipo de Parrax Solutions con una línea de carga técnica en cian,
 * y luego se desvanece suavemente para revelar toda la página.
 */
export function SplashIntro() {
  const [stage, setStage] = useState<'idle' | 'visible' | 'exit' | 'done'>('idle');

  useEffect(() => {
    // Si el usuario ya vio la intro en esta sesión o tiene reducción de movimiento, no mostrar
    try {
      const seen = sessionStorage.getItem('px_intro_seen');
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (seen || prefersReduced) {
        setStage('done');
        return;
      }
    } catch {
      // Fallback si cookies/almacenamiento están bloqueados
    }

    // Iniciar secuencia de animación
    setStage('visible');

    // Bloquear scroll momentáneamente durante la intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // A los 1200ms inicia el desvanecimiento de salida
    const exitTimer = setTimeout(() => {
      setStage('exit');
      document.body.style.overflow = originalOverflow;
    }, 1250);

    // A los 1800ms desmontar del DOM completamente
    const doneTimer = setTimeout(() => {
      setStage('done');
      try {
        sessionStorage.setItem('px_intro_seen', 'true');
      } catch {}
    }, 1850);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (stage === 'idle' || stage === 'done') {
    return null;
  }

  const isExiting = stage === 'exit';

  return (
    <div
      role="status"
      aria-label="Cargando Parrax Solutions"
      onClick={() => setStage('done')}
      className={cn(
        'fixed inset-0 z-[100] flex cursor-pointer select-none flex-col items-center justify-center bg-obsidian transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isExiting ? 'pointer-events-none scale-105 opacity-0' : 'opacity-100',
      )}
    >
      {/* Rejilla técnica de fondo sutil con máscara radial */}
      <div
        aria-hidden="true"
        className="grid-lines grid-fade pointer-events-none absolute inset-0 opacity-40"
      />

      {/* Resplandor ambiental cian centrado en el logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-node/15 blur-3xl transition-opacity duration-1000"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo oficial Parrax Solutions */}
        <div
          className={cn(
            'transition-all duration-700 ease-out',
            stage === 'visible' ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
          )}
        >
          {/* Tamaño adaptativo: compacto en móvil, amplio en escritorio */}
          <div className="sm:hidden">
            <Logo variant="lockup" surface="dark" height={60} priority alt="Parrax Solutions" />
          </div>
          <div className="hidden sm:block">
            <Logo variant="lockup" surface="dark" height={84} priority alt="Parrax Solutions" />
          </div>
        </div>

        {/* Micro-indicador de inicialización técnica */}
        <div className="mt-8 flex flex-col items-center gap-2">
          {/* Línea de carga técnica ultra fina */}
          <div className="relative h-[2px] w-36 overflow-hidden rounded-full bg-slate-800">
            <div
              className={cn(
                'absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-transparent via-node to-white shadow-[0_0_12px_#05D1FF] transition-all duration-1000 ease-out',
                stage === 'visible' ? 'w-full' : 'w-0',
              )}
            />
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Sistemas &bull; Automatización
          </p>
        </div>
      </div>
    </div>
  );
}
