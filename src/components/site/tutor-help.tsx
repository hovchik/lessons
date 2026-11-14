"use client";

import { Loader2, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import type { QuizResponse } from "@/lib/questions";

type Props = {
  itemId: string;
  /** "hint" during a second try (up to two, each a bigger step), "why" once the answer is shown. */
  mode: "hint" | "why";
  /** The pupil's answer as shown (their first try for a hint). */
  response: QuizResponse | null | undefined;
};

/**
 * The tutor's help for one question. Shown only to signed-in pupils when the
 * tutor is switched on (the page decides). A failed call says so in one line
 * and leaves the lesson passage as the help.
 */
export function TutorHelp({ itemId, mode, response }: Props) {
  const t = useTranslations("tutor");
  const locale = useLocale();
  const [texts, setTexts] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<"busy" | "failed" | null>(null);

  const max = mode === "hint" ? 2 : 1;
  const ask = async () => {
    if (busy || texts.length >= max) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ itemId, mode, level: texts.length + 1, locale, response: response ?? null }),
      });
      const data = (await res.json().catch(() => ({}))) as { text?: string };
      if (res.ok && data.text) setTexts((x) => [...x, data.text!]);
      else setError(res.status === 429 ? "busy" : "failed");
    } catch {
      setError("failed");
    }
    setBusy(false);
  };

  const label = mode === "why" ? t("why") : texts.length === 0 ? t("hint") : t("moreHint");
  return (
    <div className="space-y-2">
      {texts.map((text, i) => (
        <p key={i} role="status" className="fx-in flex gap-2 rounded-[var(--radius)] bg-primary/10 p-3 text-sm leading-relaxed">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            <span className="sr-only">{t("from")}: </span>
            {text}
          </span>
        </p>
      ))}
      {texts.length < max && (
        <button
          type="button"
          onClick={ask}
          disabled={busy}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted disabled:opacity-60"
        >
          {busy ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Sparkles className="size-4" aria-hidden="true" />}
          {busy ? t("thinking") : label}
        </button>
      )}
      {error && <p className="text-sm font-semibold text-muted-foreground">{error === "busy" ? t("busy") : t("failed")}</p>}
    </div>
  );
}
