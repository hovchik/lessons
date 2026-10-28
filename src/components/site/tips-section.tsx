import { ChevronDown, Lightbulb } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Markdown } from "@/components/site/markdown";
import type { Tip } from "@/server/db/schema";
import { pick } from "@/lib/utils";

/** Collapsible "Tips & tricks" cards shown on a course page. Server component. */
export async function TipsSection({ tips }: { tips: Tip[] }) {
  if (tips.length === 0) return null;
  const t = await getTranslations("tips");
  const l = await getLocale();
  return (
    <section aria-labelledby="tips-title" className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 id="tips-title" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
            <Lightbulb className="size-6 text-amber-500" aria-hidden="true" />
            {t("title")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("subtitle")}</p>
        </div>
        <span className="rounded-full bg-muted px-3 py-1 text-sm font-bold">{t("count", { count: tips.length })}</span>
      </div>
      <ul className="grid gap-3 stagger sm:grid-cols-2">
        {tips.map((tip) => (
          <li key={tip.id}>
            <details className="clay-sm group overflow-hidden">
              <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
                <span className="grid size-10 shrink-0 place-items-center rounded-[12px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                  <Lightbulb className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-wide" style={{ color: "var(--s-text)" }}>{t(`category.${tip.category}`)}</span>
                  <span className="block font-extrabold leading-snug text-balance">{pick(tip.title, l)}</span>
                </span>
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="border-t border-border/70 px-4 py-4 sm:px-5">
                <Markdown className="prose-lesson prose-tip">{pick(tip.body, l)}</Markdown>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
