import type { Dictionary } from '@/i18n/config';
import { Reveal } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';

export function Problems({ t }: { t: Dictionary['problems'] }) {
  return (
    <section aria-labelledby="problems-title" className="border-y border-obsidian-line bg-obsidian">
      <div className="container-x py-14 md:py-20">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-6 bg-slate-600" />
              {t.eyebrow}
            </p>
            <h2 id="problems-title" className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
              {t.title}
            </h2>
          </div>
        </div>

        <ul className="mt-8 grid gap-px md:mt-10 overflow-hidden rounded-lg border border-obsidian-line bg-obsidian-line sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="group bg-obsidian p-5 transition-colors sm:p-6 md:p-8 hover:bg-obsidian-raised/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-obsidian-line bg-obsidian-raised text-slate-300 transition-all duration-200 group-hover:border-slate-600 group-hover:text-node group-hover:scale-105">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-white sm:mt-6">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
