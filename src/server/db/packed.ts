import { customType } from "drizzle-orm/sqlite-core";
import zlib from "node:zlib";

/**
 * A JSON column stored brotli-compressed. Lesson bodies, quizzes and objectives are most of the
 * database (three languages each, Armenian and Russian at two bytes a letter), and they shrink to
 * about a third. Rows written before compression are plain JSON text and are still read, so an
 * existing database keeps working and is compressed the next time it is seeded or edited.
 *
 * The declared SQL type stays `text`: SQLite keeps a blob in a text column as it is, and no
 * migration is needed. Do not query these columns with SQL json_* functions.
 */
const QUALITY = { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 7, [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT } };

export function pack(value: unknown): Buffer {
  return zlib.brotliCompressSync(Buffer.from(JSON.stringify(value)), QUALITY);
}

export function unpack<T>(stored: unknown): T {
  if (typeof stored === "string") return JSON.parse(stored) as T;
  const bytes = stored instanceof ArrayBuffer ? Buffer.from(stored) : Buffer.from(stored as Uint8Array);
  return JSON.parse(zlib.brotliDecompressSync(bytes).toString("utf8")) as T;
}

export const packedJson = <T>(name: string) =>
  customType<{ data: T; driverData: Buffer | ArrayBuffer | Uint8Array | string }>({
    dataType: () => "text",
    toDriver: (value) => pack(value),
    fromDriver: (value) => unpack<T>(value),
  })(name);
