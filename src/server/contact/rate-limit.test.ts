import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type RateLimitModule = typeof import('./rate-limit');
let rateLimited: RateLimitModule['rateLimited'];

beforeEach(async () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-10-12T10:00:00Z'));
  vi.resetModules();
  ({ rateLimited } = await import('./rate-limit'));
});

afterEach(() => {
  vi.useRealTimers();
});

const hitTimes = (ip: string, n: number) => Array.from({ length: n }, () => rateLimited(ip));

describe('rateLimited', () => {
  it('permite 5 peticiones por IP en la ventana y limita a partir de la sexta', () => {
    expect(hitTimes('a', 6)).toEqual([false, false, false, false, false, true]);
  });

  it('vuelve a permitir peticiones cuando pasan 10 minutos', () => {
    hitTimes('a', 6);
    vi.advanceTimersByTime(10 * 60 * 1000);
    expect(rateLimited('a')).toBe(false);
  });

  it('la ventana es deslizante: solo cuentan las peticiones de los últimos 10 minutos', () => {
    hitTimes('a', 3);
    vi.advanceTimersByTime(6 * 60 * 1000);
    hitTimes('a', 2);
    vi.advanceTimersByTime(5 * 60 * 1000); // las 3 primeras ya han caducado
    expect(hitTimes('a', 3)).toEqual([false, false, false]);
    expect(rateLimited('a')).toBe(true);
  });

  it('al superar 5000 IPs descarta la menos reciente, no la que acaba de volver', () => {
    hitTimes('primera', 5);
    hitTimes('segunda', 5);
    rateLimited('primera'); // «primera» pasa a ser la más reciente (y queda limitada)
    for (let i = 0; i < 4999; i++) rateLimited(`ip-${i}`);
    // «primera» se conservó y sigue limitada
    expect(rateLimited('primera')).toBe(true);
    // «segunda» fue expulsada: su contador empieza de cero
    expect(rateLimited('segunda')).toBe(false);
  });

  it('no recorre todas las IPs en cada petición cuando el mapa está lleno (PERF-007)', () => {
    for (let i = 0; i < 5000; i++) rateLimited(`ip-${i}`);
    const filterSpy = vi.spyOn(Array.prototype, 'filter');
    for (let i = 0; i < 100; i++) rateLimited(`nueva-${i}`);
    // una llamada a filter por petición (la de la propia IP), sin barridos completos
    expect(filterSpy.mock.calls.length).toBe(100);
  });
});
