import "katex/dist/katex.min.css";
import { ArtBlock } from "@/components/art/art-block";
import { SimBlock } from "@/components/sim/sim-block";
import { markdownLang } from "@/lib/markdown";
import { cachedMarkdownPieces, piecesToReact } from "@/server/markdown-html";

/**
 * Markdown + KaTeX for pupil pages (server component). Same output as Markdown (markdown.tsx), but
 * rendered once per text and kept in memory (src/server/markdown-html.ts), so a lesson page costs
 * a fraction of the CPU it used to.
 */
export function StaticMarkdown({ children, className, lang = "en" }: { children: string; className?: string; lang?: string }) {
  const l = markdownLang(lang);
  return (
    <div className={className ?? "prose-lesson"}>
      {piecesToReact(cachedMarkdownPieces(children, l), (kind, source, key) =>
        kind === "art" ? <ArtBlock key={key} source={source} lang={l} /> : <SimBlock key={key} source={source} lang={l} />,
      )}
    </div>
  );
}
