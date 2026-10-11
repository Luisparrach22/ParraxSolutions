/**
 * Parrax Solutions - Suite de Pruebas de Carga 100% Nativa (Sin dependencias externas)
 * Ejecuta pruebas concurrentes con estadísticas detalladas:
 * Throughput, Latencia (p50, p90, p95, p99), Códigos de estado y Bytes leídos.
 */
const http = require('http');
const https = require('https');
const { URL } = require('url');

const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3000';
const DURATION_SEC = parseInt(process.env.DURATION || '8', 10);
const CONCURRENCY = parseInt(process.env.CONNECTIONS || '20', 10);

async function runLoadTest() {
  const parsed = new URL(TARGET_URL);
  const client = parsed.protocol === 'https:' ? https : http;

  console.log(`\n======================================================`);
  console.log(`🚀 [LOAD TEST] Ejecutando Prueba de Carga Nativa`);
  console.log(`🎯 Objetivo: ${TARGET_URL}`);
  console.log(`👥 Conexiones concurrentes: ${CONCURRENCY}`);
  console.log(`⏱️  Duración: ${DURATION_SEC} segundos`);
  console.log(`======================================================\n`);

  const latencies = [];
  const statusCounts = {};
  let bytesRead = 0;
  let errors = 0;
  let running = true;
  const startTime = Date.now();

  const paths = [
    '/',
    '/soluciones/sistemas-de-gestion',
    '/soluciones/automatizacion-de-procesos',
    '/aviso-legal',
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
            headers: { 'User-Agent': 'ParraxQA-LoadTester/1.0' },
          }, (res) => {
            let dataLen = 0;
            res.on('data', (chunk) => { dataLen += chunk.length; });
            res.on('end', () => {
              const reqLatency = Date.now() - reqStart;
              latencies.push(reqLatency);
              bytesRead += dataLen;
              statusCounts[res.statusCode] = (statusCounts[res.statusCode] || 0) + 1;
              resolve();
            });
          });
          req.on('error', (err) => {
            errors++;
            resolve();
          });
          req.setTimeout(5000, () => {
            req.destroy();
            errors++;
            resolve();
          });
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
  const p90 = latencies[Math.floor(latencies.length * 0.90)] || 0;
  const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;
  const p99 = latencies[Math.floor(latencies.length * 0.99)] || 0;
  const totalReqs = latencies.length;
  const rps = (totalReqs / totalTimeSec).toFixed(1);

  console.log(`\n📊 RESULTADOS DE LA PRUEBA:`);
  console.log(`------------------------------------------------------`);
  console.log(`Peticiones Totales:     ${totalReqs}`);
  console.log(`Throughput:             ${rps} req/seg`);
  console.log(`Datos Transferidos:     ${(bytesRead / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Errores de Conexión:    ${errors}`);
  console.log(`\nDistribución de Estados HTTP:`);
  Object.entries(statusCounts).forEach(([st, cnt]) => {
    console.log(`  HTTP ${st}: ${cnt} peticiones (${((cnt / totalReqs) * 100).toFixed(1)}%)`);
  });
  console.log(`\nPercentiles de Latencia:`);
  console.log(`  p50 (Mediana): ${p50} ms`);
  console.log(`  p90:           ${p90} ms`);
  console.log(`  p95:           ${p95} ms`);
  console.log(`  p99:           ${p99} ms`);
  console.log(`  Máxima:        ${latencies[latencies.length - 1] || 0} ms`);
  console.log(`======================================================\n`);
}

runLoadTest();
