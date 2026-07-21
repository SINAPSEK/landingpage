export const en = {
  meta: {
    title: 'SINAPSEK — AI engineering studio | Automation Sprints & Document AI',
    description:
      "SINAPSEK is a two-person AI engineering studio in Quito, Ecuador. We build production-grade agents and document AI for SaaS teams and agencies — fixed scope, live in 2–3 weeks. Book a free automation audit.",
  },
  nav: {
    links: [
      { label: 'What we build', href: '#what-we-build' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
    bookCall: 'Book a call',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'AI engineering studio · Quito → worldwide',
    titleLead: 'We connect your product to',
    titleAccent: 'production-grade AI.',
    subtitle:
      'SINAPSEK is a two-person AI engineering studio. We build the agents and document-AI your SaaS or agency needs — fixed scope, live in 2–3 weeks, running on your stack.',
    ctaPrimary: 'Book a free automation audit',
    ctaSecondary: 'See what we build',
  },
  gap: {
    eyebrow: 'the gap',
    titleLead: 'Everyone wants AI in their product.',
    titleAccent: 'Almost no one has shipped it.',
    body: "SaaS teams promise AI features that sit in the backlog. Agencies pitch AI they don't have the engineers to build. That distance — between the demo and something running in production — is where we work.",
  },
  services: {
    eyebrow: 'what we build',
    title: 'Two ways to put real AI to work.',
    subtitle:
      'No open-ended retainers to nowhere. Each engagement has a fixed scope, a fixed price, and a working system at the end.',
    items: [
      {
        index: '01',
        title: 'Automation Sprint',
        role: 'one manual process → one agent',
        description:
          'Pick a repetitive workflow — quotes, email triage, reporting, pulling data out of documents. We design, build and deploy an agent that does it. You see progress every week, and you own the code at the end.',
        chips: ['2–3 weeks', 'from $1,900', '50% upfront'],
      },
      {
        index: '02',
        title: 'Document AI',
        role: 'your knowledge base → answerable',
        description:
          'Turn manuals, tickets, contracts and internal docs into an assistant your team or your users can actually ask. Production RAG on your data, grounded in your sources, hosted and maintained by us.',
        chips: ['from $2,500 setup', '+ monthly hosting', 'your data stays yours'],
      },
    ],
  },
  audiences: {
    eyebrow: "who it's for",
    title: 'Built for the teams on the hook to deliver AI.',
    items: [
      {
        tag: 'SaaS teams',
        title: 'Ship the AI feature without hiring an AI team.',
        description:
          "You have the product and the users. We add the copilot, the semantic search, the document-AI — as a clean API your team can own — without a six-month hire.",
      },
      {
        tag: 'Agencies · white-label',
        title: 'Deliver AI to your clients, under your name.',
        description:
          "Sell the AI work you can't staff internally. We build it invisibly behind you: your brand on the front, senior AI engineers on the back. You keep the client relationship.",
      },
    ],
  },
  process: {
    eyebrow: 'how a sprint works',
    title: 'From first call to shipped, in three moves.',
    footer: 'typical timeline 2–3 weeks · milestone-based · 50% to start',
    steps: [
      {
        number: '1',
        title: 'Scope',
        description:
          'A short call to find the one process worth automating. You get a fixed-scope, fixed-price proposal within 48 hours — no vague estimates.',
      },
      {
        number: '2',
        title: 'Build',
        description:
          'We build in the open. A working slice each week, deployed to a staging environment you can click through and react to.',
      },
      {
        number: '3',
        title: 'Ship',
        description:
          'Deployed to your stack, documented, and handed over. The code is yours. We stay on for hosting and iteration only if you want us to.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'why sinapsek',
    title: 'Senior engineering, not a prototype in a notebook.',
    reasons: [
      {
        icon: 'server',
        title: 'Production, not prototypes',
        description:
          'Serverless on AWS — Lambda, Step Functions, Terraform — the same stack we run in production today. Built to stay up, not to demo once.',
      },
      {
        icon: 'workflow',
        title: 'Agents with the newest tooling',
        description:
          "LangGraph, RAG, MCP and Agent Skills. Most shops haven't caught up to agentic tooling yet — it's our default.",
      },
      {
        icon: 'userCheck',
        title: 'Founder-led',
        description:
          'You work directly with the engineers who write the code. No account managers, no handoffs.',
      },
      {
        icon: 'mic',
        title: 'On the record',
        description:
          'Speakers at AWS Community Day Ecuador 2026 and GDG Quito. We build in public and stand behind the work.',
      },
      {
        icon: 'globe',
        title: 'Built to export',
        description:
          'Remote across US and EU time zones. We invoice cleanly in USD or EUR, with no cross-border friction for you.',
      },
      {
        icon: 'shield',
        title: 'Fixed scope, real risk-sharing',
        description:
          'You approve the scope and the price before we start. The audit that gets you there costs nothing.',
      },
    ],
  },
  pricing: {
    eyebrow: 'pricing',
    title: 'Priced upfront, so you can say yes fast.',
    subtitle:
      'Starting points, not final quotes — every engagement is scoped to what you actually need.',
    badge: 'Most popular',
    footer:
      "Not sure which you need? Start with a free automation audit — we'll find one process worth automating and tell you straight whether it's worth it.",
    plans: [
      {
        title: 'Automation Sprint',
        price: 'from $1,900',
        priceNote: '(fixed scope)',
        features: [
          'One workflow automated end-to-end',
          'Working system in 2–3 weeks',
          'Weekly staging builds you can review',
          'You own the code and the deployment',
          '50% to start, 50% on delivery',
        ],
        cta: 'Start a Sprint',
        featured: true,
      },
      {
        title: 'Document AI',
        price: '$2,500 setup',
        priceNote: '+ monthly hosting',
        features: [
          'Assistant grounded in your own sources',
          'Production RAG, hosted and maintained',
          'Answers cite where they came from',
          'Your data stays yours, always',
          'Scales into a product you can resell',
        ],
        cta: 'Talk it through',
        featured: false,
      },
    ],
  },
  faq: {
    eyebrow: 'faq',
    title: 'Frequently asked questions.',
    items: [
      {
        question: 'Do we own what you build?',
        answer:
          'Yes. Code, prompts, infrastructure config — all handed over and yours to keep. Hosting with us is optional, never a lock-in.',
      },
      {
        question: 'Can you work white-label, under our brand?',
        answer:
          "That's a core way we work with agencies. We stay invisible: your brand on the front, our engineering behind it, and you keep the client relationship.",
      },
      {
        question: 'How fast can we start?',
        answer:
          "The audit call happens within days. If we're a fit, you get a fixed proposal in 48 hours and a Sprint usually kicks off the following week.",
      },
      {
        question: 'Where are you based?',
        answer:
          'Quito, Ecuador, working remotely across US and EU time zones. Invoicing is clean in USD or EUR.',
      },
      {
        question: "What if it turns out AI isn't the answer?",
        answer:
          "Then we tell you. The audit is free and honest — if a workflow isn't worth automating, you'll hear that before you spend anything.",
      },
    ],
  },
  finalCta: {
    eyebrow: "let's begin",
    title: "Let's find one process worth automating.",
    subtitle:
      'A 20-minute call, a free audit, and a straight answer. No deck, no pressure.',
    cta: 'Book a free automation audit',
  },
  footer: {
    tagline: 'Made in Ecuador · shipped worldwide · © 2026',
    github: 'GitHub',
  },
};

export type Dictionary = typeof en;
