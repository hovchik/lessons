"use client";

import { ArrowRight, Play, Volume2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useHoldRefresh } from "@/lib/live";
import { CALM_QUESTIONS, SPRINT_SECONDS } from "@/lib/calc";
import { WORD_LEVELS, nextWordRound, wordsGameId, type WordLevel, type WordRound } from "@/lib/words";
import { cn } from "@/lib/utils";
import { GameHud, GameOver, ModePicker, readGuestBest, useClock, useSaveRound, type GameMode, type Missed } from "./game-kit";

type Settings = { level: WordLevel; mode: GameMode };

/** Says an English word aloud with the browser's own voice, when it has one. */
function speak(text: string) {
  try {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  } catch {
    // No voice: the word is still on screen.
  }
}

/**
 * English words: a picture and four words to choose from, then the word in
 * the pupil's own language and a button to hear it. Keys 1–4 pick an option.
 */
export function WordsGame({ initial, bests: serverBests, signedIn }: { initial: Settings; bests: Record<string, number>; signedIn: boolean }) {
  const t = useTranslations("games");
  const [settings, setSettings] = useState<Settings>(initial);
  const [phase, setPhase] = useState<"setup" | "play">("setup");
  const [bests, setBests] = useState(serverBests);
  const gameId = wordsGameId(settings.level);

  useEffect(() => {
    if (signedIn) return;
    const found: Record<string, number> = {};
    for (const l of WORD_LEVELS) {
      for (const m of ["sprint", "calm"] as const) {
        const b = readGuestBest(wordsGameId(l), m);
        if (b !== undefined) found[`${wordsGameId(l)}:${m}`] = b;
      }
    }
    setBests(found);
  }, [signedIn]);

  if (phase === "play") {
    return (
      <WordsRound
        key={`${gameId}:${settings.mode}`}
        settings={settings}
        signedIn={signedIn}
        onBest={(score) => setBests((b) => ({ ...b, [`${gameId}:${settings.mode}`]: Math.max(score, b[`${gameId}:${settings.mode}`] ?? 0) }))}
        onSettings={() => setPhase("setup")}
      />
    );
  }

  return (
    <section className="clay space-y-6 p-4 sm:p-7" aria-label={t("setup")}>
      <fieldset>
        <legend className="mb-2 text-sm font-extrabold">{t("words.level")}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {WORD_LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={settings.level === l}
              onClick={() => setSettings((s) => ({ ...s, level: l }))}
              className={cn("clay-sm clay-press flex min-h-16 items-center gap-3 p-3 text-left", settings.level === l && "ring-3 ring-primary")}
            >
              <span className="text-3xl" aria-hidden="true">{l === 1 ? "🐱" : "🦒"}</span>
              <span>
                <span className="block font-extrabold">{t(`words.levels.${l}.name`)}</span>
                <span className="block text-xs text-muted-foreground">{t(`words.levels.${l}.about`)}</span>
              </span>
            </button>
          ))}
        </div>
      </fieldset>
      <ModePicker mode={settings.mode} onChange={(mode) => setSettings((s) => ({ ...s, mode }))} bests={{ sprint: bests[`${gameId}:sprint`], calm: bests[`${gameId}:calm`] }} />
      <Button
        size="lg"
        className="w-full sm:w-auto"
        onClick={() => {
          window.history.replaceState(null, "", `${window.location.pathname}?level=${settings.level}&mode=${settings.mode}`);
          setPhase("play");
        }}
      >
        <Play className="size-5" aria-hidden="true" />
        {t("start")}
      </Button>
    </section>
  );
}

