"use client";

import { Hourglass, Leaf, RotateCcw, Settings2, Trophy, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, buttonClasses } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { notifyChanged } from "@/lib/live";
import { cn } from "@/lib/utils";

/**
 * Pieces every speed game shares: the mode picker, the one-minute clock,
 * the score bar, saving a finished round and the result card. The games
 * themselves (calculation, English words) only make questions and check answers.
 */

export type GameMode = "sprint" | "calm";

/** A question the pupil got wrong, shown on the result card with the right answer. */
export type Missed = { prompt: React.ReactNode; answer: React.ReactNode; given: string };

export function ModePicker({ mode, onChange, bests }: { mode: GameMode; onChange: (m: GameMode) => void; bests: Partial<Record<GameMode, number>> }) {
  const t = useTranslations("games");
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-extrabold">{t("mode")}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {(["sprint", "calm"] as const).map((m) => {
          const Icon = m === "sprint" ? Zap : Leaf;
          const on = mode === m;
          return (
            <label
              key={m}
              className={cn(
                "clay-sm clay-press flex min-h-16 cursor-pointer items-center gap-3 p-3 has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-primary",
                on && "ring-3 ring-primary",
              )}
            >
              <input type="radio" name="mode" value={m} checked={on} onChange={() => onChange(m)} className="sr-only" />
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-[12px] text-white", m === "sprint" ? "bg-orange-500" : "bg-emerald-600")}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-extrabold">{t(`${m}.name`)}</span>
                <span className="block text-xs text-muted-foreground">{t(`${m}.about`)}</span>
              </span>
              {bests[m] !== undefined && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700">
                  <Trophy className="size-4" aria-hidden="true" />
                  {bests[m]}
                </span>
              )}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** Seconds left on a running clock; calls `onDone` once when it reaches zero. */
export function useClock(seconds: number, running: boolean, onDone: () => void) {
  const [left, setLeft] = useState(seconds);
  const done = useRef(onDone);
  done.current = onDone;
  useEffect(() => {
    if (!running) return;
    const end = Date.now() + seconds * 1000;
    setLeft(seconds);
    let fired = false;
    const id = setInterval(() => {
      const ms = end - Date.now();
      setLeft(Math.max(0, ms / 1000));
      if (ms <= 0 && !fired) {
        fired = true;
        clearInterval(id);
        done.current();
      }
    }, 100);
    return () => clearInterval(id);
  }, [running, seconds]);
  return left;
}

/** The bar above a game: the clock (sprint) or progress (calm), the score and the run of right answers. */
export function GameHud({ mode, left, seconds, asked, of, score, combo }: { mode: GameMode; left: number; seconds: number; asked: number; of: number; score: number; combo: number }) {
  const t = useTranslations("games");
  const frac = mode === "sprint" ? left / seconds : asked / of;
  const low = mode === "sprint" && left <= 10;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm font-extrabold">
        <span className={cn("inline-flex items-center gap-1.5 tabular-nums", low && "text-destructive")}>
          <Hourglass className="size-4" aria-hidden="true" />
          {mode === "sprint" ? t("secondsLeft", { s: Math.ceil(left) }) : t("questionOf", { n: Math.min(asked + 1, of), of })}
        </span>
        {combo >= 3 && (
          <span key={combo} className="fx-pop inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-0.5 text-orange-700">
            <Zap className="size-4" aria-hidden="true" />
            {t("combo", { n: combo })}
          </span>
        )}
        <span className="tabular-nums" aria-live="polite">{t("score", { n: score })}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
        <div className={cn("h-full rounded-full transition-[width] duration-200 ease-linear", low ? "bg-destructive" : "bg-primary")} style={{ width: `${Math.max(0, Math.min(1, frac)) * 100}%` }} />
      </div>
    </div>
  );
}

const guestKey = (gameId: string, mode: GameMode) => `lessons:game:${gameId}:${mode}`;
export function readGuestBest(gameId: string, mode: GameMode): number | undefined {
  try {
    const v = localStorage.getItem(guestKey(gameId, mode));
    return v === null ? undefined : Number(v);
  } catch {
    return undefined;
  }
}

