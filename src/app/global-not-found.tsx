import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { RootShell, rootMetadata } from '@/screens/RootShell';
import { NotFoundScreen, notFoundMetadata } from '@/screens/NotFoundScreen';
import { LOCALE_HEADER, defaultLocale, hasLocale } from '@/i18n/config';

/**
 * 404 de todo el sitio (rutas inexistentes y notFound()). Next lo sirve sin
 * pasar por el layout de cada idioma, así que monta su propia carcasa. El
 * idioma lo fija src/proxy.ts en una cabecera de la petición.
 */
async function currentLocale() {
  const value = (await headers()).get(LOCALE_HEADER) ?? '';
  return hasLocale(value) ? value : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLocale();
  // Sin canónica, hreflang ni OG de la home: esta página no es una URL real.
  const { alternates, openGraph, twitter, ...base } = rootMetadata(lang);
  return { ...base, ...notFoundMetadata(lang) };
}

export default async function GlobalNotFound() {
  const lang = await currentLocale();
  return (
    <RootShell lang={lang}>
      <NotFoundScreen lang={lang} />
    </RootShell>
  );
}
