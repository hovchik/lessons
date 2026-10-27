import { Award, CircleDashed, Sprout, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import type { MasteryLevel } from "@/lib/mastery";
import { cn } from "@/lib/utils";

const STYLE: Record<MasteryLevel, { icon: typeof Award; className: string }> = {
  none: { icon: CircleDashed, className: "bg-muted text-muted-foreground" },
  familiar: { icon: Sprout, className: "bg-amber-50 text-amber-800" },
  proficient: { icon: TrendingUp, className: "bg-sky-50 text-sky-800" },
  mastered: { icon: Award, className: "bg-emerald-50 text-success" },
};

/** A skill's mastery level as a small labelled chip. */
export function MasteryBadge({ level, className }: { level: MasteryLevel; className?: string }) {
  const t = useTranslations("mastery");
  const { icon: Icon, className: tone } = STYLE[level];
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold", tone, className)}>
      <Icon className="size-3.5" aria-hidden="true" />
      {t(level)}
    </span>
  );
}

/** Background colour of a level, for the small squares on the progress page. */
export const levelSwatch: Record<MasteryLevel, string> = {
  none: "bg-muted",
  familiar: "bg-amber-300",
  proficient: "bg-sky-400",
  mastered: "bg-emerald-500",
};
