# Suite de Pruebas de Rendimiento y Carga - Parrax Solutions

Esta carpeta contiene scripts aislados y reproducibles para ejecutar auditorías de carga, estrés, picos y resistencia contra la aplicación.

## Requisitos Previos

- Node.js >= 18
- El servidor objetivo debe estar corriendo (localmente en `http://localhost:3000` o en producción).
- Para ejecutar las pruebas se utiliza `autocannon` vía `npx` (sin contaminar `node_modules` del proyecto):

```bash
npm install -g autocannon # Opcional, o se ejecuta con npx
```

---

## 1. Prueba de Carga Normal (Baseline Load Test)

Simula 20 usuarios simultáneos navegando por la home y rutas dinámicas de soluciones.

```bash
npx autocannon -c 20 -d 10 http://localhost:3000/
# O usando el script con rutas rotativas:
node audit/load-test.js
```

Para probar contra producción:
```bash
TARGET_URL="https://www.parraxsolutions.com" node audit/load-test.js
```

---

## 2. Prueba de Estrés (Stress Test)

Eleva la concurrencia a 100 conexiones simultáneas para medir latencia p99 y degradación.

```bash
node audit/stress-test.js
```

---

## 3. Prueba de Picos (Spike Test) en `/api/contact`

Envía ráfagas POST consecutivas al endpoint de contacto para evaluar rate-limiting (`HTTP 429`) y resiliencia.

La carga útil **no supera la validación** (`privacy: false`), así que nunca envía correos: se esperan 5 respuestas `422` y el resto `429`. Por defecto solo se ejecuta contra `localhost`; para apuntar a otro host hay que definir `ALLOW_REMOTE_TARGET=1` de forma explícita.

```bash
node audit/spike-test.js
```

---

## 4. Prueba de Resistencia (Endurance / Soak Test)

Carga constante durante 30 segundos continuos para verificar fugas de memoria o saturación del Event Loop.

```bash
node audit/endurance-test.js
```