/**
 * Saves a finished round: on the server for a pupil, in the browser for a
 * guest. Returns whether it beat the earlier best (a first round counts as
 * a best only when it scored something).
 */
export function useSaveRound(signedIn: boolean) {
  return useCallback(
    async (gameId: string, mode: GameMode, score: number, total: number): Promise<{ previousBest: number | null; saved: boolean }> => {
      if (!signedIn) {
        const prev = readGuestBest(gameId, mode) ?? null;
        try {
          if (prev === null || score > prev) localStorage.setItem(guestKey(gameId, mode), String(score));
        } catch {
          // Private mode: the best just isn't remembered.
        }
        return { previousBest: prev, saved: true };
      }
      try {
        const res = await fetch("/api/games/score", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ gameId, mode, score, total }),
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { previousBest: number | null };
        notifyChanged();
        return { previousBest: data.previousBest, saved: true };
      } catch {
        return { previousBest: null, saved: false };
      }
    },
    [signedIn],
  );
}

/** The result card after a round. */
export function GameOver({
  mode,
  score,
  total,
  bestCombo,
  previousBest,
  saveFailed,
  missed,
  onAgain,
  onSettings,
}: {
  mode: GameMode;
  score: number;
  total: number;
  bestCombo: number;
  previousBest: number | null | undefined;
  saveFailed: boolean;
  missed: Missed[];
  onAgain: () => void;
  onSettings: () => void;
}) {
  const t = useTranslations("games");
  const again = useRef<HTMLButtonElement>(null);
  useEffect(() => again.current?.focus(), []);
  const newBest = previousBest !== undefined && score > 0 && (previousBest === null || score > previousBest);
  const pct = total ? Math.round((score / total) * 100) : 0;
  return (
    <section className="fx-rise relative clay space-y-5 p-5 text-center sm:p-8" role="status" aria-live="polite">
      {newBest && <Confetti />}
      <p className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">{t("roundOver")}</p>
      <p className="text-5xl font-black tabular-nums sm:text-6xl">{mode === "calm" ? `${score}/${total}` : score}</p>
      <p className="text-base font-bold">
        {mode === "sprint" ? t("sprintResult", { n: score, total }) : t("calmResult", { pct })}
      </p>
      {newBest ? (
        <p className="fx-pop inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 font-extrabold text-amber-800">
          <Trophy className="size-5" aria-hidden="true" />
          {previousBest === null ? t("firstBest") : t("newBest", { prev: previousBest })}
        </p>
      ) : (
        previousBest !== undefined && previousBest !== null && <p className="text-sm font-bold text-muted-foreground">{t("best", { n: previousBest })}</p>
      )}
      {bestCombo >= 3 && <p className="text-sm font-bold text-orange-700">{t("bestCombo", { n: bestCombo })}</p>}
      {saveFailed && <p className="text-sm font-bold text-destructive">{t("saveFailed")}</p>}
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <button ref={again} type="button" className={buttonClasses({ size: "lg" })} onClick={onAgain}>
          <RotateCcw className="size-5" aria-hidden="true" />
          {t("again")}
        </button>
        <Button size="lg" variant="secondary" onClick={onSettings}>
          <Settings2 className="size-5" aria-hidden="true" />
          {t("change")}
        </Button>
      </div>
      {missed.length > 0 && (
        <div className="mx-auto max-w-md text-left">
          <h2 className="mb-2 text-sm font-extrabold">{t("missed")}</h2>
          <ul className="divide-y divide-border/70 rounded-[var(--radius)] bg-muted/60">
            {missed.slice(0, 12).map((m, i) => (
              <li key={i} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-2 text-sm">
                <span className="font-bold">{m.prompt}</span>
                <span>
                  {m.given && <span className="mr-2 text-destructive line-through">{m.given}</span>}
                  <span className="font-extrabold text-success">{m.answer}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
