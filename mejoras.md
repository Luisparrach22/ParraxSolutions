# Informe de auditoría y hoja de ruta de mejoras — Parrax Solutions Web

> Fecha de la auditoría: 2026-10-12 · Commit auditado: `c018150` (rama `main`)
> Documento generado a partir de las fases 1–4 de auditoría. **Ninguna tarea está completada.** T-04 está **en curso** (CI verde en `main`; falta la protección de rama); el resto, «Pendiente». Ver §8 (T-04) para el detalle.
> No contiene secretos: las credenciales se citan solo por nombre de variable y tipo.

---

## 1. Resumen ejecutivo

**Estado técnico general.** Sitio corporativo Next.js 16 (App Router) casi totalmente estático, de tamaño reducido (~4.000 líneas en `src/`), con una estructura ordenada (`app/`, `components/{layout,sections,ui}`, `server/contact`, `config`, `content`, `i18n`). Compila sin errores (`tsc --noEmit` y `next build`). No tiene base de datos, autenticación ni usuarios. El único componente dinámico y la única operación de negocio es el **formulario de contacto** (`POST /api/contact`), que envía un email por Gmail SMTP.

**Principales riesgos.**
1. Las páginas legales publicadas en producción muestran sin completar titular, NIF y datos registrales (FUNC-001).
2. El formulario puede usarse para agotar la cuota de envío de una **cuenta personal de Gmail**, cuya contraseña de aplicación da acceso completo al buzón (SEC-001, SEC-002, SEC-005).
3. Las solicitudes de clientes solo existen como email, sin persistencia ni alertas; pueden perderse sin que nadie lo detecte (FIAB-002, SEC-010).
4. Si el JavaScript falla al cargar, la página queda prácticamente invisible; el mismo mecanismo retrasa probablemente el LCP (FIAB-001, PERF-001).
5. No existen pruebas automatizadas ni CI (QA-001).

**Áreas más problemáticas.** Flujo de contacto (seguridad, fiabilidad, contrato API y validación duplicada) y contenido legal.

**Mejoras de mayor impacto.** Completar los textos legales; migrar el envío a una cuenta o proveedor dedicado; añadir pruebas al flujo de contacto; persistir las solicitudes y alertar de fallos; hacer visible el contenido sin depender de la hidratación.

**Sin puntuación global.** No se asigna una nota de seguridad o calidad porque no se ha aplicado una metodología de puntuación justificable. No se han encontrado vulnerabilidades críticas ni altas.

**Limitaciones.** Sin pruebas en navegador real (accesibilidad, diseño adaptable, teclado), sin métricas de rendimiento de campo ni de laboratorio (Lighthouse/CrUX), sin acceso a la configuración de Vercel ni a DNS, y sin revisión jurídica (ver §2 y §12).

---

## 2. Alcance de la auditoría

### Tecnologías analizadas
TypeScript 5.9 (strict) · Next.js 16.4 (App Router, Turbopack) · React 19.1.1 · Tailwind CSS 3.4 + PostCSS · `next/font` (Inter) · nodemailer 10.1 (Gmail SMTP) · API REST de Resend (alternativa no configurada) · despliegue en Vercel (confirmado por cabeceras `server: Vercel`) · npm.

