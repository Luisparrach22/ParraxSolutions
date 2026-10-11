import type { Metadata } from 'next';
import { Button, NodeDot } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-obsidian pb-16 pt-[calc(var(--nav-h)+48px)]">
      <div aria-hidden="true" className="grid-lines grid-fade pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <p className="eyebrow">
          <NodeDot size="xs" state="idle" />
          Error 404
        </p>
        <h1 className="mt-4 max-w-[18ch] text-h2 text-white">Esta página no está conectada a nada.</h1>
        <p className="mt-4 max-w-[52ch] text-lead text-slate-400">
          Puede que el enlace haya cambiado o que la dirección tenga un error. Te llevamos de vuelta a donde sí hay sistemas funcionando.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg" arrow className="w-full sm:w-auto">
            Volver al inicio
          </Button>
          <Button href="/#soluciones" size="lg" variant="ghost" className="w-full sm:w-auto">
            Ver soluciones
          </Button>
        </div>
      </div>
    </section>
  );
}
