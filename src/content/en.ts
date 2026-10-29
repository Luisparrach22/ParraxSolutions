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
    title: "Parrax Solutions · Websites, online stores and automation for businesses",
    titleTemplate: "%s · Parrax Solutions",
    description:
      "Websites, online stores and process automation for businesses in any country, working remotely. Fixed price, you own the code and no platform fees.",
    ogAlt: "Parrax Solutions: websites, online stores and automation for businesses",
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
    problemTitle: "The typical problem",
    exampleLabel: "Example",
    approachTitle: "How I solve it",
    timelineTitle: "Estimated timeline",
    faqTitle: "Frequently asked questions",
    packagesLink: "See packages",
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
        problem: {
          "title": "A website that exists but brings in no leads",
          "text": "Many company websites were built years ago from a template and haven't been touched since. They load slowly on a phone, don't explain clearly what you sell, and the form ends up in an inbox nobody checks. People arrive, don't know what to do and leave.",
          "example": "A service company pays for ads that land on its home page. The visitor finds five menus, no indicative price and a ten-field form. Almost nobody sends it, and the few messages that arrive get lost in the inbox."
        },
        approach: [
          {
            "title": "I learn who you sell to",
            "text": "Before designing, we talk about your clients: what they look for, what doubts they have and what makes them decide. That shapes the page structure and the main message."
          },
          {
            "title": "I design and write for the contact",
            "text": "Each section answers a visitor's question and leads to a clear action: book, call or write. I propose the copy and we refine it together."
          },
          {
            "title": "I build a fast, measurable website",
            "text": "I develop it with my own code, optimized for phones and search engines, with the form connected to your email or CRM so no lead gets lost."
          },
          {
            "title": "I publish it and show you how to edit it",
            "text": "I handle the domain, publishing and redirects if you're moving from another site. I show you how to change text and images without depending on me."
          }
        ],
        timeline: "The timeline depends on the number of pages and whether the copy is ready. I give it to you in writing in the proposal, together with the fixed price.",
        faq: [
          {
            "q": "Can I edit the website myself?",
            "a": "Yes. I set the website up so you can change text and images without touching code, and I show you how in the handover session."
          },
          {
            "q": "Do you write the copy?",
            "a": "I propose the structure and the copy based on what we discuss. You bring the knowledge of your business and review each section before it goes live."
          },
          {
            "q": "What happens to my current website?",
            "a": "If you already have one, I check which pages get traffic so I can keep their addresses or redirect them, and you don't lose what already ranks in search engines."
          }
        ],
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
        problem: {
          "title": "Operations spread across spreadsheets and emails",
          "text": "As a company grows, each area solves its part as best it can: one spreadsheet for orders, another for stock, email to tell the warehouse and a separate program for invoicing. It works while few people use it, but it gets harder and harder to know what's going on and who changed what.",
          "example": "A distributor takes orders by phone and email. Someone logs them in a shared sheet, someone else checks stock in another file and, at the end of the day, they're typed by hand into the invoicing program. If someone picks the wrong row, the mistake shows up weeks later."
        },
        approach: [
          {
            "title": "I map how you work today",
            "text": "I go through every step of the process with you, the sheets you use and the rules behind them, including the ones nobody has written down."
          },
          {
            "title": "I design the system around your process",
            "text": "I define the modules, roles and permissions you need, with no filler features. You approve a prototype before I start building."
          },
          {
            "title": "I build it module by module",
            "text": "I start with the part that removes the most manual work and add modules from there. You can use each one as soon as it's ready."
          },
          {
            "title": "I migrate your data and support the rollout",
            "text": "I move the data from your current sheets into the system, check that it adds up and support your team through the first weeks of use."
          }
        ],
        timeline: "A management system is built in phases. The proposal details what each phase includes, its timeline and its price, so you decide how far to go.",
        faq: [
          {
            "q": "Why not use an off-the-shelf ERP?",
            "a": "If a standard ERP fits the way you work, I'll tell you. A custom system makes sense when your process is part of your edge, or when you pay licenses for many features you don't use."
          },
          {
            "q": "What happens to the data I already have?",
            "a": "I migrate it from your spreadsheets or current program and check that the totals match before you stop using the old one."
          },
          {
            "q": "Can it grow later?",
            "a": "Yes. You own the code and it's documented, so modules can be added later, with me or with someone else."
          }
        ],
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
        problem: {
          "title": "Tools that don't share data",
          "text": "The online store knows what was sold, the payment gateway knows what was charged, the CRM knows who the customer is, and accounting needs all of that together. If those tools don't talk to each other, someone on your team becomes the bridge, exporting and importing files.",
          "example": "Every Monday, someone downloads the online store's sales, matches them in a sheet against the payment gateway's charges and uploads them to the accounting program. It takes the whole morning, and any refund throws the numbers off."
        },
        approach: [
          {
            "title": "Inventory of tools and data",
            "text": "I review which tools you use, what data each one holds and which data needs to reach the others. I also check what each tool's API allows."
          },
          {
            "title": "I design the data flow",
            "text": "I define which data moves from where to where, when, and what happens if it fails. You review it before I start building."
          },
          {
            "title": "I build the integration with error handling",
            "text": "Every sync is logged, with automatic retries and an alert when something needs a human to look at it."
          },
          {
            "title": "I run it in parallel first",
            "text": "For a while the manual and the automatic process run side by side, to confirm the data matches before switching off the manual one."
          }
        ],
        timeline: "An integration between two or three tools usually fits into a 2\u2060–\u20603 week Automation Sprint. If more systems are involved, I split it into phases, each with a fixed price.",
        faq: [
          {
            "q": "Do I need to change tools?",
            "a": "Usually not. The idea is that you keep using what you know and the data moves between those tools on its own."
          },
          {
            "q": "What if a tool has no API?",
            "a": "I look for the most reliable alternative: scheduled exports or official connectors. If there's no reliable option, I tell you before we start."
          },
          {
            "q": "Who keeps an eye on the integration?",
            "a": "The integration sends an alert when something fails. If you want me to review and adjust it, there's the optional monthly maintenance."
          },
          {
            "q": "Is it safe to connect my tools?",
            "a": "I use each tool's official access with the minimum permissions needed, and the keys are stored outside the code. You can revoke them at any time from each tool."
          }
        ],
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
        problem: {
          "title": "Hours of work that's always done the same way",
          "text": "Almost every company has tasks repeated every day or week with the same steps: copying an order, sending a notice, preparing a report, requesting an approval. They don't need judgment, but they do take time, and they depend on someone remembering to do them.",
          "example": "When an order comes into the online store, someone copies it into the invoicing program, creates the invoice, emails it and tells the warehouse. It's a few minutes per order, but with dozens of orders a day it becomes someone's whole job."
        },
        approach: [
          {
            "title": "We pick one specific process",
            "text": "In the first session we identify which repetitive task costs you the most time or the most mistakes. We start there, without trying to automate everything at once."
          },
          {
            "title": "I map it step by step",
            "text": "I document the process as it's done today, exceptions included, and propose how it would look automated."
          },
          {
            "title": "I automate it with logs and alerts",
            "text": "I build the workflow so it runs on its own, records every step and alerts you when something needs a person."
          },
          {
            "title": "I hand it over documented",
            "text": "At the end you have the workflow in production, the documentation and a handover session with your team, with a 30-day warranty."
          }
        ],
        timeline: "Each process is handled as an Automation Sprint: 2\u2060–\u20603 weeks and a fixed price. If you then want to automate another process, it becomes a new sprint.",
        faq: [
          {
            "q": "Which processes can be automated?",
            "a": "The ones that always follow the same steps and use data that already lives in some tool: orders, invoices, notices, reports, customer onboarding or approvals."
          },
          {
            "q": "What if I already tried no-code tools?",
            "a": "They're a good option for simple workflows. When the process has exceptions, volume or several tools involved, it usually needs a sturdier solution, and that's what I build."
          },
          {
            "q": "What if the process changes?",
            "a": "Since you receive the code and the documentation, it can be adapted. You can ask me for it as a one-off or include it in the monthly maintenance."
          },
          {
            "q": "How do I know the automation is working?",
            "a": "Every run is logged: you can see what was processed, when and with what result. If something fails, you get an alert with the details so you can decide what to do."
          }
        ],
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
        problem: {
          "title": "Clients and team relying on calls and messages",
          "text": "When information only lives in your office, clients have to call or write to find out how their order is going, and the team working on site sends photos and notes by messaging apps that someone later types up.",
          "example": "A maintenance company gets calls every day from clients asking when the technician will arrive. The technicians, in turn, send their work reports by messaging app, and someone in the office copies them into a spreadsheet so they can be invoiced."
        },
        approach: [
          {
            "title": "I define who uses it and for what",
            "text": "I talk to the people who will use the app, clients or team, to understand what they need to see and do, and from which device."
          },
          {
            "title": "I design a simple interface",
            "text": "I show you a clickable prototype before coding, so the screens are validated with the people who will use them every day."
          },
          {
            "title": "I build it as a web app",
            "text": "It runs in the browser on any computer or phone, with no app stores involved, and connects to your current systems."
          },
          {
            "title": "I take it live",
            "text": "I publish the app, set up access and leave you the documentation. Ongoing maintenance is optional."
          }
        ],
        timeline: "It depends on the number of screens and the connections to other systems. I split it into phases with a fixed timeline and price in the proposal.",
        faq: [
          {
            "q": "Is it an app you download from a store?",
            "a": "No. It's a web app: it opens in the browser and can be added to the phone's home screen. That way you skip the app store publishing process."
          },
          {
            "q": "Do my clients need a username and password?",
            "a": "It depends on what they'll see. For private data, such as orders or documents, access is secure and each client only sees their own."
          },
          {
            "q": "Does it connect with what I already use?",
            "a": "Yes, that's the point: the app reads and writes to your management system, CRM or current sheets, without duplicating data."
          },
          {
            "q": "How many users can it have?",
            "a": "You don't pay per user: you can give your whole team and your clients access without the cost growing with each new account. Hosting is sized to actual usage."
          }
        ],
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
        problem: {
          "title": "One critical file everything depends on",
          "text": "Many companies have a spreadsheet or an old program nobody dares to touch. It holds years of formulas, macros and rules only one person understands, keeps no change history and, if it gets corrupted, there's no recent copy.",
          "example": "A company prices its quotes with a fifteen-tab Excel file full of macros. Only one person knows how to update it. When that person is away, quotes are delayed and nobody dares to change a price."
        },
        approach: [
          {
            "title": "I understand the current logic",
            "text": "I review the file or program in depth and document every rule, including the ones nobody ever wrote down."
          },
          {
            "title": "I design the system that replaces it",
            "text": "I keep the process your team already knows and add permissions, change history and backups."
          },
          {
            "title": "I migrate the data with validation",
            "text": "I move the data into the new system and check that the results match the original file."
          },
          {
            "title": "I run both side by side for a while",
            "text": "The new and old systems run in parallel until you've confirmed everything adds up. That way operations never stop."
          }
        ],
        timeline: "It depends on how complex the file or program is. After reviewing it I give you a fixed timeline and price in writing.",
        faq: [
          {
            "q": "Will I have to learn a new way of working?",
            "a": "As little as possible. The goal is to keep the process that works and remove the risk, without forcing you to change how you work."
          },
          {
            "q": "What about years of historical data?",
            "a": "It's migrated to the new system and validated. If some data is better archived, I suggest how to keep it."
          },
          {
            "q": "What if the old program is no longer supported?",
            "a": "That's one of the most common situations. I extract the data and logic that are still useful and move them into a maintainable system."
          },
          {
            "q": "How long do both systems run side by side?",
            "a": "As long as it takes for you to confirm the results match on real cases. We agree on it in the proposal, and the old system isn't switched off until you confirm."
          }
        ],
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
        problem: {
          "title": "Technology decisions without an independent opinion",
          "text": "Choosing software or a vendor, or deciding whether to build something custom, is an expensive decision to correct. Often the only opinion available is from whoever wants to sell it to you.",
          "example": "A company gets three very different quotes to replace its order system and can't compare them: each vendor proposes a different technology and none explains what happens to the data if they want to switch later."
        },
        approach: [
          {
            "title": "I review what you have",
            "text": "I analyze your tools, your processes and what you pay in licenses to understand what works, what's redundant and what's missing."
          },
          {
            "title": "I give you options with pros and cons",
            "text": "I explain the alternatives in plain language: what to build, what to buy and what to leave as it is, with the approximate cost of each."
          },
          {
            "title": "I prioritize by impact",
            "text": "I deliver a roadmap ordered by what saves you the most work or money, so you can move forward step by step."
          },
          {
            "title": "I support you in the decision",
            "text": "If you need it, I review vendor proposals and help you ask the right questions before you sign."
          }
        ],
        timeline: "A review with a roadmap comes with a fixed scope and price.",
        faq: [
          {
            "q": "Will you always recommend something custom?",
            "a": "No. If a standard tool solves your problem, I'll tell you, even if that means I don't build anything."
          },
          {
            "q": "Do you work with any technology?",
            "a": "I review your situation whatever your current technology is. To build I use modern web technologies, but the recommendation is based on what fits your business."
          },
          {
            "q": "What do I get at the end?",
            "a": "A document with the diagnosis, the options and a prioritized roadmap, plus a session to answer your questions."
          },
          {
            "q": "Does the consulting tie me to hiring you for development?",
            "a": "No. The roadmap is yours and you can carry it out with me, with another vendor or with your own team."
          },
          {
            "q": "Can you review a quote I already have?",
            "a": "Yes. I review the proposal, scope and terms, and tell you which questions to ask before signing."
          }
        ],
      },
    },
  },

  /** Página /servicios/tiendas-online (intención comercial, sin país). */
  storePage: {
    "slug": "tiendas-online",
    "metaTitle": "Custom online store for small businesses, no monthly fees",
    "metaDescription": "Custom online store development for small businesses: catalog, cart, payments and order management. You own the code and pay no monthly platform fees.",
    "kicker": "Custom online stores",
    "title": "Your custom online store, with no monthly platform fees",
    "lead": "I build online stores for small businesses with a catalog, cart, online payments and order management. The code is yours and you don't pay a platform subscription to sell.",
    "includes": [
      "Product catalog with photos, variants and stock",
      "Cart and checkout with an online payment gateway",
      "Dashboard to manage orders and products",
      "Order confirmation emails and customer notices",
      "Optional: shipping by zone and connection to your invoicing software"
    ],
    "fit": [
      "You pay several subscriptions and apps every month to keep your store running",
      "You type store orders by hand into your invoicing software",
      "You want your own store that you can adapt without depending on a platform"
    ],
    "outcome": "A store that's yours, connected to the way you work and with no monthly platform fee.",
    "problem": {
      "title": "Paying every month for a store that isn't yours",
      "text": "Online store platforms are quick to start with, but they charge a monthly subscription, often a fee per sale and extras for every feature you need. And the store lives in their system: if you want to leave, you take your products in a file, but not the store.",
      "example": "A small business starts on a subscription platform. Over time it adds paid apps for shipping, invoices and notices, each with its own fee. It ends up paying several subscriptions a month and still typing orders by hand into its invoicing software."
    },
    "approach": [
      {
        "title": "We define what you sell and how",
        "text": "Products, variants, payment methods, shipping zones and taxes. With that we pick the right package: Online store or Store + operations."
      },
      {
        "title": "I design the store with your brand",
        "text": "A clear store that's fast on a phone, with product pages that answer your customers' questions before they buy."
      },
      {
        "title": "I connect it to your operations",
        "text": "Payment gateway, confirmation emails and order dashboard. If you need it, also shipping by zone, automatic notices and invoicing integration."
      },
      {
        "title": "I publish it and show you how to run it",
        "text": "I take the store live, show you how to manage products and orders, and you receive the code and access credentials."
      }
    ],
    "timeline": "The timeline depends on the number of products and integrations. I set it in the proposal, together with the fixed price.",
    "faq": [
      {
        "q": "Are there really no monthly fees?",
        "a": "You don't pay a platform subscription to have the store. There are third-party costs you pay directly to each provider: hosting, the domain and the payment gateway's fee on each charge."
      },
      {
        "q": "Can I add and edit products myself?",
        "a": "Yes. The dashboard lets you create products, change prices and stock, and manage orders without touching code."
      },
      {
        "q": "Which payment gateway can I use?",
        "a": "Whichever works best in your country and with your customers. We choose it together when defining the project, based on the fees and payment methods you need."
      },
      {
        "q": "Can I migrate my current store?",
        "a": "Yes. I move products, customers and orders from your current platform and keep the important addresses so you don't lose search engine rankings."
      }
    ]
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
    timelineLabel: "Estimated timeline",
    includesLabel: "Includes",
    shops: {
      title: "Websites and online stores",
      text: "Three fixed-scope packages with no monthly platform fees: the store is yours.",
      more: "How I build a custom online store",
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
          timeline: "Defined in the proposal",
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
          timeline: "Defined in the proposal",
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
          timeline: "Defined in the proposal",
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
        text: "A monthly bank of hours to monitor the automations, adjust to changes in your tools and add small improvements.",
      },
    },
  },

  about: {
    eyebrow: "Who's behind it",
    title: "You talk to me from start to finish",
    role: "Founder of Parrax Solutions",
    photoAlt: "Luis Parra, founder of Parrax Solutions",
    paragraphs: [
      "I'm Luis Parra. I design, build and maintain every project myself: the person who replies to your message is the person who will build it.",
      "I come from an industrial background, where a badly solved process shows up in operations every day. That's why I start by understanding how your business works before proposing any technology.",
      "I build websites and online stores, and I automate the tasks that are done by hand today: orders, notifications, reports and connections between tools.",
      "I work remotely with companies in any country, in Spanish or English, by video call.",
    ],
    linkedin: "See my LinkedIn profile",
    newTab: "(opens in a new tab)",
  },

  faq: {
    eyebrow: "FAQ",
    title: "What people usually ask me before starting",
    items: [
      {
        q: "How much does it cost?",
        a: "It depends on the scope, but I always work with a fixed price in writing before we start. After the 20-minute session I send you the exact proposal in your local currency.",
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
      "Websites, online stores and automation for businesses, wherever they are.",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "Online stores", href: "/servicios/tiendas-online" },
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
