import ReactMarkdown, { type Components } from "react-markdown";
import "katex/dist/katex.min.css";
import { ArtBlock } from "@/components/art/art-block";
import { SimBlock } from "@/components/sim/sim-block";
import { blockKind, blockSource, markdownLang, rehypePlugins, remarkPlugins, type HastNode } from "@/lib/markdown";

/**
 * Markdown + KaTeX, rendered live. Fenced blocks become pictures and experiments instead of code:
 * ```art for drawing lessons, ```sim for science and geometry.
 *
 * Used where the text changes as you type (the admin preview). Pupil pages use StaticMarkdown
 * (static-markdown.tsx), which renders the same output once and serves it from a cache.
 */
export function Markdown({ children, className, lang = "en" }: { children: string; className?: string; lang?: string }) {
  const artLang = markdownLang(lang);
  const components: Components = {
    pre({ node, children: kids, ...rest }) {
      const kind = node ? blockKind(node as HastNode) : null;
      if (kind === "art") return <ArtBlock source={blockSource(node as HastNode)} lang={artLang} />;
      if (kind === "sim") return <SimBlock source={blockSource(node as HastNode)} lang={artLang} />;
      return <pre {...rest}>{kids}</pre>;
    },
  };
  return (
    <div className={className ?? "prose-lesson"}>
      <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins(artLang)} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
