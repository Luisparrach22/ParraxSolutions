// Nota arquitectónica: En entornos serverless (Vercel), este limitador opera en la
// memoria de cada instancia/worker individual y no se comparte globalmente entre instancias.
// Un límite global requiere un almacén compartido (pendiente en T-08, SEC-001).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const MAX_TRACKED_IPS = 5000;
/** Frecuencia máxima de la limpieza completa de entradas caducadas (PERF-007). */
const PRUNE_INTERVAL_MS = 60 * 1000;

// El orden de inserción del Map refleja el último acceso: la primera clave es la menos reciente.
const hits = new Map<string, number[]>();
let lastPrune = 0;

function pruneExpired(now: number): void {
  for (const [ip, timestamps] of hits) {
    const active = timestamps.filter((t) => now - t < WINDOW_MS);
    if (active.length === 0) hits.delete(ip);
    else if (active.length < timestamps.length) hits.set(ip, active);
  }
  lastPrune = now;
}

export function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (now - lastPrune >= PRUNE_INTERVAL_MS) {
    pruneExpired(now);
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.delete(ip);
  hits.set(ip, recent);

  // Tope de memoria: se descarta la IP vista hace más tiempo (coste O(1) por petición).
  while (hits.size > MAX_TRACKED_IPS) {
    const oldest = hits.keys().next().value;
    if (oldest === undefined) break;
    hits.delete(oldest);
  }

  return recent.length > MAX_HITS;
}
