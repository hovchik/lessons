import { Lightbulb } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { StaticMarkdown } from "@/components/site/static-markdown";
import type { Tip } from "@/server/db/schema";
import { pick } from "@/lib/utils";

/**
 * "Tricks for this lesson": the tips linked to one lesson (tips.lesson_slug), shown open after
 * the lesson text, so a pupil meets the shortcut right where the topic is taught. Server component.
 */
export async function LessonTricks({ tricks }: { tricks: Tip[] }) {
  if (tricks.length === 0) return null;
  const t = await getTranslations("tips");
  const l = await getLocale();
  return (
    <section id="lesson-tricks" aria-labelledby="lesson-tricks-title" className="scroll-mt-20 space-y-3">
      <h2 id="lesson-tricks-title" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
        <Lightbulb className="size-6 text-amber-500" aria-hidden="true" />
        {t("lessonTitle", { count: tricks.length })}
      </h2>
      <ul className="space-y-3">
        {tricks.map((tip) => (
          <li key={tip.id} className="clay-sm overflow-hidden border-l-4 border-amber-400">
            <div className="flex items-center gap-3 px-4 pt-4 sm:px-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-[12px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                <Lightbulb className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{t(`category.${tip.category}`)}</span>
                <span className="block font-extrabold leading-snug text-balance">{pick(tip.title, l)}</span>
              </span>
            </div>
            <div className="px-4 pb-4 pt-3 sm:px-5">
              <StaticMarkdown className="prose-lesson prose-tip" lang={l}>{pick(tip.body, l)}</StaticMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
