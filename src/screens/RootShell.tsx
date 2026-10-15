import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import {
  alternatesFor,
  getDictionary,
  htmlLang,
  localePath,
  locales,
  ogLocale,
  type Locale,
} from "@/i18n/config";
import { siteUrl } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import "@/app/globals.css";
import { jsonLd } from "@/lib/json-ld";

/**
 * Layout raíz compartido por los dos árboles de rutas (app/(es) y app/en).
 * Cada árbol tiene su propio layout raíz estático para fijar <html lang>: con un
 * segmento dinámico ([lang]) como raíz, Next 16 no aplica not-found.tsx dentro
 * del layout y muestra su 404 genérico.
 */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export function rootMetadata(lang: Locale): Metadata {
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: t.meta.titleTemplate },
    description: t.meta.description,
    applicationName: t.meta.siteName,
    alternates: alternatesFor(lang, "/"),
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: localePath(lang, "/"),
      siteName: t.meta.siteName,
      title: t.meta.title,
      description: t.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
    icons: {
      icon: [
        {
          url: "/svg/LogoSinFondo.svg",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/svg/LogoLightSinFondo.svg",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      apple: "/apple-icon.png",
    },
  };
}

export const rootViewport: Viewport = {
  themeColor: "#090D16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  const t = getDictionary(lang);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Parrax Solutions",
    url: siteUrl,
    logo: `${siteUrl}/svg/LogoLightSinFondo.svg`,
    description: t.meta.description,
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressCountry: "ES" },
    knowsLanguage: [...locales],
    // TODO: añadir email, teléfono, sameAs (LinkedIn) y dirección cuando estén confirmados
  };

  return (
    <html
      lang={htmlLang[lang]}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(organizationJsonLd),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-node focus:px-4 focus:py-2 focus:text-obsidian"
        >
          {t.a11y.skip}
        </a>
        <Navbar lang={lang} t={t.nav} a11y={t.a11y} />
        <main id="contenido">{children}</main>
        <Footer lang={lang} t={t.footer} a11y={t.a11y} />
        <MobileCtaBar lang={lang} label={t.nav.ctaShort} sub={t.nav.ctaSub} />
      </body>
    </html>
  );
}
