# Content Guide

All marketing copy lives in [`lib/site-config.ts`](../lib/site-config.ts). Edit that file to update the site — no component changes needed for text updates.

## Company identity

```typescript
export const siteConfig = {
  companyName: "Company Name",      // Header, footer, page title
  tagline: "Custom AI assistants...", // Hero eyebrow, footer
  email: "hello@example.com",         // All mailto links
  siteUrl: "https://example.com",     // Set NEXT_PUBLIC_SITE_URL env or edit default before launch
  copyrightYear: new Date().getFullYear(),
};
```

**Before launch:** Replace `companyName` and `email` with real values.

## Navigation

```typescript
export const navLinks = [
  { label: "Why us", href: "#problem" },
  // ...
];
```

Labels and anchor targets only. Section `id` attributes must match `href` values (without `#`).

## Section copy

Each section has its own export:

| Export | Section |
|--------|---------|
| `heroContent` | Hero headline, subheadline, CTA labels |
| `problemContent` | Pain points (3 cards) |
| `howItWorksContent` | 3 steps |
| `industriesContent` | 4 industry examples |
| `benefitsContent` | 4 benefit cards |
| `faqContent` | FAQ accordion items |
| `ctaContent` | Final call-to-action block |

### Email CTAs

Hero and contact section use `buildMailtoLink()` with pre-filled subject and body:

```typescript
ctaSubject: "Custom AI assistant inquiry",
ctaBody: "Hi,\n\nI'm interested in...\n\nCompany:\nIndustry:\n\nThanks,",
```

Use `\n` for line breaks in the email body template.

## Writing guidelines

- **Audience:** Non-technical SMB owners (law, accounting, healthcare admin, etc.)
- **Tone:** Clear, trustworthy, no jargon
- **Avoid:** LibreChat, RAG, embeddings, LLM, API, vector database
- **Prefer:** "your private AI assistant", "trained on your documents", "simple interface"

## SEO metadata

Page title and description are in [`app/layout.tsx`](../app/layout.tsx) and pull from `siteConfig.companyName`. Update the `metadata` export when rebranding.
