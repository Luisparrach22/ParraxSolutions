import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_HEADER, defaultLocale, localeFromPath } from '@/i18n/config';

/**
 * El idioma por defecto (es) vive en la raíz y el resto bajo su prefijo (/en).
 * - "/es/…" redirige a "/…" para tener una sola URL por contenido.
 * - En el resto de peticiones se anota el idioma en una cabecera: global-not-found
 *   (la página 404) no recibe parámetros de ruta y la necesita.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/';
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, localeFromPath(pathname));
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Excluye la API, los internos de Next y cualquier archivo con extensión (robots.txt, svg, png…).
  matcher: ['/((?!api/|_next/|.*\\..*).*)'],
};
