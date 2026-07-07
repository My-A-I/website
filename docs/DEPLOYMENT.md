# Deployment Guide

## Recommended platform

**Vercel** — zero-config for Next.js. Connect the Git repo and deploy on push.

## Pre-launch checklist

- [ ] Update `companyName` in `lib/site-config.ts`
- [ ] Update `email` in `lib/site-config.ts` (all CTAs use this)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production URL (used for `metadataBase` and social preview links)
- [ ] Review section copy in `lib/site-config.ts`
- [ ] Update SEO metadata in `app/layout.tsx` if needed
- [ ] Run `npm run build` locally — must pass
- [ ] Test mailto links open your email client with correct address
- [ ] Check mobile layout (375px) and desktop (1280px)
- [ ] Add custom domain in Vercel dashboard (optional)

## Deploy to Vercel

### Option A: Git integration

1. Push repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Framework preset: Next.js (auto-detected)
4. Deploy

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow prompts for first deploy. Use `vercel --prod` for production.

## Environment variables

None required for v1. The site is fully static with client-side `mailto:` links.

Optional:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for Open Graph / Twitter metadata (defaults to `https://example.com`) |

## Custom domain

1. Vercel project → Settings → Domains
2. Add your domain and configure DNS per Vercel instructions
3. SSL is automatic

## Post-launch (optional)

- Add analytics (Plausible, Google Analytics)
- ~~Replace placeholder OG image in `app/layout.tsx`~~ — generated at `app/opengraph-image.tsx`
- Add Privacy Policy / Terms pages when needed
