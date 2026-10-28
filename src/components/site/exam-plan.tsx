"use client";

import { ArrowRight, CalendarDays, CircleHelp, RefreshCw, RotateCcw, Trash2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { AnswerArea } from "@/components/site/answer-area";
import { PLAN_MINUTES, type PlanMinutes } from "@/lib/exam-plan";
import { defaultResponse, isComplete, localShown, type QuizResponse } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import type { I18nText } from "@/server/db/schema";
import type { DiagQuestion } from "@/server/exam-plan";

async function post(path: string, body: unknown) {
  const res = await fetch(path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}

/** The exam date and minutes a day, for a new plan or a changed one. */
function DateAndTime({ date, minutes, min, max, onDate, onMinutes }: { date: string; minutes: PlanMinutes; min: string; max: string; onDate: (d: string) => void; onMinutes: (m: PlanMinutes) => void }) {
  const t = useTranslations("plan");
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="text-sm font-extrabold">{t("examDate")}</span>
        <input
          type="date"
          required
          value={date}
          min={min}
          max={max}
          onChange={(e) => onDate(e.target.value)}
          className="mt-1.5 block min-h-12 w-full rounded-xl border-2 border-border bg-background px-3 font-semibold outline-none focus:border-primary"
        />
      </label>
      <fieldset>
        <legend className="text-sm font-extrabold">{t("minutes")}</legend>
        <div className="mt-1.5 grid grid-cols-3 gap-2">
          {PLAN_MINUTES.map((m) => (
            <label key={m} className={cn("clay-sm clay-press flex min-h-12 cursor-pointer items-center justify-center px-2 font-bold has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary", minutes === m && "bg-primary text-primary-foreground")}>
              <input type="radio" name="minutes" value={m} checked={minutes === m} onChange={() => onMinutes(m)} className="sr-only" />
              {t("minutesN", { n: m })}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

/** The first step: the exam date and daily time, then the placement test starts. */
export function PlanSetup({ examId, defaultDate, min, max, questions }: { examId: string; defaultDate: string; min: string; max: string; questions: number }) {
  const t = useTranslations("plan");
  const router = useRouter();
  const [date, setDate] = useState(defaultDate);
  const [minutes, setMinutes] = useState<PlanMinutes>(30);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const valid = date >= min && date <= max;

  const start = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || busy) return;
    setBusy(true);
    setError(false);
    try {
      await post("/api/plan/start", { examId, examDate: date, minutesPerDay: minutes });
      router.refresh();
    } catch {
      setError(true);
      setBusy(false);
    }
  };

  return (
    <form onSubmit={start} className="clay space-y-5 p-5 sm:p-8">
      <div>
        <h2 className="text-xl font-black">{t("setupTitle")}</h2>
        <p className="mt-1 text-muted-foreground">{t("setupIntro", { n: questions })}</p>
      </div>
      <DateAndTime date={date} minutes={minutes} min={min} max={max} onDate={setDate} onMinutes={setMinutes} />
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!valid || busy}>
        {t("start")}
        <ArrowRight className="size-5" aria-hidden="true" />
      </Button>
      {error && <p role="alert" className="font-bold text-destructive">{t("startError")}</p>}
    </form>
  );
}

/**
 * The placement test, one question at a time. Nothing is marked right or
 * wrong here: the answers only decide where the plan starts. After the last
 * answer the page refreshes into the plan.
 */
export function DiagnosticRunner({ examId, first }: { examId: string; first: DiagQuestion }) {
  const t = useTranslations("plan");
  const tg = useTranslations("grade");
  const locale = useLocale();
  const router = useRouter();
  const [q, setQ] = useState(first);
  const [chosen, setChosen] = useState<QuizResponse | undefined>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const shownAt = useRef(Date.now());
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    shownAt.current = Date.now();
  }, [q]);

  const f = (x: I18nText) => pick(x, locale);
  const shown = localShown(q.shown, f);
  const response = defaultResponse(shown, chosen);
  const complete = response !== undefined && isComplete(shown, response);

  const send = async (r: QuizResponse | null) => {
    if (busy) return;
    setBusy(true);
    setError(false);
    try {
      const data = (await post("/api/plan/answer", { examId, itemId: q.itemId, response: r, ms: Math.min(Date.now() - shownAt.current, 3_600_000) })) as { next: DiagQuestion | null };
      if (data.next) {
        setQ(data.next);
        setChosen(undefined);
        setBusy(false);
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else router.refresh();
    } catch {
      setError(true);
      setBusy(false);
    }
  };

  return (
    <div ref={topRef} className="space-y-4 scroll-mt-20">
      <p className="clay-sm flex items-start gap-3 p-4 text-sm leading-relaxed">
        <CircleHelp className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        {t("testIntro")}
      </p>
      <div className="flex items-center gap-3">
        <p className="shrink-0 text-sm font-extrabold tabular-nums">{t("testProgress", { n: q.n, max: q.max })}</p>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={q.max} aria-valuenow={q.n - 1} aria-label={t("testProgress", { n: q.n, max: q.max })}>
          <div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${((q.n - 1) / q.max) * 100}%` }} />
        </div>
      </div>
      <section className="clay space-y-4 p-4 sm:p-7" aria-labelledby="dq">
        <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
          {f(q.subjectName)} · {tg("title", { grade: q.grade })} · {f(q.skillTitle)}
        </p>
        <p id="dq" className="whitespace-pre-line text-lg font-bold leading-snug sm:text-xl">{shown.prompt}</p>
        <AnswerArea key={q.itemId} shown={shown} value={chosen} onChange={setChosen} disabled={busy} labelledBy="dq" />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto" disabled={!complete || busy} onClick={() => complete && send(response!)}>
            {t("submit")}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto" disabled={busy} onClick={() => send(null)}>
            {t("dontKnow")}
          </Button>
        </div>
        {error && <p role="alert" className="font-bold text-destructive">{t("notSaved")}</p>}
      </section>
    </div>
  );
}

/** Update the plan from today, change its date or time, retake the test or remove it. */
export function PlanActions({ examId, examDate, minutes, min, max }: { examId: string; examDate: string; minutes: PlanMinutes; min: string; max: string }) {
  const t = useTranslations("plan");
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [date, setDate] = useState(examDate < min ? min : examDate);
  const [mins, setMins] = useState(minutes);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  const run = async (path: string, body: unknown, after?: () => void) => {
    if (busy) return;
    setBusy(true);
    setError(false);
    try {
      await post(path, body);
      after?.();
      router.refresh();
    } catch {
      setError(true);
    }
    setBusy(false);
  };

  return (
    <section className="clay space-y-4 p-5 sm:p-7" aria-labelledby="plan-actions">
      <h2 id="plan-actions" className="sr-only">{t("update")}</h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button disabled={busy} onClick={() => run("/api/plan/update", { examId })}>
          <RefreshCw className="size-5" aria-hidden="true" />
          {t("update")}
        </Button>
        <Button variant="secondary" disabled={busy} aria-expanded={editing} onClick={() => setEditing((x) => !x)}>
          <CalendarDays className="size-5" aria-hidden="true" />
          {t("change")}
        </Button>
        <Button variant="secondary" disabled={busy} onClick={() => run("/api/plan/start", { examId, examDate: date, minutesPerDay: mins })}>
          <RotateCcw className="size-5" aria-hidden="true" />
          {t("retake")}
        </Button>
        <Button variant="ghost" disabled={busy} onClick={() => window.confirm(t("removeConfirm")) && run("/api/plan/remove", { examId })}>
          <Trash2 className="size-5" aria-hidden="true" />
          {t("remove")}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">{t("updateHint")}</p>
      {editing && (
        <form
          className="space-y-4 border-t border-border/70 pt-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (date >= min && date <= max) run("/api/plan/update", { examId, examDate: date, minutesPerDay: mins }, () => setEditing(false));
          }}
        >
          <DateAndTime date={date} minutes={mins} min={min} max={max} onDate={setDate} onMinutes={setMins} />
          <Button type="submit" disabled={busy || date < min || date > max}>{t("save")}</Button>
        </form>
      )}
      {error && <p role="alert" className="font-bold text-destructive">{t("actionError")}</p>}
    </section>
  );
}
