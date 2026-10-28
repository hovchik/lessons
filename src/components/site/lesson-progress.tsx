"use client";

import { CheckCircle2, CircleDashed } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { lessonChange, notifyChanged, onChanged, type LessonProgressRow } from "@/lib/live";

type Props = {
  lessonId: string;
  signedIn: boolean;
  completed: boolean;
  best: { score: number; total: number } | null;
  /** Current lesson URL (locale-less) so the login page can return here. */
  returnTo: string;
};

/**
 * "Mark as done" card under a lesson. For guests it shows a login hint. Quiz
 * results are saved separately by the Quiz component; this covers lessons
 * without a quiz and pupils who prefer to tick a lesson off by hand. A saved
 * quiz (here or in another tab) updates the card straight away.
 */
export function LessonProgressCard({ lessonId, signedIn, completed: initialCompleted, best: initialBest, returnTo }: Props) {
  const t = useTranslations("lesson");
  const tn = useTranslations("nav");
  const [completed, setCompleted] = useState(initialCompleted);
  const [best, setBest] = useState(initialBest);
  const [busy, setBusy] = useState(false);
  // A refreshed page brings the saved values, which win.
  const [seen, setSeen] = useState({ initialCompleted, initialBest });
  if (seen.initialCompleted !== initialCompleted || JSON.stringify(seen.initialBest) !== JSON.stringify(initialBest)) {
    setSeen({ initialCompleted, initialBest });
    setCompleted(initialCompleted);
    setBest(initialBest);
  }

  useEffect(
    () =>
      onChanged(({ lesson }) => {
        if (lesson?.id !== lessonId) return;
        setCompleted(lesson.completed);
        setBest(lesson.bestTotal ? { score: lesson.bestScore ?? 0, total: lesson.bestTotal } : null);
      }),
    [lessonId],
  );

  if (!signedIn) {
    return (
      <p className="clay-sm flex flex-wrap items-center justify-between gap-3 p-4 text-sm font-semibold text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <CircleDashed className="size-5" aria-hidden="true" />
          {t("saveHint")}
        </span>
        <Link href={`/login?next=${encodeURIComponent(returnTo)}`} className="font-bold text-primary hover:underline">
          {tn("login")}
        </Link>
      </p>
    );
  }

  return (
    <div className="clay-sm flex flex-wrap items-center justify-between gap-3 p-4">
      <p className="inline-flex items-center gap-2 font-bold">
        {completed ? <CheckCircle2 className="size-5 text-success" aria-hidden="true" /> : <CircleDashed className="size-5 text-muted-foreground" aria-hidden="true" />}
        <span>
          {completed ? t("done") : t("markDone")}
          {best && <span className="block text-xs font-semibold text-muted-foreground">{t("bestScore", { score: best.score, total: best.total })}</span>}
        </span>
      </p>
      <Button
        size="sm"
        variant={completed ? "secondary" : "primary"}
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          const res = await fetch("/api/progress/complete", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ lessonId, completed: !completed }),
          });
          if (res.ok) {
            const { progress } = (await res.json()) as { progress: LessonProgressRow };
            notifyChanged(lessonChange(progress));
          }
          setBusy(false);
        }}
      >
        {completed ? t("undone") : t("markDone")}
      </Button>
    </div>
  );
}

