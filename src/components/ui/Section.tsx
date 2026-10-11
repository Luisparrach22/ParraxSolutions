import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

type SectionProps = {
  id?: string;
  tone?: 'dark' | 'light';
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  children: ReactNode;
};

/** Landmark semántico con ritmo vertical y tono de superficie. */
export function Section({ id, tone = 'dark', className, containerClassName, labelledBy, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative py-section-sm md:py-section',
        tone === 'light' ? 'surface-light bg-paper text-slate-600 [color-scheme:light]' : 'bg-obsidian',
        className,
      )}
    >
      <div className={cn('container-x', containerClassName)}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({ id, eyebrow, title, intro, tone = 'dark', align = 'left', className, children }: SectionHeaderProps) {
  return (
    <Reveal className={cn('max-w-[720px]', align === 'center' && 'mx-auto text-center', className)}>
      <p className={cn('eyebrow', align === 'center' && 'justify-center')}>
        <span aria-hidden="true" className={cn('h-px w-6', tone === 'light' ? 'bg-slate-400' : 'bg-slate-600')} />
        {eyebrow}
      </p>
      <h2 id={id} className={cn('mt-4 text-h2', tone === 'light' ? '!text-ink' : 'text-white')}>
        {title}
      </h2>
      {intro && (
        <p className={cn('mt-5 max-w-prose text-lead', tone === 'light' ? 'text-slate-600' : 'text-slate-400', align === 'center' && 'mx-auto')}>
          {intro}
        </p>
      )}
      {children}
    </Reveal>
  );
}
