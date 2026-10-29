import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { UI } from "@/components/sim/labels";
import type { ArtLang } from "@/lib/art/spec";

/**
 * The Markdown dialect of lessons, tips and exams, shared by the live renderer
 * (components/site/markdown.tsx, used by the admin preview) and the cached
 * server renderer (components/site/static-markdown.tsx, used by pupil pages).
 */

export type HastNode = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: HastNode[] };
export const text = (n: HastNode): string => (n.type === "text" ? (n.value ?? "") : (n.children ?? []).map(text).join(""));

export const markdownLang = (lang: string | undefined): ArtLang => (["en", "hy", "ru"].includes(lang ?? "") ? lang : "en") as ArtLang;

/** A fenced ```art or ```sim block becomes a picture or an experiment instead of code. */
export function blockKind(node: HastNode): "art" | "sim" | null {
  if (node.type !== "element" || node.tagName !== "pre") return null;
  const code = node.children?.find((c) => c.tagName === "code");
  const cls = code?.properties?.className;
  if (!code || !Array.isArray(cls)) return null;
  return cls.includes("language-art") ? "art" : cls.includes("language-sim") ? "sim" : null;
}

/** The source of a block found by blockKind. */
export const blockSource = (node: HastNode) => text(node.children!.find((c) => c.tagName === "code")!);

const ANSWERS = /^(Answers|Ответы|Պատասխաններ)$/;
const level = (n: HastNode) => (n.type === "element" && /^h[1-6]$/.test(n.tagName ?? "") ? Number(n.tagName![1]) : 0);

/**
 * Hides the "Answers" section behind a tap, so pupils try the exercises first
 * (retrieval practice, as on Khan Academy and YaKlass).
 */
export function rehypeAnswers(lang: ArtLang) {
  return () => (tree: HastNode) => {
    const kids = tree.children ?? [];
    const out: HastNode[] = [];
    for (let i = 0; i < kids.length; i++) {
      const node = kids[i];
      const lv = level(node);
      if (!lv || !ANSWERS.test(text(node).trim())) {
        out.push(node);
        continue;
      }
      const body: HastNode[] = [];
      while (i + 1 < kids.length && !(level(kids[i + 1]) && level(kids[i + 1]) <= lv)) body.push(kids[++i]);
      out.push({
        type: "element",
        tagName: "details",
        properties: { className: ["lesson-answers"] },
        children: [
          {
            type: "element",
            tagName: "summary",
            properties: {},
            children: [
              { type: "element", tagName: "span", properties: { className: ["lesson-answers-title"] }, children: [{ type: "text", value: UI.answers[lang] }] },
              { type: "element", tagName: "span", properties: { className: ["lesson-answers-hint"] }, children: [{ type: "text", value: UI.answersHint[lang] }] },
            ],
          },
          { type: "element", tagName: "div", properties: { className: ["lesson-answers-body"] }, children: body },
        ],
      });
    }
    tree.children = out;
  };
}

export const remarkPlugins = [remarkGfm, remarkMath];
export const rehypePlugins = (lang: ArtLang) => [rehypeKatex, rehypeAnswers(lang)];
