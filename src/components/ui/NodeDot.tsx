import { cn } from '@/lib/cn';

type NodeDotProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** active = cian (nodo de marca) · idle = gris neutro */
  state?: 'active' | 'idle';
  pulse?: boolean;
  /** Halo fino alrededor del nodo (para la línea de tiempo) */
  ring?: boolean;
  className?: string;
};

const sizes = { xs: 'h-1.5 w-1.5', sm: 'h-2 w-2', md: 'h-2.5 w-2.5', lg: 'h-3 w-3' } as const;

/**
 * El "nodo": el punto cian del logotipo. Único acento de color de la marca.
 * Úsalo solo para estados, elementos activos, marcadores y extremos de conexión.
 */
export function NodeDot({ size = 'sm', state = 'active', pulse = false, ring = false, className }: NodeDotProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block shrink-0 rounded-full',
        sizes[size],
        state === 'active' ? 'bg-node' : 'bg-slate-600',
        pulse && state === 'active' && 'animate-pulse-node',
        ring && 'ring-4 ring-obsidian outline outline-1 outline-offset-[3px] outline-slate-800',
        className,
      )}
    />
  );
}
