import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { NodeDot } from './NodeDot';

type BadgeProps = {
  children: ReactNode;
  /** node = estado activo (cian) · done = completado · neutral · light = sobre Paper · placeholder */
  variant?: 'node' | 'done' | 'neutral' | 'light' | 'placeholder';
  pulse?: boolean;
  className?: string;
};

export function Badge({ children, variant = 'neutral', pulse, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em]',
        variant === 'node' && 'border-slate-700 text-white',
        variant === 'done' && 'border-slate-800 text-slate-400',
        variant === 'neutral' && 'border-slate-800 text-slate-400',
        variant === 'light' && 'border-slate-300 text-slate-700',
        variant === 'placeholder' && 'border-dashed border-slate-600 text-slate-400',
        className,
      )}
    >
      {variant === 'node' && <NodeDot size="xs" pulse={pulse} />}
      {variant === 'done' && <NodeDot size="xs" state="idle" />}
      {children}
    </span>
  );
}
