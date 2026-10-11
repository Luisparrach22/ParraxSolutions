# Parrax Solutions

Sitio web corporativo de **Parrax Solutions**: partner tecnológico especializado en software a medida, automatizaciones, integraciones de sistemas y consultoría B2B.

Diseñado y construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.

---

## 🚀 Inicio rápido

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Entorno de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Verificación de tipos y build de producción
```bash
npm run typecheck
npm run build
```

---

## ⚙️ Variables de entorno

Copia el archivo `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

Configura tus claves:
- `NEXT_PUBLIC_SITE_URL`: URL canónica del sitio (ej. `https://parraxsolutions.com`).
- `NEXT_PUBLIC_CALENDAR_URL`: Enlace directo de reserva (Calendly / Cal.com).
- `RESEND_API_KEY`: Clave de API de Resend para envío de correos.
- `CONTACT_TO_EMAIL`: Correo de recepción de solicitudes (ej. `contacto@parraxsolutions.com`).

---

## 🌐 Despliegue en Vercel

1. Importa este repositorio en tu cuenta de [Vercel](https://vercel.com).
2. Configura las variables de entorno en el panel del proyecto.
3. El despliegue se realiza automáticamente con cada commit en la rama `main`.
