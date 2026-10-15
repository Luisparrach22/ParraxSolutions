/**
 * Contenido en español (es-ES). Registro: "tú" profesional, frases cortas,
 * resultados antes que tecnología.
 *
 * Convención de placeholders: cualquier texto entre [corchetes] se renderiza
 * como un marcador visible (componente <Rich />) para que nadie publique
 * por error un dato no confirmado.
 */

export const es = {
  meta: {
    siteName: "Parrax Solutions",
    title: "Parrax Solutions · Páginas web y software a medida para empresas",
    titleTemplate: "%s · Parrax Solutions",
    description:
      "Páginas web, landing pages, sistemas de gestión, automatizaciones e integraciones a medida para empresas de cualquier país. El código es tuyo, sin cuotas por usuario.",
    ogAlt: "Parrax Solutions — Software a medida que conecta tu operación",
  },

  a11y: {
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Parrax Solutions, ir al inicio",
    language: "Idioma",
    mainNav: "Principal",
    breadcrumb: "Miga de pan",
    instagram: "Instagram de Parrax Solutions",
  },

  nav: {
    links: [
      { label: "Servicios", href: "#soluciones" },
      { label: "Método", href: "#metodo" },
      { label: "Por qué Parrax", href: "#por-que" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Agendar sesión estratégica",
    ctaShort: "Agendar sesión",
    ctaSub: "Sesión de 20 min, sin coste",
    writeUs: "O escríbenos a",
    menuTitle: "Navegación",
    noCommitment: "Sin compromiso",
    reviewTitle: "¿Quieres revisar tu operativa?",
    reviewText: "Solicita una auditoría digital gratuita en 20 minutos.",
    reviewLink: "Solicitar auditoría",
  },

  hero: {
    eyebrow: "Webs y software a medida para empresas",
    titleA: "Webs que traen clientes y software",
    titleB: "que elimina el trabajo manual.",
    subtitle:
      "Diseñamos tu página web o landing page y construimos el sistema que conecta tu operación. Un solo equipo, de la primera visita a la factura.",
    ctaPrimary: "Solicitar auditoría digital",
    ctaSecondary: "Ver servicios",
    reassurance: [
      "Sin coste ni compromiso",
      "Respuesta en 24–48 h laborables",
      "El código es tuyo",
    ],
    mockup: {
      windowControls: "Controles de ventana",
      label: "Vista ilustrativa · datos de ejemplo",
      window: "panel.tuempresa.com",
      eyebrow: "Panel",
      title: "De tu web al presupuesto, sin tocar nada",
      live: "Sincronizado",
      pipeline: ["Formulario web", "CRM", "Presupuesto"],
      pipelineSub: [
        "Tu web o landing page",
        "Cliente creado al instante",
        "Generado y enviado",
      ],
      rows: [
        {
          ref: "WEB-214",
          text: "Nueva solicitud desde la landing",
          status: "Recibida",
          state: "done",
        },
        {
          ref: "CRM-381",
          text: "Cliente creado automáticamente",
          status: "Completado",
          state: "done",
        },
        {
          ref: "PRE-118",
          text: "Presupuesto enviado al cliente",
          status: "En curso",
          state: "active",
        },
      ],
    },
  },

  problems: {
    eyebrow: "Te suena",
    title: "Lo que frena a una empresa que funciona",
    items: [
      {
        title: "Tu operación vive en Excel",
        text: "Versiones duplicadas, fórmulas que se rompen y una sola persona que sabe cómo funciona el archivo.",
        icon: "sheet",
      },
      {
        title: "Los mismos datos, tecleados tres veces",
        text: "Del pedido a la factura y de la factura a contabilidad. Cada copia manual es un error esperando a ocurrir.",
        icon: "copy",
      },
      {
        title: "Herramientas que no se hablan",
        text: "La tienda, el TPV, el CRM y el banco van por separado. La foto completa del negocio no la tiene nadie.",
        icon: "disconnect",
      },
      {
        title: "Licencias que crecen con cada alta",
        text: "Pagas por usuario y por mes funciones que no usas, y no puedes adaptar ninguna a tu forma de trabajar.",
        icon: "license",
      },
    ],
  },

  solutions: {
    eyebrow: "Servicios",
    title: "Lo que hacemos",
    intro:
      "Cada proyecto empieza por un problema de negocio concreto, no por una tecnología.",
    more: "Ver más",
    items: [
      {
        slug: "paginas-web-y-landing-pages",
        kicker: "Páginas web y landing pages",
        title: "Una web que convierte visitas en clientes",
        text: "Webs corporativas y landing pages para campañas: rápidas, claras, preparadas para Google y conectadas con tu CRM o tu email.",
        visual: "web",
      },
      {
        slug: "sistemas-de-gestion",
        kicker: "Sistemas de gestión a medida",
        title: "Toda tu operación en un único sistema",
        text: "Pedidos, inventario, clientes y facturación en una herramienta diseñada alrededor de cómo trabajáis, no al revés.",
        visual: "system",
      },
      {
        slug: "integraciones-y-apis",
        kicker: "Integraciones & APIs",
        title: "Tus herramientas, por fin conectadas",
        text: "Ventas, cobros, contabilidad y CRM compartiendo datos automáticamente. Cada dato se introduce una sola vez.",
        visual: "integration",
      },
      {
        slug: "automatizacion-de-procesos",
        kicker: "Automatización de flujos",
        title: "Que las tareas repetitivas se hagan solas",
        text: "Aprobaciones, avisos, informes y traspasos de datos ejecutados sin intervención y con registro de cada paso.",
        visual: "automation",
      },
      {
        slug: "aplicaciones-web-y-moviles",
        kicker: "Apps web y móviles",
        title: "Una app propia para tu equipo y tus clientes",
        text: "Portales de cliente, apps para el equipo de campo y herramientas internas en navegador, iOS y Android.",
        visual: "apps",
      },
      {
        slug: "modernizacion-de-procesos",
        kicker: "Modernización de procesos heredados",
        title: "Del Excel crítico a un sistema fiable",
        text: "Migramos hojas de cálculo y sistemas antiguos a una herramienta con permisos, histórico y copias, sin parar la operación.",
        visual: "legacy",
      },
      {
        slug: "consultoria-tecnologica",
        kicker: "Consultoría tecnológica",
        title: "Decisiones técnicas con criterio, en cualquier stack",
        text: "Revisamos lo que ya tienes, te ayudamos a elegir y trabajamos con la tecnología que mejor encaje, no con la que nos resulte cómoda.",
        visual: "consulting",
      },
    ],
  },

  /** Contenido de las páginas /soluciones/[slug] */
  solutionDetails: {
    back: "Todas las soluciones",
    includesTitle: "Qué incluye",
    fitTitle: "Encaja si…",
    outcomeTitle: "Qué cambia en tu día a día",
    ctaTitle: "¿Lo vemos aplicado a tu caso?",
    ctaPrimary: "Agendar sesión estratégica",
    ctaSecondary: "Conocer nuestro método",
    ctaText:
      "En una sesión de 20 minutos revisamos tu situación y te decimos con honestidad si esto es lo que necesitas.",
    pages: {
      "paginas-web-y-landing-pages": {
        lead: "Diseñamos y desarrollamos tu web corporativa o la landing page de tu próxima campaña, pensadas para que quien llega entienda qué ofreces y te contacte.",
        includes: [
          "Diseño a medida con tu marca, sin plantillas genéricas",
          "Textos y estructura orientados a que el visitante te contacte",
          "Carga rápida, adaptada a móvil y optimizada para buscadores",
          "Formularios conectados con tu email, CRM o sistema de gestión",
        ],
        fit: [
          "Tu web actual no transmite lo que vales o no genera contactos",
          "Vas a lanzar una campaña y necesitas una página que convierta",
          "Quieres editar contenidos sin depender de nadie",
        ],
        outcome:
          "Una web que trabaja por ti: cada visita tiene un camino claro hacia el contacto.",
      },
      "sistemas-de-gestion": {
        lead: "Un sistema de gestión hecho para tu empresa sustituye la combinación de hojas de cálculo, correos y programas sueltos con la que se gestiona hoy la operación.",
        includes: [
          "Módulos de pedidos, inventario, clientes, proveedores o lo que tu negocio necesite",
          "Roles y permisos: cada persona ve y edita solo lo que le corresponde",
          "Panel con los indicadores que de verdad usas para decidir",
          "Migración de tus datos actuales y formación al equipo",
        ],
        fit: [
          "Gestionas la operación con varias hojas de cálculo compartidas",
          "Tu ERP genérico te obliga a trabajar como él quiere",
          "Necesitas saber en tiempo real qué está pasando sin pedir informes",
        ],
        outcome:
          "Un único lugar para trabajar, con datos fiables y sin depender de que una persona concreta esté disponible.",
      },
      "integraciones-y-apis": {
        lead: "Conectamos las herramientas que ya usas para que compartan información sin que nadie tenga que exportar, copiar y pegar.",
        includes: [
          "Conexión entre tienda online, TPV, pasarela de pago, contabilidad y CRM",
          "Sincronización automática con control de errores y reintentos",
          "Registro de cada operación para saber qué pasó y cuándo",
          "APIs propias si necesitas que terceros se conecten contigo",
        ],
        fit: [
          "Exportas datos de una herramienta para importarlos en otra",
          "Tus cifras no cuadran entre sistemas",
          "Quieres conservar tus herramientas pero que trabajen juntas",
        ],
        outcome:
          "Los datos viajan solos entre sistemas y los números cuadran a la primera.",
      },
      "automatizacion-de-procesos": {
        lead: "Identificamos las tareas repetitivas que consumen horas de tu equipo y las convertimos en procesos automáticos y trazables.",
        includes: [
          "Mapa de procesos con el tiempo que consume cada tarea manual",
          "Automatización de aprobaciones, avisos, informes y traspasos de datos",
          "Alertas cuando algo requiere intervención humana",
          "Registro completo para auditoría interna",
        ],
        fit: [
          "Tu equipo dedica horas a tareas que siempre se hacen igual",
          "Los procesos dependen de que alguien se acuerde de hacerlos",
          "Has probado herramientas sin código y se te han quedado cortas",
        ],
        outcome:
          "Tu equipo dedica su tiempo a lo que requiere criterio, no a mover datos.",
      },
      "aplicaciones-web-y-moviles": {
        lead: "Diseñamos y desarrollamos aplicaciones web y móviles para uso interno o para tus clientes, conectadas con el resto de tus sistemas.",
        includes: [
          "Diseño de interfaz centrado en quien la va a usar a diario",
          "Aplicación web, iOS y Android a partir de una misma base cuando encaja",
          "Portales de cliente con acceso seguro a pedidos, documentos o incidencias",
          "Publicación en tiendas de aplicaciones y mantenimiento",
        ],
        fit: [
          "Tus clientes te llaman o escriben para consultar cosas que podrían ver solos",
          "Tu equipo de campo trabaja con papel o mensajería",
          "Necesitas una herramienta interna que no existe en el mercado",
        ],
        outcome:
          "Menos llamadas, menos papel y una experiencia profesional con tu marca.",
      },
      "modernizacion-de-procesos": {
        lead: "Convertimos la hoja de cálculo crítica o el programa antiguo del que depende tu empresa en un sistema moderno, seguro y mantenible.",
        includes: [
          "Análisis de la lógica actual, incluidas las reglas que nadie documentó",
          "Migración de datos con validación y periodo de convivencia",
          "Permisos, histórico de cambios y copias de seguridad",
          "Documentación para que el conocimiento no dependa de una persona",
        ],
        fit: [
          "Un archivo Excel es crítico y te da miedo que se rompa",
          "Tu programa actual ya no tiene soporte o nadie sabe mantenerlo",
          "Quieres modernizar sin detener la operación",
        ],
        outcome:
          "El mismo proceso que ya conoces, sin el riesgo y con espacio para crecer.",
      },
      "consultoria-tecnologica": {
        lead: "Te acompañamos en decisiones tecnológicas con una visión independiente: qué construir, qué comprar y qué dejar como está.",
        includes: [
          "Auditoría de herramientas, procesos y costes de licencias",
          "Hoja de ruta tecnológica priorizada por impacto en el negocio",
          "Apoyo en la selección de proveedores y revisión de propuestas",
          "Trabajo sobre tu stack actual, sea cual sea",
        ],
        fit: [
          "Tienes que tomar una decisión tecnológica y no quieres equivocarte",
          "Pagas por muchas herramientas y no sabes cuáles aportan valor",
          "Necesitas una segunda opinión técnica sin conflicto de interés",
        ],
        outcome:
          "Decisiones claras, justificadas y alineadas con tu presupuesto.",
      },
    } as Record<
      string,
      { lead: string; includes: string[]; fit: string[]; outcome: string }
    >,
  },

  method: {
    eyebrow: "Método",
    title: "Cuatro fases. Sin sorpresas.",
    intro:
      "Da igual que sea una landing page, un sistema de gestión o una automatización: trabajamos siempre igual. Cada fase termina con algo concreto que revisas antes de seguir.",
    deliverableLabel: "Entregable",
    steps: [
      {
        name: "Entender",
        text: "Analizamos tu negocio, tus clientes y tus procesos para saber qué necesitas de verdad y qué no.",
        deliverable: "Propuesta con alcance, plazo y precio cerrado",
      },
      {
        name: "Diseñar",
        text: "Damos forma a la solución contigo: cómo se verá, cómo funcionará y cómo encaja con lo que ya usas.",
        deliverable: "Diseño o prototipo que validas antes de construir",
      },
      {
        name: "Construir",
        text: "Desarrollamos por etapas y te enseñamos avances reales desde el principio, para corregir el rumbo a tiempo.",
        deliverable: "Versiones que puedes probar",
      },
      {
        name: "Lanzar y acompañar",
        text: "Lo ponemos en marcha, formamos a tu equipo y seguimos a tu lado para mantenerlo y mejorarlo.",
        deliverable: "Proyecto funcionando y documentado",
      },
    ],
  },

  why: {
    eyebrow: "Por qué Parrax",
    title: "Tu software. Tus datos. Tu decisión.",
    intro: "Trabajamos para que dependas de nosotros lo menos posible.",
    items: [
      {
        title: "El código es tuyo",
        text: "Recibes el código fuente y la propiedad intelectual, por contrato. Si mañana quieres cambiar de equipo, puedes.",
      },
      {
        title: "Sin cuotas por usuario",
        text: "Da acceso a todo tu equipo sin que la factura crezca con cada alta.",
      },
      {
        title: "Hablas con quien lo construye",
        text: "Sin intermediarios. Quien diseña y programa tu proyecto es tu contacto directo.",
      },
      {
        title: "Seguro y conforme al RGPD",
        text: "Permisos por rol, copias de seguridad cifradas y privacidad desde el diseño.",
      },
    ],
    compare: {
      caption: "Software a medida con Parrax frente a una suscripción genérica",
      mobileHeading: "Frente a una suscripción tradicional",
      genericShort: "Suscripción",
      criterion: "Criterio",
      headers: ["", "Suscripción genérica", "Parrax"],
      rows: [
        ["Propiedad del código", "Del proveedor", "Tuya"],
        ["Coste al crecer el equipo", "Sube por usuario", "No cambia"],
        ["Se adapta a tu proceso", "Tú te adaptas", "Sí, por diseño"],
        ["Si decides cambiar", "Exportación limitada", "Te llevas todo"],
      ],
    },
  },

  audit: {
    badge: "Oferta de lanzamiento",
    title: "Auditoría digital gratuita",
    text: "Antes de hablar de presupuestos queremos conocerte. En una primera charla vemos qué te frena y si tiene sentido trabajar juntos. El análisis a fondo llega después, cuando decidas seguir.",
    points: [
      "20 minutos por videollamada o teléfono",
      "Nos cuentas tu caso y te damos una opinión sincera",
      "Si encaja, propuesta por escrito con precio cerrado",
    ],
    cta: "Solicitar auditoría digital",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos qué quieres resolver",
    intro:
      "Una primera charla de 20 minutos, sin coste ni compromiso. Nos cuentas qué necesitas y te decimos con sinceridad si podemos ayudarte.",
    stepsTitle: "Qué pasa después",
    steps: [
      "Te escribimos en 24–48 h laborables para buscar un hueco que te venga bien.",
      "Hablamos 20 minutos por videollamada o teléfono para conocer tu caso.",
      "Si encaja, te enviamos una propuesta por escrito con alcance, plazo y precio.",
      "Si decides seguir, analizamos tu caso a fondo y nos reunimos con regularidad para revisar avances.",
    ],
    calendar: {
      title: "¿Prefieres reservar directamente?",
      text: "Elige un hueco en nuestro calendario para una sesión de 20 minutos.",
      cta: "Agendar sesión de 20 min",
    },
    directEmail: "O escríbenos a",
    instagramLabel: "Instagram de Parrax Solutions",
    form: {
      typeLegend: "Qué te interesa",
      types: [
        { value: "sesion", label: "Sesión estratégica" },
        { value: "auditoria", label: "Auditoría digital gratuita (20 min)" },
      ],
      name: "Nombre",
      namePh: "Nombre y apellido",
      company: "Empresa",
      companyPh: "Nombre de tu empresa",
      email: "Email de trabajo",
      emailPh: "tu@empresa.es",
      message: "¿Qué quieres resolver?",
      messagePh:
        "Por ejemplo: «Gestionamos los pedidos en tres Excel y facturamos a mano en otro programa».",
      urgencyLegend: "¿Con qué urgencia?",
      urgency: [
        { value: "explorando", label: "Estoy explorando" },
        { value: "3-meses", label: "En los próximos 3 meses" },
        { value: "urgente", label: "Es urgente" },
      ],
      privacyA: "He leído y acepto la",
      privacyLink: "política de privacidad",
      privacyB: ". Usaremos tus datos solo para responder a tu solicitud.",
      submit: "Enviar solicitud",
      sending: "Enviando…",
      required: "obligatorio",
      errors: {
        name: "Escribe tu nombre para saber a quién responder.",
        company: "Indica el nombre de tu empresa.",
        email:
          "Revisa el email: parece que falta algo (ejemplo: tu@empresa.es).",
        message: "Cuéntanos en al menos 20 caracteres qué quieres resolver.",
        urgency: "Elige una opción de urgencia.",
        privacy: "Necesitamos tu consentimiento para poder responderte.",
        summary: "Revisa los campos marcados antes de enviar.",
        server:
          "No hemos podido enviar el formulario. Inténtalo de nuevo o escríbenos por email.",
        rateLimited:
          "Hemos recibido varias solicitudes seguidas desde tu conexión. Espera unos minutos o escríbenos por email.",
        validation:
          "Algunos datos no son válidos. Revisa los campos e inténtalo de nuevo.",
        network:
          "No hemos podido conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.",
      },
      success: {
        title: "Solicitud recibida",
        text: "Gracias. Te escribiremos en 24–48 h laborables para concretar la sesión.",
        again: "Enviar otra solicitud",
      },
    },
  },

  notFound: {
    title: "Página no encontrada",
    code: "Error 404",
    heading: "Esta página no está conectada a nada.",
    text: "Puede que el enlace haya cambiado o que la dirección tenga un error. Te llevamos de vuelta a donde sí hay sistemas funcionando.",
    home: "Volver al inicio",
    solutions: "Ver soluciones",
  },

  legal: {
    backHome: "← Volver al inicio",
  },

  footer: {
    heading: "Pie de página",
    tagline:
      "Páginas web, software a medida y automatización para empresas, estén donde estén.",
    columns: [
      {
        title: "Soluciones",
        links: [
          {
            label: "Páginas web y landing pages",
            href: "/soluciones/paginas-web-y-landing-pages",
          },
          {
            label: "Sistemas de gestión",
            href: "/soluciones/sistemas-de-gestion",
          },
          {
            label: "Integraciones & APIs",
            href: "/soluciones/integraciones-y-apis",
          },
          {
            label: "Automatización",
            href: "/soluciones/automatizacion-de-procesos",
          },
          {
            label: "Apps web y móviles",
            href: "/soluciones/aplicaciones-web-y-moviles",
          },
          {
            label: "Modernización",
            href: "/soluciones/modernizacion-de-procesos",
          },
          { label: "Consultoría", href: "/soluciones/consultoria-tecnologica" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Método", href: "/#metodo" },
          { label: "Por qué Parrax", href: "/#por-que" },
          { label: "Auditoría gratuita", href: "/#auditoria" },
          { label: "Contacto", href: "/#contacto" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Aviso legal", href: "/aviso-legal" },
          { label: "Política de privacidad", href: "/politica-de-privacidad" },
          { label: "Política de cookies", href: "/cookies" },
        ],
      },
    ],
    location: "España · Venezuela · Proyectos en todo el mundo",
    legalLine: "Parrax Solutions · Consultoría & desarrollo tecnológico",
    rights: "Todos los derechos reservados.",
  },
};
