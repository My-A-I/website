# Web Analytics (Vercel)

AtHand uses [Vercel Web Analytics](https://vercel.com/docs/analytics) for privacy-friendly, cookieless traffic measurement. The `@vercel/analytics` package is wired in `components/analytics.tsx` and rendered from `app/layout.tsx`.

## Dashboard

1. Open the Vercel project → **Analytics** tab.
2. If prompted, enable **Web Analytics** for the project (required before data appears).
3. Use the dashboard for bounce rate and visual breakdowns not exposed via CLI.

## CLI access (humans and agents)

Traffic can be queried from the terminal with the Vercel CLI [`vercel metrics`](https://vercel.com/docs/analytics/accessing-metrics-with-vercel-cli) command. This repo wraps common queries in:

```bash
npm run analytics:pull
```

### Prerequisites

1. **Authenticate first (manual)** — the pull script **never** starts `vercel login` or opens a browser. Do one of:
   - `vercel login` once in your own terminal (stores credentials locally), or
   - `VERCEL_TOKEN` env var (CI / agents; create at [vercel.com/account/tokens](https://vercel.com/account/tokens))
2. **Link the project** (first time in this repo):
   ```bash
   npx vercel link
   ```
   Or set `VERCEL_PROJECT` to the project name or ID.
3. **Enable Web Analytics** in the Vercel dashboard (see above).
4. **Deploy to production** — metrics use `--prod` (production traffic only).

The npm script uses the **`vercel` dev dependency** (must support `vercel metrics`). Run `npm install` after cloning.

### Output

The script writes:

- **stdout** — combined JSON report (pageviews by day, unique visitors, top pages, countries, devices)
- **`.analytics/latest.json`** — same report on disk (gitignored)

Optional env vars:

| Variable | Default | Purpose |
|----------|---------|---------|
| `ANALYTICS_SINCE` | `7d` | Time window (`1h`, `30m`, `2d`, `7d`, ISO date) |
| `VERCEL_PROJECT` | linked project | Project name or ID |
| `VERCEL_TOKEN` | — | Auth token for non-interactive runs |

Example — last 30 days:

```bash
ANALYTICS_SINCE=30d npm run analytics:pull
```

### Raw CLI examples

After `vercel login` and `vercel link`:

```bash
# Inspect available Web Analytics metrics
vercel metrics schema vercel.analytics_pageview

# Daily pageviews, last 7 days (JSON)
vercel metrics vercel.analytics_pageview.count \
  --since 7d --granularity 1d --prod --format json

# Top pages
vercel metrics vercel.analytics_pageview.count \
  --group-by request_path --since 7d --limit 20 --prod --format json

# Unique visitors
vercel metrics vercel.analytics_pageview.count \
  --aggregation unique/visitor_id --since 7d --prod --format json
```

## Agents

When asked to report on site traffic or marketing performance:

1. Ensure `VERCEL_TOKEN` is available (or the environment is already logged in via `vercel login`).
2. Run `npm run analytics:pull` from the repo root.
3. Read `.analytics/latest.json` or parse the JSON stdout.
4. Summarize pageviews, unique visitors, top pages, and geographic/device breakdown for the requested period (`ANALYTICS_SINCE` if needed).

Do **not** commit `.analytics/` or tokens. Do **not** run `vercel login` on the user's behalf — if credentials are missing, ask them to log in manually or provide `VERCEL_TOKEN`. The pull script exits immediately without opening a browser.

## Privacy

Analytics behavior is described in the [Privacy Policy](/privacy) (`lib/privacy-content.ts`). Vercel Web Analytics does not use third-party cookies and does not track users across sites.

## Related files

| File | Role |
|------|------|
| `components/analytics.tsx` | `@vercel/analytics/next` wrapper |
| `app/layout.tsx` | Renders `<Analytics />` |
| `scripts/analytics-pull.mjs` | Pull script used by `npm run analytics:pull` |
| `lib/privacy-content.ts` | Privacy copy mentioning analytics |
