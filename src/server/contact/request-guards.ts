import { siteUrl } from '@/config/site';

/**
 * Tamaño máximo del cuerpo. Un mensaje legítimo de 4000 caracteres puede ocupar
 * hasta ~16 KB en UTF-8 y más al escaparse en JSON; 64 KB deja margen (SEC-009).
 */
export const MAX_BODY_BYTES = 64 * 1024;

/** Dominios desde los que se acepta el envío: el de la propia petición y el canónico. */
function allowedHosts(request: Request): Set<string> {
  const hosts = [
    new URL(request.url).host,
    request.headers.get('x-forwarded-host'),
    request.headers.get('host'),
    new URL(siteUrl).host,
  ];
  return new Set(hosts.filter((h): h is string => Boolean(h)));
}

/**
 * Rechaza envíos iniciados desde otros sitios (SEC-005). Los navegadores siempre
 * envían Origin en un POST con fetch; los clientes sin Origin no son navegadores
 * y no sirven para distribuir envíos entre visitantes de terceros.
 */
export function isCrossSiteRequest(request: Request): boolean {
  if (request.headers.get('sec-fetch-site') === 'cross-site') return true;
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return !allowedHosts(request).has(new URL(origin).host);
  } catch {
    return true;
  }
}

export function isJsonRequest(request: Request): boolean {
  const type = request.headers.get('content-type') ?? '';
  return type.split(';')[0].trim().toLowerCase() === 'application/json';
}

/**
 * Lee el cuerpo como texto sin superar `limit` bytes. Devuelve null si lo supera,
 * tanto si lo declara Content-Length como si llega en streaming sin declararlo.
 */
export async function readBodyWithLimit(request: Request, limit = MAX_BODY_BYTES): Promise<string | null> {
  if (Number(request.headers.get('content-length')) > limit) return null;
  if (!request.body) return '';

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(chunks));
}
