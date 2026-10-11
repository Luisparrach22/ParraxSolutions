import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import {
  defaultLocale,
  getDictionary,
  htmlLang,
  ogLocale,
  siteUrl,
} from "@/i18n/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const t = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: t.meta.title, template: t.meta.titleTemplate },
  description: t.meta.description,
  applicationName: t.meta.siteName,
  alternates: { canonical: "/", languages: { "es-ES": "/" } },
  openGraph: {
    type: "website",
    locale: ogLocale[defaultLocale],
    url: "/",
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
        url: "/assets/logo-mark.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/logo-mark-white.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#090D16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Parrax Solutions",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo-mark.svg`,
  description: t.meta.description,
  areaServed: ["ES", "VE", "Hispanoamérica"],
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  knowsLanguage: ["es"],
  // TODO: añadir email, teléfono, sameAs (LinkedIn) y dirección cuando estén confirmados
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={htmlLang[defaultLocale]}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de entrada solo si hay JS (contenido visible sin JS) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-node focus:px-4 focus:py-2 focus:text-obsidian"
        >
          {t.a11y.skip}
        </a>
        <Navbar t={t.nav} a11y={t.a11y} />
        <main id="contenido">{children}</main>
        <Footer t={t.footer} email={t.contact.email} />
        <MobileCtaBar
          label={t.nav.ctaShort}
          sub="Sesión de 20 min, sin coste"
        />
      </body>
    </html>
  );
}
