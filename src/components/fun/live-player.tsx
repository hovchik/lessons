"use client";

import { Check, LogIn, Trophy, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";
import { NAME_MAX } from "@/lib/live-quiz";
import { cn, pick } from "@/lib/utils";
import type { PlayerView } from "@/server/live-quiz";
import { OPTION_STYLE, Shape, useCountdown, useLivePoll } from "./live-kit";

type Seat = { pin: string; token: string; name: string };
const SEAT_KEY = "lessons:live:seat";

/**
 * A pupil's phone in a live class quiz: join with the PIN and a nickname,
 * then four big buttons per question, the result after each, and a place
 * at the end. A reload keeps the seat (sessionStorage).
 */
export function LivePlayer({ initialPin }: { initialPin: string }) {
  const t = useTranslations("live");
  const locale = useLocale();
  const f = (x: Parameters<typeof pick>[0]) => pick(x, locale);
  const [seat, setSeat] = useState<Seat | null>(null);
  const [pin, setPin] = useState(initialPin);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState<{ index: number; choice: number } | null>(null);

  useEffect(() => {
    try {
      const s = JSON.parse(sessionStorage.getItem(SEAT_KEY) ?? "null") as Seat | null;
      if (s && (!initialPin || s.pin === initialPin)) setSeat(s);
    } catch {
      // No saved seat.
    }
  }, [initialPin]);

  const url = seat ? `/api/live/state?pin=${seat.pin}&token=${encodeURIComponent(seat.token)}` : null;
  const { data, gone } = useLivePoll<PlayerView | { kicked: true }>(url);
  const view = data && !data.kicked ? data : null;
  const secs = useCountdown(view?.msLeft ?? 0, `${view?.phase}:${view?.index}`);

  const leave = () => {
    try {
      sessionStorage.removeItem(SEAT_KEY);
    } catch {}
    setSeat(null);
    setSent(null);
  };

  const join = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/live/join", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ pin: pin.trim(), name }) });
      const body = (await res.json()) as { token?: string; name?: string; error?: string };
      if (!res.ok || !body.token) setError(body.error ?? "invalid");
      else {
        const s = { pin: pin.trim(), token: body.token, name: body.name! };
        try {
          sessionStorage.setItem(SEAT_KEY, JSON.stringify(s));
        } catch {}
        setSeat(s);
      }
    } catch {
      setError("network");
    }
    setBusy(false);
  };

  const choose = async (choice: number) => {
    if (!seat || !view || view.phase !== "question" || view.question?.answered !== null || sent?.index === view.index) return;
    setSent({ index: view.index, choice });
    try {
      await fetch("/api/live/answer", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ pin: seat.pin, token: seat.token, choice }) });
    } catch {
      setSent(null);
    }
  };

  if (!seat) {
    return (
      <form onSubmit={join} className="clay mx-auto max-w-md space-y-4 p-5 sm:p-7">
        <div>
          <label htmlFor="live-pin" className="block text-sm font-extrabold">{t("pin")}</label>
          <input
            id="live-pin"
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
            inputMode="numeric"
            autoComplete="off"
            placeholder="123456"
            className="mt-1 h-16 w-full rounded-[var(--radius)] border-2 border-border bg-card text-center text-3xl font-black tracking-[0.3em] tabular-nums outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="live-name" className="block text-sm font-extrabold">{t("nickname")}</label>
          <input
            id="live-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={NAME_MAX}
            autoComplete="nickname"
            className="mt-1 h-14 w-full rounded-[var(--radius)] border-2 border-border bg-card px-4 text-lg font-bold outline-none focus:border-primary"
            required
          />
          <p className="mt-1 text-xs text-muted-foreground">{t("nicknameHint")}</p>
        </div>
        {error && <p role="alert" className="text-sm font-bold text-destructive">{t(`errors.${["nogame", "over", "full", "name", "network"].includes(error) ? error : "invalid"}`)}</p>}
        <Button size="lg" type="submit" className="w-full" disabled={busy || pin.length !== 6 || !name.trim()}>
          <LogIn className="size-5" aria-hidden="true" />
          {t("join")}
        </Button>
      </form>
    );
  }

  if (gone || data?.kicked) {
    return (
      <section className="clay mx-auto max-w-md space-y-4 p-6 text-center">
        <p className="text-lg font-extrabold">{data?.kicked ? t("kicked") : t("gameGone")}</p>
        <Button size="lg" onClick={leave}>{t("joinAnother")}</Button>
      </section>
    );
  }

  if (!view) return <p className="clay mx-auto max-w-md p-6 text-center font-bold text-muted-foreground">{t("connecting")}</p>;

  const header = (
    <div className="flex items-center justify-between gap-3 text-sm font-extrabold">
      <span className="truncate">{view.me.name}</span>
      <span className="tabular-nums">{t("points", { n: view.me.score })}</span>
    </div>
  );

  if (view.phase === "lobby") {
    return (
      <section className="clay mx-auto max-w-md space-y-3 p-6 text-center" aria-live="polite">
        <p className="fx-pop text-5xl" aria-hidden="true">🎉</p>
        <h2 className="text-2xl font-black">{t("youreIn", { name: view.me.name })}</h2>
        <p className="text-muted-foreground">{t("waitStart", { title: f(view.title) })}</p>
        <p className="text-sm font-bold text-muted-foreground">{t("playersIn", { n: view.me.players })}</p>
      </section>
    );
  }

  if (view.phase === "question" && view.question) {
    const mine = view.question.answered ?? (sent?.index === view.index ? sent.choice : null);
    return (
      <section className="mx-auto max-w-xl space-y-4" aria-labelledby="live-q">
        {header}
        <div className="clay space-y-2 p-4 text-center">
          <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
            {t("questionOf", { n: view.index + 1, total: view.total })} · {t("secs", { s: secs })}
          </p>
          <p id="live-q" className="text-lg font-bold leading-snug">{f(view.question.prompt)}</p>
        </div>
        {mine === null ? (
          <div className="grid grid-cols-2 gap-3" role="group" aria-labelledby="live-q">
            {view.question.options.map((o, i) => (
              <button key={i} type="button" onClick={() => choose(i)} className={cn("clay-press flex min-h-28 flex-col items-center justify-center gap-2 rounded-[var(--radius)] p-3 text-center text-base font-extrabold shadow-clay-sm sm:min-h-32 sm:text-lg", OPTION_STYLE[i])}>
                <Shape i={i} className="size-8" />
                <span className="leading-tight">{f(o)}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className={cn("fx-pop grid min-h-48 place-items-center rounded-[var(--radius)] p-6 text-center shadow-clay-sm", OPTION_STYLE[mine])} role="status">
            <span>
              <Shape i={mine} className="mx-auto size-12" />
              <span className="mt-3 block text-xl font-black">{t("answerSent")}</span>
              <span className="mt-1 block text-sm font-bold opacity-90">{t("waitOthers")}</span>
            </span>
          </div>
        )}
      </section>
    );
  }

  if (view.phase === "reveal" && view.reveal) {
    const r = view.reveal;
    const right = r.choice === r.answer;
    return (
      <section className="mx-auto max-w-md space-y-4" aria-live="polite">
        {header}
        <div className={cn("fx-pop relative clay p-6 text-center", right ? "bg-emerald-50" : "bg-red-50")}>
          {right && <Confetti pieces={16} />}
          <span className={cn("mx-auto grid size-16 place-items-center rounded-full text-white", right ? "bg-success" : "bg-destructive")}>
            {right ? <Check className="size-9" aria-hidden="true" /> : <X className="size-9" aria-hidden="true" />}
          </span>
          <p className="mt-3 text-2xl font-black">{r.choice === null ? t("noAnswer") : right ? t("correct", { n: r.points }) : t("wrong")}</p>
          {!right && (
            <p className="mt-2 inline-flex items-center gap-2 font-bold">
              {t("rightWas")}
              <span className={cn("inline-flex items-center gap-1 rounded-full px-3 py-1", OPTION_STYLE[r.answer])}>
                <Shape i={r.answer} className="size-4" />
                {f(r.options[r.answer])}
              </span>
            </p>
          )}
          <p className="mt-3 text-sm font-bold text-muted-foreground">{t("place", { rank: view.me.rank, n: view.me.players })}</p>
        </div>
      </section>
    );
  }

  // Podium
  return (
    <section className="fx-rise relative clay mx-auto max-w-md space-y-4 p-6 text-center" aria-live="polite">
      {view.me.rank <= 3 && <Confetti />}
      <Trophy className={cn("mx-auto size-14", view.me.rank === 1 ? "text-amber-500" : view.me.rank <= 3 ? "text-slate-400" : "text-muted-foreground")} aria-hidden="true" />
      <h2 className="text-2xl font-black">{view.me.rank <= 3 ? t("podiumYou", { rank: view.me.rank }) : t("finalPlace", { rank: view.me.rank, n: view.me.players })}</h2>
      <p className="font-bold">{t("points", { n: view.me.score })}</p>
      <ol className="space-y-1 text-left">
        {view.podium?.map((p) => (
          <li key={p.name} className="flex justify-between rounded-[12px] bg-muted px-3 py-2 font-bold">
            <span>
              {p.rank}. {p.name}
            </span>
            <span className="tabular-nums">{p.score}</span>
          </li>
        ))}
      </ol>
      <Button size="lg" variant="secondary" onClick={leave}>{t("joinAnother")}</Button>
    </section>
  );
}
