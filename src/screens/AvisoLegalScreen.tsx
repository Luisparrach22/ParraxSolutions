import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { LegalPage } from '@/components/layout/LegalPage';
import { Rich } from '@/components/ui';
import { contactEmail } from '@/config/site';
import { alternatesFor, type Locale } from '@/i18n/config';

const mail = (
  <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4">
    {contactEmail}
  </a>
);

const content: Record<Locale, { title: string; description: string; subtitle: string; body: ReactNode }> = {
  es: {
    title: 'Aviso Legal',
    description: 'Información legal y datos identificativos de Parrax Solutions de conformidad con la Ley 34/2002 (LSSI-CE).',
    subtitle: 'Cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE).',
    body: (
      <>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">1. Datos identificativos</h2>
          <p>
            En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-400">
            <li><strong>Denominación social / Titular:</strong> <Rich text="[Nombre / Razón Social del Titular]" /></li>
            <li><strong>NIF / CIF:</strong> <Rich text="[NIF / CIF]" /></li>
            <li><strong>Domicilio social / Cobertura:</strong> España · Venezuela</li>
            <li><strong>Correo electrónico de contacto:</strong> {mail}</li>
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
      </>
    ),
  },
  en: {
    title: 'Legal Notice',
    description: 'Legal information and identifying details of Parrax Solutions in accordance with Spanish Law 34/2002 (LSSI-CE).',
    subtitle: 'Compliance with Article 10 of Spanish Law 34/2002 (LSSI-CE).',
    body: (
      <>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">1. Identifying details</h2>
          <p>
            In compliance with the duty of information set out in Article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), the following details are provided:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-400">
            <li><strong>Company name / Owner:</strong> <Rich text="[Owner name / Company name]" /></li>
            <li><strong>Tax ID (NIF / CIF):</strong> <Rich text="[Tax ID (NIF / CIF)]" /></li>
            <li><strong>Registered address / Coverage:</strong> Spain · Venezuela</li>
            <li><strong>Contact email:</strong> {mail}</li>
            <li><strong>Commercial registry entry:</strong> <Rich text="[Commercial Registry details, if applicable]" /></li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">2. Purpose and scope</h2>
          <p>
            The purpose of this website is to present the professional services of design, custom software development, automation, integrations and technology consulting that Parrax Solutions provides to businesses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">3. Intellectual and industrial property</h2>
          <p>
            All content on the website, including but not limited to texts, photographs, graphics, images, icons, technology, software, graphic design and source code, is a work owned by Parrax Solutions or its legitimate licensors. None of the exploitation rights over it are to be understood as transferred to the user.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">4. Disclaimer of warranties and liability</h2>
          <p>
            Parrax Solutions is not liable under any circumstances for damages of any kind that may arise, including but not limited to: errors or omissions in the content, unavailability of the portal, or the transmission of viruses or malicious or harmful programs in the content, despite having adopted all the technological measures necessary to prevent it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">5. Applicable law and jurisdiction</h2>
          <p>
            Spanish law applies to the resolution of any dispute or issue related to this website or the activities carried out on it, and the parties expressly submit to it. The courts of the owner&apos;s domicile, or those with jurisdiction by law, are competent to resolve any conflict arising from or related to its use.
          </p>
        </section>
      </>
    ),
  },
};

export function avisoLegalMetadata(lang: Locale): Metadata {
  const c = content[lang];
  return {
    title: `${c.title} · Parrax Solutions`,
    description: c.description,
    alternates: alternatesFor(lang, '/aviso-legal'),
    robots: { index: false, follow: true },
  };
}

export function AvisoLegalScreen({ lang }: { lang: Locale }) {
  const c = content[lang];
  return (
    <LegalPage lang={lang} title={c.title} subtitle={c.subtitle}>
      {c.body}
    </LegalPage>
  );
}
