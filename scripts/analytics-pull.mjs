#!/usr/bin/env node
/**
 * Pull Vercel Web Analytics metrics via the Vercel CLI.
 * Requires credentials before running — never starts an interactive login.
 * Set VERCEL_TOKEN or run `vercel login` yourself first.
 */

import { readCredentials } from "@vercel/cli-auth/credentials-store.js";
import { getGlobalPathConfig } from "@vercel/cli-config";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const since = process.env.ANALYTICS_SINCE ?? "7d";
const outDir = join(root, ".analytics");
const outFile = join(outDir, "latest.json");
const vercelBin = join(root, "node_modules", ".bin", "vercel");

function hasCredentials() {
  if (process.env.VERCEL_TOKEN?.trim()) {
    return true;
  }

  try {
    const credentials = readCredentials(getGlobalPathConfig());
    return Boolean(credentials?.token?.trim());
  } catch {
    return false;
  }
}

function requireCredentials() {
  if (hasCredentials()) {
    return;
  }

  console.error(
    "Vercel credentials not found. This script does not run `vercel login` for you.\n\n" +
      "Do one of the following, then re-run:\n" +
      "  1. Set VERCEL_TOKEN (recommended for agents)\n" +
      "  2. Run `vercel login` once in your terminal, then retry\n\n" +
      "See docs/ANALYTICS.md",
  );
  process.exit(1);
}

function runVercel(args) {
  const result = spawnSync(vercelBin, ["--non-interactive", ...args], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
    },
  });

  if (result.status !== 0) {
    const message = result.stderr?.trim() || result.stdout?.trim() || "unknown error";
    if (/login flow|No existing credentials|device\?user_code/i.test(message)) {
      console.error(
        "Vercel CLI tried to start an interactive login. Set VERCEL_TOKEN or run `vercel login` manually.\n\n" +
          message,
      );
      process.exit(1);
    }
    throw new Error(message);
  }

  return result.stdout.trim();
}

function parseJson(label, raw) {
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`${label}: expected JSON from vercel metrics, got:\n${raw.slice(0, 500)}`);
  }
}

function metricsQuery(metricId, extraArgs = []) {
  const args = [
    "metrics",
    metricId,
    "--since",
    since,
    "--prod",
    "--format",
    "json",
    ...extraArgs,
  ];

  if (process.env.VERCEL_PROJECT) {
    args.push("--project", process.env.VERCEL_PROJECT);
  }
  if (process.env.VERCEL_TOKEN) {
    args.push("--token", process.env.VERCEL_TOKEN);
  }

  return runVercel(args);
}

requireCredentials();

if (!process.env.VERCEL_PROJECT && !existsSync(join(root, ".vercel", "project.json"))) {
  console.error(
    "No linked Vercel project. Run `vercel link` in this repo or set VERCEL_PROJECT.\n" +
      "See docs/ANALYTICS.md",
  );
  process.exit(1);
}

const queries = {
  pageviewsByDay: () =>
    metricsQuery("vercel.analytics_pageview.count", ["--granularity", "1d"]),
  uniqueVisitors: () =>
    metricsQuery("vercel.analytics_pageview.count", [
      "--aggregation",
      "unique/visitor_id",
    ]),
  topPages: () =>
    metricsQuery("vercel.analytics_pageview.count", [
      "--group-by",
      "request_path",
      "--limit",
      "20",
    ]),
  topCountries: () =>
    metricsQuery("vercel.analytics_pageview.count", [
      "--group-by",
      "country",
      "--limit",
      "10",
    ]),
  topDevices: () =>
    metricsQuery("vercel.analytics_pageview.count", [
      "--group-by",
      "device_type",
      "--limit",
      "10",
    ]),
};

const report = {
  generatedAt: new Date().toISOString(),
  since,
  project: process.env.VERCEL_PROJECT ?? "(linked project)",
  metrics: {},
};

for (const [key, fn] of Object.entries(queries)) {
  process.stderr.write(`Fetching ${key}...\n`);
  report.metrics[key] = parseJson(key, fn());
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, `${JSON.stringify(report, null, 2)}\n`);

console.log(JSON.stringify(report, null, 2));
process.stderr.write(`\nSaved copy to ${outFile}\n`);
