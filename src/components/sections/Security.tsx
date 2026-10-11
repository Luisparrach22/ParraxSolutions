import type { Dictionary } from '@/i18n/config';
import { Reveal, Rich } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';

export function Security({ t }: { t: Dictionary['security'] }) {
  return (
    <section id="seguridad" aria-labelledby="security-title" className="border-y border-obsidian-line bg-obsidian-raised">
      <div className="container-x grid gap-8 py-14 md:gap-10 md:py-20 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-slate-600" />
            {t.eyebrow}
          </p>
          <h2 id="security-title" className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-tight text-white md:text-[1.75rem]">
            {t.title}
          </h2>
        </Reveal>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-obsidian-line bg-obsidian-line sm:grid-cols-2 lg:col-span-8">
          {t.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="group bg-obsidian-raised p-5 transition-colors sm:p-6 hover:bg-obsidian">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-obsidian-line bg-obsidian text-slate-300 transition-all duration-200 group-hover:border-slate-600 group-hover:text-node group-hover:scale-105">
                  <Icon name={item.icon} className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base font-semibold tracking-tight text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                <Rich text={item.text} />
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
