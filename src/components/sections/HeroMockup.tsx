import type { Dictionary } from '@/i18n/config';
import { cn } from '@/lib/cn';
import { Badge, NodeDot } from '@/components/ui';

/**
 * Vista ilustrativa de un sistema de operaciones, construida en HTML/SVG.
 * Monocromo; el cian solo marca estados activos y extremos de conexión.
 */
export function HeroMockup({ t }: { t: Dictionary['hero']['mockup'] }) {
  return (
    <figure className="relative">
      <div aria-hidden="true" className="overflow-hidden rounded-lg border border-obsidian-line bg-obsidian-raised">
        {/* Barra de ventana */}
        <div className="flex items-center justify-between gap-4 border-b border-obsidian-line px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Botones de ventana estilo macOS con colores auténticos y animación de iconos en hover */}
            <div className="group/dots flex items-center gap-2 cursor-pointer py-1" title={t.windowControls}>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm transition-all duration-200 hover:brightness-110 active:scale-90">
                <svg
                  viewBox="0 0 8 8"
                  className="h-1.5 w-1.5 text-[#4C0002] opacity-0 transition-opacity duration-200 group-hover/dots:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-sm transition-all duration-200 hover:brightness-110 active:scale-90">
                <svg
                  viewBox="0 0 8 8"
                  className="h-1.5 w-1.5 text-[#543A00] opacity-0 transition-opacity duration-200 group-hover/dots:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M1.5 4h5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-sm transition-all duration-200 hover:brightness-110 active:scale-90">
                <svg
                  viewBox="0 0 8 8"
                  className="h-1.5 w-1.5 text-[#003D08] opacity-0 transition-opacity duration-200 group-hover/dots:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M1.75 6.25L6.25 1.75M3.5 1.75h2.75v2.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">{t.window}</span>
          </div>
          <Badge variant="node" pulse>
            {t.live}
          </Badge>
        </div>

        <div className="space-y-4 p-3.5 sm:p-6">
          {/* Título del panel */}
          <div>
            <p className="text-micro uppercase text-slate-400">{t.eyebrow}</p>
            <p className="mt-0.5 text-base font-semibold tracking-tight text-white sm:text-lg">{t.title}</p>
          </div>

          {/* Pipeline de 3 pasos: diseño fluido y limpio en móvil */}
          <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0">
            {t.pipeline.map((step, i) => {
              const isActive = i === t.pipeline.length - 1;
              return (
                <li key={step} className="flex flex-col sm:flex-1 sm:flex-row sm:items-center">
                  <div
                    className={cn(
                      'flex-1 rounded border bg-obsidian p-2.5 sm:p-3',
                      isActive ? 'border-slate-600' : 'border-obsidian-line',
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-400 sm:text-[11px]">0{i + 1}</span>
                      <NodeDot size="xs" state={isActive ? 'active' : 'idle'} pulse={isActive} />
                    </div>
                    <p className="mt-1 text-xs font-medium leading-snug text-white sm:mt-2 sm:text-[13px]">{step}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400 sm:mt-1 sm:text-[11px]">{t.pipelineSub[i]}</p>
                  </div>
                  {i < t.pipeline.length - 1 && <Connector />}
                </li>
              );
            })}
          </ol>

          {/* Filas de estado con diseño responsivo */}
          <ul className="divide-y divide-obsidian-line rounded border border-obsidian-line">
            {t.rows.map((row) => (
              <li key={row.ref} className="flex items-center justify-between gap-2.5 px-3 py-2 sm:px-3 sm:py-2.5">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <span className="font-mono text-[10px] text-slate-500 sm:text-[11px] shrink-0">{row.ref}</span>
                  <span className="truncate text-xs text-slate-300 sm:text-[13px]">{row.text}</span>
                </div>
                <Badge variant={row.state === 'active' ? 'node' : 'done'} pulse={row.state === 'active'} className="shrink-0 text-[9px] sm:text-[11px]">
                  {row.status}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 sm:text-xs">
        <span aria-hidden="true" className="h-px w-4 bg-slate-600" />
        {t.label}
      </figcaption>
    </figure>
  );
}

/** Línea de conexión entre pasos: trazo discontinuo que fluye y termina en un nodo cian. */
function Connector() {
  return (
    <>
      {/* Horizontal (sm+) */}
      <svg className="hidden h-3 w-6 shrink-0 sm:block md:w-8" viewBox="0 0 32 12" fill="none" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="26" y2="6" stroke="#475569" strokeWidth="1" className="flow-line" />
        <circle cx="28" cy="6" r="2.5" fill="#05D1FF" />
      </svg>
      {/* Vertical (móvil) */}
      <svg className="ml-5 h-6 w-3 sm:hidden" viewBox="0 0 12 24" fill="none">
        <line x1="6" y1="0" x2="6" y2="18" stroke="#475569" strokeWidth="1" className="flow-line" />
        <circle cx="6" cy="20.5" r="2.5" fill="#05D1FF" />
      </svg>
    </>
  );
}