### Módulos revisados
| Módulo | Archivos | Profundidad |
|---|---|---|
| API de contacto | `src/app/api/contact/route.ts`, `src/server/contact/*` | Completa |
| Formulario | `src/components/sections/ContactForm.tsx`, `Contact.tsx` | Completa |
| Layout y navegación | `src/app/layout.tsx`, `Navbar.tsx`, `MobileCtaBar.tsx`, `Footer.tsx`, `ui/Button.tsx`, `ui/Reveal.tsx`, `ui/Logo.tsx`, `ui/Rich.tsx` | Completa |
| Rutas | `page.tsx`, `soluciones/[slug]`, `not-found`, `sitemap.ts`, `robots.ts`, páginas legales | Completa (contenido legal: solo coherencia técnica) |
| Configuración | `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `package.json`, `.gitignore`, `.env.example`, nombres de variables de `.env.local` | Completa |
| Contenido | `src/content/es.ts` (bloque de contacto, enlaces, urgencias) | Parcial |
| Estilos | `src/app/globals.css` (animaciones, reveal) | Parcial |
| Scripts de carga | `audit/*` | Lectura parcial, no ejecutados |

### Tipos de análisis
- **Análisis estático**: lectura de código, grafo de imports, búsqueda de patrones (`dangerouslySetInnerHTML`, `process.env`, listeners, `fetch`).
- **Pruebas ejecutadas (locales, sin efectos externos)**:
  - `npm run typecheck` y `next build` → correctos.
  - `next start` local **con credenciales de correo vaciadas** y solo cargas inválidas: límite por IP, suplantación de `X-Forwarded-For`, petición *cross-origin* `text/plain`, cuerpo de 25 MB, orden límite/lectura del cuerpo.
  - Réplica en Node de la comprobación `in URGENCY` (SEC-004).
  - nodemailer en modo `streamTransport` (sin envío) para comprobar inyección de cabeceras → **no explotable**.
  - `npm audit` y `npm audit --omit=dev`.
  - Búsqueda de nombres de variables secretas en `.next/static` → sin resultados.
  - Comprobaciones booleanas sobre `.env.local` sin imprimir valores.
- **Comprobaciones pasivas en producción**: peticiones `HEAD`/`GET` de lectura a `parraxsolutions.com` y `www` (cabeceras, redirecciones, canonical, sitemap, aviso legal) y consulta pública a hstspreload.org.
- **Documentación consultada**: guías de Next.js en `node_modules/next/dist/docs` y documentación oficial de Vercel (cabeceras de petición, límites de funciones).

### No realizado
Pruebas de carga, pruebas contra la API de producción, pruebas en navegador, Lighthouse, analizador de bundle (requeriría instalar dependencias), revisión de DNS/subdominios, revisión de la configuración de Vercel, revisión legal.

### Componentes pendientes
Contenido visual de las secciones (`Hero`, `HeroMockup`, `SolutionVisual`, `Method`, `Problems`, `Proof`, `Engagement`, `WhyParrax`, `Security`, `QuickServices`) — revisados superficialmente; resto de `es.ts`; validez de los scripts `audit/`; accesibilidad real (lector de pantalla, contraste, teclado).

---

## 3. Inventario de hallazgos

Leyenda de verificación: **C** confirmado · **PC** parcialmente confirmado · **P** probable · **PV** pendiente de verificación · **NC** no confirmado/no activo.
Esfuerzo: B baja · M media · A alta. Estado de resolución: todos **Pendiente**, salvo QA-001 y la parte de CI de CONF-001, **en curso** con T-04.

| ID | Título | Categoría | Severidad / Prioridad | Verif. | Componente | Esfuerzo | Tarea |
|---|---|---|---|---|---|---|---|
| SEC-001 | Abuso del formulario y agotamiento de la cuota de Gmail | Seguridad | Media | PC | API contacto | M | T-08 |
| SEC-002 | Contraseña de aplicación de una cuenta personal de Gmail | Seguridad | Media | C | Mailer / configuración | M | T-02 |
| SEC-003 | Confianza en `x-forwarded-for` para el rate limit | Seguridad | Informativa (Media fuera de Vercel) | C código / NC prod | API contacto | B | T-08 |
| SEC-004 | Bypass de validación de `urgency` con claves heredadas → 500 | Seguridad / Validación | Baja | C | Validación | B | T-05 |
| SEC-005 | Envío *cross-site* sin comprobar `Origin` ni `Content-Type` | Seguridad | Baja | C | API contacto | B | T-07 |
| SEC-006 | CSP con `unsafe-inline` y `unsafe-eval` en producción | Seguridad | Baja | C | `next.config.mjs` | M | T-19 |
| SEC-007 | Email personal real en `.env.example` versionado | Seguridad / Privacidad | Baja | C | Configuración | B | T-03 |
| SEC-008 | `.gitignore` no cubre `.env.production` / `.env.development` | Seguridad | Baja | C | Configuración | B | T-03 |
| SEC-009 | Sin límite propio de tamaño del cuerpo | Seguridad / Recursos | Informativa | C código / mitigado en Vercel | API contacto | B | T-07 |
| SEC-010 | Éxito silencioso sin transporte de correo en producción | Seguridad / Integridad | Informativa | C | Mailer | B | T-09 |
| SEC-011 | Logs con objetos de error completos del proveedor | Seguridad / Privacidad | Informativa | C | Mailer | B | T-09 |
| SEC-012 | HSTS `includeSubDomains; preload` incoherente | Configuración | Informativa | NC | `next.config.mjs` | B | T-19 |
| SEC-013 | Vulnerabilidades en dependencias de desarrollo | Dependencias | Informativa | C | `package.json` | B | T-20 |
| SEC-014 | Spike test envía solicitudes válidas (emails reales si apunta a prod) | Operación | Informativa | C | `audit/spike-test.js` | B | T-21 |
| SEC-015 | JSON-LD sin escapar `<` | Seguridad (latente) | Informativa | C | Layout / soluciones | B | T-19 |
| PERF-001 | Contenido del hero oculto hasta hidratar (LCP) | Rendimiento | Alta | C código / impacto PV | Hero / Reveal | B | T-11 |
| PERF-002 | Sin timeouts en SMTP, Resend ni `fetch` del cliente | Rendimiento / Fiabilidad | Media | C | Mailer / ContactForm | B | T-10 |
| PERF-003 | 192 KB gzip de JS en la home | Rendimiento | Media | PV | Bundle cliente | M | T-14 |
| PERF-004 | 54 instancias de `Reveal` con observador propio | Rendimiento | Baja | C | Reveal | B | T-14 |
| PERF-005 | Animaciones infinitas no compuestas | Rendimiento | Baja | PV | `globals.css` | B | T-15 |
| PERF-006 | Logos con `max-age=0, must-revalidate` | Rendimiento | Baja | C | `public/svg` | B | T-16 |
| PERF-007 | Poda O(n) por petición en el rate limiter saturado | Rendimiento | Baja | C | `rate-limit.ts` | B | T-08 |
| PERF-008 | Payload RSC ≈55 % del HTML de la home | Rendimiento | Informativa | C | Home | M | T-14 |
| PERF-009 | Envío de email síncrono en la petición | Rendimiento / Arquitectura | Informativa | C | API contacto | M | T-22 |
| PERF-010 | Transporte SMTP creado por petición | Rendimiento | Informativa | C | Mailer | B | T-22 |
| FUNC-001 | Textos legales con datos del titular sin completar en producción | Funcional / Legal | Alta | C | Páginas legales | B | T-01 |
| FUNC-002 | Canonical, sitemap y `og:url` apuntan a dominio que redirige | Configuración / SEO | Media | C | `config/site.ts` / Vercel | B | T-12 |
| FUNC-003 | Truncado silencioso de campos; sin `maxLength` en cliente | Funcional / Integridad | Media | C | Validación / ContactForm | B | T-05 |
| FUNC-004 | Políticas de privacidad y cookies no reflejan el tratamiento real | Legal / Contenido | Media | PV | Páginas legales | B | T-01 |
| FIAB-001 | Contenido invisible si el JS falla tras añadir `.js` | Fiabilidad / A11y | Alta | P | Layout / Reveal | B | T-11 |
| FIAB-002 | Solicitudes sin persistencia ni alertas de fallo | Fiabilidad / Integridad | Media | P | API contacto | M | T-09 |
| FIAB-003 | Límite por IP compartido tras NAT corporativo | Fiabilidad / UX | Baja | P | Rate limit | B | T-06, T-08 |
| API-001 | El cliente muestra el mismo error para 400/422/429/502 | Contrato API / UX | Media | C | ContactForm | B | T-06 |
| ARQ-001 | Reglas del formulario duplicadas en tres lugares | Arquitectura | Media | C | ContactForm / validation / es.ts | B | T-05 |
| ARQ-002 | Lógica de scroll a anclas triplicada | Arquitectura | Baja | C | Button / Navbar / MobileCtaBar | B | T-17 |
| ARQ-003 | Preselección del tipo según el texto del enlace | Arquitectura / Fiabilidad | Baja | P | ContactForm | B | T-13 |
| ARQ-004 | Textos y datos fuera del diccionario o duplicados | Arquitectura | Baja | C | Varios | B | T-18 |
| ARQ-005 | Código muerto: `SplashIntro.tsx` | Deuda técnica | Baja | C | Layout | B | T-18 |
| UX-001 | Rama de foco del menú móvil inalcanzable | Accesibilidad | Baja | C | Navbar | B | T-17 |
| QA-001 | Ausencia de pruebas automatizadas y CI | Calidad | Alta | C | Proyecto | M | T-04 (en curso) |
| CONF-001 | README desactualizado; sin `engines`; sin lint/CI | Configuración | Baja | C | Raíz | B | T-04, T-20 |
| CONF-002 | Remitente Resend por defecto solo entrega al dueño de la cuenta | Configuración | Baja | PV | Mailer | B | T-02 |
| OPT-001 | `lastModified` del sitemap = fecha de build | Mejora opcional | Opcional | C | `sitemap.ts` | B | T-22 |
| OPT-002 | «Enviar otra solicitud» pierde el tipo preseleccionado | Mejora opcional | Opcional | C | ContactForm | B | T-13 |
| OPT-003 | Menú móvil inaccesible sin JS | Mejora opcional | Opcional | C | Navbar | B | T-22 |

---

## 4. Vulnerabilidades de seguridad

> Controles existentes verificados (no son hallazgos): escape HTML en el email (`email-template.ts:5`); nodemailer codifica CR/LF en cabeceras (prueba local: `Bcc:` inyectado quedó como texto); longitudes limitadas en servidor; destinatario fijo (no hay relay abierto); errores genéricos sin trazas; ningún secreto en `.next/static`; `.env.local` nunca versionado; `frame-ancestors 'none'`, `X-Frame-Options`, `nosniff`, `poweredByHeader: false`; dependencias de producción con 0 vulnerabilidades según `npm audit`. Autenticación, autorización y base de datos: **no aplican** (no existen).

### SEC-001 — Abuso del formulario y agotamiento de la cuota de Gmail
- **Severidad:** Media · **Verificación:** parcialmente confirmado.
- **Archivos:** `src/server/contact/rate-limit.ts:3-6`, `src/app/api/contact/route.ts:12-15`, `src/server/contact/mailer.ts:20-27`.
- **Evidencia:** limitador en `Map` en memoria (5 peticiones / 10 min / IP). Prueba local: misma IP → `400×5, 429, 429`; IP distinta cada vez → nunca 429. Envío por cuenta Gmail de consumo; `RESEND_API_KEY` no definida (sin alternativa).
- **Explicación:** el estado es por instancia de función (Fluid compute lo comparte entre peticiones concurrentes de una instancia, no entre instancias ni tras arranques en frío). No hay CAPTCHA ni tope global.
- **Impacto:** saturación del buzón, agotamiento de la cuota diaria de Gmail (Google documenta ~500 destinatarios/día en cuentas de consumo; no verificado aquí) → 502 para clientes legítimos y posible bloqueo temporal de la cuenta personal.
- **Condiciones:** IPs reales distintas (en Vercel no se pueden falsificar, ver SEC-003); amplificable con SEC-005.
- **Recomendación:** rate limit compartido (Upstash/Vercel KV) por IP + tope global diario; Turnstile verificado en servidor; regla de rate limit del firewall de Vercel en `/api/contact`; proveedor transaccional (T-02).
- **Verificación:** en preview sin credenciales de correo, repetir peticiones inválidas desde dos redes y comprobar 429 global; verificar `siteverify` de Turnstile con token inválido → 403.

### SEC-002 — Contraseña de aplicación de una cuenta personal de Gmail
- **Severidad:** Media · **Verificación:** confirmado (tipo de cuenta).
- **Archivos:** `src/server/contact/mailer.ts:15-27` (`service: 'gmail'`, `SMTP_USER`, `SMTP_PASS`); secreto en `.env.local` y en Vercel (tipo: contraseña de aplicación de Google).
- **Evidencia (booleanos, sin valores):** `SMTP_USER` es `@gmail.com` = sí; coincide con `CONTACT_TO_EMAIL` = sí; coincide con el email de autor git = sí; coincide con `.env.example` = sí; `SMTP_PASS` de 16 caracteres (formato de contraseña de aplicación) = sí.
- **Explicación:** una contraseña de aplicación concede acceso SMTP **e IMAP** a todo el buzón.
- **Impacto:** si se filtran las variables de entorno: lectura de todo el correo personal, suplantación y exposición de datos de clientes.
- **Condiciones:** fuga del secreto (cuenta Vercel, colaborador, logs).
- **Recomendación:** cuenta dedicada o proveedor transaccional con clave de solo envío (Resend ya soportado) con dominio verificado; revocar la contraseña de aplicación; marcar variables como *Sensitive* en Vercel.
- **Verificación:** `SMTP_USER` deja de ser la cuenta personal o se elimina; la contraseña de aplicación aparece revocada en la consola de Google; envío de prueba en preview correcto.

### SEC-003 — Confianza en `x-forwarded-for`
- **Severidad:** Informativa en Vercel / Media en otro hosting · **Verificación:** confirmado en código, no aplicable en producción actual.
- **Archivo:** `src/app/api/contact/route.ts:12`.
- **Evidencia:** prueba local con `next start`: IPs falsificadas evitan el límite; sin cabecera, todas comparten la clave `'local'`. La documentación de Vercel indica que sobrescribe `X-Forwarded-For` «to prevent IP spoofing»; producción responde con `server: Vercel`.
- **Impacto:** nulo mientras se despliegue en Vercel sin proxy delante; bypass total si se cambia de hosting o se antepone un proxy.
- **Recomendación:** documentar la dependencia de Vercel junto al código; si cambia el despliegue, leer la IP solo de un proxy de confianza.
- **Verificación:** (opcional, segura) 6 POST con cuerpo inválido y `X-Forwarded-For` distinto contra producción → el sexto debe devolver 429. No ejecutada.

### SEC-004 — Bypass de validación de `urgency` con claves heredadas
- **Severidad:** Baja · **Verificación:** confirmado.
- **Archivos:** `src/server/contact/validation.ts:39`, `src/server/contact/email-template.ts:5,19`.
- **Evidencia:** `data.urgency in URGENCY` es `true` para `toString`, `constructor`, `valueOf`, `__proto__`; después `esc(URGENCY[...])` lanza `TypeError` (reproducido en Node).
- **Impacto:** 500 no controlado y traza en logs; no se envía email ni se filtra información.
- **Condiciones:** petición directa a la API (la UI no lo permite).
- **Recomendación:** `Object.hasOwn(URGENCY, data.urgency)` o un `Set` de claves válidas (dentro de T-05).
- **Verificación:** test unitario con `urgency: "toString"` → 422.

### SEC-005 — Envío *cross-site* sin comprobar `Origin` ni `Content-Type`
- **Severidad:** Baja (agrava SEC-001) · **Verificación:** confirmado.
- **Archivo:** `src/app/api/contact/route.ts:19`.
- **Evidencia:** prueba local: POST `Content-Type: text/plain` con `Origin: https://evil.example` llegó a validación (`422`). `request.json()` no exige `application/json`; no se devuelve `Access-Control-Allow-Origin` (la respuesta no es legible, pero la petición se procesa).
- **Impacto:** un sitio de terceros puede distribuir envíos entre las IPs de sus visitantes y eludir el límite por IP.
- **Recomendación:** 415 si `Content-Type` no es `application/json`; 403 si `Origin` no coincide con `siteUrl` o `Sec-Fetch-Site` es `cross-site`.
- **Verificación:** repetir la prueba local → 415/403; el formulario propio sigue devolviendo 200/422.

### SEC-006 — CSP permisiva en producción
- **Severidad:** Baja (defensa en profundidad; no se encontró sumidero XSS) · **Verificación:** confirmado.
- **Archivo:** `next.config.mjs:4` (`'unsafe-inline' 'unsafe-eval'`), `:6` (`img-src https:`), `:8` (`connect-src https://api.resend.com`, innecesario: la llamada es de servidor).
- **Impacto:** si apareciera un XSS, la CSP no lo contendría.
- **Recomendación:** eliminar `unsafe-eval` en producción, retirar `api.resend.com` de `connect-src`, acotar `img-src`; evaluar CSP con nonce (implica renderizado dinámico).
- **Verificación:** cabecera de producción revisada; consola sin violaciones CSP en todas las rutas.

### SEC-007 — Email personal real en `.env.example`
- **Severidad:** Baja · **Verificación:** confirmado.
- **Archivo:** `.env.example:11,13` (variables `SMTP_USER`, `CONTACT_TO_EMAIL`; dato personal, no contraseña).
- **Impacto:** exposición de la dirección personal que recibe los leads (phishing, spam) e identificación del objetivo de SEC-002.
- **Recomendación:** sustituir por un valor de ejemplo. Reescribir el historial solo si el repositorio es público.
- **Verificación:** `git grep -n "@gmail.com"` sin resultados en el árbol actual.

### SEC-008 — `.gitignore` incompleto para ficheros `.env`
- **Severidad:** Baja · **Verificación:** confirmado.
- **Archivo:** `.gitignore:27-28` (solo `.env*.local` y `.env`).
- **Impacto:** un `.env.production` con secretos se versionaría.
- **Recomendación:** `.env*` + `!.env.example`.
- **Verificación:** `git check-ignore .env.production` devuelve la ruta.

### SEC-009 — Sin límite propio de tamaño del cuerpo
- **Severidad:** Informativa (Baja fuera de Vercel) · **Verificación:** confirmado en código; mitigado por la plataforma.
- **Archivo:** `src/app/api/contact/route.ts:19`.
- **Evidencia:** prueba local: cuerpo de 25 MB leído y parseado completo antes del `422`. `proxyClientMaxBodySize` solo aplica con `proxy` (inexistente) y `serverActions.bodySizeLimit` solo a Server Actions (no usadas). Control existente: con la IP ya limitada se respondió `429` tras subir ~0,77 MB (el límite se evalúa antes de leer el cuerpo). Vercel rechaza cuerpos > 4,5 MB con `413`.
- **Recomendación:** rechazar con 413 si `Content-Length` > ~16 KB antes de `request.json()`.
- **Verificación:** POST de 1 MB local → 413 sin lectura del cuerpo.

### SEC-010 — Éxito silencioso sin transporte de correo
- **Severidad:** Informativa (impacto de integridad) · **Verificación:** confirmado.
- **Archivo:** `src/server/contact/mailer.ts:62-66`.
- **Evidencia:** sin SMTP ni Resend, en producción se registra un `warn` y se devuelve `true` → la API responde `{ ok: true }`.
- **Impacto:** pérdida silenciosa de solicitudes ante un error de configuración.
- **Recomendación:** en producción responder 503 (o fallar al arrancar) si no hay transporte; ver FIAB-002.
- **Verificación:** test unitario con variables vacías y `NODE_ENV=production` → error.

### SEC-011 — Logs con objetos de error completos
- **Severidad:** Informativa · **Verificación:** confirmado.
- **Archivo:** `src/server/contact/mailer.ts:39,55,59`; `route.ts:43` registra la empresa (aceptable).
- **Impacto:** los errores de SMTP/Resend pueden incluir direcciones o cuerpos de respuesta del proveedor en los logs. No se observaron credenciales.
- **Recomendación:** registrar solo código y mensaje del error.
- **Verificación:** forzar un fallo en local y revisar que el log no contiene direcciones.

### SEC-012 — HSTS `includeSubDomains; preload` incoherente
- **Severidad:** Informativa · **Verificación:** no confirmado como riesgo activo.
- **Archivo:** `next.config.mjs:22`.
- **Evidencia (producción):** `http://` → 308 a `https://` (Vercel); apex `https://parraxsolutions.com` → 308 a `www` con HSTS de Vercel **sin** `includeSubDomains`/`preload`; `www` → 200 con la cabecera de la app; hstspreload.org: `status: unknown`.
- **Impacto:** hoy ninguno (el apex no anuncia `includeSubDomains`; el dominio no es elegible ni está en la lista). La directiva `preload` es inefectiva y podría inducir a enviar el dominio a la lista sin revisar subdominios.
- **Recomendación:** retirar `preload` (y valorar `includeSubDomains`) hasta una decisión explícita, o configurar el apex conforme a los requisitos de preload.
- **Verificación:** `curl -sI https://www.parraxsolutions.com | grep -i strict`.

### SEC-013 — Vulnerabilidades en dependencias de desarrollo
- **Severidad:** Informativa · **Verificación:** confirmado (`npm audit`).
- **Evidencia:** 5 altas `braces` (GHSA-vfj7-8cjw-p6xm; vía `tailwindcss`/`chokidar`/`micromatch`/`fast-glob`) y 2 moderadas `postcss-selector-parser`. Producción: 0. El `override` `braces ^3.0.3` no las resuelve (el aviso afecta a todas las versiones).
- **Impacto:** solo en tiempo de build; DoS por patrones maliciosos que el proyecto no procesa.
- **Recomendación:** seguir el aviso y actualizar cuando exista versión corregida, sin `npm audit fix --force` a ciegas.
- **Verificación:** `npm audit` sin altas.

### SEC-014 — El spike test envía solicitudes válidas
- **Severidad:** Informativa · **Verificación:** confirmado.
- **Archivo:** `audit/spike-test.js:14,27`.
- **Impacto:** con `TARGET_URL` de producción enviaría emails reales, consumiría cuota y activaría el límite.
- **Recomendación:** bloquear hosts de producción o usar cargas que no superen la validación.
- **Verificación:** ejecutar con `TARGET_URL` de producción → el script aborta.

### SEC-015 — JSON-LD sin escapar `<`
- **Severidad:** Informativa (latente) · **Verificación:** confirmado.
- **Archivos:** `src/app/layout.tsx:96-98`, `src/app/soluciones/[slug]/page.tsx:63`.
- **Impacto:** hoy ninguno (datos estáticos); XSS si el contenido pasara a ser dinámico (CMS).
- **Recomendación:** escapar `<` como `<` al serializar.
- **Verificación:** test que serialice un valor con `</script>` y compruebe el escape.

---

## 5. Problemas de rendimiento

> **No hay mediciones de laboratorio ni de campo.** Los impactos son estimaciones cualitativas. Datos medidos en el build local: HTML home 234 KB (36 KB gzip), payload RSC ~129 KB, JS de la home 616 KB (192 KB gzip) en 9 chunks, CSS 42 KB (9 KB gzip), 54 `data-reveal`, 10 `.flow-line` + 1 `.flow-h` + 5 `animate-pulse-node`. Producción: `/` y `/svg/*` con `cache-control: public, max-age=0, must-revalidate` y `x-vercel-cache: HIT`.

| ID | Ubicación | Evidencia | Causa probable | Impacto esperado | Prioridad | Solución | Costes / inconvenientes | Métrica antes/después |
|---|---|---|---|---|---|---|---|---|
| PERF-001 | `Hero.tsx:13-28`, `Reveal.tsx:20-40`, `globals.css:107-118`, `layout.tsx:90-92` | `<h1>` y CTA del hero dentro de `Reveal`; `.js` aplica `opacity:0` hasta hidratación + IO + retardo + 0,6 s | Animación de entrada aplicada al contenido inicial | LCP probablemente ≥ tiempo de hidratación + ~0,7 s (no medido) | Alta | Excluir el contenido above-the-fold de `Reveal` o animarlo solo con CSS | Cambio visual leve de la entrada | LCP (lab y campo), FCP, *render delay* del elemento LCP |
| PERF-002 | `mailer.ts:22-35,49-53`, `ContactForm.tsx:112-121` | `createTransport` sin timeouts (por defecto nodemailer: 2 min / 30 s / 10 min); `fetch` sin `AbortSignal` en servidor y cliente | Valores por defecto | Formulario bloqueado en «Enviando…»; función ocupada hasta 300 s | Media | Timeouts SMTP ~10 s, `AbortSignal.timeout` en Resend y en cliente (~15 s), `maxDuration` coherente | 502 falsos si el timeout es demasiado corto | p95/p99 de `/api/contact`, % de 502, duración de la función |
| PERF-003 | Bundle cliente; `Button.tsx` (`'use client'`), `Reveal`, `Navbar`, `MobileCtaBar`, `ContactForm` | 192 KB gzip de JS en la home | Runtime React/Next + límites de cliente amplios (atribución no medida) | Más trabajo del hilo principal en móvil; agrava PERF-001 | Media (sospecha) | Medir con `@next/bundle-analyzer`; separar `Button` servidor/cliente; reducir islas de cliente | Requiere dependencia de desarrollo; riesgo de romper el scroll suave | KB JS por ruta, TBT, INP, tiempo de hidratación |
| PERF-004 | `Reveal.tsx:27-39` | 54 instancias / 54 `IntersectionObserver` en la home, 7 en cada solución | Un observador por instancia | Bajo | Baja | Observador compartido o `animation-timeline: view()` con *fallback* | Soporte de navegadores (solo CSS) | Tiempo de scripting e hidratación |
| PERF-005 | `globals.css:95-103,132-133` | `stroke-dashoffset` y `background-position` animados de forma infinita | Propiedades no compuestas por GPU → repintado continuo | CPU/batería en móvil mientras son visibles (no medido) | Baja (sospecha) | Pausar fuera de pantalla o migrar a `transform` | Ninguno funcional | Paint flashing, repintados/s y CPU en reposo |
| PERF-006 | `public/svg/*` (usados en `Logo.tsx:33-61`, `layout.tsx:47-51`) | `max-age=0, must-revalidate` en producción | Valor por defecto de Vercel para `public/` | Una revalidación 304 por logo y visita | Baja | `headers()` para `/svg/:path*` con caché larga o nombres versionados | Logos obsoletos en caché si se cambian sin renombrar | Peticiones/bytes en segunda visita |
| PERF-007 | `rate-limit.ts:18,30-31` | Tras podar quedan 5000 entradas y `>=` vuelve a disparar la poda en cada petición | Condición de umbral | O(5000) por petición bajo ataque con muchas IPs | Baja | Poda temporal o almacén externo con TTL (T-08) | Ninguno | CPU por petición, memoria de la función |
| PERF-008 | HTML de la home | ~129 KB de payload RSC sobre 234 KB | Duplicación HTML + Flight propia del App Router | Bajo (36 KB gzip total) | Informativa | Se reduce como efecto de PERF-003 | — | Tamaño transferido del documento |
| PERF-009 | `route.ts:37` | Envío de email dentro de la petición | Diseño síncrono | El usuario espera la latencia SMTP | Informativa | Envío diferido (`after()`/cola) **solo** tras persistir la solicitud (T-09) | Se pierde la confirmación de envío al usuario | Latencia p95 de `/api/contact` |
| PERF-010 | `mailer.ts:22` | Nuevo transporte (TCP+TLS+AUTH) por envío | Sin reutilización | Latencia extra por solicitud; irrelevante con el volumen actual | Informativa | Transporte a nivel de módulo | Conexiones inactivas en instancias calientes | Latencia del envío |

---

## 6. Problemas funcionales y de fiabilidad

### Errores funcionales confirmados

**FUNC-001 — Textos legales sin completar en producción** · Alta · Confirmado
- Evidencia: `src/app/aviso-legal/page.tsx:31-35` y `politica-de-privacidad/page.tsx` (3 marcadores cada una). `GET https://www.parraxsolutions.com/aviso-legal` muestra «Nombre / Razón Social del Titular», «NIF / CIF», «Datos de inscripción en el Registro Mercantil si aplica».
- Consecuencia: incumplimiento de LSSI art. 10 (identificación del prestador) y del deber de identificar al responsable del tratamiento (RGPD) mientras el formulario recoge datos personales.
- Recomendación: completar los datos (tarea de contenido) y añadir una comprobación en CI que falle si quedan `class="ph"` en las rutas legales.

**FUNC-002 — Dominio canónico incoherente** · Media · Confirmado
- Evidencia: en producción `<link rel="canonical" href="https://parraxsolutions.com">`, `og:url` y `<loc>` del sitemap usan el apex, que responde 308 → `https://www.parraxsolutions.com/`. Origen: `siteUrl` (`src/config/site.ts`) alimentado por `NEXT_PUBLIC_SITE_URL`.
- Consecuencia: la canonical apunta a una redirección; señales SEO contradictorias.
- Recomendación: un único dominio primario (definir `NEXT_PUBLIC_SITE_URL` con `www` en Vercel o hacer primario el apex).

**FUNC-003 — Truncado silencioso** · Media · Confirmado
- Evidencia: `validation.ts:20-31` recorta `message` (4000), `email` (200), `name` (120), `company` (160); `ContactForm.tsx:177-183` sin `maxLength`.
- Consecuencia: mensajes largos llegan cortados sin aviso; un email de más de 200 caracteres se vuelve inválido y produce un error genérico.
- Recomendación: `maxLength` y contador en cliente con los mismos límites; el servidor rechaza (422) en lugar de recortar.

**API-001 — Errores de API indistinguibles en el cliente** · Media · Confirmado
- Evidencia: la API devuelve `400 invalid_json`, `422 validation`, `429 rate_limited`, `502 send_failed`; `ContactForm.tsx:117` lanza ante cualquier `!res.ok` y muestra siempre `errors.server` («Inténtalo de nuevo…»).
- Consecuencia: ante 429 se invita a reintentar (empeora el bloqueo); ante 422 el reintento nunca funcionará.
- Recomendación: leer `error` del cuerpo, mapear a mensajes específicos y compartir el tipo de respuesta entre ruta y cliente.

**FUNC-004 — Políticas que no reflejan el tratamiento real** · Media · Pendiente de verificación (legal)
- Evidencia: `politica-de-privacidad/page.tsx:60-64` afirma proveedores en el EEE o bajo DPF «con contratos de encargo de tratamiento firmados», pero el envío usa una cuenta de consumo de Gmail (SEC-002) y no se menciona Vercel. `cookies/page.tsx:32-40` declara cookies técnicas de sesión, seguridad y antiabuso; producción no envía `Set-Cookie` y el código no usa cookies ni `localStorage` (el único `sessionStorage` está en `SplashIntro`, no usado).
- Recomendación: revisión jurídica; describir los proveedores reales y declarar que no se usan cookies.

### Riesgos de integridad de datos y operaciones críticas

**FIAB-001 — Contenido invisible si el JS falla** · Alta · Probable (mecanismo confirmado en código; reproducción manual pendiente)
- Evidencia: `layout.tsx:90-92` añade `.js` antes de saber si los chunks cargarán; `globals.css:107-118` oculta `[data-reveal]`; solo `Reveal` (cliente) lo hace visible.
- Consecuencia: ante fallo de carga de chunks, error de hidratación o navegador incompatible, la home (54 bloques, incluido el `<h1>`) queda prácticamente en blanco.
- Recomendación: estado visible por defecto; ocultar solo tras montar `Reveal`, o *fallback* CSS que fuerce `opacity:1` a los ~2 s. Se resuelve junto con PERF-001.

**FIAB-002 — Solicitudes sin persistencia ni alertas** · Media · Probable
- Evidencia: no hay almacenamiento; los fallos solo van a `console.error` (`mailer.ts:39,55,59`); se suma SEC-010 y el límite de cuota de SEC-001.
- Consecuencia: pérdida de leads no detectada en el único flujo de negocio.
- Recomendación: persistir la solicitud antes de enviar (KV, base de datos u hoja de cálculo) y alertar de `send_failed` (Log Drain/webhook). Implica actualizar la política de privacidad (conservación).

**FIAB-003 — Límite compartido tras NAT** · Baja · Probable
- Evidencia: clave por IP (`route.ts:12`) con 5 envíos / 10 min; cuenta reintentos y peticiones inválidas.
- Consecuencia: usuarios de una misma oficina (público B2B) pueden bloquearse entre sí, sin mensaje explicativo (API-001).
- Recomendación: mensaje específico para 429 (T-06) y política de límite revisada al implantar T-08.

### Manejo de excepciones y concurrencia
- Excepción no controlada: SEC-004.
- Fallo silencioso: SEC-010.
- Operaciones sin timeout: PERF-002.
- Concurrencia: no se detectaron condiciones de carrera relevantes; el doble envío está impedido (botón `disabled` mientras se envía, `ContactForm.tsx:250`). El estado del limitador por instancia está descrito en SEC-001.

### Configuración y despliegue
- **CONF-001** (Baja, confirmado): `README.md` no documenta `SMTP_USER`, `SMTP_PASS`, `CONTACT_FROM_EMAIL` y presenta Resend como vía principal; `package.json` sin `engines`; sin linter, formateador ni CI.
- **CONF-002** (Baja, pendiente de verificación): `mailer.ts:46` usa `onboarding@resend.dev` como remitente por defecto, que según Resend solo entrega al email del propietario de la cuenta; activar Resend sin `CONTACT_FROM_EMAIL` provocaría 502.
- **Desarrollo frente a producción:** sin credenciales, en desarrollo se registra en log y se responde OK (comportamiento intencionado); en producción ocurre lo mismo con un `warn` (SEC-010).

### Revisado sin incidencias
Las 11 anclas usadas tienen `id` destino; rutas internas sin enlaces rotos detectados; `soluciones/[slug]` devuelve `notFound()` para slugs desconocidos; listeners y observadores se limpian; foco gestionado en errores y éxito del formulario; atributos ARIA presentes en los campos.

---

## 7. Arquitectura y deuda técnica

> Estructura general adecuada; no se recomienda reestructurar. Sin dependencias circulares (grafo `app → components → ui/lib/i18n → content`; `server/contact` con dependencias unidireccionales).

**QA-001 — Sin pruebas automatizadas ni CI** · Alta
- Situación: solo `npm run typecheck` (`package.json:5-11`); no hay archivos de test ni CI.
- Problema: el flujo crítico no tiene red de seguridad; SEC-004, FUNC-003 y API-001 habrían sido detectables con tests triviales.
- Consecuencia: regresiones detectadas en producción.
- Cambio recomendado: Vitest para `server/contact/*` y la ruta; tests de componente de `ContactForm`; un E2E (Playwright) del formulario; CI con `typecheck`, tests y `build`. `rate-limit.ts` necesita una función de reinicio para tests.
- Módulos: raíz, `server/contact`, `ContactForm`.
- Dependencias: precede a T-05…T-10. Requiere aprobar dependencias de desarrollo nuevas.
- Riesgos: ninguno funcional.

**ARQ-001 — Reglas del formulario triplicadas** · Media
- Situación: `EMAIL_RE` y mínimos en `ContactForm.tsx:23-35` y `validation.ts:1,35-41`; claves de urgencia en `es.ts:567-571` y `validation.ts:3-7`; etiquetas de tipo en `es.ts:553-555` y `email-template.ts`.
- Problema/consecuencia: divergencias → 422 inexplicables o etiquetas distintas en web y email.
- Cambio: módulo compartido sin dependencias de servidor (p. ej. `src/lib/contact-schema.ts`) con regex, límites, claves válidas y tipo de respuesta; las etiquetas de UI siguen en el diccionario.
- Módulos: `ContactForm`, `server/contact/validation.ts`, `email-template.ts`, `es.ts`.
- Dependencias: tras T-04; antes de T-06 y T-07.
- Riesgos: bajo; cubrir con tests.

**ARQ-002 — Lógica de scroll a anclas triplicada** · Baja
- Situación: `Button.tsx:77-96`, `Navbar.tsx:114-132` (con `setTimeout` de 50 ms), `MobileCtaBar.tsx:54-56`.
- Problema/consecuencia: comportamiento inconsistente y tres puntos de mantenimiento; el menú móvil ya requirió un arreglo (commit `002382b`).
- Cambio: utilidad única `scrollToAnchor(id)` en `src/lib/`.
- Dependencias: preferiblemente con E2E de navegación (T-04).
- Riesgos: regresión del menú móvil; probar en dispositivo real.

**ARQ-003 — Preselección del tipo según el texto del enlace** · Baja
- Situación: `ContactForm.tsx:59-89`; listener global de clics y heurística `includes('sesi'|'agendar')` (`:70-79`).
- Consecuencia: cambiar el texto de un CTA rompe la preselección sin aviso; acoplamiento del formulario con toda la página.
- Cambio: CTA solo con `#agendar-sesion` / `#solicitar-auditoria` (ya existen) y `hashchange`, o `data-contact-type`.
- Riesgos: bajo.

**ARQ-004 — Textos y datos fuera del diccionario** · Baja
- Situación: `layout.tsx:113` (`sub="Sesión de 20 min, sin coste"`); `soluciones/[slug]/page.tsx:94,97,158`; `Navbar.tsx:287,293` (email e Instagram ya presentes en `es.ts:550,648`); páginas legales completas en JSX; `getDictionary('es')` literal en lugar de `defaultLocale`.
- Consecuencia: contradice la preparación i18n documentada en `i18n/config.ts`; cambios de email o copy en varios sitios.
- Cambio: mover a `es.ts` / `config/site.ts`.
- Riesgos: bajo.

**ARQ-005 — Código muerto `SplashIntro.tsx`** · Baja
- Situación: 121 líneas sin ningún import.
- Consecuencia: confusión; la política de cookies se apoya en su `sessionStorage`.
- Cambio: eliminar o integrar (decisión de producto). Si se elimina, ajustar FUNC-004.

**UX-001 — Rama de foco inalcanzable en el menú móvil** · Baja
- Situación: `Navbar.tsx:80-82` enfoca el primer enlace solo con `min-width: 1024px`, donde el menú está oculto (`lg:hidden`).
- Consecuencia: código muerto o condición invertida; en móvil el foco queda en el botón (aceptable porque el trap lo incluye).
- Cambio: eliminar la rama o invertir la condición tras probar con lector de pantalla.

---

## 8. Plan de implementación priorizado

> Orden adaptado a dependencias (no existen hallazgos críticos; la Fase A agrupa urgencias legales y de credenciales). Ninguna tarea está completada; T-04 está en curso.

### FASE A — Riesgos urgentes

**T-01 · Completar y alinear los textos legales**
- Resuelve: FUNC-001, FUNC-004.
- Objetivo: cumplimiento LSSI/RGPD y coherencia con el tratamiento real.
- Archivos: `src/app/aviso-legal/page.tsx`, `politica-de-privacidad/page.tsx`, `cookies/page.tsx`.
- Cambios: rellenar titular, NIF y registro; describir proveedores reales (Vercel, proveedor de correo) y ausencia de cookies; añadir comprobación de marcadores `[…]` en rutas legales.
- Dependencias: datos del titular; revisión legal. Revisar de nuevo tras T-02 y T-09 (cambian proveedores y conservación).
- Complejidad: baja · Riesgo: bajo.
- Pruebas: comprobación del HTML generado sin `class="ph"` en rutas legales.
- Aceptación: 0 marcadores en producción; textos validados por quien tenga responsabilidad legal.
- Terminada cuando: desplegado y verificado con `GET` en producción.

**T-02 · Migrar el envío a una credencial dedicada de solo envío**
- Resuelve: SEC-002, CONF-002 (y prepara SEC-001).
- Objetivo: eliminar el acceso al buzón personal desde la aplicación.
- Archivos: variables en Vercel/`.env.local`; `src/server/contact/mailer.ts` solo si cambia el proveedor por defecto.
- Cambios: Resend (ya soportado) con dominio verificado y `CONTACT_FROM_EMAIL` obligatorio, o cuenta Gmail/Workspace dedicada; revocar la contraseña de aplicación actual; variables *Sensitive* en Vercel.
- Dependencias: ninguna (configuración DNS SPF/DKIM si se usa dominio propio).
- Complejidad: media · Riesgo: medio (interrupción del envío si se configura mal).
- Pruebas: envío real controlado en preview; recepción y `reply-to` correctos.
- Aceptación: `SMTP_USER` no es la cuenta personal o no se usa; contraseña de aplicación revocada.
- Terminada cuando: producción envía con la nueva credencial durante 48 h sin errores.

**T-03 · Higiene de configuración de secretos**
- Resuelve: SEC-007, SEC-008.
- Archivos: `.env.example`, `.gitignore`.
- Cambios: valores de ejemplo genéricos; patrón `.env*` + `!.env.example`.
- Dependencias: ninguna · Complejidad: baja · Riesgo: bajo.
- Pruebas: `git grep "@gmail.com"` vacío; `git check-ignore .env.production`.
- Aceptación/terminada: ambos comandos devuelven el resultado esperado.

### FASE B — Base de pruebas e integridad del flujo de contacto

**T-04 · Infraestructura de pruebas y CI**
- Resuelve: QA-001, parte de CONF-001 (lint/CI).
- Archivos: `package.json`, configuración de Vitest/Playwright, workflow de CI, `rate-limit.ts` (exponer reinicio solo para tests).
- Cambios: tests de caracterización del comportamiento **actual** de `validation`, `email-template`, `mailer` (con `nodemailer`/`fetch` simulados), `route` y `ContactForm`; E2E del formulario con la API simulada; CI con `typecheck`, tests y `build`.
- Dependencias: aprobación de dependencias de desarrollo.
- Complejidad: media · Riesgo: bajo.
- Aceptación: CI verde en `main`; tests de caracterización cubren 200/400/422/429/502 y el honeypot.
- Terminada cuando: la CI bloquea merges con tests fallidos.
- **Estado (2026-10-12): EN CURSO — no completada.**
  - Hecho (verificado en local con `npm ci` + `typecheck` + `test` + `build`, todo correcto):
    - Dependencias de desarrollo con versión exacta: `vitest@5.0.2`, `jsdom@30.1.1`, `@testing-library/react@16.3.3`, `@testing-library/dom@10.4.2` (peer de la anterior). Sin vulnerabilidades nuevas (`npm audit`: producción 0; desarrollo las mismas 7 de SEC-013).
    - `vitest.config.mts` (entorno `node`; `jsdom` solo en tests de componentes) y scripts `test` / `test:watch` en `package.json`.
    - 5 archivos de pruebas, 86 casos (78 pasan, 8 fallos esperados): `src/server/contact/{validation,email-template,mailer}.test.ts`, `src/app/api/contact/route.test.ts`, `src/components/sections/ContactForm.test.tsx`. Cubren 200/400/422/429/502, honeypot, rate limiting (por IP, `x-forwarded-for`, `x-real-ip`, clave compartida), escape HTML, caminos SMTP/Resend/sin transporte con `nodemailer` y `fetch` simulados, y estados de carga/éxito/error del formulario. Ninguna prueba envía correos.
    - Defectos conocidos documentados con `it.fails` (pasan mientras el defecto exista; se comprobó que fallan por el motivo documentado): SEC-004 (×5), FUNC-003, SEC-010, SEC-005. **Deben convertirse en `it`** al corregirlos en T-05, T-07 y T-09.
    - Workflow `.github/workflows/ci.yml` (Node 24, `npm ci`, typecheck, tests, build) en `push` a `main` y `pull_request`.
  - Desviaciones respecto al plan: no se modificó `rate-limit.ts` (el estado se reinicia con `vi.resetModules()` en los tests); el E2E con Playwright se **aplaza** (dependencia y navegadores pesados; el formulario queda cubierto con pruebas de componente en jsdom); no se añadió linter (sigue pendiente en CONF-001 / T-20).
  - CI verificada: ejecución [38302845030](https://github.com/Luisparrach22/ParraxSolutions/actions/runs/38302845030) sobre `54acdf0` en `main` — **success** (instalación, typecheck, pruebas y build correctos).
  - Pendiente para cerrar T-04: (1) regla de protección de rama en GitHub que exija el check «Typecheck, tests y build» (hoy `main` no está protegida; configuración del repositorio, fuera del código); (2) decidir si el E2E del formulario se añade aquí o en una tarea posterior.

**T-05 · Esquema compartido y validación estricta del formulario**
- Resuelve: ARQ-001, SEC-004, FUNC-003.
- Archivos: nuevo `src/lib/contact-schema.ts`; `server/contact/validation.ts`, `email-template.ts`, `ContactForm.tsx`, `es.ts`.
- Cambios: constantes y claves únicas; `Object.hasOwn` para `urgency`; rechazo (422) de campos que exceden límites; `maxLength` y contador en cliente.
- Dependencias: T-04.
- Complejidad: baja · Riesgo: bajo.
- Pruebas: unitarias (`toString` → 422; 4001 caracteres → 422; límites exactos → OK); test de coherencia de claves `es.ts` ↔ esquema.
- Aceptación: cada regla definida una vez; ningún dato se recorta silenciosamente.

**T-06 · Contrato de errores de la API y mensajes en el cliente**
- Resuelve: API-001, FIAB-003 (mensaje de 429).
- Archivos: `route.ts`, `contact-schema.ts` (tipo de respuesta), `ContactForm.tsx`, `es.ts`.
- Cambios: tipo `ContactResponse` compartido; el cliente lee `error` y muestra mensajes específicos para `rate_limited`, `validation`, `send_failed` y errores de red.
- Dependencias: T-05.
- Complejidad: baja · Riesgo: bajo.
- Pruebas: tests de componente con `fetch` simulado para cada código.
- Aceptación: cada código produce un mensaje distinto y accionable.

**T-07 · Endurecimiento de la entrada de `/api/contact`**
- Resuelve: SEC-005, SEC-009.
- Archivos: `route.ts`, `contact-schema.ts` (nuevos códigos 403/413/415).
- Cambios: 413 si `Content-Length` excesivo (antes de leer); 415 si no es `application/json`; 403 si `Origin`/`Sec-Fetch-Site` no corresponden a `siteUrl`.
- Dependencias: T-06 (los nuevos códigos deben estar en el contrato); T-12 recomendable (dominio canónico definido).
- Complejidad: baja · Riesgo: medio (bloquear clientes legítimos si `Origin` se compara mal; incluir `www` y apex).
- Pruebas: integración local con `text/plain`, `Origin` ajeno, cuerpo de 1 MB; E2E del formulario propio.
- Aceptación: 415/403/413 en los casos maliciosos; el formulario real sigue funcionando.

**T-08 · Protección antiabuso compartida**
- Resuelve: SEC-001, SEC-003 (documentación), PERF-007, FIAB-003.
- Archivos: `server/contact/rate-limit.ts`, `route.ts`, `ContactForm.tsx` (widget Turnstile), configuración de Vercel/firewall.
- Cambios: límite en almacén compartido con TTL (por IP + tope global diario); Turnstile verificado en servidor; regla de firewall en `/api/contact`; comentario que documente la dependencia de la IP proporcionada por Vercel; contar solo envíos válidos si se adopta.
- Dependencias: T-06, T-07; decisión de proveedor (Upstash/Vercel KV, Turnstile).
- Complejidad: media · Riesgo: medio (falsos positivos; dependencia externa nueva).
- Pruebas: unitarias del limitador con almacén simulado; integración con token Turnstile inválido → 403; E2E con clave de prueba de Turnstile.
- Aceptación: el límite persiste entre instancias; tope global efectivo; sin degradación del formulario legítimo.

**T-09 · Persistencia de solicitudes, alertas y fallo explícito**
- Resuelve: FIAB-002, SEC-010, SEC-011.
- Archivos: `route.ts`, `server/contact/mailer.ts`, nuevo módulo de almacenamiento en `server/contact/`.
- Cambios: guardar la solicitud antes del envío; 503 en producción si no hay transporte configurado; alerta ante `send_failed`; logs sin objetos completos del proveedor.
- Dependencias: T-02 (proveedor final), T-05 (esquema), T-04; actualizar T-01 (política: conservación y encargados).
- Complejidad: media · Riesgo: medio (nuevos datos personales almacenados).
- Pruebas: SMTP simulado caído → solicitud persistida + alerta; sin variables en producción → 503.
- Aceptación: ninguna solicitud se pierde; alerta en < 5 min ante fallo.

### FASE C — Errores funcionales y de fiabilidad

**T-10 · Timeouts en operaciones de red**
- Resuelve: PERF-002.
- Archivos: `mailer.ts`, `ContactForm.tsx`, `route.ts` (`maxDuration`).
- Cambios: timeouts SMTP ~10 s, `AbortSignal.timeout` en Resend y cliente (~15 s), `maxDuration` coherente.
- Dependencias: T-06 (mensaje de error de red/timeout), T-02 (proveedor final).
- Complejidad: baja · Riesgo: bajo/medio (timeouts demasiado agresivos).
- Pruebas: SMTP local que no responde → `send_failed` en ~10 s; cliente con `fetch` colgado → estado de error.
- Aceptación: ninguna petición supera el umbral definido.

**T-11 · Contenido visible sin depender de la hidratación**
- Resuelve: FIAB-001, PERF-001.
- Archivos: `Reveal.tsx`, `globals.css`, `layout.tsx`, `Hero.tsx`.
- Cambios: visible por defecto; ocultar solo tras montar o *fallback* CSS temporal; hero sin `Reveal` (o animación solo CSS).
- Dependencias: medir LCP antes (línea base).
- Complejidad: baja · Riesgo: bajo (parpadeo si se implementa mal).
- Pruebas: DevTools bloqueando `/_next/static/chunks/*` → texto visible en < 3 s; Lighthouse móvil antes/después.
- Aceptación: contenido visible sin JS funcional; LCP mejora o no empeora respecto a la línea base.

**T-12 · Dominio canónico único**
- Resuelve: FUNC-002.
- Archivos: variables de Vercel (`NEXT_PUBLIC_SITE_URL`) o dominio primario en Vercel.
- Dependencias: ninguna · Complejidad: baja · Riesgo: bajo (reindexación).
- Pruebas: `curl` de canonical, `og:url` y sitemap.
- Aceptación: todas las URLs canónicas responden 200 sin redirección.

**T-13 · Preselección del tipo por ancla**
- Resuelve: ARQ-003, OPT-002.
- Archivos: `ContactForm.tsx`, CTA en secciones/`es.ts`.
- Cambios: eliminar la heurística por texto y el listener global; usar anclas específicas o `data-contact-type`; conservar el tipo al reiniciar el formulario.
- Dependencias: T-04 (E2E de CTA).
- Complejidad: baja · Riesgo: bajo.
- Pruebas: E2E que pulse cada CTA y compruebe la opción marcada.
- Aceptación: la preselección no depende de ningún texto.

**T-19 · Endurecimiento de cabeceras y serialización**
- Resuelve: SEC-006, SEC-012, SEC-015.
- Archivos: `next.config.mjs`, `layout.tsx`, `soluciones/[slug]/page.tsx`.
- Cambios: quitar `unsafe-eval` en producción, `api.resend.com` de `connect-src` y acotar `img-src`; decidir sobre `preload`/`includeSubDomains`; escapar `<` en JSON-LD. Evaluar CSP con nonce por separado (impacta en renderizado estático y PERF).
- Dependencias: T-08 (si Turnstile requiere dominios en CSP).
- Complejidad: media · Riesgo: medio (una CSP restrictiva puede romper scripts).
- Pruebas: todas las rutas sin violaciones CSP en consola; test de escape de JSON-LD.
- Aceptación: cabeceras revisadas en producción; sin errores CSP.

### FASE D — Rendimiento

**T-14 · Medir y reducir JS del cliente**
- Resuelve: PERF-003, PERF-004, PERF-008.
- Archivos: `Button.tsx`, `Reveal.tsx`, componentes de cliente.
- Cambios: analizar el bundle; separar `Button` servidor/cliente; observador compartido o CSS para `Reveal`.
- Dependencias: T-11 (cambia `Reveal`), T-17 (utilidad de scroll), T-04 (E2E de navegación).
- Complejidad: media · Riesgo: medio.
- Pruebas: E2E de navegación y formulario; comparación de tamaños por ruta.
- Aceptación: reducción medible de KB JS de la home sin regresiones.

**T-15 · Animaciones eficientes**
- Resuelve: PERF-005.
- Archivos: `globals.css`, componentes con `.flow-line`/`.flow-h`.
- Cambios: pausar fuera de pantalla o usar `transform`.
- Dependencias: T-11/T-14 si se reutiliza el observador · Complejidad: baja · Riesgo: bajo.
- Aceptación: sin repintado continuo con la página en reposo (paint flashing).

**T-16 · Caché de recursos estáticos de marca**
- Resuelve: PERF-006.
- Archivos: `next.config.mjs` (`headers()` para `/svg/:path*`).
- Dependencias: ninguna · Complejidad: baja · Riesgo: bajo (logos obsoletos en caché).
- Aceptación: `cache-control` con `max-age` largo verificado en producción.

### FASE E — Arquitectura y mantenibilidad

**T-17 · Utilidad única de scroll a anclas y foco del menú**
- Resuelve: ARQ-002, UX-001.
- Archivos: `src/lib/` (nueva utilidad), `Button.tsx`, `Navbar.tsx`, `MobileCtaBar.tsx`.
- Dependencias: T-04 (E2E de navegación móvil).
- Complejidad: baja · Riesgo: medio (regresión del menú móvil).
- Pruebas: E2E en viewport móvil y escritorio; prueba manual con lector de pantalla.
- Aceptación: una sola implementación; comportamiento idéntico en todos los puntos de entrada.

**T-18 · Contenido centralizado y eliminación de código muerto**
- Resuelve: ARQ-004, ARQ-005.
- Archivos: `es.ts`, `config/site.ts`, `layout.tsx`, `Navbar.tsx`, `soluciones/[slug]/page.tsx`, `SplashIntro.tsx`.
- Dependencias: T-01 (si se elimina `SplashIntro`, la política de cookies debe reflejarlo).
- Complejidad: baja · Riesgo: bajo.
- Aceptación: email, redes y CTA definidos una sola vez; sin archivos sin referenciar.

**T-20 · Documentación, entorno y dependencias de desarrollo**
- Resuelve: CONF-001, SEC-013.
- Archivos: `README.md`, `package.json` (`engines`).
- Dependencias: T-02 (documentar el proveedor final).
- Complejidad: baja · Riesgo: bajo.
- Aceptación: README con todas las variables reales; `engines.node` definido; `npm audit` revisado.

**T-21 · Salvaguarda de los scripts de carga**
- Resuelve: SEC-014.
- Archivos: `audit/spike-test.js` (y `run-all.sh`).
- Cambios: abortar si `TARGET_URL` es producción o usar cargas inválidas.
- Complejidad: baja · Riesgo: bajo.
- Aceptación: el script se niega a ejecutarse contra producción.

### FASE F — Optimizaciones opcionales

**T-22 · Optimizaciones opcionales**
- Resuelve: PERF-009, PERF-010, OPT-001, OPT-003.
- Cambios: envío diferido tras persistir (requiere T-09); transporte SMTP reutilizado; `lastModified` real o eliminado del sitemap; alternativa sin JS para el menú móvil (p. ej. `<details>` o enlaces visibles).
- Dependencias: T-09 (para PERF-009), T-10 (para PERF-010).
- Complejidad: baja/media · Riesgo: bajo.
- Aceptación: cada cambio medido o verificado individualmente.

---

## 9. Dependencias entre tareas

```
T-01 ─────────────────────────────┐ (revisar de nuevo tras T-02, T-09, T-18)
T-02 ──► T-09, T-10, T-20
T-03 (independiente)
T-04 ──► T-05 ──► T-06 ──► T-07 ──► T-08 ──► T-19
                   │         ▲
                   └──► T-10 │
          T-12 ──────────────┘ (recomendado antes de T-07: Origin = dominio canónico)
T-05 + T-02 + T-04 ──► T-09 ──► T-22 (PERF-009)
T-11 ──► T-14 ──► T-15
T-04 ──► T-13, T-17 ──► T-14
T-18 ──► T-01 (política de cookies si se elimina SplashIntro)
```

Reglas aplicadas:
1. **Pruebas antes de modificar la operación crítica:** T-04 precede a todo cambio en `/api/contact` y `ContactForm`.
2. **Validación antes del flujo que depende de ella:** T-05 antes de T-06/T-07/T-09.
3. **Contrato de API estable antes de cambiar consumidores:** T-06 antes de T-07 (nuevos códigos) y T-10 (mensaje de timeout).
4. **Proveedor de correo definido antes de persistencia, timeouts y documentación:** T-02 antes de T-09, T-10, T-20.
5. **Dominio canónico antes de validar `Origin`:** T-12 antes de T-07.
6. **Cambios de `Reveal` antes de optimizar el bundle:** T-11 antes de T-14.

---

## 10. Plan de pruebas

| Tipo | Prueba | Comportamiento esperado | Hallazgos |
|---|---|---|---|
| Unitaria | `validation`: valores en el límite, límite+1, `urgency` heredada (`toString`, `__proto__`), tipos no string, `privacy` no booleano | 422 en entradas inválidas; nunca recorte silencioso; nunca excepción | SEC-004, FUNC-003, ARQ-001 |
| Unitaria | `email-template`: caracteres `<>&"'` en todos los campos | HTML escapado; texto plano íntegro | Regresión |
| Unitaria | `mailer`: selección SMTP / Resend / ninguno en dev y prod; timeouts; errores del proveedor | Camino correcto; 503 sin transporte en prod; logs sin objetos completos | SEC-010, SEC-011, PERF-002, CONF-002 |
| Unitaria | `rate-limit`: ventana, tope, poda, almacén compartido simulado | 6.ª petición → 429; poda no se ejecuta en cada petición | SEC-001, PERF-007 |
| Integración (ruta) | 200, 400 JSON inválido, 413 cuerpo grande, 415 `text/plain`, 403 `Origin` ajeno, 422, 429, 502, honeypot | Código y `error` según contrato | API-001, SEC-005, SEC-009 |
| Componente | `ContactForm` con `fetch` simulado por código y timeout | Mensaje específico; estado no queda en «Enviando…» | API-001, PERF-002, FIAB-003 |
| E2E | Rellenar y enviar el formulario (API simulada); CTA preseleccionan el tipo; anclas desde home y otras rutas; menú móvil (abrir, Tab, Escape, navegar) | Flujo completo correcto en móvil y escritorio | ARQ-002, ARQ-003, UX-001 |
| Regresión (resiliencia) | Bloquear `/_next/static/chunks/*` | Texto de la home visible en < 3 s | FIAB-001 |
| Integridad de datos | SMTP caído o cuota agotada simulada | Solicitud persistida y alerta emitida | FIAB-002 |
| Rendimiento | Lighthouse móvil (línea base y tras T-11/T-14); análisis de bundle; paint flashing | LCP/TBT mejoran o no empeoran; KB JS reducidos | PERF-001, 003, 004, 005 |
| Configuración | `curl -sI` de cabeceras CSP/HSTS/caché; canonical, `og:url` y sitemap; `git check-ignore`; `npm audit` | Valores esperados en producción | SEC-006, 008, 012, 013, PERF-006, FUNC-002 |
| Contenido | Búsqueda de `class="ph"` en HTML generado de rutas legales | 0 coincidencias | FUNC-001 |
| Despliegue y recuperación | Despliegue en preview → verificación → promoción; *instant rollback* de Vercel probado | Reversión en < 5 min | Todas |

No se requieren pruebas de autorización (no existen usuarios ni roles).

---

## 11. Estrategia de implementación segura

- **Cambios pequeños y aislados:** una tarea por rama y PR; no mezclar cambios de contenido legal, de API y de rendimiento.
- **Orden:** el de §13; primero tests de caracterización (T-04) que fijen el comportamiento actual antes de modificarlo.
- **Validación tras cada cambio:** `npm run typecheck`, tests, `next build` y despliegue de preview de Vercel; comprobar el formulario en preview **con credenciales de correo de prueba o simuladas**, nunca con cargas masivas contra producción.
- **Prevención de regresiones:** cada hallazgo corregido añade al menos un test que falle antes del arreglo.
- **Secretos:** rotar la contraseña de aplicación solo después de que la nueva credencial funcione en preview y producción (T-02); no imprimir valores en logs ni PR.
- **Copias de seguridad / migraciones:** no hay base de datos, por lo que no aplican hoy. Si T-09 introduce almacenamiento, definir esquema, retención y exportación antes de activarlo, y actualizar la política de privacidad.
- **Configuración en Vercel:** documentar el valor anterior de cada variable o regla de firewall antes de cambiarla.
- **Reversión:** *instant rollback* de Vercel al despliegue anterior; para variables de entorno, restaurar el valor previo y redesplegar. Mantener la credencial antigua sin revocar hasta confirmar la nueva.
- **Antes de promocionar a producción:** E2E verde en preview, cabeceras revisadas con `curl`, formulario probado manualmente en móvil.

---

## 12. Mejoras pendientes de verificación

**Sospechas que requieren pruebas o mediciones**
- PERF-001 / PERF-003 / PERF-005: magnitud real (Lighthouse, CrUX o Speed Insights; analizador de bundle).
- FIAB-001: reproducción en navegador bloqueando los chunks.
- SEC-001: cuota real de la cuenta de envío y si el firewall de Vercel está activo.
- SEC-003: prueba segura con `X-Forwarded-For` variable en producción (6 peticiones inválidas).
- SEC-009: confirmar `413` de Vercel con un cuerpo de 5 MB (opcional).
- CONF-002: comportamiento de Resend con el remitente por defecto.

**No confirmados**
- SEC-012: riesgo de preload no activo; depende de una futura decisión y de los subdominios existentes (DNS no revisado).
- FUNC-004: existencia de contrato de encargo con Google para la cuenta usada (revisión legal).

**Componentes no auditados o auditados parcialmente**
- Secciones visuales de la home (`Hero`, `HeroMockup`, `SolutionVisual`, `Method`, `Problems`, `Proof`, `Engagement`, `WhyParrax`, `Security`, `QuickServices`).
- Resto de `src/content/es.ts`.
- Accesibilidad real: lector de pantalla, navegación por teclado, contraste, diseño adaptable.
- Validez funcional de los scripts de `audit/`.
- Configuración de Vercel (variables *Sensitive*, firewall, región, accesos al proyecto) y DNS.

**Información necesaria para decidir**
- Datos legales del titular (T-01).
- Proveedor de correo y dominio de envío (T-02).
- Proveedor de almacenamiento compartido y CAPTCHA (T-08, T-09).
- Dominio primario deseado (`www` o apex) (T-12).
- Volumen esperado de solicitudes y necesidad de CRM.

---

## 13. Orden recomendado de trabajo

1. **T-01** — Completar y alinear aviso legal, privacidad y cookies (FUNC-001, FUNC-004).
2. **T-03** — Limpiar `.env.example` y ampliar `.gitignore` (SEC-007, SEC-008).
3. **T-02** — Migrar el envío a una credencial dedicada y revocar la contraseña de aplicación personal (SEC-002, CONF-002).
4. **T-12** — Fijar un dominio canónico único (FUNC-002).
5. **T-04** — Añadir tests de caracterización y CI (QA-001, CONF-001 parcial). *En curso: CI verde en `main`; pendiente de protección de rama.*
6. **T-05** — Esquema compartido del formulario y validación estricta (ARQ-001, SEC-004, FUNC-003).
7. **T-06** — Contrato de errores de la API y mensajes en el cliente (API-001, FIAB-003).
8. **T-10** — Timeouts en SMTP, Resend y cliente (PERF-002).
9. **T-07** — Rechazo de `Content-Type`, `Origin` y tamaño indebidos (SEC-005, SEC-009).
10. **T-09** — Persistencia de solicitudes, alertas y fallo explícito sin transporte (FIAB-002, SEC-010, SEC-011); actualizar T-01 si cambia la conservación.
11. **T-08** — Rate limit compartido, Turnstile y firewall (SEC-001, SEC-003, PERF-007).
12. **T-11** — Contenido visible sin hidratación y hero sin `Reveal`, con medición previa de LCP (FIAB-001, PERF-001).
13. **T-13** — Preselección del tipo por ancla (ARQ-003, OPT-002).
14. **T-19** — CSP, HSTS y escape de JSON-LD (SEC-006, SEC-012, SEC-015).
15. **T-17** — Utilidad única de scroll y foco del menú (ARQ-002, UX-001).
16. **T-14** — Medir y reducir JS del cliente (PERF-003, PERF-004, PERF-008).
17. **T-15** — Animaciones eficientes (PERF-005).
18. **T-16** — Caché de logos (PERF-006).
19. **T-18** — Centralizar contenido y decidir sobre `SplashIntro` (ARQ-004, ARQ-005).
20. **T-20** — README, `engines` y dependencias de desarrollo (CONF-001, SEC-013).
21. **T-21** — Salvaguarda de los scripts de carga (SEC-014).
22. **T-22** — Optimizaciones opcionales (PERF-009, PERF-010, OPT-001, OPT-003).
