import type { Dictionary } from '@/i18n/config';
import { Badge, Button, NodeDot, Reveal } from '@/components/ui';

export function Audit({ t }: { t: Dictionary['audit'] }) {
  return (
    <section id="auditoria" aria-labelledby="audit-title" className="scroll-mt-[calc(var(--nav-h)+24px)] border-y border-obsidian-line bg-obsidian-raised">
      <Reveal className="container-x grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Badge variant="node">{t.badge}</Badge>
          <h2 id="audit-title" className="mt-5 text-h2 text-white">
            {t.title}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-7 text-slate-400">{t.text}</p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <ul className="space-y-3">
            {t.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[0.9375rem] text-slate-300">
                <NodeDot size="xs" className="mt-[8px]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Button href="#solicitar-auditoria" size="lg" arrow className="mt-8 w-full sm:w-auto">
            {t.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
