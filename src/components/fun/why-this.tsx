"use client";

import { Check, Lightbulb, Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const MAX = 280;

/**
 * "Why learn this?" under a unit: one line tying it to everyday life, and a
 * box for the pupil's own sentence about how it could help them. Writing it
 * yourself is what makes it stick, so the line is a starting point, not the answer.
 */
export function WhyThis({ unitId, line, initial, signedIn }: { unitId: string; line: string; initial: string | null; signedIn: boolean }) {
  const t = useTranslations("why");
  const id = useId();
  const [saved, setSaved] = useState(initial ?? "");
  const [draft, setDraft] = useState(initial ?? "");
  const [editing, setEditing] = useState(!initial);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<"saved" | "error" | null>(null);

  const save = async () => {
    if (busy) return;
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch("/api/reflection", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ unitId, text: draft }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const text = draft.replace(/\s+/g, " ").trim();
      setSaved(text);
      setDraft(text);
      setEditing(!text);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
    setBusy(false);
  };

  return (
    <details className="group mt-3 rounded-[var(--radius)] border border-border/70 bg-card/60 open:bg-[var(--s-soft)]/40">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-3 text-sm font-extrabold [&::-webkit-details-marker]:hidden" style={{ color: "var(--s-text)" }}>
        <Lightbulb className="size-4 shrink-0" aria-hidden="true" />
        <span className="flex-1">{t("title")}</span>
        {saved && <Check className="size-4 text-success" aria-label={t("answered")} />}
        <span className="text-xs text-muted-foreground transition-transform group-open:rotate-90" aria-hidden="true">›</span>
      </summary>
      <div className="space-y-3 px-3 pb-3">
        <p className="text-sm leading-relaxed">{line}</p>
        {!signedIn ? (
          <p className="text-sm text-muted-foreground">
            <Link href="/login" className="font-bold text-primary hover:underline">{t("signIn")}</Link> {t("signInWhy")}
          </p>
        ) : !editing ? (
          <div className="flex items-start gap-2 rounded-[12px] bg-card p-3 shadow-clay-sm">
            <p className="flex-1 text-sm">
              <span className="block text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("yours")}</span>
              {saved}
            </p>
            <Button variant="ghost" size="sm" onClick={() => setEditing(true)} aria-label={t("edit")}>
              <Pencil className="size-4" aria-hidden="true" />
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-bold">{t("prompt")}</label>
            <textarea
              id={id}
              rows={2}
              maxLength={MAX}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full resize-y rounded-[12px] border border-border bg-card p-3 text-base sm:text-sm"
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" onClick={save} disabled={busy || draft.trim() === saved}>
                {t("save")}
              </Button>
              <span className="text-xs tabular-nums text-muted-foreground">{draft.length}/{MAX}</span>
            </div>
          </div>
        )}
        {status && (
          <p role="status" className={status === "saved" ? "fx-in text-sm font-bold text-success" : "fx-in text-sm font-bold text-destructive"}>
            {status === "saved" ? (saved ? t("saved") : t("removed")) : t("error")}
          </p>
        )}
      </div>
    </details>
  );
}
