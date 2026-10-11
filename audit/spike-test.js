/**
 * Parrax Solutions - Prueba Nativa de Picos en /api/contact (Sin dependencias externas)
 * Evalúa el comportamiento frente a ráfagas y verifica el rate-limiting (HTTP 429).
 */
const http = require('http');
const https = require('https');
const { URL } = require('url');

const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3000';
const TOTAL_REQUESTS = parseInt(process.env.REQUESTS || '60', 10);
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '15', 10);

async function runSpikeTest() {
  const parsed = new URL(`${TARGET_URL}/api/contact`);
  const client = parsed.protocol === 'https:' ? https : http;

  console.log(`\n======================================================`);
  console.log(`💥 [SPIKE TEST] Ráfaga contra Endpoint /api/contact`);
  console.log(`🎯 Objetivo: ${parsed.href}`);
  console.log(`📦 Peticiones: ${TOTAL_REQUESTS} (Concurrencia: ${CONCURRENCY})`);
  console.log(`======================================================\n`);

  const payload = JSON.stringify({
    type: 'sesion',
    name: 'QA Audit Bot',
    company: 'Auditoría S.L.',
    email: 'qa@audit.test',
    message: 'Prueba de carga automatizada para validación de latencia y rate limit.',
    urgency: 'urgente',
    privacy: true,
  });

  const latencies = [];
  const statusCounts = {};
  let errors = 0;
  let active = 0;
  let completed = 0;

  await new Promise((resolve) => {
    let sent = 0;

    function next() {
      if (completed >= TOTAL_REQUESTS) {
        resolve();
        return;
      }

      while (active < CONCURRENCY && sent < TOTAL_REQUESTS) {
        sent++;
        active++;
        const reqStart = Date.now();

        const req = client.request(parsed, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload),
            'X-Forwarded-For': '198.51.100.42', // IP fija para validar rate-limit de 5 hits
          },
        }, (res) => {
          res.on('data', () => {});
          res.on('end', () => {
            latencies.push(Date.now() - reqStart);
            statusCounts[res.statusCode] = (statusCounts[res.statusCode] || 0) + 1;
            active--;
            completed++;
            next();
          });
        });

        req.on('error', () => {
          errors++;
          active--;
          completed++;
          next();
        });

        req.write(payload);
        req.end();
      }
    }

    next();
  });

  latencies.sort((a, b) => a - b);
  const p50 = latencies[Math.floor(latencies.length * 0.50)] || 0;
  const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;

  console.log(`\n📊 RESULTADOS DE LA RÁFAGA:`);
  console.log(`------------------------------------------------------`);
  console.log(`Total enviadas:      ${completed}`);
  console.log(`Errores de socket:   ${errors}`);
  console.log(`\nDistribución de Estados:`);
  Object.entries(statusCounts).forEach(([st, cnt]) => {
    const desc = st === '200' ? 'OK (procesada)' : st === '429' ? 'Rate Limited (bloqueada correctamente)' : 'Otro';
    console.log(`  HTTP ${st} [${desc}]: ${cnt} peticiones (${((cnt / completed) * 100).toFixed(1)}%)`);
  });
  console.log(`\nLatencia:`);
  console.log(`  p50: ${p50} ms | p95: ${p95} ms | Máx: ${latencies[latencies.length - 1] || 0} ms`);
  console.log(`======================================================\n`);
}

runSpikeTest();
