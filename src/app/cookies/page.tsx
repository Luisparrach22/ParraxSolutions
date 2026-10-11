import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies · Parrax Solutions',
  description: 'Información sobre el uso de cookies y tecnologías similares en el sitio web de Parrax Solutions.',
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <article className="min-h-screen bg-obsidian pt-[calc(var(--nav-h)+48px)] pb-24">
      <div className="container-x max-w-[800px]">
        <nav aria-label="Miga de pan" className="mb-8">
          <Link href="/" className="text-xs uppercase tracking-wider text-slate-400 hover:text-white">
            ← Volver al inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold text-white md:text-4xl">Política de Cookies</h1>
        <p className="mt-2 text-sm text-slate-400">Transparencia sobre el uso de almacenamiento local y cookies técnicas.</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
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
        </div>
      </div>
    </article>
  );
}