function WordsRound({ settings, signedIn, onBest, onSettings }: { settings: Settings; signedIn: boolean; onBest: (score: number) => void; onSettings: () => void }) {
  const t = useTranslations("games");
  const locale = useLocale();
  const { level, mode } = settings;
  const gameId = wordsGameId(level);
  const recent = useRef<string[]>([]);
  const make = useCallback(() => {
    const r = nextWordRound(level, recent.current);
    recent.current = [r.word.en, ...recent.current].slice(0, 12);
    return r;
  }, [level]);

  const [round, setRound] = useState(0);
  const [q, setQ] = useState<WordRound>(() => make());
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [asked, setAsked] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [missed, setMissed] = useState<Missed[]>([]);
  const [over, setOver] = useState(false);
  const [result, setResult] = useState<{ previousBest: number | null; saved: boolean } | undefined>();
  const save = useSaveRound(signedIn);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useHoldRefresh(!over);
  // On a phone the game sits below the page header: bring it into view when a round starts.
  const top = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!over) top.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [over, round]);

  const finish = useCallback(() => setOver(true), []);
  const left = useClock(SPRINT_SECONDS, mode === "sprint" && !over, finish);

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

  const translation = locale === "en" ? null : locale === "hy" ? q.word.hy : q.word.ru;

  const advance = useCallback(() => {
    setChosen(null);
    setQ(make());
  }, [make]);

  const answer = useCallback(
    (option: string) => {
      if (chosen || over) return;
      setChosen(option);
      const right = option === q.word.en;
      const nextAsked = asked + 1;
      setAsked(nextAsked);
      if (right) {
        setScore((s) => s + 1);
        setCombo(combo + 1);
        setBestCombo((b) => Math.max(b, combo + 1));
      } else {
        setCombo(0);
        setMissed((m) => [...m, { prompt: <span className="text-2xl">{q.word.emoji}</span>, answer: q.word.en, given: option }]);
      }
      const last = mode === "calm" && nextAsked >= CALM_QUESTIONS;
      if (right || mode === "sprint") timer.current = setTimeout(() => (last ? setOver(true) : advance()), right ? (mode === "sprint" ? 450 : 900) : 1300);
    },
    [chosen, over, q, asked, combo, mode, advance],
  );

  // Keys 1–4 pick an option; Enter moves on after a wrong answer in calm mode.
  useEffect(() => {
    if (over) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest("input, textarea")) return;
      const n = Number(e.key);
      if (n >= 1 && n <= q.options.length) answer(q.options[n - 1]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer, q, over]);

  const next = () => {
    if (mode === "calm" && asked >= CALM_QUESTIONS) setOver(true);
    else advance();
  };

  const again = () => {
    setRound((r) => r + 1);
    recent.current = [];
    setQ(make());
    setChosen(null);
    setScore(0);
    setAsked(0);
    setCombo(0);
    setBestCombo(0);
    setMissed([]);
    setResult(undefined);
    setOver(false);
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

  const wrong = chosen !== null && chosen !== q.word.en;
  return (
    <section ref={top} className="clay scroll-mt-20 space-y-5 p-4 sm:p-7" aria-label={t("words.name")}>
      <GameHud mode={mode} left={left} seconds={SPRINT_SECONDS} asked={asked} of={CALM_QUESTIONS} score={score} combo={combo} />
      <div key={q.word.en + asked} className="fx-next space-y-2 text-center">
        <p id="words-q" className="text-sm font-bold text-muted-foreground">{t("words.prompt")}</p>
        <p className="text-7xl leading-none sm:text-8xl" role="img" aria-label={t("words.picture")}>
          {q.word.emoji}
        </p>
        <p role="status" aria-live="assertive" className="flex min-h-9 items-center justify-center gap-2 text-lg font-extrabold">
          {chosen && (
            <>
              <span className={wrong ? "text-destructive" : "text-success"}>
                {q.word.en}
                {translation && <span className="font-semibold text-muted-foreground"> · {translation}</span>}
              </span>
              <button type="button" onClick={() => speak(q.word.en)} className="grid size-9 place-items-center rounded-full text-primary hover:bg-muted" aria-label={t("words.listen")}>
                <Volume2 className="size-5" aria-hidden="true" />
              </button>
            </>
          )}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3" role="group" aria-labelledby="words-q">
        {q.options.map((o, i) => {
          const isRight = chosen !== null && o === q.word.en;
          const isWrong = chosen === o && o !== q.word.en;
          return (
            <button
              key={o}
              type="button"
              onClick={() => answer(o)}
              disabled={chosen !== null}
              lang="en"
              className={cn(
                "clay-sm clay-press relative flex min-h-16 items-center justify-center px-3 text-lg font-extrabold sm:text-xl",
                isRight && "fx-right bg-emerald-50 text-success ring-3 ring-success",
                isWrong && "fx-wrong bg-red-50 text-destructive ring-3 ring-destructive",
                chosen !== null && !isRight && !isWrong && "opacity-50",
              )}
            >
              <span className="absolute left-2 top-1.5 hidden text-xs font-bold text-muted-foreground sm:block" aria-hidden="true">{i + 1}</span>
              {o}
            </button>
          );
        })}
      </div>
      {wrong && mode === "calm" && (
        <Button size="lg" className="w-full" onClick={next} autoFocus>
          {t("next")}
          <ArrowRight className="size-5" aria-hidden="true" />
        </Button>
      )}
    </section>
  );
}
