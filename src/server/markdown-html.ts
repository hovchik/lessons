import { createHash } from "node:crypto";
import { createElement, type ReactNode } from "react";
import { toHtml } from "hast-util-to-html";
import { urlAttributes } from "html-url-attributes";
import { find, html as htmlSchema } from "property-information";
import { defaultUrlTransform } from "react-markdown";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import styleToJs from "style-to-js";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { blockKind, blockSource, markdownLang, rehypePlugins, remarkPlugins, type HastNode } from "@/lib/markdown";

/**
 * Lesson Markdown rendered once, then served from memory.
 *
 * Parsing a lesson and typesetting its formulas with KaTeX, then having React render the few
 * thousand elements that come out, was the largest single cost of a lesson page. Here the same
 * pipeline as react-markdown (components/site/markdown.tsx) runs once per text and language, and
 * every part of the result without an interactive block is kept as an HTML string. A page then
 * renders a handful of elements with innerHTML plus the ```art and ```sim blocks as components.
 *
 * The cache is keyed by the text itself, so an admin edit or a re-seed simply misses it and the
 * old entry ages out. It is bounded by size (MARKDOWN_CACHE_MB, default 64 MB per server worker).
 */

/** What a page renders: text, an element whose inside is ready HTML, an interactive block, or an element around blocks. */
export type Piece =
  | string
  | { tag: string; props: Record<string, unknown>; html?: string }
  | { block: "art" | "sim"; source: string }
  | { tag: string; props: Record<string, unknown>; children: Piece[] };

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);

/** hast properties → React props, for the few elements that stay React elements. */
function reactProps(props: Record<string, unknown> = {}): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value == null || value === false) continue;
    const info = find(htmlSchema, key);
    const v = Array.isArray(value) ? value.join(info.commaSeparated ? ", " : " ") : value;
    if (key === "style" && typeof v === "string") out.style = styleToJs(v);
    else if (info.attribute.startsWith("data-") || info.attribute.startsWith("aria-")) out[info.attribute] = v;
    else out[key] = v;
  }
  return out;
}

// React rejects whitespace text inside these (react-markdown drops it the same way).
const TABLE_PARTS = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

const hasBlock = (n: HastNode): boolean => !!blockKind(n) || (n.children ?? []).some(hasBlock);

function toPiece(n: HastNode): Piece | null {
  if (n.type === "text") return n.value ?? "";
  if (n.type !== "element") return null; // comments and doctype: react-markdown drops them too
  const kind = blockKind(n);
  if (kind) return { block: kind, source: blockSource(n) };
  const tag = n.tagName!;
  const props = reactProps(n.properties);
  if (VOID.has(tag)) return { tag, props };
  if (!hasBlock(n)) return { tag, props, html: toHtml({ type: "root", children: n.children ?? [] } as never) };
  return { tag, props, children: (n.children ?? []).map(toPiece).filter((p): p is Piece => p !== null) };
}

/**
 * The same clean-up react-markdown does after its pipeline: raw HTML shows as text, unsafe URLs
 * are dropped, and whitespace between table rows and cells goes.
 */
function rehypeLikeReactMarkdown() {
  return (tree: HastNode) => {
    visit(tree as never, (node: HastNode, index: number | undefined, parent: HastNode | undefined) => {
      if (node.type === "element" && TABLE_PARTS.has(node.tagName!)) node.children = node.children?.filter((c) => !(c.type === "text" && !c.value?.trim()));
      if (node.type === "raw" && parent && typeof index === "number") {
        parent.children![index] = { type: "text", value: node.value };
        return index;
      }
      if (node.type === "element" && node.properties) {
        for (const [key, test] of Object.entries(urlAttributes)) {
          if (Object.hasOwn(node.properties, key) && (test === null || test.includes(node.tagName!))) {
            node.properties[key] = defaultUrlTransform(String(node.properties[key] || ""));
          }
        }
      }
    });
  };
}

const processors = new Map<string, ReturnType<typeof makeProcessor>>();
function makeProcessor(lang: ReturnType<typeof markdownLang>) {
  return unified()
    .use(remarkParse)
    .use(remarkPlugins)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePlugins(lang))
    .use(rehypeLikeReactMarkdown);
}

/** Renders Markdown to pieces without the cache (tests use this to compare with react-markdown). */
export function renderMarkdownPieces(source: string, lang?: string): Piece[] {
  const l = markdownLang(lang);
  let p = processors.get(l);
  if (!p) processors.set(l, (p = makeProcessor(l)));
  const tree = p.runSync(p.parse(source)) as unknown as HastNode;
  return (tree.children ?? []).map(toPiece).filter((x): x is Piece => x !== null);
}

/** Turns pieces into React elements; `block` draws an ```art or ```sim block. */
export function piecesToReact(pieces: Piece[], block: (kind: "art" | "sim", source: string, key: number) => ReactNode): ReactNode[] {
  const one = (p: Piece, key: number): ReactNode => {
    if (typeof p === "string") return p;
    if ("block" in p) return block(p.block, p.source, key);
    if ("children" in p) return createElement(p.tag, { ...p.props, key }, ...p.children.map(one));
    return createElement(p.tag, p.html === undefined ? { ...p.props, key } : { ...p.props, key, dangerouslySetInnerHTML: { __html: p.html } });
  };
  return pieces.map(one);
}

/* -------------------------------------------------------------------- cache */

type Entry = { pieces: Piece[]; size: number };
type Cache = { map: Map<string, Entry>; bytes: number };
// One cache per worker process, even when Next bundles this module into several chunks.
const g = globalThis as unknown as { __markdownCache?: Cache };
const cache: Cache = (g.__markdownCache ??= { map: new Map(), bytes: 0 });
const LIMIT = (Number(process.env.MARKDOWN_CACHE_MB) || 64) * 1024 * 1024;

/** Rough bytes in memory (JavaScript strings take two bytes a letter). */
const sizeOf = (pieces: Piece[]): number =>
  pieces.reduce((a, p) => a + (typeof p === "string" ? p.length * 2 : "block" in p ? p.source.length * 2 + 64 : "children" in p ? sizeOf(p.children) + 64 : (p.html?.length ?? 0) * 2 + 64), 0);

export function cachedMarkdownPieces(source: string, lang?: string): Piece[] {
  const l = markdownLang(lang);
  const key = createHash("sha1").update(l).update("\0").update(source).digest("base64url");
  const hit = cache.map.get(key);
  if (hit) {
    // Move to the end so the least recently used entry is first in line to go.
    cache.map.delete(key);
    cache.map.set(key, hit);
    return hit.pieces;
  }
  const pieces = renderMarkdownPieces(source, l);
  const size = sizeOf(pieces);
  if (size > LIMIT) return pieces;
  cache.map.set(key, { pieces, size });
  cache.bytes += size;
  for (const [k, e] of cache.map) {
    if (cache.bytes <= LIMIT) break;
    cache.map.delete(k);
    cache.bytes -= e.size;
  }
  return pieces;
}
