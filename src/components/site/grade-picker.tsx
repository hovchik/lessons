import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GRADES, cn } from "@/lib/utils";

export async function GradePicker({ current, compact = false }: { current?: number; compact?: boolean }) {
  const t = await getTranslations("grade");
  return (
    <ol
      className={cn(
        "grid stagger",
        compact ? "grid-cols-6 gap-2 sm:grid-cols-12 sm:gap-3" : "grid-cols-3 gap-3 min-[420px]:grid-cols-4 lg:grid-cols-6",
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
                compact ? "h-12 rounded-[14px]" : "aspect-[5/4] min-h-20 p-2 sm:min-h-24 sm:p-3",
                active && "ring-3 ring-primary",
              )}
            >
              <span
                className={cn(
                  "bg-gradient-to-br bg-clip-text font-extrabold text-transparent",
                  stage,
                  compact ? "text-lg" : "text-3xl sm:text-4xl",
                )}
              >
                {g}
              </span>
              {!compact && <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground sm:text-xs">{t("label")}</span>}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
