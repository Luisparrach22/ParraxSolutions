import type { ReactNode, SVGProps } from 'react';

/**
 * Iconoteca vectorial técnica de Parrax Solutions.
 * Geometría de 24x24 px con trazo de 1.5 px, bordes redondeados y metáforas
 * de ingeniería de software B2B claras y distinguibles.
 */
const paths: Record<string, ReactNode> = {
  // Hoja de cálculo / Excel: documento con pliegue de esquina y rejilla de celdas
  sheet: (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <rect x="7" y="12" width="10" height="7" rx="1" />
      <path d="M7 15.5h10" />
      <path d="M12 12v7" />
    </>
  ),

  // Copia manual de datos: documentos duplicados con líneas de texto repetidas
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      <path d="M12 13h5" />
      <path d="M12 16h4" />
      <path d="M12 19h2" />
    </>
  ),

  // Herramientas aisladas: enlace roto / conexión desconectada entre sistemas
  disconnect: (
    <>
      <path d="M18.84 12.25l1.72-1.71a4.5 4.5 0 0 0-6.36-6.36l-1.72 1.71" />
      <path d="M5.16 11.75l-1.72 1.71a4.5 4.5 0 0 0 6.36 6.36l1.72-1.71" />
      <line x1="2" y1="2" x2="22" y2="22" strokeWidth="1.75" />
    </>
  ),

  // Licencias crecientes: usuario con flecha de coste ascendente por suscripción
  license: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 7 19 4 22 7" />
      <line x1="19" y1="4" x2="19" y2="13" />
    </>
  ),

  // Seguridad / RGPD: escudo de protección con marca de verificación certificada
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  // Control de accesos: llave con dentado de precisión y ojo de cerradura
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m11 12 9-9" />
      <path d="m15.5 7.5 2 2" />
      <path d="m18 5 2 2" />
    </>
  ),

  // Copias de seguridad: base de datos redundante con vector de restauración
  backup: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      <path d="M12 11v6m-2.5-2.5l2.5-2.5 2.5 2.5" />
    </>
  ),

  // Soporte dedicado: auricular profesional con canal de comunicación directo
  support: (
    <>
      <path d="M3 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <path d="M21 14h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
      <path d="M2 14v-3a10 10 0 0 1 20 0v3" />
      <path d="M18 19a4 4 0 0 1-4 4h-1" />
    </>
  ),

  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
};

export function Icon({ name, className, ...props }: { name: keyof typeof paths | string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
