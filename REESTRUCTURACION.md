# Reestructuración

## Organización

```
src/
├── app/                 Rutas App Router (páginas, metadata, robots, sitemap, api/contact)
├── components/
│   ├── layout/          Estructura global: Navbar, Footer, MobileCtaBar, SplashIntro
│   ├── sections/        Secciones de la home y sus subcomponentes (ContactForm, HeroMockup, SolutionVisual)
│   └── ui/              Primitivas reutilizables (barrel en index.ts; Icon se importa directo)
├── config/site.ts       Configuración global del sitio (siteUrl, calendarUrl)
├── content/es.ts        Textos del sitio (diccionario)
├── i18n/config.ts       Locales y getDictionary
├── lib/cn.ts            Utilidades genéricas
└── server/contact/      Lógica del formulario de contacto (solo servidor)
public/svg/              Logos servidos por la web (únicos referenciados por el código)
public/assets/logo-*.svg URLs heredadas (antes publicadas en JSON-LD); se conservan por compatibilidad
design/brand/            Archivos fuente de marca (PNG/SVG originales, no se sirven)
audit/                   Scripts de pruebas de carga (autocannon)
```

## Decisiones

- `siteUrl` sale de `i18n/config.ts` a `config/site.ts`: no depende del idioma. Se actualizaron sus 4 imports existentes.
- Eliminados `public/img/SVG/*` y las copias CamelCase de `public/assets/`: idénticas byte a byte a `public/svg/` y sin referencias.
- `img/` → `design/brand/`: evita confundirlo con recursos servidos.
- Las secciones se mantienen planas (sin carpeta por sección) para no fragmentar.

## Conexiones realizadas

- `app/api/contact/route.ts` es ahora solo el controlador y usa `src/server/contact/`:
  `rate-limit.ts`, `validation.ts`, `email-template.ts`, `mailer.ts`.
- `calendarUrl` vive en `config/site.ts` y lo importa `components/sections/Contact.tsx`.

## Pendiente

- `README.md` no documenta `SMTP_USER`, `SMTP_PASS` ni `CONTACT_FROM_EMAIL` (sí están en `.env.example`).
