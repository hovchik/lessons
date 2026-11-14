// Production server with one Next.js worker per CPU core you give it.
//   WEB_CONCURRENCY=2 node server.mjs   (default 1; `npm start` is the same as 1 worker)
// Next renders each page on one core, so a 2- or 4-core server needs this to use all its cores.
// The workers share data/lessons.db; SQLite lets them write one at a time (busy_timeout in db/client.ts).
import cluster from "node:cluster";
import http from "node:http";

const workers = Math.max(1, Number(process.env.WEB_CONCURRENCY) || 1);
const port = Number(process.env.PORT) || 3000;
const hostname = process.env.LISTEN_HOST || "0.0.0.0"; // not HOSTNAME: Docker sets that to the container id
// Behind Caddy (docker-compose.yml sets TRUST_PROXY=1) the proxy's X-Forwarded-For names the visitor.
// Otherwise a visitor could write that header themselves, so it is replaced with the real address,
// which the login and live-quiz limits count by (src/server/rate-limit.ts).
const trustProxy = process.env.TRUST_PROXY === "1";

if (cluster.isPrimary && workers > 1) {
  console.log(`Starting ${workers} workers on port ${port}`);
  for (let i = 0; i < workers; i++) cluster.fork();
  cluster.on("exit", (worker, code, signal) => {
    console.error(`Worker ${worker.process.pid} stopped (${signal || code}); starting a new one`);
    cluster.fork();
  });
} else {
  const { default: next } = await import("next");
  const app = next({ dev: false, hostname, port });
  const handle = app.getRequestHandler();
  await app.prepare();
  http
    .createServer((req, res) => {
      if (!trustProxy) req.headers["x-forwarded-for"] = req.socket.remoteAddress ?? "";
      return handle(req, res);
    })
    .listen(port, hostname, () => {
      console.log(`Ready on http://${hostname}:${port} (pid ${process.pid})`);
    });
}
