/**
 * Contenido en español neutro (España y Latinoamérica). Registro: "tú" profesional,
 * primera persona del singular (Luis trabaja solo), frases cortas, resultados
 * antes que tecnología. Sin países concretos ni localismos.
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
    newTab: "(se abre en una pestaña nueva)",
  },

  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Método", href: "#metodo" },
      { label: "Quién soy", href: "#quien" },
      { label: "Preguntas", href: "#preguntas" },
    ],
    cta: "Reservar sesión gratuita",
    ctaShort: "Reservar sesión",
    ctaSub: "Sesión de 20 min, sin coste",
    writeUs: "O escríbeme a",
    menuTitle: "Navegación",
    noCommitment: "Sin compromiso",
    reviewTitle: "¿Prefieres escribirme?",
    reviewText: "Cuéntame tu caso por el formulario y te respondo en 24\u2060–\u206048 h laborables.",
    reviewLink: "Ir al formulario",
  },

  hero: {
    eyebrow: "Webs, tiendas online y automatización",
    titleA: "Webs y tiendas online que venden.",
    titleB: "Automatización para dejar de copiar y pegar.",
    subtitle:
      "Construyo tu web o tu tienda online con carrito, pagos y gestión de pedidos, y automatizo los procesos que hoy haces a mano. Precio cerrado, el código es tuyo y sin cuotas de plataforma.",
    ctaPrimary: "Reservar sesión de 20 min",
    ctaSecondary: "Ver servicios",
    reassurance: [
      "Sesión estratégica gratuita",
      "Respuesta en 24\u2060–\u206048 h laborables",
      "El código es tuyo",
    ],
    mockup: {
      windowControls: "Controles de ventana",
      label: "Vista ilustrativa · datos de ejemplo",
      window: "panel.tuempresa.com",
      eyebrow: "Panel",
      title: "Del pedido a la factura, sin teclear nada",
      live: "Sincronizado",
      pipeline: ["Tienda online", "Facturación", "Aviso"],
      pipelineSub: [
        "Pedido pagado",
        "Factura generada al instante",
        "Enviado al cliente",
      ],
      rows: [
        {
          ref: "PED-1042",
          text: "Pedido pagado en la tienda online",
          status: "Recibido",
          state: "done",
        },
        {
          ref: "FAC-381",
          text: "Factura creada automáticamente",
          status: "Completado",
          state: "done",
        },
        {
          ref: "ENV-118",
          text: "Aviso de envío al cliente",
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
        text: "La tienda online, la caja, el CRM y el banco van por separado. La foto completa del negocio no la tiene nadie.",
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
    eyebrow: "Proyectos a medida",
    title: "También puedo ayudarte con…",
    intro:
      "Para cuando lo que necesitas va más allá de una web o de un proceso concreto. Cada proyecto empieza por un problema de negocio, no por una tecnología.",
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
        text: "Pedidos, inventario, clientes y facturación en una herramienta diseñada alrededor de cómo trabaja tu equipo, no al revés.",
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
        kicker: "Apps web y portales",
        title: "Una app web propia para tu equipo y tus clientes",
        text: "Portales de cliente y herramientas internas que funcionan en el navegador, desde la computadora o el teléfono.",
        visual: "apps",
      },
      {
        slug: "modernizacion-de-procesos",
        kicker: "Modernización de procesos heredados",
        title: "Del Excel crítico a un sistema fiable",
        text: "Migro hojas de cálculo y sistemas antiguos a una herramienta con permisos, histórico y copias, sin parar la operación.",
        visual: "legacy",
      },
      {
        slug: "consultoria-tecnologica",
        kicker: "Consultoría tecnológica",
        title: "Decisiones técnicas con criterio, en cualquier stack",
        text: "Reviso lo que ya tienes y te ayudo a elegir la tecnología que mejor encaja con tu negocio y tu presupuesto.",
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
    ctaPrimary: "Reservar sesión gratuita",
    ctaSecondary: "Ver cómo trabajo",
    ctaText:
      "En una sesión de 20 minutos reviso tu situación y te digo con honestidad si esto es lo que necesitas.",
    pages: {
      "paginas-web-y-landing-pages": {
        lead: "Diseño y desarrollo tu web corporativa o la landing page de tu próxima campaña, pensadas para que quien llega entienda qué ofreces y te contacte.",
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
        lead: "Conecto las herramientas que ya usas para que compartan información sin que nadie tenga que exportar, copiar y pegar.",
        includes: [
          "Conexión entre tienda online, punto de venta, pasarela de pago, contabilidad y CRM",
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
        lead: "Identifico las tareas repetitivas que consumen horas de tu equipo y las convierto en procesos automáticos y trazables.",
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
        lead: "Diseño y desarrollo aplicaciones web para uso interno o para tus clientes, conectadas con el resto de tus sistemas.",
        includes: [
          "Diseño de interfaz centrado en quien la va a usar a diario",
          "Aplicación web que funciona en cualquier navegador, también desde el teléfono",
          "Portales de cliente con acceso seguro a pedidos, documentos o incidencias",
          "Puesta en marcha y mantenimiento opcional",
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
        lead: "Convierto la hoja de cálculo crítica o el programa antiguo del que depende tu empresa en un sistema moderno, seguro y mantenible.",
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
        lead: "Te acompaño en decisiones tecnológicas con una visión independiente: qué construir, qué comprar y qué dejar como está.",
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
      "Da igual que sea una landing page, una tienda online o una automatización: trabajo siempre igual. Cada fase termina con algo concreto que revisas antes de seguir.",
    deliverableLabel: "Entregable",
    steps: [
      {
        name: "Entender",
        text: "Analizo tu negocio, tus clientes y tus procesos para saber qué necesitas de verdad y qué no.",
        deliverable: "Propuesta con alcance, plazo y precio cerrado",
      },
      {
        name: "Diseñar",
        text: "Doy forma a la solución contigo: cómo se verá, cómo funcionará y cómo encaja con lo que ya usas.",
        deliverable: "Diseño o prototipo que validas antes de construir",
      },
      {
        name: "Construir",
        text: "Desarrollo por etapas y te enseño avances reales desde el principio, para corregir el rumbo a tiempo.",
        deliverable: "Versiones que puedes probar",
      },
      {
        name: "Lanzar y acompañar",
        text: "Lo pongo en marcha, explico a tu equipo cómo usarlo y, si lo necesitas, me encargo del mantenimiento.",
        deliverable: "Proyecto funcionando y documentado",
      },
    ],
  },

  why: {
    eyebrow: "Por qué Parrax",
    title: "Tu software. Tus datos. Tu decisión.",
    intro: "Trabajo para que dependas de mí lo menos posible.",
    items: [
      {
        title: "El código es tuyo",
        text: "Recibes el código fuente y la propiedad intelectual, por contrato. Si mañana prefieres que lo mantenga otra persona, puedes.",
      },
      {
        title: "Sin cuotas por usuario",
        text: "Da acceso a todo tu equipo sin que la factura crezca con cada alta.",
      },
      {
        title: "Hablas con quien lo construye",
        text: "Sin intermediarios: yo diseño y programo tu proyecto, y soy tu contacto directo.",
      },
      {
        title: "Seguridad y privacidad desde el diseño",
        text: "Permisos por rol, copias de seguridad y acceso a datos personales limitado a quien lo necesita.",
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

  services: {
    eyebrow: "Servicios",
    title: "Dos formas de empezar",
    intro:
      "Elige por lo que más te urge hoy: vender online o quitarte trabajo manual de encima. En los dos casos, alcance y precio cerrados por escrito antes de empezar.",
    from: "Desde",
    perMonth: "/mes",
    priceMissing: "[TODO_LUIS: precio]",
    localCurrency: "Presupuesto en tu moneda local.",
    timelineLabel: "Plazo orientativo",
    includesLabel: "Incluye",
    shops: {
      title: "Webs y tiendas online",
      text: "Tres paquetes de alcance cerrado y sin cuotas mensuales de plataforma: la tienda es tuya.",
      guarantee: "Precio cerrado por escrito. Dos rondas de cambios incluidas. El código es tuyo.",
      packages: [
        {
          key: "landing",
          name: "Landing o web de presentación",
          forWho: "Para presentar tu negocio o lanzar una campaña con una página clara que convierta visitas en contactos.",
          includes: [
            "Diseño a medida con tu marca",
            "Textos y estructura orientados al contacto",
            "Formulario conectado a tu email o CRM",
            "Carga rápida, adaptada al teléfono y lista para Google",
          ],
          timeline: "[TODO_LUIS: plazo]",
          cta: "Reservar sesión",
        },
        {
          key: "store",
          name: "Tienda online",
          forWho: "Para vender tus productos online con tu propia tienda, sin pagar cuotas mensuales de plataforma.",
          includes: [
            "Catálogo de productos con fotos, variantes y stock",
            "Carrito y pago con pasarela de pago online",
            "Panel para gestionar pedidos y productos",
            "Emails de confirmación de pedido",
          ],
          timeline: "[TODO_LUIS: plazo]",
          cta: "Reservar sesión",
        },
        {
          key: "storeOps",
          name: "Tienda + operación",
          forWho: "Para tiendas que ya venden o van a vender volumen y no quieren gestionar cada pedido a mano.",
          includes: [
            "Todo lo de Tienda online",
            "Envíos con tarifas por zona",
            "Avisos automáticos al cliente y a tu equipo",
            "Conexión con tu programa de facturación",
          ],
          timeline: "[TODO_LUIS: plazo]",
          cta: "Reservar sesión",
        },
      ],
    },
    automation: {
      title: "Automatización e integraciones",
      text: "Cuando el negocio ya funciona pero depende de copiar datos de un sitio a otro.",
      sprint: {
        name: "Sprint de automatización",
        title: "Un proceso manual, automatizado en 2\u2060–\u20603 semanas",
        text: "Elegimos juntos un proceso concreto que hoy te cuesta horas y lo dejo funcionando de forma automática, con registro de cada paso y avisos si algo falla.",
        exampleLabel: "Ejemplo típico",
        example:
          "Cada pedido de la tienda online se copia a mano en el programa de facturación. Al terminar el sprint, la factura se genera sola y el cliente recibe el aviso de envío.",
        facts: [
          { label: "Plazo", value: "2\u2060–\u20603 semanas" },
          { label: "Precio", value: "Cerrado por escrito" },
        ],
        deliverablesLabel: "Entregables",
        deliverables: [
          "Flujo automatizado funcionando en producción",
          "Documentación de cómo funciona y qué hacer si falla",
          "Sesión de traspaso con tu equipo",
          "30 días de garantía tras la entrega",
        ],
        cta: "Reservar sesión de 20 min",
      },
      maintenance: {
        name: "Mantenimiento mensual (opcional)",
        text: "Una bolsa de horas al mes para vigilar las automatizaciones, ajustar lo que cambie en tus herramientas y añadir mejoras pequeñas. [TODO_LUIS: horas incluidas y condiciones de permanencia]",
      },
    },
  },

  projects: {
    eyebrow: "Proyectos",
    title: "Proyectos que puedes revisar",
    intro:
      "Todavía no publico casos de clientes, y no voy a poner logos que no tengo. Estos son proyectos propios y demostraciones que puedes abrir y probar.",
    problemLabel: "Problema",
    builtLabel: "Qué construí",
    techLabel: "Tecnología",
    open: "Ver proyecto",
    linkMissing: "[TODO_LUIS: enlace]",
    imageMissing: "[TODO_LUIS: captura]",
    imageAlt: "Captura de",
    items: [
      {
        key: "store",
        tag: "Proyecto propio",
        name: "Tienda online [TODO_LUIS: nombre]",
        problem: "[TODO_LUIS: qué problema resolvía la tienda]",
        built: "Tienda online completa: catálogo, carrito, pagos y gestión de pedidos. [TODO_LUIS: detalles]",
        tech: "[TODO_LUIS: tecnologías]",
      },
      {
        key: "site",
        tag: "Proyecto propio",
        name: "parraxsolutions.com",
        problem: "Necesitaba una web propia rápida, bilingüe y con un formulario de contacto fiable, sin depender de un constructor de webs.",
        built: "Esta misma web: español e inglés, formulario con validación y protección antispam, y páginas de servicio preparadas para buscadores.",
        tech: "Next.js, React, TypeScript, Tailwind CSS, Vercel",
      },
      {
        key: "automation",
        tag: "Proyecto demostrativo",
        name: "Del pedido a la factura",
        problem: "Los pedidos de una tienda online se pasan a mano al programa de facturación, con errores y horas perdidas cada semana.",
        built: "Demostración de un flujo que crea la factura y avisa al cliente en cuanto entra un pedido pagado. [TODO_LUIS: construir la demo o quitar esta tarjeta]",
        tech: "[TODO_LUIS: tecnologías]",
      },
    ],
  },

  about: {
    eyebrow: "Quién está detrás",
    title: "Hablas conmigo de principio a fin",
    role: "Fundador de Parrax Solutions",
    photoAlt: "Luis Parra, fundador de Parrax Solutions",
    photoMissing: "[TODO_LUIS: foto]",
    paragraphs: [
      "Soy Luis Parra. Diseño, programo y mantengo cada proyecto yo mismo: quien responde a tu mensaje es quien va a construirlo.",
      "Vengo del entorno industrial, donde un proceso mal resuelto se nota cada día en la operación. Por eso empiezo por entender cómo trabaja tu negocio antes de proponer ninguna tecnología.",
      "Hago webs y tiendas online, y automatizo las tareas que hoy se hacen a mano: pedidos, avisos, informes y conexiones entre herramientas.",
      "Trabajo en remoto con empresas de cualquier país, en español o en inglés, por videollamada.",
    ],
    linkedin: "Ver mi perfil en LinkedIn",
    linkedinMissing: "[TODO_LUIS: enlace a LinkedIn]",
    newTab: "(se abre en una pestaña nueva)",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que suelen preguntarme antes de empezar",
    items: [
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del alcance, pero siempre trabajo con precio cerrado por escrito antes de empezar. En Servicios tienes el precio desde de cada paquete; después de la sesión de 20 minutos te envío la propuesta exacta en tu moneda local.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "Un Sprint de automatización dura de 2 a 3 semanas. Para webs y tiendas, cada paquete tiene un plazo orientativo, y el plazo definitivo queda fijado en la propuesta.",
      },
      {
        q: "¿El código es mío?",
        a: "Sí. Al terminar recibes el código fuente y los accesos, y la propiedad queda recogida en el contrato. No pagas cuotas por usuario por lo que construyo. Los servicios de terceros que uses, como el alojamiento, el dominio o la pasarela de pago, los pagas directamente a cada proveedor.",
      },
      {
        q: "¿Qué pasa si quiero cambios?",
        a: "Los paquetes de web y tienda incluyen dos rondas de cambios. Si después necesitas más, te los presupuesto aparte o los incluimos en el mantenimiento mensual.",
      },
      {
        q: "¿Trabajas con empresas de mi país?",
        a: "Sí. Trabajo en remoto con empresas de cualquier país, por videollamada, en español o en inglés.",
      },
      {
        q: "¿Cómo funcionan los pagos internacionales?",
        a: "[TODO_LUIS: métodos de pago aceptados, moneda de facturación y calendario de pagos]",
      },
      {
        q: "¿Qué pasa después de entregar?",
        a: "Te explico cómo funciona todo y te dejo la documentación. Las automatizaciones tienen 30 días de garantía. Después puedes contratar el mantenimiento mensual o seguir por tu cuenta, porque todo es tuyo.",
      },
      {
        q: "¿Necesito saber de tecnología?",
        a: "No. Tú me explicas cómo funciona tu negocio y yo me encargo de la parte técnica, sin jerga. Al final te enseño a usar lo que he construido.",
      },
      {
        q: "¿Qué herramientas usas?",
        a: "Para webs y tiendas, Next.js, React y TypeScript, desplegadas en Vercel o en el alojamiento que prefieras. Para automatizar, conecto las herramientas que ya usas a través de sus APIs. [TODO_LUIS: confirma tus herramientas de automatización]",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntame qué quieres resolver",
    intro:
      "Una primera charla de 20 minutos, sin coste ni compromiso. Me cuentas qué necesitas y te digo con sinceridad si puedo ayudarte.",
    stepsTitle: "Qué pasa después",
    steps: [
      "Te escribo en 24\u2060–\u206048 h laborables para buscar un hueco que te venga bien.",
      "Hablamos 20 minutos por videollamada para conocer tu caso.",
      "Si encaja, te envío una propuesta por escrito con alcance, plazo y precio cerrado.",
      "Si decides seguir, empezamos con las revisiones de avance que fijemos en la propuesta.",
    ],
    calendar: {
      title: "¿Prefieres reservar directamente?",
      text: "Elige un hueco en mi calendario para una sesión de 20 minutos.",
      cta: "Reservar sesión de 20 min",
    },
    directEmail: "O escríbeme a",
    instagramLabel: "Instagram de Parrax Solutions",
    form: {
      needLegend: "¿Qué necesitas?",
      optional: "opcional",
      needs: [
        { value: "web", label: "Web o landing" },
        { value: "tienda", label: "Tienda online" },
        { value: "automatizacion", label: "Automatizar un proceso" },
        { value: "otro", label: "Otro" },
      ],
      honeypot: "Deja este campo vacío",
      name: "Nombre",
      namePh: "Nombre y apellido",
      company: "Empresa",
      companyPh: "Nombre de tu empresa",
      email: "Email de trabajo",
      emailPh: "tu@empresa.com",
      message: "¿Qué quieres resolver?",
      messagePh:
        "Por ejemplo: «Recibo los pedidos de la tienda online y los paso a mano al programa de facturación».",
      urgencyLegend: "¿Con qué urgencia?",
      urgency: [
        { value: "explorando", label: "Estoy explorando" },
        { value: "3-meses", label: "En los próximos 3 meses" },
        { value: "urgente", label: "Es urgente" },
      ],
      privacyA: "He leído y acepto la",
      privacyLink: "política de privacidad",
      privacyB: ". Usaré tus datos solo para responder a tu solicitud.",
      submit: "Enviar solicitud",
      sending: "Enviando…",
      required: "obligatorio",
      errors: {
        name: "Escribe tu nombre para saber a quién responder.",
        company: "Indica el nombre de tu empresa.",
        email:
          "Revisa el email: parece que falta algo (ejemplo: tu@empresa.com).",
        message: "Cuéntame en al menos 20 caracteres qué quieres resolver.",
        urgency: "Elige una opción de urgencia.",
        privacy: "Necesito tu consentimiento para poder responderte.",
        summary: "Revisa los campos marcados antes de enviar.",
        server:
          "No se ha podido enviar el formulario. Inténtalo de nuevo o escríbeme por email.",
        rateLimited:
          "Han llegado varias solicitudes seguidas desde tu conexión. Espera unos minutos o escríbeme por email.",
        validation:
          "Algunos datos no son válidos. Revisa los campos e inténtalo de nuevo.",
        network:
          "No se ha podido conectar con el servidor. Comprueba tu conexión e inténtalo de nuevo.",
      },
      success: {
        title: "Solicitud recibida",
        text: "Gracias. Te escribiré en 24\u2060–\u206048 h laborables para concretar la sesión.",
        again: "Enviar otra solicitud",
      },
    },
  },

  notFound: {
    title: "Página no encontrada",
    code: "Error 404",
    heading: "Esta página no está conectada a nada.",
    text: "Puede que el enlace haya cambiado o que la dirección tenga un error. Vuelve a donde sí hay sistemas funcionando.",
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
            label: "Apps web y portales",
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
          { label: "Servicios", href: "/#servicios" },
          { label: "Proyectos", href: "/#proyectos" },
          { label: "Método", href: "/#metodo" },
          { label: "Preguntas frecuentes", href: "/#preguntas" },
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
    location: "Trabajo en remoto con empresas de cualquier país",
    legalLine: "Parrax Solutions · Consultoría & desarrollo tecnológico",
    rights: "Todos los derechos reservados.",
  },
};
