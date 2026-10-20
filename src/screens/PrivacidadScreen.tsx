import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { LegalPage } from '@/components/layout/LegalPage';
import { Rich } from '@/components/ui';
import { alternatesFor, type Locale } from '@/i18n/config';

const privacyMail = (
  <a href="mailto:privacidad@parraxsolutions.com" className="text-white underline underline-offset-4">
    privacidad@parraxsolutions.com
  </a>
);

const content: Record<Locale, { title: string; description: string; subtitle: string; body: ReactNode }> = {
  es: {
    title: 'Política de Privacidad',
    description: 'Tratamiento de datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la LOPDGDD.',
    subtitle: 'De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
    body: (
      <>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">1. Responsable del tratamiento</h2>
          <ul className="list-inside list-disc space-y-1 text-slate-400">
            <li><strong>Identidad:</strong> <Rich text="[TODO_LUIS: nombre completo o razón social del titular]" /> (Parrax Solutions)</li>
            <li><strong>NIF/CIF:</strong> <Rich text="[TODO_LUIS: NIF / CIF]" /></li>
            <li><strong>Dirección:</strong> <Rich text="[TODO_LUIS: domicilio fiscal completo]" /></li>
            <li><strong>Email de contacto / DPO:</strong> {privacyMail}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">2. Finalidad del tratamiento y base jurídica</h2>
          <p>
            Tratamos los datos que nos facilitas a través del formulario de contacto o reserva de sesión con las siguientes finalidades:
          </p>
          <ul className="list-inside list-disc space-y-2 text-slate-400">
            <li>
              <strong>Gestión de consultas y solicitudes comerciales:</strong> Responder a tu solicitud de información y agendar la sesión estratégica. <em>Base legal: consentimiento del interesado (art. 6.1.a RGPD) y aplicación de medidas precontractuales (art. 6.1.b RGPD).</em>
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
            Tienes derecho a acceder, rectificar y suprimir tus datos, así como solicitar la limitación del tratamiento, oponerte al mismo o solicitar la portabilidad. Puedes ejercer tus derechos enviando un correo a {privacyMail} adjuntando copia de tu documento identificativo. Asimismo, tienes derecho a reclamar ante la Agencia Española de Protección de Datos (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white underline">www.aepd.es</a>).
          </p>
        </section>
      </>
    ),
  },
  en: {
    title: 'Privacy Policy',
    description: 'Processing of personal data in accordance with the General Data Protection Regulation (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
    subtitle: 'In accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
    body: (
      <>
        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">1. Data controller</h2>
          <ul className="list-inside list-disc space-y-1 text-slate-400">
            <li><strong>Identity:</strong> <Rich text="[TODO_LUIS: owner full name or company name]" /> (Parrax Solutions)</li>
            <li><strong>Tax ID (NIF/CIF):</strong> <Rich text="[TODO_LUIS: tax ID (NIF / CIF)]" /></li>
            <li><strong>Address:</strong> <Rich text="[TODO_LUIS: full registered address]" /></li>
            <li><strong>Contact email / DPO:</strong> {privacyMail}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">2. Purpose of processing and legal basis</h2>
          <p>
            We process the data you provide through the contact or session booking form for the following purposes:
          </p>
          <ul className="list-inside list-disc space-y-2 text-slate-400">
            <li>
              <strong>Handling inquiries and commercial requests:</strong> Responding to your request for information and scheduling the strategy session. <em>Legal basis: consent of the data subject (Art. 6.1.a GDPR) and implementation of pre-contractual measures (Art. 6.1.b GDPR).</em>
            </li>
            <li>
              <strong>Provision and formalization of services:</strong> If you hire us, managing the commercial and contractual relationship. <em>Legal basis: performance of a contract (Art. 6.1.b GDPR).</em>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">3. Data retention</h2>
          <p>
            Personal data provided in contact requests will be kept for the time strictly necessary to handle your request and, where applicable, for as long as legal obligations or responsibilities arising from the pre-contractual or contractual relationship persist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">4. Recipients and international transfers</h2>
          <p>
            Your data will not be disclosed to third parties except where expressly required by law. To provide our services we use technology providers (secure hosting, communication and email tools) located in the European Economic Area or covered by recognized adequacy frameworks (EU-US Data Privacy Framework), with signed data processing agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-white">5. User rights</h2>
          <p>
            You have the right to access, rectify and erase your data, as well as to request restriction of processing, object to it or request portability. You can exercise your rights by sending an email to {privacyMail} with a copy of your identity document. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white underline">www.aepd.es</a>).
          </p>
        </section>
      </>
    ),
  },
};

export function privacidadMetadata(lang: Locale): Metadata {
  const c = content[lang];
  return {
    title: `${c.title} · Parrax Solutions`,
    description: c.description,
    alternates: alternatesFor(lang, '/politica-de-privacidad'),
    robots: { index: false, follow: true },
  };
}

export function PrivacidadScreen({ lang }: { lang: Locale }) {
  const c = content[lang];
  return (
    <LegalPage lang={lang} title={c.title} subtitle={c.subtitle}>
      {c.body}
    </LegalPage>
  );
}
