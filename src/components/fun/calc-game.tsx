"use client";

import { ArrowRight, Check, Delete, Play } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useHoldRefresh } from "@/lib/live";
import {
  CALC_GRADES,
  CALM_QUESTIONS,
  SPRINT_SECONDS,
  calcGameId,
  isRight,
  nextProblem,
  problemKey,
  showRational,
  topicsFor,
  type CalcChoice,
  type Problem,
} from "@/lib/calc";
import { cn } from "@/lib/utils";
import { GameHud, GameOver, ModePicker, readGuestBest, useClock, useSaveRound, type GameMode, type Missed } from "./game-kit";
import { MathText } from "./math-text";

type Settings = { grade: number; choice: CalcChoice; mode: GameMode };
type Feedback = null | { right: true } | { right: false; answer: string };

/**
 * Calculation practice made on the fly for grades 1–9: pick a grade, a topic
 * (or a mix of the grade's topics) and sprint (one minute) or calm (20
 * questions, no clock). Answers go in with the on-screen number pad or the
 * keyboard; a wrong answer shows the right one before moving on.
 */
export function CalcGame({ initial, bests: serverBests, signedIn }: { initial: Settings; bests: Record<string, number>; signedIn: boolean }) {
  const t = useTranslations("games");
  const locale = useLocale();
  const [settings, setSettings] = useState<Settings>(initial);
  const [phase, setPhase] = useState<"setup" | "play" | "done">("setup");
  const [bests, setBests] = useState(serverBests);
  const topics = topicsFor(settings.grade);
  const gameId = calcGameId(settings.choice, settings.grade);

  // Guests' bests live in the browser.
  useEffect(() => {
    if (signedIn) return;
    const found: Record<string, number> = {};
    for (const g of CALC_GRADES) {
      for (const c of [...topicsFor(g), "mix"] as CalcChoice[]) {
        for (const m of ["sprint", "calm"] as const) {
          const b = readGuestBest(calcGameId(c, g), m);
          if (b !== undefined) found[`${calcGameId(c, g)}:${m}`] = b;
        }
      }
    }
    setBests(found);
  }, [signedIn]);

  const choose = (next: Partial<Settings>) => {
    setSettings((s) => {
      const merged = { ...s, ...next };
      // A topic the new grade doesn't have falls back to the grade's mix.
      if (merged.choice !== "mix" && !topicsFor(merged.grade).includes(merged.choice)) merged.choice = "mix";
      return merged;
    });
  };

  const start = () => {
    const q = new URLSearchParams({ grade: String(settings.grade), topic: settings.choice, mode: settings.mode });
    window.history.replaceState(null, "", `${window.location.pathname}?${q}`);
    setPhase("play");
  };

  if (phase === "play" || phase === "done") {
    return (
      <CalcRound
        key={`${gameId}:${settings.mode}`}
        settings={settings}
        signedIn={signedIn}
        onBest={(score) => setBests((b) => ({ ...b, [`${gameId}:${settings.mode}`]: Math.max(score, b[`${gameId}:${settings.mode}`] ?? 0) }))}
        onSettings={() => setPhase("setup")}
        locale={locale}
      />
    );
  }

  return (
    <section className="clay space-y-6 p-4 sm:p-7" aria-labelledby="calc-setup">
      <h2 id="calc-setup" className="sr-only">{t("setup")}</h2>
      <fieldset>
        <legend className="mb-2 text-sm font-extrabold">{t("grade")}</legend>
        <div className="flex flex-wrap gap-2">
          {CALC_GRADES.map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={settings.grade === g}
              onClick={() => choose({ grade: g })}
              className={cn("clay-sm clay-press grid size-12 place-items-center text-lg font-black", settings.grade === g && "bg-primary text-primary-foreground")}
            >
              {g}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-2 text-sm font-extrabold">{t("topic")}</legend>
        <div className="flex flex-wrap gap-2">
          {(["mix", ...topics] as CalcChoice[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={settings.choice === c}
              onClick={() => choose({ choice: c })}
              className={cn("clay-sm clay-press min-h-11 px-4 text-sm font-bold", settings.choice === c && "bg-primary text-primary-foreground")}
            >
              {t(`calc.topics.${c}`)}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{t(`calc.about.${settings.choice}`)}</p>
      </fieldset>
      <ModePicker mode={settings.mode} onChange={(mode) => choose({ mode })} bests={{ sprint: bests[`${gameId}:sprint`], calm: bests[`${gameId}:calm`] }} />
      <Button size="lg" className="w-full sm:w-auto" onClick={start}>
        <Play className="size-5" aria-hidden="true" />
        {t("start")}
      </Button>
    </section>
  );
}

function CalcRound({ settings, signedIn, onBest, onSettings, locale }: { settings: Settings; signedIn: boolean; onBest: (score: number) => void; onSettings: () => void; locale: string }) {
  const t = useTranslations("games");
  const { grade, choice, mode } = settings;
  const gameId = calcGameId(choice, grade);
  const recent = useRef<string[]>([]);
  const make = useCallback(() => {
    const p = nextProblem(choice, grade, recent.current);
    recent.current = [problemKey(p), ...recent.current].slice(0, 8);
    return p;
  }, [choice, grade]);

  const [round, setRound] = useState(0);
  const [problem, setProblem] = useState<Problem>(() => make());
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [score, setScore] = useState(0);
  const [asked, setAsked] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [missed, setMissed] = useState<Missed[]>([]);
  const [over, setOver] = useState(false);
  const [result, setResult] = useState<{ previousBest: number | null; saved: boolean } | undefined>();
  const [shake, setShake] = useState(0);
  const save = useSaveRound(signedIn);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useHoldRefresh(!over);
  // On a phone the game sits below the page header: bring it into view when a round starts.
  const top = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!over) top.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [over, round]);

  const finish = useCallback(() => setOver(true), []);
  const left = useClock(SPRINT_SECONDS, mode === "sprint" && !over, finish);

  // Save once, when the round ends.
  const scoreRef = useRef({ score, asked });
  scoreRef.current = { score, asked };
  useEffect(() => {
    if (!over) return;
    if (timer.current) clearTimeout(timer.current);
    const { score: s, asked: a } = scoreRef.current;
    save(gameId, mode, s, a).then((r) => {
      setResult(r);
      if (r.saved) onBest(s);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [over]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const advance = useCallback(() => {
    setFeedback(null);
    setInput("");
    setProblem(make());
    requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
  }, [make]);

  const shown = (p: Problem) => (p.words ? wordsText(t, p, locale) : <MathText text={p.text} locale={locale} />);
  const answerText = (p: Problem) => showRational(p.answer, p.decimal).replace(/(\d)\.(\d)/, locale === "en" ? "$1.$2" : "$1,$2");

  const submit = () => {
    if (over || feedback || !input.trim() || input === "-") return;
    const right = isRight(problem, input);
    const nextAsked = asked + 1;
    setAsked(nextAsked);
    if (right) {
      setScore((s) => s + 1);
      setCombo(combo + 1);
      setBestCombo((b) => Math.max(b, combo + 1));
      setFeedback({ right: true });
    } else {
      setCombo(0);
      setShake((n) => n + 1);
      setMissed((m) => [...m, { prompt: shown(problem), answer: answerText(problem), given: input.replace("-", "−") }]);
      setFeedback({ right: false, answer: answerText(problem) });
    }
    const last = mode === "calm" && nextAsked >= CALM_QUESTIONS;
    if (right || mode === "sprint") {
      timer.current = setTimeout(() => (last ? setOver(true) : advance()), right ? 280 : 1100);
    }
  };

  const next = () => {
    if (mode === "calm" && asked >= CALM_QUESTIONS) setOver(true);
    else advance();
  };

  const again = () => {
    setRound((r) => r + 1);
    recent.current = [];
    setProblem(make());
    setInput("");
    setFeedback(null);
    setScore(0);
    setAsked(0);
    setCombo(0);
    setBestCombo(0);
    setMissed([]);
    setResult(undefined);
    setOver(false);
  };

  const allowMinus = grade >= 6;
  const allowPoint = grade >= 5;
  const allowSlash = (choice === "fractions" || choice === "mix") && topicsFor(grade).includes("fractions");
  const point = locale === "en" ? "." : ",";

  const press = (k: string) => {
    if (feedback || over) return;
    if (k === "back") setInput((s) => s.slice(0, -1));
    else if (k === "-") setInput((s) => (s.startsWith("-") ? s.slice(1) : `-${s}`));
    else setInput((s) => (s.length >= 12 ? s : s + k));
    inputRef.current?.focus({ preventScroll: true });
  };

  const onType = (raw: string) => {
    if (feedback || over) return;
    const clean = raw.replace(/[−–]/g, "-").replace(/[^0-9.,/-]/g, "").replace(/(?!^)-/g, "").slice(0, 12);
    setInput(clean);
  };

  if (over) {
    return (
      <GameOver
        key={round}
        mode={mode}
        score={score}
        total={asked}
        bestCombo={bestCombo}
        previousBest={result ? result.previousBest : undefined}
        saveFailed={!!result && !result.saved}
        missed={missed}
        onAgain={again}
        onSettings={onSettings}
      />
    );
  }

  const ask = problem.ask === "x" ? "x =" : "=";
  return (
    <section ref={top} className="clay scroll-mt-20 space-y-5 p-4 sm:p-7" aria-label={t(`calc.topics.${choice}`)}>
      <GameHud mode={mode} left={left} seconds={SPRINT_SECONDS} asked={asked} of={CALM_QUESTIONS} score={score} combo={combo} />
      <div key={problemKey(problem) + asked} className="fx-next space-y-4 py-2 text-center">
        <p id="calc-q" className={cn("font-black tabular-nums", problem.words ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl")}>
          {shown(problem)}
        </p>
        <div className="flex items-center justify-center gap-3 text-3xl font-black sm:text-4xl">
          {problem.ask === "x" && problem.text && <span className="sr-only">{t("calc.solveFor")}</span>}
          <span aria-hidden="true">{ask}</span>
          <input
            ref={inputRef}
            key={shake}
            value={input.replace("-", "−").replace(/[.,]/, point)}
            onChange={(e) => onType(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (feedback && !feedback.right && mode === "calm") next();
                else submit();
              }
            }}
            inputMode="none"
            autoComplete="off"
            autoFocus
            aria-labelledby="calc-q"
            aria-invalid={feedback && !feedback.right ? true : undefined}
            className={cn(
              "h-16 w-40 rounded-[var(--radius)] border-2 bg-card text-center text-3xl font-black tabular-nums outline-none focus:border-primary sm:w-48 sm:text-4xl",
              feedback?.right ? "fx-right border-success text-success" : feedback ? "fx-wrong border-destructive text-destructive" : "border-border",
            )}
          />
          {problem.ask === "%" && <span aria-hidden="true">%</span>}
        </div>
        <p role="status" aria-live="assertive" className="min-h-7 text-lg font-extrabold">
          {feedback?.right && <span className="text-success">{t("right")}</span>}
          {feedback && !feedback.right && (
            <span className="text-destructive">
              {t("answerWas")} <span className="tabular-nums">{feedback.answer}</span>
            </span>
          )}
        </p>
      </div>

      {feedback && !feedback.right && mode === "calm" ? (
        <Button size="lg" className="w-full" onClick={next} autoFocus>
          {t("next")}
          <ArrowRight className="size-5" aria-hidden="true" />
        </Button>
      ) : (
        <NumberPad onKey={press} onEnter={submit} minus={allowMinus} point={allowPoint ? point : null} slash={allowSlash} disabled={!!feedback} canEnter={!!input && input !== "-"} />
      )}
    </section>
  );
}

function wordsText(t: ReturnType<typeof useTranslations>, p: Problem, locale: string) {
  const w = p.words!;
  const f = (x: number) => x.toLocaleString(locale === "hy" ? "hy-AM" : locale === "ru" ? "ru-RU" : "en-GB");
  return t(`calc.words.${w.key}`, { p: w.p ?? 0, n: f(w.n), m: f(w.m ?? 0) });
}

/** Big keys for thumbs; "−" flips the sign, the point key shows the language's decimal mark. */
function NumberPad({ onKey, onEnter, minus, point, slash, disabled, canEnter }: { onKey: (k: string) => void; onEnter: () => void; minus: boolean; point: string | null; slash: boolean; disabled: boolean; canEnter: boolean }) {
  const t = useTranslations("games");
  const key = "clay-sm clay-press grid h-14 place-items-center text-2xl font-black disabled:opacity-40 sm:h-16";
  const extras = useMemo(() => [minus && "-", point, slash && "/"].filter(Boolean) as string[], [minus, point, slash]);
  return (
    <div className="mx-auto grid max-w-sm grid-cols-4 gap-2 select-none" role="group" aria-label={t("pad")}>
      {["7", "8", "9"].map((k) => (
        <button key={k} type="button" className={key} onClick={() => onKey(k)} disabled={disabled}>{k}</button>
      ))}
      <button type="button" className={key} onClick={() => onKey("back")} disabled={disabled} aria-label={t("backspace")}>
        <Delete className="size-6" aria-hidden="true" />
      </button>
      {["4", "5", "6"].map((k) => (
        <button key={k} type="button" className={key} onClick={() => onKey(k)} disabled={disabled}>{k}</button>
      ))}
      <button type="button" className={cn(key, !extras[0] && "invisible")} onClick={() => extras[0] && onKey(extras[0])} disabled={disabled || !extras[0]} aria-label={extras[0] === "-" ? t("minus") : undefined}>
        {extras[0] === "-" ? "±" : extras[0]}
      </button>
      {["1", "2", "3"].map((k) => (
        <button key={k} type="button" className={key} onClick={() => onKey(k)} disabled={disabled}>{k}</button>
      ))}
      <button type="button" className={cn(key, !extras[1] && "invisible")} onClick={() => extras[1] && onKey(extras[1])} disabled={disabled || !extras[1]}>
        {extras[1]}
      </button>
      <button type="button" className={cn(key, !extras[2] && "invisible")} onClick={() => extras[2] && onKey(extras[2])} disabled={disabled || !extras[2]}>
        {extras[2]}
      </button>
      <button type="button" className={key} onClick={() => onKey("0")} disabled={disabled}>0</button>
      <button type="button" className={cn(key, "col-span-2 bg-primary text-primary-foreground")} onClick={onEnter} disabled={disabled || !canEnter}>
        <Check className="size-7" aria-label={t("check")} />
      </button>
    </div>
  );
}
