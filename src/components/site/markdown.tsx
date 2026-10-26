import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { ArtBlock } from "@/components/art/art-block";
import type { ArtLang } from "@/lib/art/spec";

type HastNode = { type: string; tagName?: string; value?: string; properties?: { className?: unknown }; children?: HastNode[] };
const text = (n: HastNode): string => (n.type === "text" ? (n.value ?? "") : (n.children ?? []).map(text).join(""));

/** Markdown + KaTeX. A ```art fenced block becomes an illustration or an interactive experiment. */
export function Markdown({ children, className, lang = "en" }: { children: string; className?: string; lang?: string }) {
  const artLang = (["en", "hy", "ru"].includes(lang) ? lang : "en") as ArtLang;
  const components: Components = {
    pre({ node, children: kids, ...rest }) {
      const code = (node as HastNode | undefined)?.children?.find((c) => c.tagName === "code");
      const cls = code?.properties?.className;
      if (code && Array.isArray(cls) && cls.includes("language-art")) {
        return <ArtBlock source={text(code)} lang={artLang} />;
      }
      return <pre {...rest}>{kids}</pre>;
    },
  };
  return (
    <div className={className ?? "prose-lesson"}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
