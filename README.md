# Parrax Solutions

Sitio web corporativo de **Parrax Solutions**: partner tecnológico especializado en software a medida, automatizaciones, integraciones de sistemas y consultoría B2B.

Diseñado y construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.

---

## 🚀 Inicio rápido

Requiere Node.js 24.15 o superior (ver `engines` en `package.json`).

### 1. Instalación de dependencias
```bash
npm ci
```

### 2. Entorno de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Verificación de tipos, pruebas y build de producción
```bash
npm run typecheck
npm test            # Vitest (npm run test:watch en modo interactivo)
npm run build
```

La CI (`.github/workflows/ci.yml`) ejecuta estos tres pasos en cada push a `main` y en cada pull request.
Las pruebas simulan SMTP y `fetch`: nunca envían correos reales.

---

## ⚙️ Variables de entorno

Copia el archivo `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

Variables disponibles:

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio (canonical, sitemap, Open Graph). Debe ser el dominio que responde sin redirección. |
| `NEXT_PUBLIC_CALENDAR_URL` | Enlace de reserva (Cal.com / Calendly). Opcional. |
| `SMTP_USER`, `SMTP_PASS` | Opción 1 de envío: SMTP de Gmail. Si están definidas, tienen prioridad sobre Resend. |
| `RESEND_API_KEY` | Opción 2 de envío: API de Resend (requiere `CONTACT_TO_EMAIL`). |
| `CONTACT_TO_EMAIL` | Destinatario de las solicitudes (con SMTP, por defecto `SMTP_USER`). Admite varias direcciones separadas por comas con Resend. |
| `CONTACT_FROM_EMAIL` | Remitente con Resend. Obligatorio en la práctica: el remitente por defecto (`onboarding@resend.dev`) solo entrega al propietario de la cuenta. |

En **producción**, si no hay ningún transporte de correo configurado, el formulario responde con error en lugar de simular un envío. En desarrollo, sin credenciales, la solicitud solo se registra en el log.

Nunca subas `.env.local` ni ningún otro `.env*`: `.gitignore` solo permite versionar `.env.example`.

---

## 🌐 Despliegue en Vercel

1. Importa este repositorio en tu cuenta de [Vercel](https://vercel.com).
2. Configura las variables de entorno en el panel del proyecto (márcalas como *Sensitive* las que sean credenciales).
3. El despliegue se realiza automáticamente con cada commit en la rama `main`.
