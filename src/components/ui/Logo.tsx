import { cn } from '@/lib/cn';

type LogoProps = {
  variant: 'lockup' | 'mark' | 'wordmark';
  /** on-dark usa la versión blanca/luminosa; on-light la versión a color/oscura */
  surface?: 'dark' | 'light';
  /** si es true, usa las variantes con fondo sólido en lugar de transparentes */
  withBackground?: boolean;
  height: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

// Proporciones oficiales de los nuevos archivos SVG ajustados a su contenido real (ancho / alto)
// lockup (Parrax...): 2260 / 590 = ~3.83
// mark (Logo...): 750 / 500 = 1.50
// wordmark (Wordmark...Sinfondo, recortado al contenido): 1082 / 370 = ~2.92
const ratios = {
  lockup: 2260 / 590,
  mark: 750 / 500,
  wordmark: 1082 / 370,
} as const;

/**
 * Mapeo a las nuevas rutas oficiales de SVG:
 * - lockup: ParraxLightSinfondo.svg / ParraxDarkSinFondo.svg (sólidos: ParraxDark.svg / ParraxLight.svg)
 * - mark: LogoLightSinFondo.svg / LogoSinFondo.svg (sólidos: Logo.svg / LogoLight.svg)
 * - wordmark: Wordmark_claro_sinfondo.svg / WordmarkSinfondo.svg (sólidos: Wordmark_claro.svg / Wordmark.svg)
 */
const logoFiles = {
  lockup: {
    transparent: {
      dark: '/svg/ParraxLightSinfondo.svg',
      light: '/svg/ParraxDarkSinFondo.svg',
    },
    solid: {
      dark: '/svg/ParraxDark.svg',
      light: '/svg/ParraxLight.svg',
    },
  },
  mark: {
    transparent: {
      dark: '/svg/LogoLightSinFondo.svg',
      light: '/svg/LogoSinFondo.svg',
    },
    solid: {
      dark: '/svg/Logo.svg',
      light: '/svg/LogoLight.svg',
    },
  },
  wordmark: {
    transparent: {
      dark: '/svg/Wordmark_claro_sinfondo.svg',
      light: '/svg/WordmarkSinfondo.svg',
    },
    solid: {
      dark: '/svg/Wordmark_claro.svg',
      light: '/svg/Wordmark.svg',
    },
  },
} as const;

/**
 * Logotipos oficiales. Nunca se recolorean, estiran ni se les añaden efectos:
 * solo se escala proporcionalmente a partir de la altura.
 * Son SVG estáticos sin optimizar, así que basta un <img>: next/image solo añadiría
 * su código de cliente al bundle (PERF-003).
 */
export function Logo({
  variant,
  surface = 'dark',
  withBackground = false,
  height,
  className,
  priority,
  alt = 'Parrax Solutions',
}: LogoProps) {
  const bgMode = withBackground ? 'solid' : 'transparent';
  const src = logoFiles[variant][bgMode][surface];
  const width = Math.round(height * ratios[variant]);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={cn('block select-none', className)}
      style={{ width, height }}
      draggable={false}
    />
  );
}
