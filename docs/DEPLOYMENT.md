# Deployment Guide

## Recommended platform

**Vercel** — zero-config for Next.js. Connect the Git repo and deploy on push.

## Pre-launch checklist

- [x] Update `companyName` in `lib/site-config.ts` (AtHand)
- [x] Update `email` in `lib/site-config.ts` (hello@athand.cloud)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production URL if it differs from `https://athand.cloud` (used for `metadataBase` and social preview links)
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

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for Open Graph / Twitter metadata (defaults to `https://athand.cloud` in site config) |

Optional for CLI analytics pulls (see [ANALYTICS.md](./ANALYTICS.md)):

| Variable | Purpose |
|----------|---------|
| `VERCEL_TOKEN` | Non-interactive Vercel CLI auth |
| `VERCEL_PROJECT` | Project name/ID if not linked locally |
| `ANALYTICS_SINCE` | Time window for `npm run analytics:pull` (default `7d`) |

## Custom domain

1. Vercel project → Settings → Domains
2. Add your domain and configure DNS per Vercel instructions
3. SSL is automatic
4. Set `NEXT_PUBLIC_SITE_URL` to the production URL

## Post-launch

- [ ] Enable **Web Analytics** in Vercel project → Analytics
- [ ] Run `npm run analytics:pull` after traffic exists (see [ANALYTICS.md](./ANALYTICS.md))
- ~~Replace placeholder OG image~~ — generated at `app/opengraph-image.tsx`
- [x] Favicon and Apple touch icon at `app/icon.tsx` and `app/apple-icon.tsx` (legacy `app/favicon.ico` included)
- Privacy Policy at `/privacy` (linked from footer)
