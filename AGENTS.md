<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Site analytics

This project uses **Vercel Web Analytics** (not Plausible or GA). Implementation: `components/analytics.tsx` → `app/layout.tsx`.

### Pulling traffic data

Agents may use the Vercel CLI to read production analytics:

```bash
npm run analytics:pull
```

**Requirements:** `vercel login` or `VERCEL_TOKEN`; project linked via `vercel link` or `VERCEL_PROJECT`. Web Analytics must be enabled in the Vercel dashboard. Data is production-only (`--prod`).

**Output:** JSON on stdout and `.analytics/latest.json` (gitignored). Optional `ANALYTICS_SINCE` (default `7d`).

**Full reference:** [docs/ANALYTICS.md](docs/ANALYTICS.md) — schema exploration, raw `vercel metrics` examples, privacy notes.

Do not commit `.analytics/` or tokens. **Never run `vercel login` for the user** — it opens an OAuth browser flow. Ask them to log in manually or provide `VERCEL_TOKEN`. `npm run analytics:pull` fails fast if credentials are missing.

### Brand and copy

Marketing copy lives in `lib/site-config.ts`. Brand: **AtHand** (`athand.cloud`). Legal entity: **HUMAN/MACHINE** (DBA). See [docs/CONTENT.md](docs/CONTENT.md).
