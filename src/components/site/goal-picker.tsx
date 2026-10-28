"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { WEEKLY_GOALS, type WeeklyGoal } from "@/lib/motivation";
import { cn } from "@/lib/utils";

/** Three buttons for the weekly goal: 3, 5 or 7 learning days. */
export function GoalPicker({ goal }: { goal: WeeklyGoal }) {
  const t = useTranslations("motivation");
  const router = useRouter();
  const [value, setValue] = useState(goal);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  const pick = async (g: WeeklyGoal) => {
    if (busy || g === value) return;
    const before = value;
    setValue(g);
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/motivation/goal", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ goal: g }) });
      if (!res.ok) throw new Error(String(res.status));
      router.refresh();
    } catch {
      setValue(before);
      setError(true);
    }
    setBusy(false);
  };

  return (
    <div>
      <div role="group" aria-label={t("goalPick")} className="flex items-center gap-1.5">
        <span className="mr-1 text-xs font-bold text-muted-foreground">{t("goalPick")}</span>
        {WEEKLY_GOALS.map((g) => (
          <button
            key={g}
            type="button"
            aria-pressed={value === g}
            disabled={busy}
            onClick={() => pick(g)}
            className={cn("grid size-11 place-items-center rounded-xl text-sm font-extrabold tabular-nums clay-press", value === g ? "bg-primary text-primary-foreground shadow-clay-sm" : "bg-muted hover:brightness-95")}
          >
            {g}
          </button>
        ))}
      </div>
      {error && <p role="alert" className="mt-1 text-xs font-bold text-destructive">{t("goalError")}</p>}
    </div>
  );
}
