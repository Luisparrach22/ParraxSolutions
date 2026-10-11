import type { Metadata } from 'next';
import Link from 'next/link';
import { Rich } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Política de Privacidad · Parrax Solutions',
  description: 'Tratamiento de datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la LOPDGDD.',
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <article className="min-h-screen bg-obsidian pt-[calc(var(--nav-h)+48px)] pb-24">
      <div className="container-x max-w-[800px]">
        <nav aria-label="Miga de pan" className="mb-8">
          <Link href="/" className="text-xs uppercase tracking-wider text-slate-400 hover:text-white">
            ← Volver al inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold text-white md:text-4xl">Política de Privacidad</h1>
        <p className="mt-2 text-sm text-slate-400">
          De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">1. Responsable del tratamiento</h2>
            <ul className="list-inside list-disc space-y-1 text-slate-400">
              <li><strong>Identidad:</strong> <Rich text="[Nombre / Razón Social del Titular]" /> (Parrax Solutions)</li>
              <li><strong>NIF/CIF:</strong> <Rich text="[NIF / CIF]" /></li>
              <li><strong>Dirección:</strong> <Rich text="[Domicilio social completo]" /></li>
              <li><strong>Email de contacto / DPO:</strong> <a href="mailto:privacidad@parraxsolutions.com" className="text-white underline underline-offset-4">privacidad@parraxsolutions.com</a></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">2. Finalidad del tratamiento y base jurídica</h2>
            <p>
              Tratamos los datos que nos facilitas a través del formulario de contacto o reserva de sesión con las siguientes finalidades:
            </p>
            <ul className="list-inside list-disc space-y-2 text-slate-400">
              <li>
                <strong>Gestión de consultas y solicitudes comerciales:</strong> Responder a tu solicitud de información, agendar la sesión estratégica o preparar la auditoría digital solicitada. <em>Base legal: consentimiento del interesado (art. 6.1.a RGPD) y aplicación de medidas precontractuales (art. 6.1.b RGPD).</em>
              </li>
              <li>
                <strong>Prestación y formalización de servicios:</strong> En caso de contratación, gestionar la relación comercial y contractual. <em>Base legal: ejecución del contrato (art. 6.1.b RGPD).</em>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">3. Conservación de los datos</h2>
            <p>
              Los datos personales facilitados para solicitudes de contacto se conservarán durante el tiempo estrictamente necesario para atender tu petición y, en su caso, mientras persistan obligaciones legales o responsabilidades derivadas de la relación precontractual o contractual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">4. Destinatarios y transferencias internacionales</h2>
            <p>
              Tus datos no serán cedidos a terceros salvo obligación legal expresa. En la prestación técnica de servicios utilizamos proveedores tecnológicos (alojamiento seguro, herramientas de comunicación y correo) ubicados en el Espacio Económico Europeo o amparados por marcos de adecuación reconocidos (Data Privacy Framework EU-US) con contratos de encargo de tratamiento firmados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">5. Derechos del usuario</h2>
            <p>
              Tienes derecho a acceder, rectificar y suprimir tus datos, así como solicitar la limitación del tratamiento, oponerte al mismo o solicitar la portabilidad. Puedes ejercer tus derechos enviando un correo a <a href="mailto:privacidad@parraxsolutions.com" className="text-white underline underline-offset-4">privacidad@parraxsolutions.com</a> adjuntando copia de tu documento identificativo. Asimismo, tienes derecho a reclamar ante la Agencia Española de Protección de Datos (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white underline">www.aepd.es</a>).
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
