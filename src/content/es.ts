/**
 * Contenido en español neutro (España y Latinoamérica). Registro: "tú" profesional,
 * primera persona del singular (Luis trabaja solo), frases cortas, resultados
 * antes que tecnología. Sin países concretos ni localismos.
 *
 * Convención de placeholders: cualquier texto entre [corchetes] se renderiza
 * como un marcador visible (componente <Rich />) para que nadie publique
 * por error un dato no confirmado.
 */

import type { ServiceDetail, StorePage } from "./types";

export const es = {
  meta: {
    siteName: "Parrax Solutions",
    title: "Parrax Solutions · Webs, tiendas online y automatización para empresas",
    titleTemplate: "%s · Parrax Solutions",
    description:
      "Webs, tiendas online y automatización de procesos para empresas de cualquier país, en remoto. Precio cerrado, el código es tuyo y sin cuotas de plataforma.",
    ogAlt: "Parrax Solutions: webs, tiendas online y automatización para empresas",
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
    problemTitle: "El problema típico",
    exampleLabel: "Ejemplo",
    approachTitle: "Cómo lo resuelvo",
    timelineTitle: "Plazo orientativo",
    faqTitle: "Preguntas frecuentes",
    packagesLink: "Ver paquetes y precios",
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
        problem: {
          "title": "Una web que existe, pero no genera contactos",
          "text": "Muchas webs de empresa se hicieron hace años con una plantilla y no se han tocado desde entonces. Cargan lento en el teléfono, no explican con claridad qué vendes y el formulario termina en un correo que nadie revisa. La gente entra, no entiende qué hacer y se va.",
          "example": "Una empresa de servicios paga anuncios que llevan a su página de inicio. El visitante encuentra cinco menús, ningún precio orientativo y un formulario de diez campos. Casi nadie llega a enviarlo, y los pocos mensajes que llegan se pierden en la bandeja de entrada."
        },
        approach: [
          {
            "title": "Entiendo a quién le vendes",
            "text": "Antes de diseñar hablamos de tus clientes: qué buscan, qué dudas tienen y qué les hace decidirse. Con eso defino la estructura de la página y el mensaje principal."
          },
          {
            "title": "Diseño y escribo pensando en el contacto",
            "text": "Cada sección responde a una pregunta del visitante y lleva a una acción clara: reservar, llamar o escribir. Te propongo los textos y los ajustamos juntos."
          },
          {
            "title": "Construyo una web rápida y medible",
            "text": "La desarrollo con código propio, optimizada para el teléfono y para buscadores, con el formulario conectado a tu email o tu CRM para que ningún contacto se pierda."
          },
          {
            "title": "La publico y te enseño a editarla",
            "text": "Me encargo del dominio, la publicación y las redirecciones si vienes de otra web. Te explico cómo cambiar textos e imágenes sin depender de mí."
          }
        ],
        timeline: "El plazo depende del número de páginas y de si los textos ya están listos. Te lo doy por escrito en la propuesta, junto con el precio cerrado. [TODO_LUIS: plazo orientativo]",
        faq: [
          {
            "q": "¿Puedo editar la web yo mismo?",
            "a": "Sí. Te dejo la web preparada para que cambies textos e imágenes sin tocar código, y te enseño a hacerlo en la sesión de entrega."
          },
          {
            "q": "¿Tú escribes los textos?",
            "a": "Te propongo la estructura y los textos a partir de lo que hablamos. Tú aportas el conocimiento de tu negocio y revisas cada sección antes de publicar."
          },
          {
            "q": "¿Qué pasa con mi web actual?",
            "a": "Si ya tienes una, reviso qué páginas reciben visitas para mantener sus direcciones o redirigirlas, y así no perder lo que ya tienes posicionado en buscadores."
          }
        ],
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
        problem: {
          "title": "La operación repartida entre hojas de cálculo y correos",
          "text": "Cuando una empresa crece, cada área resuelve su parte como puede: una hoja de cálculo para pedidos, otra para stock, el correo para avisar a almacén y un programa aparte para facturar. Funciona mientras pocas personas lo usan, pero cada vez cuesta más saber qué está pasando y quién cambió qué.",
          "example": "Un distribuidor recibe pedidos por teléfono y por email. Alguien los apunta en una hoja compartida, otra persona revisa el stock en otro archivo y, al final del día, se pasan a mano al programa de facturación. Si alguien se equivoca de fila, el error aparece semanas después."
        },
        approach: [
          {
            "title": "Mapeo cómo trabajas hoy",
            "text": "Reviso contigo cada paso del proceso, las hojas que usas y las reglas que hay detrás, incluidas las que nadie ha escrito."
          },
          {
            "title": "Diseño el sistema alrededor de tu proceso",
            "text": "Defino los módulos, los roles y los permisos que necesitas, sin funciones de relleno. Validas un prototipo antes de que empiece a construir."
          },
          {
            "title": "Construyo por módulos",
            "text": "Empiezo por la parte que más trabajo manual te quita y voy sumando módulos. Puedes usar cada uno en cuanto está listo."
          },
          {
            "title": "Migro tus datos y acompaño el arranque",
            "text": "Paso los datos de tus hojas actuales al sistema, compruebo que cuadran y acompaño a tu equipo en las primeras semanas de uso."
          }
        ],
        timeline: "Un sistema de gestión se construye por fases. En la propuesta te detallo qué incluye cada fase, su plazo y su precio, para que decidas hasta dónde llegar. [TODO_LUIS: plazo orientativo de una primera fase]",
        faq: [
          {
            "q": "¿Por qué no usar un ERP del mercado?",
            "a": "Si un ERP estándar encaja con tu forma de trabajar, te lo diré. Un sistema a medida tiene sentido cuando tu proceso es parte de tu ventaja o cuando pagas licencias por muchas funciones que no usas."
          },
          {
            "q": "¿Qué pasa con los datos que ya tengo?",
            "a": "Los migro desde tus hojas de cálculo o tu programa actual y compruebo que los totales coinciden antes de dejar de usar lo antiguo."
          },
          {
            "q": "¿Puede crecer después?",
            "a": "Sí. El código es tuyo y está documentado, así que se pueden añadir módulos más adelante, conmigo o con otra persona."
          }
        ],
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
        problem: {
          "title": "Herramientas que no comparten datos",
          "text": "La tienda online sabe qué se vendió, la pasarela de pago sabe qué se cobró, el CRM sabe quién es el cliente y contabilidad necesita todo eso junto. Si esas herramientas no se hablan, alguien de tu equipo hace de puente exportando e importando archivos.",
          "example": "Cada lunes, una persona descarga las ventas de la tienda online, las cruza en una hoja con los cobros de la pasarela de pago y las sube al programa de contabilidad. Le lleva la mañana entera, y cualquier devolución descuadra los números."
        },
        approach: [
          {
            "title": "Inventario de herramientas y datos",
            "text": "Reviso qué herramientas usas, qué datos tiene cada una y cuáles necesitan llegar a las demás. También compruebo qué permite la API de cada herramienta."
          },
          {
            "title": "Diseño el flujo de datos",
            "text": "Defino qué dato viaja de dónde a dónde, cuándo y qué pasa si falla. Lo revisas antes de que empiece a construir."
          },
          {
            "title": "Construyo la integración con control de errores",
            "text": "Cada sincronización queda registrada, con reintentos automáticos y un aviso cuando algo necesita revisión humana."
          },
          {
            "title": "La pongo en marcha en paralelo",
            "text": "Durante un tiempo conviven el proceso manual y el automático, para comprobar que los datos coinciden antes de apagar el manual."
          }
        ],
        timeline: "Una integración entre dos o tres herramientas suele encajar en un Sprint de automatización de 2\u2060–\u20603 semanas. Si hay más sistemas implicados, lo divido en fases con precio cerrado cada una.",
        faq: [
          {
            "q": "¿Necesito cambiar de herramientas?",
            "a": "Normalmente no. La idea es que sigas usando lo que ya conoces y que los datos se muevan solos entre esas herramientas."
          },
          {
            "q": "¿Qué pasa si una herramienta no tiene API?",
            "a": "Busco la alternativa más fiable: exportaciones programadas o conectores oficiales. Si no hay una opción fiable, te lo digo antes de empezar."
          },
          {
            "q": "¿Quién vigila que la integración siga funcionando?",
            "a": "La integración avisa cuando algo falla. Si quieres que yo me encargue de revisarla y ajustarla, está el mantenimiento mensual opcional."
          },
          {
            "q": "¿Es seguro conectar mis herramientas?",
            "a": "Uso los accesos oficiales de cada herramienta con los permisos mínimos necesarios, y las claves se guardan fuera del código. Puedes revocarlas en cualquier momento desde cada herramienta."
          }
        ],
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
        problem: {
          "title": "Horas de trabajo que siempre se hacen igual",
          "text": "En casi todas las empresas hay tareas que se repiten cada día o cada semana con los mismos pasos: copiar un pedido, enviar un aviso, preparar un informe, pedir una aprobación. No requieren criterio, pero sí tiempo, y dependen de que alguien se acuerde de hacerlas.",
          "example": "Cuando entra un pedido en la tienda online, alguien lo copia en el programa de facturación, genera la factura, la envía por email y avisa a almacén. Son pocos minutos por pedido, pero con decenas de pedidos al día se convierte en el trabajo de una persona."
        },
        approach: [
          {
            "title": "Elegimos un proceso concreto",
            "text": "En la sesión inicial identificamos qué tarea repetitiva te cuesta más tiempo o más errores. Empezamos por esa, sin intentar automatizarlo todo a la vez."
          },
          {
            "title": "Lo dibujo paso a paso",
            "text": "Documento el proceso tal y como se hace hoy, con sus excepciones, y te propongo cómo quedaría automatizado."
          },
          {
            "title": "Lo automatizo con registro y avisos",
            "text": "Construyo el flujo para que se ejecute solo, deje constancia de cada paso y te avise cuando algo requiera a una persona."
          },
          {
            "title": "Te lo entrego documentado",
            "text": "Al terminar tienes el flujo en producción, la documentación y una sesión de traspaso con tu equipo, con 30 días de garantía."
          }
        ],
        timeline: "Cada proceso se trabaja como un Sprint de automatización: 2\u2060–\u20603 semanas y precio cerrado. Si después quieres automatizar otro proceso, se plantea como un sprint nuevo.",
        faq: [
          {
            "q": "¿Qué procesos se pueden automatizar?",
            "a": "Los que siguen siempre los mismos pasos y usan datos que ya están en alguna herramienta: pedidos, facturas, avisos, informes, altas de clientes o aprobaciones."
          },
          {
            "q": "¿Y si ya probé herramientas sin código?",
            "a": "Son una buena opción para flujos sencillos. Cuando el proceso tiene excepciones, volumen o varias herramientas implicadas, suele hacer falta una solución más robusta, y eso es lo que construyo."
          },
          {
            "q": "¿Qué pasa si el proceso cambia?",
            "a": "Como recibes el código y la documentación, se puede adaptar. Puedes encargármelo de forma puntual o incluirlo en el mantenimiento mensual."
          },
          {
            "q": "¿Cómo sé que la automatización funciona?",
            "a": "Cada ejecución queda registrada: puedes ver qué se procesó, cuándo y con qué resultado. Si algo falla, recibes un aviso con el detalle para decidir qué hacer."
          }
        ],
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
        problem: {
          "title": "Clientes y equipo que dependen de llamadas y mensajes",
          "text": "Cuando la información solo vive en tu oficina, los clientes tienen que llamar o escribir para saber cómo va su pedido, y el equipo que trabaja fuera envía fotos y notas por mensajería que luego alguien pasa a limpio.",
          "example": "Una empresa de mantenimiento recibe cada día llamadas de clientes que preguntan cuándo llega el técnico. Los técnicos, a su vez, envían los partes de trabajo por mensajería, y alguien en la oficina los copia a una hoja de cálculo para poder facturar."
        },
        approach: [
          {
            "title": "Defino quién la usa y para qué",
            "text": "Hablo con las personas que van a usar la app, clientes o equipo, para entender qué necesitan ver y hacer, y desde qué dispositivo."
          },
          {
            "title": "Diseño una interfaz sencilla",
            "text": "Te enseño un prototipo navegable antes de programar, para validar las pantallas con quien las va a usar a diario."
          },
          {
            "title": "La construyo como app web",
            "text": "Funciona en el navegador de cualquier computadora o teléfono, sin pasar por tiendas de aplicaciones, y se conecta con tus sistemas actuales."
          },
          {
            "title": "La pongo en marcha",
            "text": "Publico la app, configuro los accesos y te dejo la documentación. El mantenimiento posterior es opcional."
          }
        ],
        timeline: "Depende del número de pantallas y de las conexiones con otros sistemas. Lo divido en fases con plazo y precio cerrados en la propuesta. [TODO_LUIS: plazo orientativo]",
        faq: [
          {
            "q": "¿Es una app que se descarga de una tienda?",
            "a": "No. Es una app web: se abre desde el navegador y se puede añadir a la pantalla de inicio del teléfono. Así evitas el proceso de publicación en tiendas de aplicaciones."
          },
          {
            "q": "¿Mis clientes necesitan usuario y contraseña?",
            "a": "Depende de lo que vayan a ver. Para datos privados, como pedidos o documentos, el acceso es seguro y cada cliente ve solo lo suyo."
          },
          {
            "q": "¿Se conecta con lo que ya uso?",
            "a": "Sí, ese es el objetivo: que la app lea y escriba en tu sistema de gestión, tu CRM o tus hojas actuales, sin duplicar datos."
          },
          {
            "q": "¿Cuántos usuarios puede tener?",
            "a": "No pagas por usuario: puedes dar acceso a todo tu equipo y a tus clientes sin que el coste crezca con cada alta. El alojamiento se dimensiona según el uso real."
          }
        ],
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
        problem: {
          "title": "Un archivo crítico del que depende todo",
          "text": "Muchas empresas tienen una hoja de cálculo o un programa antiguo que nadie se atreve a tocar. Acumula años de fórmulas, macros y reglas que solo entiende una persona, no guarda histórico de cambios y, si se corrompe, no hay una copia reciente.",
          "example": "Una empresa calcula sus presupuestos con un Excel de quince pestañas lleno de macros. Solo una persona sabe actualizarlo. Cuando esa persona no está, los presupuestos se retrasan y nadie se atreve a cambiar un precio."
        },
        approach: [
          {
            "title": "Entiendo la lógica actual",
            "text": "Reviso el archivo o el programa a fondo y documento cada regla, incluidas las que nadie escribió nunca."
          },
          {
            "title": "Diseño el sistema que lo sustituye",
            "text": "Mantengo el proceso que tu equipo ya conoce y le añado permisos, histórico de cambios y copias de seguridad."
          },
          {
            "title": "Migro los datos con validación",
            "text": "Paso los datos al nuevo sistema y compruebo que los resultados coinciden con los del archivo original."
          },
          {
            "title": "Hago convivir los dos durante un tiempo",
            "text": "El sistema nuevo y el antiguo funcionan en paralelo hasta que compruebas que todo cuadra. Así la operación no se detiene."
          }
        ],
        timeline: "Depende de la complejidad del archivo o del programa. Después de revisarlo te doy un plazo y un precio cerrados por escrito. [TODO_LUIS: plazo orientativo]",
        faq: [
          {
            "q": "¿Voy a tener que aprender a trabajar de otra forma?",
            "a": "Lo menos posible. El objetivo es mantener el proceso que funciona y quitarle el riesgo, sin obligarte a cambiar tu forma de trabajar."
          },
          {
            "q": "¿Qué pasa con los años de datos históricos?",
            "a": "Se migran al nuevo sistema y se validan. Si hay datos que conviene dejar archivados, te propongo cómo conservarlos."
          },
          {
            "q": "¿Y si el programa antiguo ya no tiene soporte?",
            "a": "Es una de las situaciones más habituales. Extraigo los datos y la lógica que siguen siendo útiles y los paso a un sistema mantenible."
          },
          {
            "q": "¿Cuánto tiempo conviven los dos sistemas?",
            "a": "El necesario para que compruebes que los resultados coinciden en casos reales. Lo acordamos en la propuesta, y el sistema antiguo no se apaga hasta que tú lo confirmas."
          }
        ],
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
        problem: {
          "title": "Decisiones tecnológicas sin una opinión independiente",
          "text": "Elegir un software o un proveedor, o decidir si construir algo a medida, es una decisión cara de corregir. Muchas veces la única opinión disponible es la de quien te lo quiere vender.",
          "example": "Una empresa recibe tres presupuestos muy distintos para renovar su sistema de pedidos y no sabe compararlos: cada proveedor propone una tecnología diferente y ninguno explica qué pasa con los datos si después quiere cambiar."
        },
        approach: [
          {
            "title": "Reviso lo que tienes",
            "text": "Analizo tus herramientas, tus procesos y lo que pagas en licencias para entender qué funciona, qué sobra y qué falta."
          },
          {
            "title": "Te doy opciones con pros y contras",
            "text": "Te explico las alternativas en lenguaje claro: qué construir, qué comprar y qué dejar como está, con el coste aproximado de cada una."
          },
          {
            "title": "Priorizo por impacto",
            "text": "Te entrego una hoja de ruta ordenada según lo que más trabajo o dinero te ahorra, para que avances paso a paso."
          },
          {
            "title": "Te acompaño en la decisión",
            "text": "Si lo necesitas, reviso las propuestas de proveedores y te ayudo a hacer las preguntas correctas antes de firmar."
          }
        ],
        timeline: "Una revisión con hoja de ruta se plantea con alcance y precio cerrados. [TODO_LUIS: plazo y formato de la consultoría]",
        faq: [
          {
            "q": "¿Me vas a recomendar siempre algo a medida?",
            "a": "No. Si una herramienta estándar resuelve tu problema, te lo diré, aunque eso signifique que no construya nada."
          },
          {
            "q": "¿Trabajas con cualquier tecnología?",
            "a": "Reviso tu situación sea cual sea tu tecnología actual. Para construir uso tecnologías web modernas, pero la recomendación se basa en lo que encaja con tu negocio."
          },
          {
            "q": "¿Qué recibo al final?",
            "a": "Un documento con el diagnóstico, las opciones y una hoja de ruta priorizada, más una sesión para resolver tus dudas."
          },
          {
            "q": "¿La consultoría me obliga a contratar el desarrollo contigo?",
            "a": "No. La hoja de ruta es tuya y puedes ejecutarla conmigo, con otro proveedor o con tu propio equipo."
          },
          {
            "q": "¿Puedes revisar un presupuesto que ya tengo?",
            "a": "Sí. Reviso la propuesta, el alcance y las condiciones, y te digo qué preguntas hacer antes de firmar."
          }
        ],
      },
    } as Record<
      string,
      ServiceDetail
    >,
  },

  /** Página /servicios/tiendas-online (intención comercial, sin país). */
  storePage: {
    "slug": "tiendas-online",
    "metaTitle": "Tienda online a medida para pymes, sin cuotas mensuales",
    "metaDescription": "Desarrollo de tiendas online a medida para pymes: catálogo, carrito, pagos y gestión de pedidos. El código es tuyo y no pagas cuotas mensuales de plataforma.",
    "kicker": "Tiendas online a medida",
    "title": "Tu tienda online a medida, sin cuotas mensuales de plataforma",
    "lead": "Desarrollo tiendas online para pymes con catálogo, carrito, pagos online y gestión de pedidos. El código queda a tu nombre y no pagas una suscripción a una plataforma por vender.",
    "includes": [
      "Catálogo de productos con fotos, variantes y stock",
      "Carrito y pago con pasarela de pago online",
      "Panel para gestionar pedidos y productos",
      "Emails de confirmación y avisos al cliente",
      "Opcional: envíos por zona y conexión con tu programa de facturación"
    ],
    "fit": [
      "Pagas varias suscripciones y aplicaciones cada mes para que tu tienda funcione",
      "Pasas a mano los pedidos de la tienda a tu programa de facturación",
      "Quieres una tienda propia que puedas adaptar sin depender de una plataforma"
    ],
    "outcome": "Una tienda que es tuya, conectada con tu forma de trabajar y sin cuota mensual de plataforma.",
    "problem": {
      "title": "Pagar cada mes por una tienda que no es tuya",
      "text": "Las plataformas de tienda online son rápidas para empezar, pero cobran una suscripción mensual, a menudo una comisión por venta y extras por cada función que necesitas. Además, la tienda vive en su sistema: si quieres irte, te llevas los productos en un archivo, pero no la tienda.",
      "example": "Una pyme empieza con una plataforma de suscripción. Con el tiempo añade aplicaciones de pago para envíos, facturas y avisos, cada una con su cuota. Acaba pagando varias suscripciones al mes y sigue pasando los pedidos a mano a su programa de facturación."
    },
    "approach": [
      {
        "title": "Definimos qué vendes y cómo",
        "text": "Productos, variantes, formas de pago, zonas de envío e impuestos. Con eso elegimos el paquete que encaja: Tienda online o Tienda + operación."
      },
      {
        "title": "Diseño la tienda con tu marca",
        "text": "Una tienda clara y rápida en el teléfono, con fichas de producto que responden a las dudas de tus clientes antes de comprar."
      },
      {
        "title": "La conecto con tu operación",
        "text": "Pasarela de pago, emails de confirmación y panel de pedidos. Si lo necesitas, también envíos por zona, avisos automáticos y conexión con facturación."
      },
      {
        "title": "La publico y te enseño a gestionarla",
        "text": "Dejo la tienda en producción, te enseño a gestionar productos y pedidos, y recibes el código y los accesos."
      }
    ],
    "timeline": "El plazo depende del número de productos y de las integraciones. Lo fijo en la propuesta, junto con el precio cerrado. [TODO_LUIS: plazo orientativo]",
    "faq": [
      {
        "q": "¿De verdad no hay cuotas mensuales?",
        "a": "No pagas una suscripción a una plataforma por tener la tienda. Sí hay costes de terceros que pagas directamente a cada proveedor: el alojamiento, el dominio y la comisión de la pasarela de pago por cada cobro."
      },
      {
        "q": "¿Podré añadir y editar productos yo mismo?",
        "a": "Sí. El panel de gestión te permite crear productos, cambiar precios y stock y gestionar pedidos sin tocar código."
      },
      {
        "q": "¿Qué pasarela de pago puedo usar?",
        "a": "La que mejor funcione en tu país y con tus clientes. La elegimos juntos al definir el proyecto, según las comisiones y los métodos de pago que necesites."
      },
      {
        "q": "¿Puedo migrar mi tienda actual?",
        "a": "Sí. Paso productos, clientes y pedidos desde tu plataforma actual y mantengo las direcciones importantes para no perder posicionamiento en buscadores."
      }
    ]
  } as StorePage,

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
      more: "Cómo trabajo una tienda online a medida",
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
      "Webs, tiendas online y automatización para empresas, estén donde estén.",
    columns: [
      {
        title: "Soluciones",
        links: [
          { label: "Tiendas online", href: "/servicios/tiendas-online" },
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
