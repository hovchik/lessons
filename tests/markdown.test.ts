import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { blockKind, blockSource, rehypePlugins, remarkPlugins, type HastNode } from "../src/lib/markdown";
import { cachedMarkdownPieces, piecesToReact, renderMarkdownPieces } from "../src/server/markdown-html";

// Interactive blocks are drawn as placeholders on both sides; everything else must match.
const block = (kind: string, source: string, key?: number) => createElement("x-block", { key, "data-kind": kind, "data-src": source });
const viaReactMarkdown = (md: string, lang: "en" | "hy" | "ru") =>
  renderToStaticMarkup(
    createElement(ReactMarkdown, {
      remarkPlugins,
      rehypePlugins: rehypePlugins(lang),
      components: {
        pre: ({ node, children, ...rest }) => {
          const kind = node ? blockKind(node as HastNode) : null;
          return kind ? block(kind, blockSource(node as HastNode)) : createElement("pre", rest, children);
        },
      },
    }, md),
  );
const viaPieces = (md: string, lang: "en" | "hy" | "ru") => renderToStaticMarkup(createElement("div", null, ...piecesToReact(renderMarkdownPieces(md, lang), block))).slice(5, -6);
// The two serialisers spell a few equivalent things differently.
const norm = (h: string) =>
  h
    .replace(/&#x3C;|&lt;/g, "<")
    .replace(/&#x26;|&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<(br|hr|img|input)([^>]*?)\/>/g, "<$1$2>")
    .replace(/ align="(left|right|center)"/g, ' style="text-align:$1"')
    .replace(/;"/g, '"')
    .replace(/: /g, ":");

const samples: [string, "en" | "hy" | "ru"][] = [
  ["# Title\n\nSome **bold** and _italic_ text with $x^2 + \\frac{1}{2}$ inline.\n\n$$\n\\sqrt{a^2+b^2}\n$$\n", "en"],
  ["| a | b |\n|:--|--:|\n| 1 < 2 | 3 & 4 |\n\n3. three\n4. four\n", "en"],
  ["Text\n\n```sim\ncheck q=1 answer=2 n=0\n```\n\nMore text.\n\n## Answers\n\n1. 42\n\n```art\npalette red blue\n```\n\n## Next\n\nAfter.", "ru"],
  ["## Պատասխաններ\n\n1. Այո։\n2. $3 > 2$\n", "hy"],
  ["<b>raw html</b> stays text, and [a link](javascript:alert(1)) is made safe.\n\n---\n\n> quote\n", "en"],
  ["Line one  \nline two\n\n```js\nconst a = 1 < 2;\n```\n", "en"],
];

test("cached Markdown renders exactly what react-markdown renders", () => {
  for (const [md, lang] of samples) assert.equal(norm(viaPieces(md, lang)), norm(viaReactMarkdown(md, lang)), md.slice(0, 40));
});

test("interactive blocks stay components, even inside the hidden answers", () => {
  const pieces = renderMarkdownPieces(samples[2][0], "ru");
  const flat = JSON.stringify(pieces);
  assert.ok(flat.includes('"block":"sim"') && flat.includes('"block":"art"'));
  assert.ok(!viaPieces(samples[4][0], "en").includes("javascript:"), "unsafe link dropped");
  assert.ok(viaPieces(samples[4][0], "en").includes("&#x3C;b>raw html"), "raw HTML shown as text");
});

test("the cache gives back the same result for the same text and language", () => {
  const a = cachedMarkdownPieces("Hello $x$", "en");
  assert.equal(cachedMarkdownPieces("Hello $x$", "en"), a);
  assert.notEqual(cachedMarkdownPieces("Hello $x$", "hy"), a);
});
