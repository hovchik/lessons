"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Link } from "@/i18n/navigation";

export type LookData = { html: string; find: string[] };

const norm = (s: string) => s.toLowerCase().replace(/ё/g, "е").replace(/[\s ​]+/g, "");

/**
 * Scrolls the lesson body to the passage that contains the given text pieces and flashes it.
 * Returns false when it is not on this page.
 */
export function revealPassage(find: string[]): boolean {
  const root = document.getElementById("lesson-body");
  if (!root || !find.length) return false;
  const want = find.map(norm).filter(Boolean);
  let best: HTMLElement | null = null;
  let bestLen = Infinity;
  for (const pass of [want, want.slice(0, 1)]) {
    for (const el of root.querySelectorAll<HTMLElement>("p, li, tr, blockquote, td")) {
      const text = norm(el.textContent ?? "");
      if (pass.every((w) => text.includes(w)) && text.length < bestLen) {
        best = el;
        bestLen = text.length;
      }
    }
    if (best) break;
  }
  if (!best) return false;
  // A passage inside a closed <details> would scroll to nothing.
  const box = best.closest("details");
  if (box && !box.open) box.open = true;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  best.scrollIntoView({ block: "center", behavior: reduced ? "auto" : "smooth" });
  best.classList.remove("look-flash");
  void best.offsetWidth; // restart the animation when the same passage is shown twice
  best.classList.add("look-flash");
  window.setTimeout(() => best?.classList.remove("look-flash"), 3200);
  return true;
}

/** Hash that asks a lesson page to show a passage: #look=<pieces joined by |>. */
export const lookHash = (find: string[]) => `look=${encodeURIComponent(find.join("|"))}`;

/** On a lesson page: shows the passage named in the address (#look=…) once the page is there. */
export function LookTarget() {
  useEffect(() => {
    const m = window.location.hash.match(/^#look=(.+)$/);
    if (!m) return;
    let find: string[] = [];
    try {
      find = decodeURIComponent(m[1]).split("|").filter(Boolean);
    } catch {
      return;
    }
    // Widgets and formulas settle the layout first.
    const id = window.setTimeout(() => {
      revealPassage(find);
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 350);
    return () => window.clearTimeout(id);
  }, []);
  return null;
}

/**
 * "From the lesson": the passage that teaches a question, under a wrong answer.
 * With `href` it links to that lesson; without, the passage is on this page and the button scrolls to it.
 */
export function LookBack({ look, href, lessonTitle }: { look: LookData; href?: string | null; lessonTitle?: string | null }) {
  const t = useTranslations("look");
  return (
    <div className="fx-in look-back rounded-[var(--radius)] border-l-4 border-primary/70 bg-primary/5 p-3 text-sm">
      <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-primary">
        <BookOpen className="size-4" aria-hidden="true" />
        {lessonTitle ? t("fromLesson", { title: lessonTitle }) : t("fromThisLesson")}
      </p>
      <div className="look-passage prose-lesson mt-1.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: look.html }} />
      {href ? (
        <Link href={`${href}#${lookHash(look.find)}`} className="mt-1 inline-flex min-h-11 items-center gap-1 font-bold text-primary hover:underline">
          {t("openLesson")}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : (
        <button type="button" onClick={() => revealPassage(look.find)} className="mt-1 inline-flex min-h-11 items-center gap-1 font-bold text-primary hover:underline">
          {t("showInLesson")}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
