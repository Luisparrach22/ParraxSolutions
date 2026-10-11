import Image from 'next/image';
import { cn } from '@/lib/cn';

type LogoProps = {
  variant: 'lockup' | 'mark' | 'wordmark';
  /** on-dark usa la versión blanca; on-light la versión a color */
  surface?: 'dark' | 'light';
  height: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

// Proporciones de los SVG recortados en /public/assets (ancho / alto)
const ratios = { lockup: 2228 / 584, mark: 928 / 584, wordmark: 1104 / 390 } as const;

/**
 * Logotipos oficiales. Nunca se recolorean, estiran ni se les añaden efectos:
 * solo se escala proporcionalmente a partir de la altura.
 */
export function Logo({ variant, surface = 'dark', height, className, priority, alt = 'Parrax Solutions' }: LogoProps) {
  const src = `/assets/logo-${variant}${surface === 'dark' ? '-white' : ''}.svg`;
  const width = Math.round(height * ratios[variant]);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={cn('block select-none', className)}
      style={{ width, height }}
      draggable={false}
    />
  );
}
