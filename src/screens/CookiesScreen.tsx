import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { LegalPage } from '@/components/layout/LegalPage';
import type { Locale } from '@/i18n/config';
import { pageMetadata } from '@/lib/metadata';

const content: Record<Locale, { title: string; description: string; subtitle: string; body: ReactNode }> = {
  es: {
    title: 'Política de Cookies',
    description: 'Información sobre el uso de cookies y tecnologías similares en el sitio web de Parrax Solutions.',
    subtitle: 'Transparencia sobre el uso de almacenamiento local y cookies técnicas.',
    body: (
      <>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">1. ¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño archivo que se almacena en el navegador del usuario al acceder a determinadas páginas web. Permite recordar acciones y preferencias técnicas para garantizar el funcionamiento del sitio.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">2. Cookies utilizadas en este sitio</h2>
          <p>
            Actualmente, el sitio web de Parrax Solutions utiliza <strong>únicamente cookies y almacenamiento técnico estrictamente necesario</strong> para el funcionamiento básico del portal (gestión de sesiones técnicas, seguridad y prevención de abusos en formularios).
          </p>
          <p className="rounded-lg border border-obsidian-line bg-obsidian-raised p-4 text-xs text-slate-400">
            No utilizamos cookies publicitarias, perfiles de seguimiento ni cookies de terceros de rastreo invasivo sin consentimiento explícito previo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">3. Gestión y desactivación de cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu dispositivo (Chrome, Firefox, Safari, Edge). La desactivación de cookies técnicas esenciales puede limitar ciertas funcionalidades operativas de la navegación.
          </p>
        </section>
      </>
    ),
  },
  en: {
    title: 'Cookie Policy',
    description: 'Information about the use of cookies and similar technologies on the Parrax Solutions website.',
    subtitle: 'Transparency about the use of local storage and technical cookies.',
    body: (
      <>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">1. What are cookies?</h2>
          <p>
            A cookie is a small file stored in the user&apos;s browser when accessing certain web pages. It makes it possible to remember technical actions and preferences to ensure the site works properly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">2. Cookies used on this site</h2>
          <p>
            Currently, the Parrax Solutions website uses <strong>only strictly necessary cookies and technical storage</strong> for the basic operation of the portal (technical session management, security and prevention of form abuse).
          </p>
          <p className="rounded-lg border border-obsidian-line bg-obsidian-raised p-4 text-xs text-slate-400">
            We do not use advertising cookies, tracking profiles or invasive third-party tracking cookies without prior explicit consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">3. Managing and disabling cookies</h2>
          <p>
            You can allow, block or delete the cookies installed on your device through the settings of the browser you use (Chrome, Firefox, Safari, Edge). Disabling essential technical cookies may limit certain operational features of the site.
          </p>
        </section>
      </>
    ),
  },
};

export function cookiesMetadata(lang: Locale): Metadata {
  const c = content[lang];
  return pageMetadata({ lang, path: '/cookies', title: c.title, description: c.description, noindex: true });
}

export function CookiesScreen({ lang }: { lang: Locale }) {
  const c = content[lang];
  return (
    <LegalPage lang={lang} title={c.title} subtitle={c.subtitle}>
      {c.body}
    </LegalPage>
  );
}
