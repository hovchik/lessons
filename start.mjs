#!/usr/bin/env node
/**
 * One-click runner for the Lessons app.
 *
 *   node start.mjs            production: install → env → seed → build → start → open browser
 *   node start.mjs --dev      same, but runs the development server (no build step)
 *   node start.mjs --rebuild  force a fresh production build
 *   node start.mjs --no-pull  do not fetch the latest version with git first
 *
 * Every run gets the latest version (git pull), stops a copy of the app that is still
 * running from an earlier start, and rebuilds whatever changed, so it always shows the
 * newest version.
 *
 * Double-click Start.command (macOS), Start.bat (Windows) or start.sh (Linux) to run it.
 */
import { spawn, spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
process.chdir(root);

const args = new Set(process.argv.slice(2));
const DEV = args.has("--dev");
const REBUILD = args.has("--rebuild");
const NO_PULL = args.has("--no-pull");
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

// 2. Latest code: in a git checkout, pull the newest version first (skip with --no-pull).
//    If this file itself changed, the new copy of it runs the rest.
if (!NO_PULL && fs.existsSync(".git")) {
  const before = fs.readFileSync("start.mjs", "utf8");
  log("Getting the latest version (git pull)…");
  const r = spawnSync("git", ["pull", "--ff-only"], { stdio: "inherit" });
  if (r.error) console.log("  git is not installed here; running the copy in this folder.");
  else if (r.status !== 0) console.log("  Could not update (see the message above); running the copy in this folder.");
  else if (fs.readFileSync("start.mjs", "utf8") !== before) {
    const again = spawnSync(process.execPath, ["start.mjs", ...process.argv.slice(2), "--no-pull"], { stdio: "inherit" });
    process.exit(again.status ?? 1);
  }
}

// 3. Stop a copy of the app started earlier. It keeps answering on the port and keeps
//    showing the old version, even after this run rebuilds; on Windows it also locks
//    the files the build has to replace. Only Node processes are stopped: anything
//    else on the port is left alone, with a message.
const portBusy = () =>
  new Promise((resolve) => {
    // Trying to listen on the port tells for sure, however slowly the old server answers.
    const probe = net.createServer();
    probe.once("error", (e) => resolve(e.code === "EADDRINUSE"));
    probe.once("listening", () => probe.close(() => resolve(false)));
    probe.listen(Number(PORT));
  });

// Processes listening on PORT, as { pid, name }.
function listeners() {
  const found = new Map();
  if (isWin) {
    // "  TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    1234"; the state word is translated
    // on non-English Windows, so a listening socket is told by its remote port 0 instead.
    const out = spawnSync("netstat", ["-ano", "-p", "tcp"], { encoding: "utf8" }).stdout || "";
    for (const line of out.split(/\r?\n/)) {
      const cols = line.trim().split(/\s+/);
      if (cols.length >= 5 && /^TCP/i.test(cols[0]) && cols[1].endsWith(`:${PORT}`) && /:0$/.test(cols[2])) {
        const pid = Number(cols[cols.length - 1]);
        if (pid > 0) found.set(pid, "");
      }
    }
    for (const pid of found.keys()) {
      const row = spawnSync("tasklist", ["/FI", `PID eq ${pid}`, "/FO", "CSV", "/NH"], { encoding: "utf8" }).stdout || "";
      found.set(pid, (row.match(/^"([^"]+)"/m) || [])[1] || "");
    }
  } else {
    let out = spawnSync("lsof", ["-nP", `-iTCP:${PORT}`, "-sTCP:LISTEN", "-t"], { encoding: "utf8" }).stdout || "";
    // Some Linux systems have no lsof, or one that misses sockets; fuser prints the PIDs instead.
    if (!out.trim()) out = spawnSync("fuser", ["-n", "tcp", PORT], { encoding: "utf8" }).stdout || "";
    for (const pid of out.split(/\s+/).map(Number).filter((n) => n > 0)) {
      found.set(pid, (spawnSync("ps", ["-p", String(pid), "-o", "comm="], { encoding: "utf8" }).stdout || "").trim());
    }
  }
  return [...found].map(([pid, name]) => ({ pid, name }));
}

const stopHint = isWin
  ? `run  netstat -ano | findstr :${PORT}  and then  taskkill /PID <number in the last column> /F`
  : `run  lsof -i :${PORT}  and then  kill <PID>`;

if (await portBusy()) {
  const procs = listeners();
  const others = procs.filter((p) => !/node|next/i.test(p.name));
  if (!procs.length) {
    fail(
      [
        `Something is already running at http://localhost:${PORT} and it could not be stopped automatically.`,
        "  Close the other Start window (or press Ctrl+C in it), then run this again.",
        `  If you cannot find that window: ${stopHint}`,
      ].join("\n"),
    );
  }
  if (others.length) {
    fail(
      [
        `Port ${PORT} is used by another program (${others.map((p) => `${p.name || "unknown"}, PID ${p.pid}`).join("; ")}), not by this app.`,
        `  Close that program, or start the app on another port, e.g.  ${isWin ? `set PORT=3001 && node start.mjs` : "PORT=3001 node start.mjs"}`,
      ].join("\n"),
    );
  }
  log(`Stopping the copy of the app that is already running (PID ${procs.map((p) => p.pid).join(", ")})…`);
  for (const { pid } of procs) {
    if (isWin) spawnSync("taskkill", ["/PID", String(pid), "/T", "/F"], { stdio: "ignore" });
    else {
      try {
        process.kill(pid, "SIGTERM");
      } catch {}
    }
  }
  // Wait up to 10 s for the port to free up; on Unix, force it after 5 s.
  for (let i = 0; i < 20 && (await portBusy()); i++) {
    if (i === 10 && !isWin) {
      for (const { pid } of procs) {
        try {
          process.kill(pid, "SIGKILL");
        } catch {}
      }
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  if (await portBusy()) fail(`The old copy did not stop. Close it yourself: ${stopHint}`);
}

// Newest modification time of the given files and folders (folders are walked), 0 if none exist.
// After a `git pull` or a fresh download the changed files are newer than the last build
// and the last seed, which is how the steps below know they have to run again.
function newest(...entries) {
  let max = 0;
  const visit = (p) => {
    let st;
    try {
      st = fs.statSync(p);
    } catch {
      return;
    }
    if (st.isDirectory()) {
      for (const name of fs.readdirSync(p)) visit(path.join(p, name));
    } else if (st.mtimeMs > max) max = st.mtimeMs;
  };
  entries.forEach(visit);
  return max;
}
const mtime = (p) => (fs.existsSync(p) ? fs.statSync(p).mtimeMs : 0);

// 4. Dependencies (dev dependencies included: the build and the seed script need them,
//    even when NODE_ENV=production or npm's "omit=dev" is set on this machine)
const needed = ["next", "tsx", "typescript", "tailwindcss", "@libsql/client", "drizzle-orm"];
const missing = needed.filter((m) => !fs.existsSync(path.join("node_modules", m)));
const depsChanged = fs.existsSync("node_modules") && mtime("package-lock.json") > mtime(path.join("node_modules", ".package-lock.json"));
if (missing.length || depsChanged) {
  log(
    `Installing dependencies${
      missing.length && fs.existsSync("node_modules")
        ? ` (missing: ${missing.join(", ")})`
        : depsChanged
          ? " (package-lock.json changed)"
          : " (first run only, this takes a minute)"
    }…`,
  );
  run(npm, ["install", "--include=dev", "--no-audit", "--no-fund"], { env: { ...process.env, NODE_ENV: "development" } });
}

// 5. Environment file
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

// 6. Database: seed on the first run, and again whenever the course content changed
//    (re-seeding is safe: it upserts, keeps pupils and their progress, and never
//    overwrites lessons edited in the admin panel)
const dbPath = process.env.DATABASE_PATH || path.join("data", "lessons.db");
const seedStamp = path.join(path.dirname(dbPath), ".seeded");
const firstSeed = !fs.existsSync(dbPath);
if (firstSeed || newest("src/content", "scripts") > mtime(seedStamp)) {
  log(firstSeed ? "Seeding the database with all courses…" : "Course content changed; updating the database…");
  run(npm, ["run", "db:seed"]);
  fs.writeFileSync(seedStamp, new Date().toISOString() + "\n");
}

// 7. Build (production only): on the first run, and again whenever the code changed,
//    so new subjects, icons and lesson widgets appear after an update
const buildId = path.join(".next", "BUILD_ID");
const codeChanged = newest("src", "messages", "public", "package-lock.json", "next.config.ts", "postcss.config.mjs") > mtime(buildId);
if (!DEV && (REBUILD || !fs.existsSync(buildId) || codeChanged)) {
  log(fs.existsSync(buildId) ? "The app was updated; rebuilding (1–3 minutes)…" : "Building the app (first run only, 1–3 minutes)…");
  run(npm, ["run", "build"]);
}

// 8. Start the server and open the browser
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
