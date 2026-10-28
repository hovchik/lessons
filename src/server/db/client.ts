import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import path from "node:path";
import fs from "node:fs";
import * as schema from "./schema";

/**
 * SQLite via libsql. The driver ships prebuilt binaries for Windows, macOS and
 * Linux that do not depend on the Node.js version, so `npm install` never has
 * to compile anything.
 */
export const DB_PATH = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "lessons.db");

type Db = ReturnType<typeof drizzle<typeof schema>>;

const globalForDb = globalThis as unknown as { __lessonsDb?: Db; __lessonsDbReady?: Promise<Db> };

function open(): Db {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const client = createClient({ url: `file:${DB_PATH}` });
  return drizzle(client, { schema });
}

export const db: Db = globalForDb.__lessonsDb ?? (globalForDb.__lessonsDb = open());

/** Resolves once migrations have been applied. Await it before the first query. */
export function getDb(): Promise<Db> {
  if (!globalForDb.__lessonsDbReady) {
    globalForDb.__lessonsDbReady = (async () => {
      // Wait for another process's write instead of failing with SQLITE_BUSY (the driver's default
      // is 0 ms). Needed when several server workers share the file (server.mjs, WEB_CONCURRENCY).
      await db.run("PRAGMA busy_timeout = 5000");
      await db.run("PRAGMA journal_mode = WAL");
      await db.run("PRAGMA foreign_keys = ON");
      await migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle") });
      return db;
    })();
  }
  return globalForDb.__lessonsDbReady;
}

export { schema };
