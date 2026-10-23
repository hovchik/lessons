import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GRADES, cn } from "@/lib/utils";

export async function GradePicker({ current, compact = false }: { current?: number; compact?: boolean }) {
  const t = await getTranslations("grade");
  return (
    <ol
      className={cn(
        "grid gap-3 stagger",
        compact ? "grid-cols-6 sm:grid-cols-12" : "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6",
      )}
      aria-label={t("allGrades")}
    >
      {GRADES.map((g) => {
        const active = g === current;
        const stage = g <= 4 ? "from-indigo-500 to-violet-500" : g <= 9 ? "from-sky-500 to-indigo-500" : "from-orange-500 to-rose-500";
        return (
          <li key={g}>
            <Link
              href={`/grade/${g}`}
              aria-current={active ? "page" : undefined}
              className={cn(
                "clay clay-press flex flex-col items-center justify-center gap-1 text-center",
                compact ? "h-12 rounded-[14px]" : "aspect-[5/4] min-h-24 p-3",
                active && "ring-3 ring-primary",
              )}
            >
              <span
                className={cn(
                  "bg-gradient-to-br bg-clip-text font-extrabold text-transparent",
                  stage,
                  compact ? "text-lg" : "text-4xl",
                )}
              >
                {g}
              </span>
              {!compact && <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("label")}</span>}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
