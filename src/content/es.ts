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
    title:
      "Parrax Solutions · Software a medida, automatización e integraciones para empresas",
    titleTemplate: "%s · Parrax Solutions",
    description:
      "Diseñamos y construimos sistemas de gestión, automatizaciones e integraciones a medida para pymes y medianas empresas en España y Venezuela. El código es tuyo, sin cuotas por usuario.",
    ogAlt: "Parrax Solutions — Software a medida que conecta tu operación",
  },

  a11y: {
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Parrax Solutions, ir al inicio",
  },

  nav: {
    links: [
      { label: "Soluciones", href: "#soluciones" },
      { label: "Método", href: "#metodo" },
      { label: "Casos", href: "#casos" },
      { label: "Seguridad", href: "#seguridad" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Agendar sesión estratégica",
    ctaShort: "Agendar sesión",
  },

  hero: {
    eyebrow: "Consultoría & desarrollo de software B2B",
    titleA: "Software a medida que conecta tu operación",
    titleB: "y elimina el trabajo manual.",
    subtitle:
      "Diseñamos y construimos el sistema que tu empresa necesita: tus herramientas hablan entre sí, los datos se introducen una sola vez y los cuellos de botella desaparecen. Para que puedas crecer sin contratar a alguien solo para copiar y pegar.",
    ctaPrimary: "Solicitar auditoría digital",
    ctaSecondary: "Ver soluciones",
    reassurance: [
      "Sin coste ni compromiso",
      "Respuesta en 24–48 h laborables",
      "El código es tuyo",
    ],
    mockup: {
      label: "Vista ilustrativa · datos de ejemplo",
      window: "operaciones.tuempresa.es",
      title: "Flujo de pedidos",
      live: "Sincronizado",
      kpiLabel: "Pedidos procesados sin intervención",
      kpiValue: "128",
      kpiDelta: "hoy",
      kpiSub: "Ejemplo de métrica que verías en tu panel",
      pipeline: [
        "Ingesta de datos",
        "Validación automatizada",
        "Facturación & CRM",
      ],
      pipelineSub: [
        "Tienda · TPV · Email",
        "Reglas de negocio",
        "Contabilidad · CRM",
      ],
      rows: [
        {
          ref: "PED-1042",
          text: "Pedido validado",
          status: "Completado",
          state: "done",
        },
        {
          ref: "FAC-118",
          text: "Factura sincronizada",
          status: "Completado",
          state: "done",
        },
        {
          ref: "CLI-381",
          text: "Cliente enlazado al CRM",
          status: "En curso",
          state: "active",
        },
      ],
    },
  },

  quickServices: {
    eyebrow: "Capacidades de un vistazo",
    title: "Qué podemos construir o resolver en tu empresa",
    subtitle:
      "Nuestras 6 líneas de especialización en desarrollo, automatización e ingeniería de software:",
    items: [
      {
        num: "01",
        title: "Sistemas de gestión a medida",
        badge: "ERPs & CRMs",
        summary:
          "Control total de pedidos, almacén, facturación y clientes en un sistema propio sin licencias mensuales.",
        href: "/soluciones/sistemas-de-gestion",
      },
      {
        num: "02",
        title: "Integraciones & APIs",
        badge: "Conexión de herramientas",
        summary:
          "Tus programas (tienda, TPV, banco, CRM y contabilidad) hablando entre sí sin copiar ni pegar datos.",
        href: "/soluciones/integraciones-y-apis",
      },
      {
        num: "03",
        title: "Automatización de procesos",
        badge: "Cero tareas manuales",
        summary:
          "Aprobaciones, avisos a clientes, facturación y generación de informes ejecutándose de forma automática.",
        href: "/soluciones/automatizacion-de-procesos",
      },
      {
        num: "04",
        title: "Apps web y móviles",
        badge: "Portales & Apps",
        summary:
          "Portales de autoservicio para tus clientes y aplicaciones móviles para operarios o equipos en campo.",
        href: "/soluciones/aplicaciones-web-y-moviles",
      },
      {
        num: "05",
        title: "Modernización de Excel",
        badge: "Fin del riesgo",
        summary:
          "Migración de hojas de cálculo críticas a bases de datos y software estable con histórico y copias de seguridad.",
        href: "/soluciones/modernizacion-de-procesos",
      },
      {
        num: "06",
        title: "Consultoría tecnológica",
        badge: "Criterio en cualquier stack",
        summary:
          "Segunda opinión experta e independiente sobre qué software elegir, auditar costes o planificar proyectos.",
        href: "/soluciones/consultoria-tecnologica",
      },
    ],
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
    eyebrow: "Soluciones",
    title: "Lo que construimos para tu empresa",
    intro:
      "Cada proyecto empieza por un problema de negocio concreto, no por una tecnología. Estas son las seis formas en que lo resolvemos.",
    more: "Ver más",
    items: [
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
        stack: [
          "Microsoft 365",
          "Google Workspace",
          "Odoo",
          "Holded",
          "Shopify",
          "Stripe",
          "HubSpot",
          "SQL",
          "Node.js",
          "Python",
          "React",
        ],
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
    ctaText:
      "En una sesión de 20 minutos revisamos tu situación y te decimos con honestidad si esto es lo que necesitas.",
    pages: {
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
    title: "Cinco fases. Sin sorpresas.",
    intro:
      "Sabes en cada momento qué estamos haciendo y qué vas a recibir. Cada fase termina con un entregable tangible que puedes revisar.",
    deliverableLabel: "Entregable",
    durationLabel: "Plazo orientativo",
    steps: [
      {
        name: "Diagnóstico",
        text: "Entendemos cómo trabajáis hoy, dónde se pierde el tiempo y cuánto cuesta.",
        deliverable: "Mapa de procesos y propuesta priorizada",
        duration: "1–2 semanas",
      },
      {
        name: "Diseño",
        text: "Definimos pantallas, flujos y datos con tu equipo antes de escribir código.",
        deliverable: "Prototipo navegable y alcance cerrado",
        duration: "2–3 semanas",
      },
      {
        name: "Desarrollo",
        text: "Construimos en ciclos cortos. Pruebas versiones reales desde las primeras semanas.",
        deliverable: "Versiones funcionales en entorno de pruebas",
        duration: "Según alcance",
      },
      {
        name: "Despliegue",
        text: "Migramos datos, formamos al equipo y arrancamos sin detener la operación.",
        deliverable: "Sistema en producción y documentación",
        duration: "1–2 semanas",
      },
      {
        name: "Soporte",
        text: "Mantenemos, medimos y mejoramos. El sistema evoluciona con tu empresa.",
        deliverable: "Plan de soporte y hoja de ruta",
        duration: "Continuo",
      },
    ],
  },

  why: {
    eyebrow: "Por qué Parrax",
    title: "Tu software. Tus datos. Tu decisión.",
    intro:
      "Trabajamos para que dependas de nosotros lo menos posible. Parece raro decirlo; es la razón por la que nuestros clientes deberían querer seguir trabajando con nosotros.",
    items: [
      {
        title: "El software y el código son tuyos",
        text: "Al terminar recibes el código fuente y la propiedad intelectual, por contrato.",
      },
      {
        title: "Sin cuotas por usuario",
        text: "Da acceso a todo tu equipo sin que la factura crezca con cada alta.",
      },
      {
        title: "Sin dependencia de proveedor",
        text: "Tecnologías estándar y bien documentadas. Si mañana quieres cambiar de equipo, puedes.",
      },
      {
        title: "Entrega documentada",
        text: "Manual técnico, guía de uso y sesión de traspaso. Nada se queda solo en nuestra cabeza.",
      },
      {
        title: "Hablas con quien lo construye",
        text: "Sin intermediarios. Las personas que diseñan y programan tu sistema son tu contacto directo.",
      },
    ],
    compare: {
      caption: "Software a medida con Parrax frente a una suscripción genérica",
      headers: ["", "Suscripción genérica", "Parrax"],
      rows: [
        ["Propiedad del código", "Del proveedor", "Tuya"],
        ["Coste al crecer el equipo", "Sube por usuario", "No cambia"],
        ["Se adapta a tu proceso", "Tú te adaptas", "Sí, por diseño"],
        ["Si decides cambiar", "Exportación limitada", "Te llevas todo"],
      ],
    },
  },

  engagement: {
    eyebrow: "Cómo trabajamos juntos",
    title: "Tres formas de colaborar",
    intro:
      "Elegimos el modelo según tu objetivo, no al revés. Si no lo tienes claro, lo decidimos juntos en la primera sesión.",
    bestFor: "Ideal para",
    cta: "Hablemos de tu caso",
    note: "Presupuesto cerrado y por escrito antes de empezar. Sin letra pequeña.",
    models: [
      {
        name: "Proyecto cerrado",
        summary:
          "Un objetivo concreto con alcance, plazo y precio definidos de antemano.",
        points: [
          "Alcance y plazo acordados por escrito",
          "Precio fijo antes de empezar",
          "Entregas por hitos que validas",
        ],
        bestFor: "Un sistema nuevo o una integración concreta.",
      },
      {
        name: "Equipo dedicado",
        summary:
          "Capacidad reservada cada mes para iniciativas que evolucionan.",
        points: [
          "Prioridades que ajustas en cada ciclo",
          "El mismo equipo de principio a fin",
          "Informe de avance periódico",
        ],
        bestFor: "Transformaciones en varias fases o producto propio.",
      },
      {
        name: "Mantenimiento y evolución",
        summary: "Para que lo que ya funciona siga funcionando y mejore.",
        points: [
          "Actualizaciones de seguridad",
          "Monitorización y copias de seguridad",
          "Bolsa de horas para mejoras",
        ],
        bestFor: "Sistemas en producción, nuestros o de terceros.",
      },
    ],
  },

  proof: {
    eyebrow: "Casos",
    title: "Preferimos enseñarte método a inventarnos logos",
    intro:
      "Parrax es una empresa nueva. Aquí publicaremos casos reales, con métricas verificadas y con el permiso de cada cliente. Ni antes ni de otra forma.",
    empty: {
      badge: "Próximamente",
      title: "Resultados reales con clientes",
      text: "Cada caso incluirá el problema de partida, lo que construimos y el impacto medido en tiempo, errores o coste.",
      fields: ["Situación de partida", "Qué construimos", "Impacto medido"],
    },
    audit: {
      badge: "Oferta de lanzamiento",
      title: "Auditoría digital gratuita",
      text: "Revisamos tus herramientas y procesos y te entregamos un informe con oportunidades concretas. Te lo quedas tanto si trabajamos juntos como si no.",
      points: [
        "Sesión de revisión de 60–90 minutos con tu equipo",
        "Informe con 3–5 mejoras priorizadas por impacto",
        "Estimación orientativa de esfuerzo para cada una",
        "Sin coste y sin compromiso",
      ],
      cta: "Solicitar auditoría digital",
    },
  },

  security: {
    eyebrow: "Seguridad y confianza",
    title: "Tus datos, tratados con el cuidado que exigirías tú",
    items: [
      {
        title: "Diseñado conforme al RGPD",
        text: "Privacidad desde el diseño, minimización de datos y contrato de encargo del tratamiento.",
        icon: "shield",
      },
      {
        title: "Control de accesos",
        text: "Permisos por rol y registro de las acciones sensibles. Cada persona ve solo lo que necesita.",
        icon: "key",
      },
      {
        title: "Copias de seguridad",
        text: "Copias automáticas y cifradas con restauración probada periódicamente.",
        icon: "backup",
      },
      {
        title: "Soporte dedicado",
        text: "Un canal directo con el equipo que conoce tu sistema y tiempos de respuesta pactados en contrato.",
        icon: "support",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos qué quieres resolver",
    intro:
      "Una sesión estratégica de 20 minutos, sin coste. Salimos de ella con un diagnóstico inicial y, si tiene sentido, una propuesta.",
    stepsTitle: "Qué pasa después",
    steps: [
      "Te respondemos en 24–48 h laborables.",
      "Sesión de 20 minutos por videollamada para entender tu caso.",
      "Si encaja, propuesta por escrito con alcance, plazo y precio.",
    ],
    calendar: {
      title: "¿Prefieres reservar directamente?",
      text: "Elige un hueco en nuestro calendario para una sesión de 20 minutos.",
      placeholder: "O completa el formulario a continuación para coordinar la llamada.",
      cta: "Agendar sesión de 20 min",
    },
    directEmail: "O escríbenos a",
    email: "contacto@parraxsolutions.com",
    form: {
      typeLegend: "Qué te interesa",
      types: [
        { value: "sesion", label: "Sesión estratégica (20 min)" },
        { value: "auditoria", label: "Auditoría digital gratuita" },
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

  footer: {
    tagline:
      "Software a medida, automatización e integraciones para empresas en España y Venezuela.",
    columns: [
      {
        title: "Soluciones",
        links: [
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
          { label: "Casos", href: "/#casos" },
          { label: "Seguridad", href: "/#seguridad" },
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
    location: "España · Venezuela",
    instagram: "https://instagram.com/parraxsolutions",
    instagramHandle: "@parraxsolutions",
    legalLine: "Parrax Solutions · Consultoría & desarrollo tecnológico",
    rights: "Todos los derechos reservados.",
  },
};
