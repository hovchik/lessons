#!/usr/bin/env node
/**
 * One-click runner for the Lessons app.
 *
 *   node start.mjs            production: install → env → seed → build → start → open browser
 *   node start.mjs --dev      same, but runs the development server (no build step)
 *   node start.mjs --rebuild  force a fresh production build
 *
 * Double-click Start.command (macOS), Start.bat (Windows) or start.sh (Linux) to run it.
 */
import { spawn, spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
process.chdir(root);

const args = new Set(process.argv.slice(2));
const DEV = args.has("--dev");
const REBUILD = args.has("--rebuild");
const PORT = process.env.PORT || "3000";
const isWin = process.platform === "win32";
const npm = isWin ? "npm.cmd" : "npm";

const log = (msg) => console.log(`\n▶ ${msg}`);
const fail = (msg) => {
  console.error(`\n✖ ${msg}`);
  if (isWin) spawnSync("cmd", ["/c", "pause"], { stdio: "inherit" });
  process.exit(1);
};

function run(cmd, cmdArgs, opts = {}) {
  const r = spawnSync(cmd, cmdArgs, { stdio: "inherit", shell: isWin, ...opts });
  if (r.status !== 0) fail(`"${cmd} ${cmdArgs.join(" ")}" failed (exit code ${r.status}).`);
}

// 1. Node version
const major = Number(process.versions.node.split(".")[0]);
if (major < 20) fail(`Node.js 20 or newer is required (you have ${process.versions.node}). Download it from https://nodejs.org`);

// 2. Dependencies (dev dependencies included: the build and the seed script need them,
//    even when NODE_ENV=production or npm's "omit=dev" is set on this machine)
const needed = ["next", "tsx", "typescript", "tailwindcss", "@libsql/client", "drizzle-orm"];
const missing = needed.filter((m) => !fs.existsSync(path.join("node_modules", m)));
if (missing.length) {
  log(`Installing dependencies${fs.existsSync("node_modules") ? ` (missing: ${missing.join(", ")})` : " (first run only, this takes a minute)"}…`);
  run(npm, ["install", "--include=dev", "--no-audit", "--no-fund"], { env: { ...process.env, NODE_ENV: "development" } });
}

// 3. Environment file
if (!fs.existsSync(".env.local")) {
  log("No .env.local found; let's create one.");
  const generated = randomBytes(6).toString("base64url");
  let password = "";
  if (process.stdin.isTTY) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    password = await new Promise((resolve) => {
      rl.on("close", () => resolve(""));
      rl.question(`Admin password for /admin [press Enter to use "${generated}"]: `).then(resolve, () => resolve(""));
    });
    rl.close();
    password = password.trim();
  }
  if (!password) password = generated;
  const env = [
    "# Created by start.mjs",
    `ADMIN_PASSWORD=${password}`,
    `ADMIN_SESSION_SECRET=${randomBytes(32).toString("base64url")}`,
    "# Add your key to enable \"Generate with Claude\" in the admin panel and npm run generate",
    "ANTHROPIC_API_KEY=",
    "",
  ].join("\n");
  fs.writeFileSync(".env.local", env);
  console.log(`\n  Saved .env.local. Admin password: ${password}\n  (edit .env.local to change it or to add ANTHROPIC_API_KEY)`);
}

// 4. Database
const dbPath = process.env.DATABASE_PATH || path.join("data", "lessons.db");
if (!fs.existsSync(dbPath)) {
  log("Seeding the database with all courses…");
  run(npm, ["run", "db:seed"]);
}

// 5. Build (production only)
if (!DEV && (REBUILD || !fs.existsSync(path.join(".next", "BUILD_ID")))) {
  log("Building the app (first run only, 1–3 minutes)…");
  run(npm, ["run", "build"]);
}

// 6. Start the server and open the browser
const url = `http://localhost:${PORT}`;
log(`${DEV ? "Starting the development server" : "Starting"} at ${url}  (admin panel: ${url}/admin)`);
console.log("  Press Ctrl+C in this window to stop.\n");

const server = spawn(npm, ["run", DEV ? "dev" : "start", "--", "-p", PORT], {
  stdio: "inherit",
  shell: isWin,
  env: { ...process.env, NODE_ENV: DEV ? "development" : "production" },
});

const openBrowser = () => {
  const target = `${url}/en`;
  const r =
    process.platform === "darwin"
      ? spawnSync("open", [target])
      : isWin
        ? spawnSync("cmd", ["/c", "start", "", target])
        : spawnSync("xdg-open", [target]);
  if (r.error) console.log(`  Open ${target} in your browser.`);
};

// Wait until the server answers, then open the browser (give up quietly after 90 s).
const started = Date.now();
const poll = setInterval(async () => {
  try {
    const res = await fetch(url, { redirect: "manual" });
    if (res.status < 500) {
      clearInterval(poll);
      openBrowser();
    }
  } catch {
    if (Date.now() - started > 90_000) clearInterval(poll);
  }
}, 1000);

server.on("exit", (code) => {
  clearInterval(poll);
  if (code && code !== 0) fail(`The server stopped with exit code ${code}.`);
  process.exit(code ?? 0);
});
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => server.kill(sig));
