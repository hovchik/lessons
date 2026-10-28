"use client";

import { CalendarClock, Check, Flame, Lightbulb, Share2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button, buttonClasses } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { AnswerArea } from "@/components/site/answer-area";
import { notifyChanged } from "@/lib/live";
import { PUZZLE_TRIES, puzzleStatus, shareText, type PuzzleState } from "@/lib/puzzle";
import { defaultResponse, isComplete, localKey, localShown, type QuizResponse } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import type { I18nText } from "@/server/db/schema";
import type { PuzzleAnswer, PuzzleReveal, PuzzleView } from "@/server/puzzle";

type Saved = { state: PuzzleState; reveal: PuzzleReveal | null; hint: I18nText | null };

/** A guest's result lives in the browser, one entry per day and level. */
const storeKey = (v: PuzzleView) => `lessons:puzzle:${v.day}:${v.level}`;
function readGuest(v: PuzzleView): Saved | null {
  try {
    const raw = localStorage.getItem(storeKey(v));
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}
function writeGuest(v: PuzzleView, s: Saved) {
  try {
    localStorage.setItem(storeKey(v), JSON.stringify(s));
  } catch {
    // Private mode: the result just isn't remembered after a reload.
  }
}

/** Time left until the next puzzle (UTC midnight), refreshed every minute. */
function useUntilTomorrow() {
  const [ms, setMs] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setMs(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1) - now.getTime());
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return ms;
}

/**
 * Today's puzzle: answer, a hint after a wrong first try, then the answer
 * with its explanation, the puzzle streak and a result to share (no spoiler
 * in it). The answer is checked on the server.
 */
export function PuzzlePlay({ view, initial, signedIn }: { view: PuzzleView; initial: (Saved & { streak: number }) | null; signedIn: boolean }) {
  const t = useTranslations("puzzle");
  const locale = useLocale();
  const f = (x: I18nText) => pick(x, locale);
  const shown = localShown(view.shown, f);
  const [saved, setSaved] = useState<Saved>(initial ?? { state: { tries: 0, solved: false }, reveal: null, hint: null });
  const [streak, setStreak] = useState(initial?.streak ?? 0);
  const [value, setValue] = useState<QuizResponse | undefined>();
  const [lastWrong, setLastWrong] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [shared, setShared] = useState<"copied" | null>(null);
  const [justSolved, setJustSolved] = useState(false);
  const until = useUntilTomorrow();

  // A guest's earlier go today comes back from the browser.
  useEffect(() => {
    if (!signedIn) {
      const g = readGuest(view);
      if (g) setSaved(g);
    }
  }, [signedIn, view]);

  const status = puzzleStatus(saved.state);
  const response = defaultResponse(shown, value);

  const check = async () => {
    if (busy || status.over || response === undefined || !isComplete(shown, response)) return;
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/puzzle/answer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ level: view.level, response, tries: signedIn ? undefined : saved.state.tries }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const a = (await res.json()) as PuzzleAnswer;
      const next: Saved = { state: a.state, reveal: a.reveal, hint: a.hint };
      setSaved(next);
      setStreak(a.streak);
      setLastWrong(!a.correct);
      if (a.correct) setJustSolved(true);
      if (!signedIn) writeGuest(view, next);
      // A wrong first try leaves the answer for a second go; the boxes clear only for choices.
      if (!a.correct && !a.reveal && shown.kind === "choice") setValue(undefined);
      if (signedIn) notifyChanged();
    } catch {
      setError(true);
    }
    setBusy(false);
  };

  const share = async () => {
    const text = shareText({
      title: t("shareTitle"),
      day: view.day,
      tries: saved.state.tries,
      solved: saved.state.solved,
      streak,
      streakLabel: t("streak", { n: streak }),
      url: `${window.location.origin}/${locale}/puzzle`,
    });
    try {
      if (navigator.share) await navigator.share({ text });
      else {
        await navigator.clipboard.writeText(text);
        setShared("copied");
        setTimeout(() => setShared(null), 2500);
      }
    } catch {
      // The pupil closed the share sheet.
    }
  };

  const hours = until === null ? null : Math.floor(until / 3_600_000);
  const minutes = until === null ? null : Math.floor((until % 3_600_000) / 60_000);
  const triesLeft = PUZZLE_TRIES - saved.state.tries;

  return (
    <div className="space-y-4">
      <section className="clay space-y-4 p-4 sm:p-7" aria-labelledby="puzzle-q">
        <p id="puzzle-q" className="whitespace-pre-line text-lg font-bold leading-snug sm:text-xl">{shown.prompt}</p>
        <AnswerArea shown={shown} value={value} onChange={setValue} disabled={busy || status.over} reveal={saved.reveal ? localKey(saved.reveal.key, f) : null} labelledBy="puzzle-q" />

        {!status.over && (
          <div className="space-y-3">
            {saved.hint && (
              <p role="status" className="fx-in flex items-start gap-2 rounded-[var(--radius)] bg-amber-50 p-3 text-sm font-semibold text-amber-900">
                <Lightbulb className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {lastWrong && <span className="font-extrabold">{t("notYet")} </span>}
                  {f(saved.hint)}
                </span>
              </p>
            )}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto" disabled={busy || response === undefined || !isComplete(shown, response)} onClick={check}>
                <Check className="size-5" aria-hidden="true" />
                {t("check")}
              </Button>
              <span className="text-sm font-bold text-muted-foreground">{t("triesLeft", { n: triesLeft })}</span>
            </div>
            {error && (
              <p role="alert" className="fx-in text-sm font-bold text-destructive">
                {t("error")}
              </p>
            )}
          </div>
        )}
      </section>

      {status.over && (
        <section className="fx-rise relative clay space-y-4 p-5 text-center sm:p-8" role="status" aria-live="polite">
          {justSolved && <Confetti />}
          <p className={cn("text-2xl font-black sm:text-3xl", saved.state.solved ? "text-success" : "text-foreground")}>
            {saved.state.solved ? (saved.state.tries === 1 ? t("solvedFirst") : t("solvedSecond")) : t("failed")}
          </p>
          {saved.reveal?.explanation && <p className="mx-auto max-w-xl rounded-[var(--radius)] bg-muted p-3 text-left text-sm leading-relaxed sm:text-base">{f(saved.reveal.explanation)}</p>}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-bold">
            {signedIn && (
              <span className={cn("inline-flex items-center gap-1.5", streak > 0 ? "text-orange-600" : "text-muted-foreground")}>
                <Flame className={cn("size-5", streak > 0 && "fx-flame")} aria-hidden="true" />
                {t("streak", { n: streak })}
              </span>
            )}
            {hours !== null && (
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <CalendarClock className="size-5" aria-hidden="true" />
                {t("nextIn", { h: hours, m: minutes! })}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={share}>
              <Share2 className="size-5" aria-hidden="true" />
              {shared === "copied" ? t("copied") : t("share")}
            </Button>
            <Link href={`/puzzle?level=${view.level === "junior" ? "senior" : "junior"}`} className={buttonClasses({ variant: "secondary", size: "lg" })}>
              {view.level === "junior" ? t("trySenior") : t("tryJunior")}
            </Link>
          </div>
          {!signedIn && (
            <p className="text-sm text-muted-foreground">
              <Link href="/signup" className="font-bold text-primary hover:underline">
                {t("signupCta")}
              </Link>{" "}
              {t("signupWhy")}
            </p>
          )}
        </section>
      )}
    </div>
  );
}
