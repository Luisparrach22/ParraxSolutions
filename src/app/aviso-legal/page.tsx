import type { Metadata } from 'next';
import Link from 'next/link';
import { Rich } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Aviso Legal · Parrax Solutions',
  description: 'Información legal y datos identificativos de Parrax Solutions de conformidad con la Ley 34/2002 (LSSI-CE).',
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <article className="min-h-screen bg-obsidian pt-[calc(var(--nav-h)+48px)] pb-24">
      <div className="container-x max-w-[800px]">
        <nav aria-label="Miga de pan" className="mb-8">
          <Link href="/" className="text-xs uppercase tracking-wider text-slate-400 hover:text-white">
            ← Volver al inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold text-white md:text-4xl">Aviso Legal</h1>
        <p className="mt-2 text-sm text-slate-400">Cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE).</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">1. Datos identificativos</h2>
            <p>
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
            </p>
            <ul className="list-inside list-disc space-y-1 text-slate-400">
              <li><strong>Denominación social / Titular:</strong> <Rich text="[Nombre / Razón Social del Titular]" /></li>
              <li><strong>NIF / CIF:</strong> <Rich text="[NIF / CIF]" /></li>
              <li><strong>Domicilio social:</strong> <Rich text="[Domicilio social completo en España]" /></li>
              <li><strong>Correo electrónico de contacto:</strong> <Rich text="[hola@parraxsolutions.com]" /></li>
              <li><strong>Inscripción registral:</strong> <Rich text="[Datos de inscripción en el Registro Mercantil si aplica]" /></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente sitio web tiene por objeto dar a conocer los servicios profesionales de diseño, desarrollo de software a medida, automatizaciones, integraciones y consultoría tecnológica prestados por Parrax Solutions a empresas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, entendiendo por estos a título meramente enunciativo los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Parrax Solutions o a legítimos cesionarios, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">4. Exclusión de garantías y responsabilidad</h2>
            <p>
              Parrax Solutions no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">5. Legislación aplicable y jurisdicción</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del titular o los correspondientes por fuero legal.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
