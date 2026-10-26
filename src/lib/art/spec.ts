/**
 * Visual blocks for lessons. A fenced code block with the language `art` is rendered as an
 * illustration or a small interactive experiment instead of code:
 *
 *   ```art
 *   mixer paints=red,yellow,blue,white
 *   Mix orange, green and violet. Which two paints make each one?
 *   ```
 *
 * The first line is the widget name, then positional words and key=value options.
 * Everything after the first line is an optional Markdown prompt in the lesson's language.
 */
export type ArtLang = "en" | "hy" | "ru";
export type Tr = { en: string; hy: string; ru: string };

export type ArtSpec = {
  widget: string;
  args: string[];
  opts: Record<string, string>;
  body: string;
};

export function parseArtSpec(source: string): ArtSpec {
  const text = source.replace(/\r\n/g, "\n").replace(/^\n+|\n+$/g, "");
  const nl = text.indexOf("\n");
  const head = (nl === -1 ? text : text.slice(0, nl)).trim();
  const body = nl === -1 ? "" : text.slice(nl + 1).trim();
  const [widget = "", ...rest] = head.split(/\s+/);
  const args: string[] = [];
  const opts: Record<string, string> = {};
  for (const w of rest) {
    const eq = w.indexOf("=");
    if (eq > 0) opts[w.slice(0, eq)] = w.slice(eq + 1);
    else if (w) args.push(w);
  }
  return { widget, args, opts, body };
}

export const tr = (o: Tr, l: ArtLang) => o[l] || o.en;

/** Comma separated option, e.g. paints=red,yellow,blue. */
export const list = (v: string | undefined, fallback: string[] = []) =>
  v ? v.split(",").map((s) => s.trim()).filter(Boolean) : fallback;
