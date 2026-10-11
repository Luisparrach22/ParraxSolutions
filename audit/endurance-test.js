/**
 * Parrax Solutions - Suite Nativa de Resistencia (Endurance / Soak Test)
 * Carga continua durante 20-30 segundos para evaluar estabilidad de memoria.
 */
const http = require('http');
const https = require('https');
const { URL } = require('url');

const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3000';
const DURATION_SEC = parseInt(process.env.DURATION || '20', 10);
const CONCURRENCY = parseInt(process.env.CONNECTIONS || '15', 10);

async function runEnduranceTest() {
  const parsed = new URL(TARGET_URL);
  const client = parsed.protocol === 'https:' ? https : http;

  console.log(`\n======================================================`);
  console.log(`⏳ [ENDURANCE TEST] Prueba Nativa de Resistencia`);
  console.log(`🎯 Objetivo: ${TARGET_URL}`);
  console.log(`👥 Conexiones concurrentes: ${CONCURRENCY}`);
  console.log(`⏱️  Duración: ${DURATION_SEC} segundos sostenidos`);
  console.log(`======================================================\n`);

  const memStart = process.memoryUsage();
  const latencies = [];
  const statusCounts = {};
  let errors = 0;
  let running = true;
  const startTime = Date.now();

  const paths = [
    '/',
    '/soluciones/modernizacion-de-procesos',
    '/soluciones/aplicaciones-web-y-moviles',
    '/cookies',
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
          req.setTimeout(5000, () => { req.destroy(); errors++; resolve(); });
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
  const memEnd = process.memoryUsage();

  const p50 = latencies[Math.floor(latencies.length * 0.50)] || 0;
  const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;
  const totalReqs = latencies.length;

  console.log(`\n📊 RESULTADOS DE RESISTENCIA:`);
  console.log(`------------------------------------------------------`);
  console.log(`Peticiones Totales:     ${totalReqs}`);
  console.log(`Throughput:             ${(totalReqs / totalTimeSec).toFixed(1)} req/seg`);
  console.log(`Errores de Socket:      ${errors}`);
  console.log(`\nDistribución de Códigos HTTP:`);
  Object.entries(statusCounts).forEach(([st, cnt]) => {
    console.log(`  HTTP ${st}: ${cnt}`);
  });
  console.log(`\nLatencias:`);
  console.log(`  p50: ${p50} ms | p95: ${p95} ms | Máx: ${latencies[latencies.length - 1] || 0} ms`);
  console.log(`\nConsumo de Memoria del Proceso Auditor:`);
  console.log(`  RSS Inicial: ${(memStart.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  RSS Final:   ${(memEnd.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Variación:   ${((memEnd.rss - memStart.rss) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`======================================================\n`);
}

runEnduranceTest();
