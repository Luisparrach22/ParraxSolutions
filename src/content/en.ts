/**
 * English content (en). Same shape as es.ts: the `Dictionary` type enforces it.
 * Register: direct, professional, first person singular (Luis works alone),
 * short sentences, results before technology. No specific countries.
 *
 * Placeholder convention: any text between [brackets] renders as a visible
 * marker (<Rich /> component) so nobody publishes an unconfirmed detail by mistake.
 */
import type { Dictionary } from "@/i18n/config";

export const en: Dictionary = {
  meta: {
    siteName: "Parrax Solutions",
    title: "Parrax Solutions · Websites and custom software for businesses",
    titleTemplate: "%s · Parrax Solutions",
    description:
      "Custom websites, landing pages, management systems, automations and integrations for businesses in any country. You own the code, with no per-user fees.",
    ogAlt: "Parrax Solutions — Custom software that connects your operation",
  },

  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Parrax Solutions, go to home page",
    language: "Language",
    mainNav: "Main",
    breadcrumb: "Breadcrumb",
    instagram: "Parrax Solutions on Instagram",
    newTab: "(opens in a new tab)",
  },

  nav: {
    links: [
      { label: "Services", href: "#servicios" },
      { label: "Projects", href: "#proyectos" },
      { label: "Method", href: "#metodo" },
      { label: "About", href: "#quien" },
      { label: "FAQ", href: "#preguntas" },
    ],
    cta: "Book a free session",
    ctaShort: "Book a session",
    ctaSub: "20-minute session, free",
    writeUs: "Or write to me at",
    menuTitle: "Navigation",
    noCommitment: "No commitment",
    reviewTitle: "Prefer to write?",
    reviewText: "Tell me about your case through the form and I'll reply within 24\u2060–\u206048 business hours.",
    reviewLink: "Go to the form",
  },

  hero: {
    eyebrow: "Websites, online stores and automation",
    titleA: "Websites and online stores that sell.",
    titleB: "Automation so you can stop copying and pasting.",
    subtitle:
      "I build your website or online store with cart, payments and order management, and I automate the processes you do by hand today. Fixed price, you own the code and no platform fees.",
    ctaPrimary: "Book a 20-min session",
    ctaSecondary: "See services",
    reassurance: [
      "Free strategy session",
      "Reply within 24\u2060–\u206048 business hours",
      "You own the code",
    ],
    mockup: {
      windowControls: "Window controls",
      label: "Illustrative view · sample data",
      window: "dashboard.yourcompany.com",
      eyebrow: "Dashboard",
      title: "From order to invoice, no typing",
      live: "Synced",
      pipeline: ["Online store", "Invoicing", "Notice"],
      pipelineSub: [
        "Order paid",
        "Invoice generated instantly",
        "Sent to the customer",
      ],
      rows: [
        {
          ref: "ORD-1042",
          text: "Order paid in the online store",
          status: "Received",
          state: "done",
        },
        {
          ref: "INV-381",
          text: "Invoice created automatically",
          status: "Completed",
          state: "done",
        },
        {
          ref: "SHP-118",
          text: "Shipping notice sent to the customer",
          status: "In progress",
          state: "active",
        },
      ],
    },
  },

  problems: {
    eyebrow: "Sound familiar?",
    title: "What holds back a business that works",
    items: [
      {
        title: "Your operation lives in Excel",
        text: "Duplicate versions, formulas that break and a single person who knows how the file works.",
        icon: "sheet",
      },
      {
        title: "The same data, typed three times",
        text: "From order to invoice and from invoice to accounting. Every manual copy is an error waiting to happen.",
        icon: "copy",
      },
      {
        title: "Tools that don't talk to each other",
        text: "The online store, the till, the CRM and the bank each live on their own. Nobody has the full picture of the business.",
        icon: "disconnect",
      },
      {
        title: "Licenses that grow with every new user",
        text: "You pay per user and per month for features you don't use, and you can't adapt any of them to the way you work.",
        icon: "license",
      },
    ],
  },

  solutions: {
    eyebrow: "Custom projects",
    title: "I can also help you with…",
    intro:
      "For when what you need goes beyond a website or a single process. Every project starts with a business problem, not with a technology.",
    more: "Learn more",
    items: [
      {
        slug: "paginas-web-y-landing-pages",
        kicker: "Websites and landing pages",
        title: "A website that turns visitors into clients",
        text: "Corporate websites and campaign landing pages: fast, clear, ready for Google and connected to your CRM or email.",
        visual: "web",
      },
      {
        slug: "sistemas-de-gestion",
        kicker: "Custom management systems",
        title: "Your whole operation in a single system",
        text: "Orders, inventory, clients and invoicing in one tool designed around how you work, not the other way around.",
        visual: "system",
      },
      {
        slug: "integraciones-y-apis",
        kicker: "Integrations & APIs",
        title: "Your tools, finally connected",
        text: "Sales, payments, accounting and CRM sharing data automatically. Every piece of data is entered only once.",
        visual: "integration",
      },
      {
        slug: "automatizacion-de-procesos",
        kicker: "Workflow automation",
        title: "Let repetitive tasks run themselves",
        text: "Approvals, notifications, reports and data handoffs executed without intervention and with a record of every step.",
        visual: "automation",
      },
      {
        slug: "aplicaciones-web-y-moviles",
        kicker: "Web apps and portals",
        title: "Your own web app for your team and your clients",
        text: "Client portals and internal tools that run in the browser, on a computer or a phone.",
        visual: "apps",
      },
      {
        slug: "modernizacion-de-procesos",
        kicker: "Legacy process modernization",
        title: "From the critical Excel file to a reliable system",
        text: "I migrate spreadsheets and old systems to a tool with permissions, history and backups, without stopping your operation.",
        visual: "legacy",
      },
      {
        slug: "consultoria-tecnologica",
        kicker: "Technology consulting",
        title: "Sound technical decisions, on any stack",
        text: "I review what you already have and help you choose the technology that best fits your business and budget.",
        visual: "consulting",
      },
    ],
  },

  /** Content of the /soluciones/[slug] pages */
  solutionDetails: {
    back: "All solutions",
    includesTitle: "What's included",
    fitTitle: "A good fit if…",
    outcomeTitle: "What changes in your day-to-day",
    ctaTitle: "Shall we look at it applied to your case?",
    ctaPrimary: "Book a free session",
    ctaSecondary: "See how I work",
    ctaText:
      "In a 20-minute session I review your situation and tell you honestly whether this is what you need.",
    pages: {
      "paginas-web-y-landing-pages": {
        lead: "I design and build your corporate website or the landing page for your next campaign, so that whoever arrives understands what you offer and gets in touch.",
        includes: [
          "Custom design with your brand, no generic templates",
          "Copy and structure focused on getting the visitor to contact you",
          "Fast loading, mobile-friendly and search-engine optimized",
          "Forms connected to your email, CRM or management system",
        ],
        fit: [
          "Your current website doesn't convey your value or doesn't generate leads",
          "You're launching a campaign and need a page that converts",
          "You want to edit content without depending on anyone",
        ],
        outcome:
          "A website that works for you: every visit has a clear path to contact.",
      },
      "sistemas-de-gestion": {
        lead: "A management system built for your company replaces the mix of spreadsheets, emails and separate programs you use to run operations today.",
        includes: [
          "Modules for orders, inventory, clients, suppliers or whatever your business needs",
          "Roles and permissions: each person sees and edits only what applies to them",
          "A dashboard with the indicators you actually use to decide",
          "Migration of your current data and team training",
        ],
        fit: [
          "You run operations with several shared spreadsheets",
          "Your generic ERP forces you to work the way it wants",
          "You need to know in real time what's happening without asking for reports",
        ],
        outcome:
          "One place to work, with reliable data and no dependence on a specific person being available.",
      },
      "integraciones-y-apis": {
        lead: "I connect the tools you already use so they share information without anyone having to export, copy and paste.",
        includes: [
          "Connection between online store, point of sale, payment gateway, accounting and CRM",
          "Automatic synchronization with error handling and retries",
          "A log of every operation so you know what happened and when",
          "Your own APIs if you need third parties to connect to you",
        ],
        fit: [
          "You export data from one tool to import it into another",
          "Your numbers don't match across systems",
          "You want to keep your tools but have them work together",
        ],
        outcome:
          "Data travels between systems on its own and the numbers add up the first time.",
      },
      "automatizacion-de-procesos": {
        lead: "I identify the repetitive tasks that eat up your team's hours and turn them into automatic, traceable processes.",
        includes: [
          "Process map with the time each manual task takes",
          "Automation of approvals, notifications, reports and data handoffs",
          "Alerts when something needs human intervention",
          "Complete log for internal auditing",
        ],
        fit: [
          "Your team spends hours on tasks that are always done the same way",
          "Processes depend on someone remembering to do them",
          "You've tried no-code tools and they fell short",
        ],
        outcome:
          "Your team spends its time on what requires judgment, not on moving data around.",
      },
      "aplicaciones-web-y-moviles": {
        lead: "I design and build web applications for internal use or for your clients, connected to the rest of your systems.",
        includes: [
          "Interface design centered on the people who will use it every day",
          "A web app that runs in any browser, including on a phone",
          "Client portals with secure access to orders, documents or tickets",
          "Launch and optional maintenance",
        ],
        fit: [
          "Your clients call or write to check things they could see on their own",
          "Your field team works with paper or messaging apps",
          "You need an internal tool that doesn't exist on the market",
        ],
        outcome:
          "Fewer calls, less paper and a professional experience with your brand.",
      },
      "modernizacion-de-procesos": {
        lead: "I turn the critical spreadsheet or old program your company depends on into a modern, secure and maintainable system.",
        includes: [
          "Analysis of the current logic, including the rules nobody documented",
          "Data migration with validation and a parallel-run period",
          "Permissions, change history and backups",
          "Documentation so the knowledge doesn't depend on one person",
        ],
        fit: [
          "An Excel file is critical and you're afraid it will break",
          "Your current program is no longer supported or nobody knows how to maintain it",
          "You want to modernize without stopping operations",
        ],
        outcome:
          "The same process you already know, without the risk and with room to grow.",
      },
      "consultoria-tecnologica": {
        lead: "I support you in technology decisions with an independent view: what to build, what to buy and what to leave as it is.",
        includes: [
          "Audit of tools, processes and license costs",
          "Technology roadmap prioritized by business impact",
          "Support in vendor selection and proposal review",
          "Work on your current stack, whatever it is",
        ],
        fit: [
          "You have to make a technology decision and don't want to get it wrong",
          "You pay for many tools and don't know which ones add value",
          "You need a technical second opinion with no conflict of interest",
        ],
        outcome:
          "Clear, well-justified decisions aligned with your budget.",
      },
    },
  },

  method: {
    eyebrow: "Method",
    title: "Four phases. No surprises.",
    intro:
      "Whether it's a landing page, an online store or an automation, I always work the same way. Each phase ends with something concrete that you review before moving on.",
    deliverableLabel: "Deliverable",
    steps: [
      {
        name: "Understand",
        text: "I analyze your business, your clients and your processes to find out what you really need and what you don't.",
        deliverable: "Proposal with scope, timeline and fixed price",
      },
      {
        name: "Design",
        text: "I shape the solution with you: how it will look, how it will work and how it fits with what you already use.",
        deliverable: "Design or prototype you approve before I build",
      },
      {
        name: "Build",
        text: "I develop in stages and show you real progress from the start, so we can correct course in time.",
        deliverable: "Versions you can test",
      },
      {
        name: "Launch and support",
        text: "I take it live, show your team how to use it and, if you need it, handle the maintenance.",
        deliverable: "Project up and running, and documented",
      },
    ],
  },

  why: {
    eyebrow: "Why Parrax",
    title: "Your software. Your data. Your decision.",
    intro: "I work so that you depend on me as little as possible.",
    items: [
      {
        title: "You own the code",
        text: "You receive the source code and the intellectual property, by contract. If tomorrow you'd rather have someone else maintain it, you can.",
      },
      {
        title: "No per-user fees",
        text: "Give your whole team access without the bill growing with every new user.",
      },
      {
        title: "You talk to the person who builds it",
        text: "No middlemen: I design and program your project, and I'm your direct contact.",
      },
      {
        title: "Security and privacy by design",
        text: "Role-based permissions, backups and access to personal data limited to those who need it.",
      },
    ],
    compare: {
      caption: "Custom software with Parrax compared with a generic subscription",
      mobileHeading: "Compared with a traditional subscription",
      genericShort: "Subscription",
      criterion: "Criterion",
      headers: ["", "Generic subscription", "Parrax"],
      rows: [
        ["Code ownership", "The vendor's", "Yours"],
        ["Cost as the team grows", "Goes up per user", "Doesn't change"],
        ["Adapts to your process", "You adapt", "Yes, by design"],
        ["If you decide to switch", "Limited export", "You take everything"],
      ],
    },
  },

  services: {
    eyebrow: "Services",
    title: "Two ways to get started",
    intro:
      "Pick what's most urgent today: selling online or taking manual work off your plate. Either way, scope and price are fixed in writing before we start.",
    from: "From",
    perMonth: "/month",
    priceMissing: "[TODO_LUIS: price]",
    localCurrency: "Quote in your local currency.",
    timelineLabel: "Estimated timeline",
    includesLabel: "Includes",
    shops: {
      title: "Websites and online stores",
      text: "Three fixed-scope packages with no monthly platform fees: the store is yours.",
      guarantee: "Fixed price in writing. Two rounds of changes included. You own the code.",
      packages: [
        {
          key: "landing",
          name: "Landing page or business website",
          forWho: "To present your business or launch a campaign with a clear page that turns visits into leads.",
          includes: [
            "Custom design with your brand",
            "Copy and structure built for getting in touch",
            "Form connected to your email or CRM",
            "Fast, phone-friendly and ready for Google",
          ],
          timeline: "[TODO_LUIS: timeline]",
          cta: "Book a session",
        },
        {
          key: "store",
          name: "Online store",
          forWho: "To sell your products online with your own store, without paying monthly platform fees.",
          includes: [
            "Product catalog with photos, variants and stock",
            "Cart and checkout with an online payment gateway",
            "Dashboard to manage orders and products",
            "Order confirmation emails",
          ],
          timeline: "[TODO_LUIS: timeline]",
          cta: "Book a session",
        },
        {
          key: "storeOps",
          name: "Store + operations",
          forWho: "For stores that sell, or will sell, in volume and don't want to handle every order by hand.",
          includes: [
            "Everything in Online store",
            "Shipping rates by zone",
            "Automatic notices to the customer and your team",
            "Connection to your invoicing software",
          ],
          timeline: "[TODO_LUIS: timeline]",
          cta: "Book a session",
        },
      ],
    },
    automation: {
      title: "Automation and integrations",
      text: "When the business already works but depends on copying data from one place to another.",
      sprint: {
        name: "Automation Sprint",
        title: "One manual process, automated in 2\u2060–\u20603 weeks",
        text: "Together we pick one specific process that costs you hours today, and I leave it running automatically, with a log of every step and alerts if something fails.",
        exampleLabel: "Typical example",
        example:
          "Every online store order is copied by hand into the invoicing software. After the sprint, the invoice is created on its own and the customer gets the shipping notice.",
        facts: [
          { label: "Timeline", value: "2\u2060–\u20603 weeks" },
          { label: "Price", value: "Fixed in writing" },
        ],
        deliverablesLabel: "Deliverables",
        deliverables: [
          "Automated workflow running in production",
          "Documentation on how it works and what to do if it fails",
          "Handover session with your team",
          "30-day warranty after delivery",
        ],
        cta: "Book a 20-min session",
      },
      maintenance: {
        name: "Monthly maintenance (optional)",
        text: "A monthly bank of hours to monitor the automations, adjust to changes in your tools and add small improvements. [TODO_LUIS: hours included and commitment terms]",
      },
    },
  },

  projects: {
    eyebrow: "Projects",
    title: "Projects you can check out",
    intro:
      "I don't publish client cases yet, and I won't show logos I don't have. These are my own projects and demos you can open and try.",
    problemLabel: "Problem",
    builtLabel: "What I built",
    techLabel: "Technology",
    open: "View project",
    linkMissing: "[TODO_LUIS: link]",
    imageMissing: "[TODO_LUIS: screenshot]",
    imageAlt: "Screenshot of",
    items: [
      {
        key: "store",
        tag: "Own project",
        name: "Online store [TODO_LUIS: name]",
        problem: "[TODO_LUIS: what problem the store solved]",
        built: "A complete online store: catalog, cart, payments and order management. [TODO_LUIS: details]",
        tech: "[TODO_LUIS: technologies]",
      },
      {
        key: "site",
        tag: "Own project",
        name: "parraxsolutions.com",
        problem: "I needed my own fast, bilingual website with a reliable contact form, without depending on a website builder.",
        built: "This very website: Spanish and English, a form with validation and spam protection, and service pages ready for search engines.",
        tech: "Next.js, React, TypeScript, Tailwind CSS, Vercel",
      },
      {
        key: "automation",
        tag: "Demo project",
        name: "From order to invoice",
        problem: "Online store orders are typed by hand into the invoicing software, with mistakes and hours lost every week.",
        built: "A demo of a workflow that creates the invoice and notifies the customer as soon as a paid order comes in. [TODO_LUIS: build the demo or remove this card]",
        tech: "[TODO_LUIS: technologies]",
      },
    ],
  },

  about: {
    eyebrow: "Who's behind it",
    title: "You talk to me from start to finish",
    role: "Founder of Parrax Solutions",
    photoAlt: "Luis Parra, founder of Parrax Solutions",
    photoMissing: "[TODO_LUIS: photo]",
    paragraphs: [
      "I'm Luis Parra. I design, build and maintain every project myself: the person who replies to your message is the person who will build it.",
      "I come from an industrial background, where a badly solved process shows up in operations every day. That's why I start by understanding how your business works before proposing any technology.",
      "I build websites and online stores, and I automate the tasks that are done by hand today: orders, notifications, reports and connections between tools.",
      "I work remotely with companies in any country, in Spanish or English, by video call.",
    ],
    linkedin: "See my LinkedIn profile",
    linkedinMissing: "[TODO_LUIS: LinkedIn link]",
    newTab: "(opens in a new tab)",
  },

  faq: {
    eyebrow: "FAQ",
    title: "What people usually ask me before starting",
    items: [
      {
        q: "How much does it cost?",
        a: "It depends on the scope, but I always work with a fixed price in writing before we start. Under Services you'll find the starting price of each package; after the 20-minute session I send you the exact proposal in your local currency.",
      },
      {
        q: "How long does it take?",
        a: "An Automation Sprint takes 2 to 3 weeks. For websites and stores, each package has an estimated timeline, and the final timeline is set in the proposal.",
      },
      {
        q: "Do I own the code?",
        a: "Yes. When we finish you receive the source code and the access credentials, and ownership is stated in the contract. You don't pay per-user fees for what I build. Third-party services you use, such as hosting, domain or payment gateway, you pay directly to each provider.",
      },
      {
        q: "What if I want changes?",
        a: "Website and store packages include two rounds of changes. If you need more afterwards, I quote them separately or we include them in the monthly maintenance.",
      },
      {
        q: "Do you work with companies in my country?",
        a: "Yes. I work remotely with companies in any country, by video call, in Spanish or English.",
      },
      {
        q: "How do international payments work?",
        a: "[TODO_LUIS: accepted payment methods, invoicing currency and payment schedule]",
      },
      {
        q: "What happens after delivery?",
        a: "I walk you through how everything works and leave you the documentation. Automations come with a 30-day warranty. After that you can hire monthly maintenance or carry on by yourself, because everything is yours.",
      },
      {
        q: "Do I need to know about technology?",
        a: "No. You explain how your business works and I take care of the technical side, without jargon. At the end I show you how to use what I've built.",
      },
      {
        q: "What tools do you use?",
        a: "For websites and stores, Next.js, React and TypeScript, deployed on Vercel or the hosting you prefer. To automate, I connect the tools you already use through their APIs. [TODO_LUIS: confirm your automation tools]",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell me what you want to solve",
    intro:
      "A first 20-minute conversation, no cost and no commitment. You tell me what you need and I tell you honestly whether I can help.",
    stepsTitle: "What happens next",
    steps: [
      "I write back within 24\u2060–\u206048 business hours to find a time that suits you.",
      "We talk for 20 minutes by video call to understand your case.",
      "If it's a fit, I send you a written proposal with scope, timeline and a fixed price.",
      "If you decide to continue, we start with the progress reviews set out in the proposal.",
    ],
    calendar: {
      title: "Prefer to book directly?",
      text: "Pick a slot in my calendar for a 20-minute session.",
      cta: "Book a 20-min session",
    },
    directEmail: "Or write to me at",
    instagramLabel: "Parrax Solutions on Instagram",
    form: {
      needLegend: "What do you need?",
      optional: "optional",
      needs: [
        { value: "web", label: "Website or landing page" },
        { value: "tienda", label: "Online store" },
        { value: "automatizacion", label: "Automate a process" },
        { value: "otro", label: "Other" },
      ],
      honeypot: "Leave this field empty",
      name: "Name",
      namePh: "First and last name",
      company: "Company",
      companyPh: "Your company name",
      email: "Work email",
      emailPh: "you@company.com",
      message: "What do you want to solve?",
      messagePh:
        "For example: “I get orders from the online store and type them by hand into the invoicing program”.",
      urgencyLegend: "How urgent is it?",
      urgency: [
        { value: "explorando", label: "I'm exploring" },
        { value: "3-meses", label: "In the next 3 months" },
        { value: "urgente", label: "It's urgent" },
      ],
      privacyA: "I have read and accept the",
      privacyLink: "privacy policy",
      privacyB: ". I will use your data only to respond to your request.",
      submit: "Send request",
      sending: "Sending…",
      required: "required",
      errors: {
        name: "Enter your name so I know who to reply to.",
        company: "Enter your company name.",
        email:
          "Check the email: something seems to be missing (example: you@company.com).",
        message: "Tell me in at least 20 characters what you want to solve.",
        urgency: "Choose an urgency option.",
        privacy: "I need your consent to be able to reply to you.",
        summary: "Check the highlighted fields before sending.",
        server:
          "The form couldn't be sent. Try again or write to me by email.",
        rateLimited:
          "Several requests arrived in a row from your connection. Wait a few minutes or write to me by email.",
        validation:
          "Some data is not valid. Check the fields and try again.",
        network:
          "The server couldn't be reached. Check your connection and try again.",
      },
      success: {
        title: "Request received",
        text: "Thank you. I'll write to you within 24\u2060–\u206048 business hours to arrange the session.",
        again: "Send another request",
      },
    },
  },

  notFound: {
    title: "Page not found",
    code: "Error 404",
    heading: "This page isn't connected to anything.",
    text: "The link may have changed or the address may have a typo. Head back to where systems are actually running.",
    home: "Back to home",
    solutions: "See solutions",
  },

  legal: {
    backHome: "← Back to home",
  },

  footer: {
    heading: "Footer",
    tagline:
      "Websites, custom software and automation for businesses, wherever they are.",
    columns: [
      {
        title: "Solutions",
        links: [
          {
            label: "Websites and landing pages",
            href: "/soluciones/paginas-web-y-landing-pages",
          },
          {
            label: "Management systems",
            href: "/soluciones/sistemas-de-gestion",
          },
          {
            label: "Integrations & APIs",
            href: "/soluciones/integraciones-y-apis",
          },
          {
            label: "Automation",
            href: "/soluciones/automatizacion-de-procesos",
          },
          {
            label: "Web apps and portals",
            href: "/soluciones/aplicaciones-web-y-moviles",
          },
          {
            label: "Modernization",
            href: "/soluciones/modernizacion-de-procesos",
          },
          { label: "Consulting", href: "/soluciones/consultoria-tecnologica" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Services", href: "/#servicios" },
          { label: "Projects", href: "/#proyectos" },
          { label: "Method", href: "/#metodo" },
          { label: "FAQ", href: "/#preguntas" },
          { label: "Contact", href: "/#contacto" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Legal notice", href: "/aviso-legal" },
          { label: "Privacy policy", href: "/politica-de-privacidad" },
          { label: "Cookie policy", href: "/cookies" },
        ],
      },
    ],
    location: "I work remotely with companies in any country",
    legalLine: "Parrax Solutions · Technology consulting & development",
    rights: "All rights reserved.",
  },
};
