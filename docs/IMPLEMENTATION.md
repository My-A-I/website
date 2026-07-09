# Implementation Log

Living record of what was built, why, and how to verify. Updated incrementally during development.

---

## 2026-07-06 — Project scaffold

### What was built

- Next.js 16 app with App Router, TypeScript, Tailwind CSS v4, ESLint
- Base files: `package.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

### Why

- Next.js provides SEO metadata, fast dev experience, and easy Vercel deployment
- Tailwind v4 for rapid layout without a heavy component library
- Static-friendly: no backend needed for email-only lead capture

### How to verify

```bash
npm install
npm run dev
```

Visit http://localhost:3000

### Next step

Add `lib/site-config.ts` and page sections.

---

## 2026-07-06 — Site config and sections

### What was built

| File | Role |
|------|------|
| `lib/site-config.ts` | Company name, email, nav, all section copy, FAQ, mailto helper |
| `components/site-header.tsx` | Sticky nav + mobile menu |
| `components/hero.tsx` | Hero with primary CTA |
| `components/problem.tsx` | Pain points |
| `components/how-it-works.tsx` | 3-step process |
| `components/industries.tsx` | Industry examples |
| `components/benefits.tsx` | Trust signals |
| `components/faq.tsx` | Accessible accordion |
| `components/cta-section.tsx` | Final email CTA |
| `components/site-footer.tsx` | Footer |
| `components/ui/button.tsx` | Primary/outline button variants |

### Why

- **Single config file** — non-devs can update copy without touching JSX
- **Plain language** — no LibreChat, RAG, or LLM jargon (SMB audience)
- **Email-only CTA** — simplest conversion path, no form backend
- **Plus Jakarta Sans + Source Serif 4** — professional, not generic AI aesthetic
- **Teal accent on slate** — trustworthy, restrained palette

### How to verify

```bash
npm run build
```

Build must complete with zero errors. Scroll page on mobile (375px) and desktop (1280px).

### Next step

Final metadata pass, deployment docs, launch checklist.

---

## Context (preserved from planning)

- **Audience:** Non-technical SMB owners
- **Product:** Custom AI assistant + UI (LibreChat wrapper internally — not mentioned on site)
- **Conversion:** `mailto:hello@athand.cloud` with pre-filled subject/body
- **Branding:** AtHand (`athand.cloud`); legal entity HUMAN/MACHINE (DBA)
