# Company Name — Marketing Site

A single-page lead generation website for a custom AI company targeting non-technical SMB owners (law firms, accounting, professional services).

## What this is

- One scroll page with anchor navigation
- Email-only lead capture (`mailto:` links)
- All copy centralized in `lib/site-config.ts`
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
```

Open [http://localhost:3000](http://localhost:3000) after starting the dev server.

## Customization

See [docs/CONTENT.md](docs/CONTENT.md) for how to update company name, email, section copy, and FAQ without touching components.

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for Vercel deployment and pre-launch checklist.

## Project structure

```
app/              Next.js App Router pages and layout
components/       Page sections and UI primitives
lib/site-config.ts  All marketing copy and site settings
docs/             Implementation log, content guide, deployment guide
```

## Documentation

| File | Purpose |
|------|---------|
| [docs/IMPLEMENTATION.md](docs/IMPLEMENTATION.md) | Living build log |
| [docs/CONTENT.md](docs/CONTENT.md) | How to edit copy |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deploy and launch checklist |
