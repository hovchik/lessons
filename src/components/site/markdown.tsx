import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { ArtBlock } from "@/components/art/art-block";
import { SimBlock } from "@/components/sim/sim-block";
import { UI } from "@/components/sim/labels";
import type { ArtLang } from "@/lib/art/spec";

type HastNode = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: HastNode[] };
const text = (n: HastNode): string => (n.type === "text" ? (n.value ?? "") : (n.children ?? []).map(text).join(""));

const ANSWERS = /^(Answers|Ответы|Պատասխաններ)$/;
const level = (n: HastNode) => (n.type === "element" && /^h[1-6]$/.test(n.tagName ?? "") ? Number(n.tagName![1]) : 0);

/**
 * Hides the "Answers" section behind a tap, so pupils try the exercises first
 * (retrieval practice, as on Khan Academy and YaKlass).
 */
function rehypeAnswers(lang: ArtLang) {
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

/**
 * Markdown + KaTeX. Fenced blocks become pictures and experiments instead of code:
 * ```art for drawing lessons, ```sim for science and geometry.
 */
export function Markdown({ children, className, lang = "en" }: { children: string; className?: string; lang?: string }) {
  const artLang = (["en", "hy", "ru"].includes(lang) ? lang : "en") as ArtLang;
  const components: Components = {
    pre({ node, children: kids, ...rest }) {
      const code = (node as HastNode | undefined)?.children?.find((c) => c.tagName === "code");
      const cls = code?.properties?.className;
      if (code && Array.isArray(cls) && cls.includes("language-art")) {
        return <ArtBlock source={text(code)} lang={artLang} />;
      }
      if (code && Array.isArray(cls) && cls.includes("language-sim")) {
        return <SimBlock source={text(code)} lang={artLang} />;
      }
      return <pre {...rest}>{kids}</pre>;
    },
  };
  return (
    <div className={className ?? "prose-lesson"}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeAnswers(artLang)]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
