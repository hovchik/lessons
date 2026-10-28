"use client";

import { ArrowRight, Eye, Flag, Play, RotateCcw, Users, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { LIVE_COUNTS, LIVE_SECONDS } from "@/lib/live-quiz";
import { cn, pick } from "@/lib/utils";
import type { HostView } from "@/server/live-quiz";
import { OPTION_STYLE, Shape, useCountdown, useLivePoll } from "./live-kit";

export type Catalogue = { id: string; name: string; grades: { grade: number; units: { skillId: string; title: string; position: number }[] }[] }[];
type Hosting = { pin: string; hostToken: string };
const HOST_KEY = "lessons:live:host";

const select = "h-12 w-full rounded-[var(--radius)] border-2 border-border bg-card px-3 font-bold outline-none focus:border-primary";

/**
 * The teacher's screen for a live class quiz, made to be shown on a
 * projector: pick a unit, read out the PIN, then run the questions.
 */
export function LiveHost({ catalogue }: { catalogue: Catalogue }) {
  const t = useTranslations("live");
  const [hosting, setHosting] = useState<Hosting | null>(null);

  useEffect(() => {
    try {
      const h = JSON.parse(sessionStorage.getItem(HOST_KEY) ?? "null") as Hosting | null;
      if (h) setHosting(h);
    } catch {}
  }, []);

  const begin = (h: Hosting) => {
    try {
      sessionStorage.setItem(HOST_KEY, JSON.stringify(h));
    } catch {}
    setHosting(h);
  };
  const finish = () => {
    try {
      sessionStorage.removeItem(HOST_KEY);
    } catch {}
    setHosting(null);
  };

  return hosting ? <HostGame hosting={hosting} onClose={finish} /> : <HostSetup catalogue={catalogue} onReady={begin} t={t} />;
}

function HostSetup({ catalogue, onReady, t }: { catalogue: Catalogue; onReady: (h: Hosting) => void; t: ReturnType<typeof useTranslations> }) {
  const [subject, setSubject] = useState(catalogue[0]?.id ?? "");
  const grades = useMemo(() => catalogue.find((s) => s.id === subject)?.grades ?? [], [catalogue, subject]);
  const [grade, setGrade] = useState(grades[0]?.grade ?? 1);
  const units = useMemo(() => grades.find((g) => g.grade === grade)?.units ?? grades[0]?.units ?? [], [grades, grade]);
  const [skillId, setSkillId] = useState(units[0]?.skillId ?? "");
  const [count, setCount] = useState<number>(10);
  const [seconds, setSeconds] = useState<number>(20);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!grades.some((g) => g.grade === grade)) setGrade(grades[0]?.grade ?? 1);
  }, [grades, grade]);
  useEffect(() => {
    if (!units.some((u) => u.skillId === skillId)) setSkillId(units[0]?.skillId ?? "");
  }, [units, skillId]);

  const create = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/live/create", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ skillId, count, seconds }) });
      const body = (await res.json()) as Partial<Hosting> & { error?: string };
      if (!res.ok || !body.pin) setError(body.error ?? "invalid");
      else onReady({ pin: body.pin, hostToken: body.hostToken! });
    } catch {
      setError("network");
    }
    setBusy(false);
  };

  return (
    <section className="clay space-y-5 p-4 sm:p-7" aria-label={t("setup")}>
      <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
        <label className="block text-sm font-extrabold">
          {t("subject")}
          <select className={cn(select, "mt-1")} value={subject} onChange={(e) => setSubject(e.target.value)}>
            {catalogue.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-extrabold">
          {t("grade")}
          <select className={cn(select, "mt-1")} value={grade} onChange={(e) => setGrade(Number(e.target.value))}>
            {grades.map((g) => (
              <option key={g.grade} value={g.grade}>{g.grade}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-extrabold">
        {t("unit")}
        <select className={cn(select, "mt-1")} value={skillId} onChange={(e) => setSkillId(e.target.value)}>
          {units.map((u) => (
            <option key={u.skillId} value={u.skillId}>
              {u.position}. {u.title}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <fieldset>
          <legend className="text-sm font-extrabold">{t("questions")}</legend>
          <div className="mt-1 grid grid-cols-3 gap-2">
            {LIVE_COUNTS.map((n) => (
              <button key={n} type="button" aria-pressed={count === n} onClick={() => setCount(n)} className={cn("clay-sm clay-press h-12 font-black", count === n && "bg-primary text-primary-foreground")}>
                {n}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-extrabold">{t("timePerQuestion")}</legend>
          <div className="mt-1 grid grid-cols-3 gap-2">
            {LIVE_SECONDS.map((n) => (
              <button key={n} type="button" aria-pressed={seconds === n} onClick={() => setSeconds(n)} className={cn("clay-sm clay-press h-12 font-black", seconds === n && "bg-primary text-primary-foreground")}>
                {t("secs", { s: n })}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      {error && <p role="alert" className="text-sm font-bold text-destructive">{t(`errors.${["few", "busy", "network"].includes(error) ? error : "invalid"}`)}</p>}
      <Button size="lg" className="w-full sm:w-auto" onClick={create} disabled={busy || !skillId}>
        <Play className="size-5" aria-hidden="true" />
        {t("create")}
      </Button>
    </section>
  );
}

function HostGame({ hosting, onClose }: { hosting: Hosting; onClose: () => void }) {
  const t = useTranslations("live");
  const locale = useLocale();
  const f = (x: Parameters<typeof pick>[0]) => pick(x, locale);
  const { data: v, gone, refresh } = useLivePoll<HostView>(`/api/live/state?pin=${hosting.pin}&host=${encodeURIComponent(hosting.hostToken)}`);
  const secs = useCountdown(v?.msLeft ?? 0, `${v?.phase}:${v?.index}`);
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin), []);

  const act = async (action: string, playerId?: string) => {
    await fetch("/api/live/host", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ pin: hosting.pin, hostToken: hosting.hostToken, action, playerId }) }).catch(() => {});
    refresh();
  };

  if (gone) {
    return (
      <section className="clay space-y-4 p-6 text-center">
        <p className="text-lg font-extrabold">{t("gameGone")}</p>
        <Button size="lg" onClick={onClose}>{t("newGame")}</Button>
      </section>
    );
  }
  if (!v) return <p className="clay p-6 text-center font-bold text-muted-foreground">{t("connecting")}</p>;

  if (v.phase === "lobby") {
    return (
      <section className="space-y-5">
        <div className="clay p-6 text-center sm:p-10">
          <p className="text-lg font-bold text-muted-foreground">
            {t("goTo")} <span className="font-black text-foreground">{origin.replace(/^https?:\/\//, "")}/{locale}/live</span>
          </p>
          <p className="mt-2 text-sm font-extrabold uppercase tracking-widest text-muted-foreground">{t("gamePin")}</p>
          <p className="fx-pop text-6xl font-black tracking-[0.15em] tabular-nums sm:text-8xl">{v.pin}</p>
          <p className="mt-3 font-bold">{f(v.title)}</p>
        </div>
        <div className="clay space-y-4 p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="inline-flex items-center gap-2 text-lg font-extrabold">
              <Users className="size-5" aria-hidden="true" />
              {t("playersIn", { n: v.players.length })}
            </h2>
            <Button size="lg" onClick={() => act("start")} disabled={v.players.length === 0}>
              <Play className="size-5" aria-hidden="true" />
              {t("start")}
            </Button>
          </div>
          {v.players.length === 0 ? (
            <p className="text-muted-foreground">{t("waitingPlayers")}</p>
          ) : (
            <ul className="flex flex-wrap gap-2">
              {v.players.map((p) => (
                <li key={p.id} className="fx-pop">
                  <button type="button" onClick={() => act("kick", p.id)} className="group inline-flex min-h-11 items-center gap-1.5 rounded-full bg-muted px-4 font-bold hover:bg-red-100" aria-label={t("remove", { name: p.name })}>
                    {p.name}
                    <X className="size-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="button" onClick={onClose} className="text-sm font-bold text-muted-foreground hover:text-foreground">{t("cancel")}</button>
      </section>
    );
  }

  if ((v.phase === "question" || v.phase === "reveal") && v.question) {
    const reveal = v.reveal;
    const most = reveal ? Math.max(1, ...reveal.counts) : 1;
    return (
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-extrabold">
          <span>{t("questionOf", { n: v.index + 1, total: v.total })}</span>
          <span className="text-muted-foreground">{t("answeredOf", { n: v.answered, total: v.players.length })}</span>
        </div>
        <div className="clay flex items-center gap-4 p-5 sm:p-8">
          <p className="flex-1 text-2xl font-black leading-snug text-balance sm:text-4xl">{f(v.question.prompt)}</p>
          {v.phase === "question" && (
            <span className={cn("grid size-16 shrink-0 place-items-center rounded-full text-2xl font-black tabular-nums text-white shadow-clay-sm sm:size-20 sm:text-3xl", secs <= 5 ? "bg-destructive" : "bg-primary")} role="timer" aria-live="off">
              {secs}
            </span>
          )}
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {v.question.options.map((o, i) => {
            const right = reveal?.answer === i;
            return (
              <li
                key={i}
                className={cn("relative flex min-h-20 items-center gap-3 overflow-hidden rounded-[var(--radius)] p-4 text-lg font-extrabold shadow-clay-sm sm:text-2xl", OPTION_STYLE[i], reveal && !right && "opacity-40")}
              >
                <Shape i={i} className="size-8" />
                <span className="flex-1">{f(o)}</span>
                {reveal && (
                  <span className="inline-flex items-center gap-2 tabular-nums">
                    {right && <span aria-label={t("rightAnswer")}>✓</span>}
                    {reveal.counts[i]}
                  </span>
                )}
                {reveal && <span className="absolute inset-x-0 bottom-0 h-1.5 bg-black/25" style={{ width: `${(reveal.counts[i] / most) * 100}%` }} aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
        {v.phase === "question" ? (
          <Button size="lg" variant="secondary" onClick={() => act("reveal")}>
            <Eye className="size-5" aria-hidden="true" />
            {t("showAnswer")}
          </Button>
        ) : (
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
            <ol className="clay space-y-1 p-4">
              <li className="mb-2 text-sm font-extrabold uppercase tracking-wide text-muted-foreground">{t("leaders")}</li>
              {v.players.slice(0, 5).map((p) => (
                <li key={p.id} className="fx-in flex justify-between gap-3 rounded-[12px] px-3 py-2 font-bold odd:bg-muted">
                  <span>
                    {p.rank}. {p.name}
                  </span>
                  <span className="tabular-nums">{p.score}</span>
                </li>
              ))}
            </ol>
            <Button size="lg" onClick={() => act("next")}>
              {v.index + 1 < v.total ? t("next") : t("finish")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        )}
        <button type="button" onClick={() => act("end")} className="inline-flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground">
          <Flag className="size-4" aria-hidden="true" />
          {t("endNow")}
        </button>
      </section>
    );
  }

  // Podium: second, first, third, like a real one. Height and colour follow
  // the rank, so players tied for first both stand on the gold step.
  const top = v.players.slice(0, 3);
  const order = [top[1], top[0], top[2]];
  const step = (rank: number) => (rank === 1 ? "h-40 bg-amber-400" : rank === 2 ? "h-28 bg-slate-400" : "h-20 bg-orange-700");
  return (
    <section className="fx-rise relative clay space-y-6 p-6 text-center sm:p-10">
      <Confetti />
      <h2 className="text-3xl font-black">{t("podium")}</h2>
      <div className="mx-auto flex max-w-lg items-end justify-center gap-3">
        {order.map((p, i) =>
          p ? (
            <div key={p.id} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-lg font-black">{p.name}</span>
              <span className="text-sm font-bold text-muted-foreground tabular-nums">{p.score}</span>
              <div className={cn("grid w-full place-items-center rounded-t-[16px] text-3xl font-black text-white shadow-clay-sm", step(p.rank))}>{p.rank}</div>
            </div>
          ) : (
            <div key={i} className="flex-1" />
          ),
        )}
      </div>
      {v.players.length > 3 && (
        <ol className="mx-auto max-w-md space-y-1 text-left" start={4}>
          {v.players.slice(3).map((p) => (
            <li key={p.id} className="flex justify-between rounded-[12px] bg-muted px-3 py-2 font-bold">
              <span>
                {p.rank}. {p.name}
              </span>
              <span className="tabular-nums">{p.score}</span>
            </li>
          ))}
        </ol>
      )}
      <Button size="lg" onClick={onClose}>
        <RotateCcw className="size-5" aria-hidden="true" />
        {t("newGame")}
      </Button>
    </section>
  );
}
