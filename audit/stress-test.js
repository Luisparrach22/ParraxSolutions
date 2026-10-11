/**
 * Parrax Solutions - Suite Nativa de Pruebas de Estrés (Stress Test)
 * Concurrencia elevada para verificar estabilidad bajo alta demanda simultánea.
 */
const http = require('http');
const https = require('https');
const { URL } = require('url');

const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3000';
const DURATION_SEC = parseInt(process.env.DURATION || '10', 10);
const CONCURRENCY = parseInt(process.env.CONNECTIONS || '80', 10);

async function runStressTest() {
  const parsed = new URL(TARGET_URL);
  const client = parsed.protocol === 'https:' ? https : http;

  console.log(`\n======================================================`);
  console.log(`⚡ [STRESS TEST] Prueba Nativa de Estrés y Saturación`);
  console.log(`🎯 Objetivo: ${TARGET_URL}`);
  console.log(`👥 Conexiones concurrentes: ${CONCURRENCY}`);
  console.log(`⏱️  Duración: ${DURATION_SEC} segundos`);
  console.log(`======================================================\n`);

  const latencies = [];
  const statusCounts = {};
  let errors = 0;
  let running = true;
  const startTime = Date.now();

  const paths = [
    '/',
    '/soluciones/integraciones-y-apis',
    '/soluciones/sistemas-de-gestion',
    '/robots.txt',
  ];

  async function worker() {
    let i = 0;
    while (running) {
      const path = paths[i % paths.length];
      i++;
      const reqStart = Date.now();
      try {
        await new Promise((resolve) => {
          const req = client.get(`${TARGET_URL}${path}`, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
          }, (res) => {
            res.on('data', () => {});
            res.on('end', () => {
              latencies.push(Date.now() - reqStart);
              statusCounts[res.statusCode] = (statusCounts[res.statusCode] || 0) + 1;
              resolve();
            });
          });
          req.on('error', () => { errors++; resolve(); });
          req.setTimeout(6000, () => { req.destroy(); errors++; resolve(); });
        });
      } catch {
        errors++;
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await new Promise((r) => setTimeout(r, DURATION_SEC * 1000));
  running = false;
  await Promise.all(workers);

  const totalTimeSec = (Date.now() - startTime) / 1000;
  latencies.sort((a, b) => a - b);

  const p50 = latencies[Math.floor(latencies.length * 0.50)] || 0;
  const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;
  const p99 = latencies[Math.floor(latencies.length * 0.99)] || 0;
  const totalReqs = latencies.length;

  console.log(`\n📊 RESULTADOS DE ESTRÉS:`);
  console.log(`------------------------------------------------------`);
  console.log(`Peticiones Totales:     ${totalReqs}`);
  console.log(`Throughput:             ${(totalReqs / totalTimeSec).toFixed(1)} req/seg`);
  console.log(`Errores de Socket:      ${errors}`);
  console.log(`\nDistribución de Códigos HTTP:`);
  Object.entries(statusCounts).forEach(([st, cnt]) => {
    console.log(`  HTTP ${st}: ${cnt} (${((cnt / totalReqs) * 100).toFixed(1)}%)`);
  });
  console.log(`\nLatencias bajo Estrés:`);
  console.log(`  p50: ${p50} ms | p95: ${p95} ms | p99: ${p99} ms | Máx: ${latencies[latencies.length - 1] || 0} ms`);
  console.log(`======================================================\n`);
}

runStressTest();
