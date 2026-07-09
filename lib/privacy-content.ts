import { legalConfig, siteConfig } from "@/lib/site-config";

export const privacyPageContent = {
  title: "Privacy Policy",
  effectiveDate: legalConfig.privacyEffectiveDate,
  intro: `${siteConfig.companyName} ("we," "us," or "our") operates ${siteConfig.siteUrl.replace(/^https?:\/\//, "")}. This policy explains what we collect when you visit our website and how we use it.`,
  sections: [
    {
      title: "Who we are",
      body: `${siteConfig.companyName} builds private AI assistants for small businesses.${legalConfig.legalEntityName !== siteConfig.companyName ? ` ${siteConfig.companyName} is a service of ${legalConfig.legalEntityName}.` : ""} Questions about this policy: ${siteConfig.email}.`,
    },
    {
      title: "What this website collects",
      body: "Our marketing site is static. We do not host login accounts, contact forms, or payment pages on this site. If you email us through a mailto link, you choose what to send — we receive only what you include in that message.",
    },
    {
      title: "Analytics",
      body: `We use ${legalConfig.analyticsProvider} to understand aggregate traffic (for example, page views and referrers). This helps us improve the site. Vercel Analytics does not use third-party advertising cookies and does not track you across other websites.`,
    },
    {
      title: "Hosting and infrastructure",
      body: "The site is hosted on Vercel. When you load a page, standard server and CDN logs (such as IP address, browser type, and requested URL) may be processed by our hosting provider to deliver the site securely and reliably.",
    },
    {
      title: "Client services (separate from this site)",
      body: "If you become a customer, we may process your business documents and related data to build and operate your private AI assistant. That processing is governed by our service agreement with you, not solely by this website policy.",
    },
    {
      title: "How long we keep information",
      body: "Website analytics are kept in aggregate form according to our analytics provider's retention settings. Emails you send us are kept as long as needed to respond and maintain our business relationship.",
    },
    {
      title: "Your choices",
      body: "You can use browser privacy settings or extensions that block analytics scripts. You may request access to or deletion of personal information you have sent us directly by emailing us at the address above.",
    },
    {
      title: "Changes",
      body: "We may update this policy from time to time. The effective date at the top of this page will change when we do. Continued use of the site after an update means you accept the revised policy.",
    },
  ],
} as const;
