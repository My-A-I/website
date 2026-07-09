# AtHand — Marketing Site

A single-page lead generation website for **AtHand** — custom AI knowledge for non-technical SMB teams (law firms, accounting, professional services).

**Tagline:** Your team's knowledge, at hand.

## What this is

- One scroll page with anchor navigation
- Email-only lead capture (`mailto:` links)
- All copy centralized in `lib/site-config.ts`
- Vercel Web Analytics for traffic measurement
- Built with Next.js 16, React, TypeScript, and Tailwind CSS v4

## Prerequisites

- Node.js 20+
- npm

## Commands

```bash
# Install dependencies (first time)
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Run production build locally
npm run start

# Lint
npm run lint

# Pull Vercel Web Analytics (requires vercel login or VERCEL_TOKEN)
npm run analytics:pull
```

Open [http://localhost:3000](http://localhost:3000) after starting the dev server.

## Analytics

Traffic is collected with [Vercel Web Analytics](https://vercel.com/docs/analytics) (`@vercel/analytics`). Enable Web Analytics on the Vercel project after deploy.

To pull metrics from the CLI (for reporting or agent use):

```bash
vercel login          # once
vercel link           # once, in this repo
npm run analytics:pull
```

Optional: `ANALYTICS_SINCE=30d npm run analytics:pull` · `VERCEL_TOKEN` for non-interactive runs.

Full setup, raw CLI examples, and agent instructions: **[docs/ANALYTICS.md](docs/ANALYTICS.md)**

## Customization

See [docs/CONTENT.md](docs/CONTENT.md) for how to update company name, email, section copy, and FAQ without touching components.

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for Vercel deployment and pre-launch checklist.

## Project structure

```
app/              Next.js App Router pages and layout
components/       Page sections and UI primitives
lib/site-config.ts  All marketing copy and site settings
scripts/          Analytics pull script
docs/             Implementation log, content guide, deployment, analytics
```

## Documentation

| File | Purpose |
|------|---------|
| [docs/IMPLEMENTATION.md](docs/IMPLEMENTATION.md) | Living build log |
| [docs/CONTENT.md](docs/CONTENT.md) | How to edit copy |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deploy and launch checklist |
| [docs/ANALYTICS.md](docs/ANALYTICS.md) | Vercel Analytics setup and CLI pull |
