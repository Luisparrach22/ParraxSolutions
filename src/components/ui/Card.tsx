import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardProps = {
  as?: ElementType;
  tone?: 'dark' | 'light';
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

/** Superficie con borde de 1px (sin sombras), radio 10px. */
export function Card({ as: Tag = 'div', tone = 'dark', interactive = false, className, children }: CardProps) {
  return (
    <Tag
      className={cn(
        'relative rounded-lg border',
        tone === 'dark' ? 'border-obsidian-line bg-obsidian-raised' : 'border-slate-200 bg-white',
        interactive &&
          (tone === 'dark'
            ? 'transition-colors duration-200 hover:border-slate-600'
            : 'transition-colors duration-200 hover:border-slate-400'),
        className,
      )}
    >
      {children}
    </Tag>
  );
}
