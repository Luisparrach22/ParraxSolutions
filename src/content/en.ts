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
      { label: "Services", href: "#soluciones" },
      { label: "Method", href: "#metodo" },
      { label: "Why Parrax", href: "#por-que" },
      { label: "Contact", href: "#contacto" },
    ],
    cta: "Book a strategy session",
    ctaShort: "Book a session",
    ctaSub: "20-minute session, free",
    writeUs: "Or write to me at",
    menuTitle: "Navigation",
    noCommitment: "No commitment",
    reviewTitle: "Prefer to write?",
    reviewText: "Tell me about your case through the form and I'll reply within 24–48 business hours.",
    reviewLink: "Go to the form",
  },

  hero: {
    eyebrow: "Custom websites and software for businesses",
    titleA: "Websites that bring in clients and software",
    titleB: "that removes manual work.",
    subtitle:
      "I design your website or landing page and build the system that connects your operation. One person accountable, from the first visit to the invoice.",
    ctaPrimary: "Request a digital audit",
    ctaSecondary: "See services",
    reassurance: [
      "No cost, no commitment",
      "Reply within 24–48 business hours",
      "You own the code",
    ],
    mockup: {
      windowControls: "Window controls",
      label: "Illustrative view · sample data",
      window: "dashboard.yourcompany.com",
      eyebrow: "Dashboard",
      title: "From your website to the quote, hands-free",
      live: "Synced",
      pipeline: ["Web form", "CRM", "Quote"],
      pipelineSub: [
        "Your website or landing page",
        "Client created instantly",
        "Generated and sent",
      ],
      rows: [
        {
          ref: "WEB-214",
          text: "New request from the landing page",
          status: "Received",
          state: "done",
        },
        {
          ref: "CRM-381",
          text: "Client created automatically",
          status: "Completed",
          state: "done",
        },
        {
          ref: "PRE-118",
          text: "Quote sent to the client",
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
    eyebrow: "Services",
    title: "What I do",
    intro:
      "Every project starts with a concrete business problem, not with a technology.",
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
    ctaPrimary: "Book a strategy session",
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

  audit: {
    badge: "Launch offer",
    title: "Free digital audit",
    text: "Before talking about quotes, we want to get to know you. In a first conversation we look at what's holding you back and whether it makes sense to work together. The in-depth analysis comes later, once you decide to continue.",
    points: [
      "20 minutes by video call or phone",
      "You tell us your case and we give you an honest opinion",
      "If it's a fit, a written proposal with a fixed price",
    ],
    cta: "Request a digital audit",
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

  contact: {
    eyebrow: "Contact",
    title: "Tell me what you want to solve",
    intro:
      "A first 20-minute conversation, no cost and no commitment. You tell me what you need and I tell you honestly whether I can help.",
    stepsTitle: "What happens next",
    steps: [
      "I write back within 24–48 business hours to find a time that suits you.",
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
        text: "Thank you. I'll write to you within 24–48 business hours to arrange the session.",
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
          { label: "Method", href: "/#metodo" },
          { label: "Why Parrax", href: "/#por-que" },
          { label: "Free audit", href: "/#auditoria" },
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
