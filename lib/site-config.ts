export const siteConfig = {
  companyName: "Company Name",
  tagline: "Custom AI assistants for small businesses",
  email: "hello@example.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  copyrightYear: new Date().getFullYear(),
};

export const navLinks = [
  { label: "Why us", href: "#problem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export function buildMailtoLink(options?: {
  subject?: string;
  body?: string;
}) {
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const query = params.toString();
  return `mailto:${siteConfig.email}${query ? `?${query}` : ""}`;
}

export const heroContent = {
  headline:
    "An AI assistant trained on your business — private, simple, built for your team.",
  subheadline:
    "We design and host a custom chat experience using your documents, policies, and workflows. No technical team required on your end.",
  ctaLabel: "Get in touch",
  ctaSubject: "Custom AI assistant inquiry",
  ctaBody:
    "Hi,\n\nI'm interested in learning more about a custom AI assistant for my business.\n\nCompany:\nIndustry:\n\nThanks,",
} as const;

export const problemContent = {
  title: "Sound familiar?",
  subtitle:
    "Most small businesses have valuable knowledge locked in files, inboxes, and people's heads.",
  pains: [
    {
      title: "Documents everywhere",
      description:
        "Contracts, SOPs, and client files live in folders, email threads, and shared drives — hard to find when you need them.",
    },
    {
      title: "Same questions, again and again",
      description:
        "Your team spends hours answering repeat questions that are already documented somewhere.",
    },
    {
      title: "Generic AI doesn't know you",
      description:
        "Public chat tools don't understand your policies, clients, or how your business actually works.",
    },
  ],
} as const;

export const howItWorksContent = {
  title: "How it works",
  subtitle: "Three simple steps from first call to a working assistant.",
  steps: [
    {
      step: "01",
      title: "Discovery call",
      description:
        "We learn about your workflows, documents, and what your team needs day to day.",
    },
    {
      step: "02",
      title: "We build it",
      description:
        "We create a private AI assistant and a simple interface tailored to your business.",
    },
    {
      step: "03",
      title: "Your team uses it",
      description:
        "Secure access for your staff, with ongoing support as your needs evolve.",
    },
  ],
} as const;

export const industriesContent = {
  title: "Built for professional services",
  subtitle: "Every industry is different. We tailor the assistant to yours.",
  industries: [
    {
      name: "Law firms",
      example: "Find clause language across past contracts in seconds.",
    },
    {
      name: "Accounting",
      example: "Answer client policy questions using your firm's guidelines.",
    },
    {
      name: "Healthcare admin",
      example: "Help staff navigate intake forms, policies, and procedures.",
    },
    {
      name: "Professional services",
      example: "Onboard new hires with instant answers from your playbooks.",
    },
  ],
} as const;

export const benefitsContent = {
  title: "Why businesses choose us",
  subtitle: "Trust and simplicity matter when your data is on the line.",
  benefits: [
    {
      title: "Your data stays yours",
      description:
        "Your documents are used only for your assistant — not shared or used to train public models.",
    },
    {
      title: "No tech team required",
      description:
        "We handle setup, hosting, and updates. Your team just opens a browser and starts asking questions.",
    },
    {
      title: "Role-based access",
      description:
        "Control who sees what. Partners, associates, and admin staff can each have appropriate access.",
    },
    {
      title: "Ongoing support",
      description:
        "As you add documents or change processes, we help keep your assistant accurate and useful.",
    },
  ],
} as const;

export const faqContent = {
  title: "Common questions",
  items: [
    {
      question: "Is our data secure?",
      answer:
        "Yes. Your assistant runs in a private environment. Your documents are not used to train public AI models, and access is limited to people you authorize.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Pricing depends on your team size, document volume, and features. We provide a custom quote after a short discovery call — no surprise fees.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most projects launch within a few weeks. A simple pilot can be ready sooner; larger document libraries may take a bit longer.",
    },
    {
      question: "Do we need to be technical?",
      answer:
        "Not at all. If your team can use email and a web browser, they can use your AI assistant. We handle everything behind the scenes.",
    },
    {
      question: "What documents can it use?",
      answer:
        "PDFs, Word files, spreadsheets, internal wikis, and more. We work with you to identify the sources that matter most.",
    },
  ],
} as const;

export const ctaContent = {
  title: "Ready to explore what's possible?",
  subtitle:
    "Send us a note about your business. We'll reply with next steps — no pressure, no jargon.",
  ctaLabel: "Email us",
  ctaSubject: "Custom AI assistant inquiry",
  ctaBody:
    "Hi,\n\nI'd like to schedule a discovery call about a custom AI assistant.\n\nCompany:\nIndustry:\n\nThanks,",
} as const;
