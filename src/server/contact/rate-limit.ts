// Nota arquitectónica: En entornos serverless (Vercel), este limitador opera en la
// memoria de cada instancia/worker individual y no se comparte globalmente entre instancias.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const MAX_TRACKED_IPS = 5000;
const hits = new Map<string, number[]>();

function pruneExpired(now: number): void {
  for (const [ip, timestamps] of hits.entries()) {
    const activeTimestamps = timestamps.filter((t) => now - t < WINDOW_MS);
    if (activeTimestamps.length === 0) {
      hits.delete(ip);
    } else if (activeTimestamps.length < timestamps.length) {
      hits.set(ip, activeTimestamps);
    }
  }

  while (hits.size > MAX_TRACKED_IPS) {
    const oldestKey = hits.keys().next().value;
    if (oldestKey !== undefined) {
      hits.delete(oldestKey);
    } else {
      break;
    }
  }
}

export function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size >= MAX_TRACKED_IPS) {
    pruneExpired(now);
  }

  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}
