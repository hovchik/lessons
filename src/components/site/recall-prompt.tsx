"use client";

import { BookOpenCheck, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { Button, buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * "Close the book": before the quiz, the lesson text is hidden and the pupil
 * writes down what they remember, then compares with what the lesson set out
 * to teach. Free recall is one of the strongest ways to make a lesson stick.
 * Nothing is saved; the notes are for the pupil.
 */
export function RecallPrompt({ bodyId, objectives, hasQuiz }: { bodyId: string; objectives: string[]; hasQuiz: boolean }) {
  const t = useTranslations("recall");
  const [stage, setStage] = useState<"idle" | "writing" | "compare">("idle");
  const [notes, setNotes] = useState("");
  const [ticked, setTicked] = useState<Record<number, boolean>>({});
  const boxId = useId();
  const textRef = useRef<HTMLTextAreaElement>(null);

  // While the pupil writes, the lesson text is blurred and cannot be read or focused.
  useEffect(() => {
    const body = document.getElementById(bodyId);
    if (!body) return;
    const hide = stage === "writing";
    body.toggleAttribute("inert", hide);
    body.classList.toggle("recall-hidden", hide);
    return () => {
      body.removeAttribute("inert");
      body.classList.remove("recall-hidden");
    };
  }, [stage, bodyId]);

  useEffect(() => {
    if (stage === "writing") textRef.current?.focus();
  }, [stage]);

  const count = Object.values(ticked).filter(Boolean).length;

  return (
    <section aria-labelledby={`${boxId}-title`} className="clay-sm space-y-4 p-4 sm:p-6" style={{ background: "var(--s-soft)" }}>
      <div>
        <h2 id={`${boxId}-title`} className="flex items-center gap-2 text-lg font-extrabold" style={{ color: "var(--s-text)" }}>
          <EyeOff className="size-5" aria-hidden="true" />
          {t("title")}
        </h2>
        <p className="mt-1 text-sm">{t("intro")}</p>
      </div>

      {stage === "idle" && (
        <Button size="sm" onClick={() => setStage("writing")}>
          {t("start")}
        </Button>
      )}

      {stage !== "idle" && (
        <div className="space-y-2">
          <label htmlFor={`${boxId}-notes`} className="text-sm font-bold">
            {t("label")}
          </label>
          <textarea
            id={`${boxId}-notes`}
            ref={textRef}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            readOnly={stage === "compare"}
            rows={4}
            maxLength={2000}
            placeholder={t("placeholder")}
            className="block w-full rounded-[var(--radius)] border border-border bg-card p-3 text-base leading-relaxed shadow-inner outline-none focus:ring-3 focus:ring-primary"
          />
        </div>
      )}

      {stage === "writing" && (
        <Button size="sm" onClick={() => setStage("compare")}>
          <BookOpenCheck className="size-4" aria-hidden="true" />
          {t("compare")}
        </Button>
      )}

      {stage === "compare" && (
        <div className="space-y-3">
          {objectives.length > 0 ? (
            <fieldset className="space-y-2">
              <legend className="text-sm font-bold">{t("tick")}</legend>
              {objectives.map((o, i) => (
                <label key={i} className={cn("flex min-h-11 cursor-pointer items-start gap-3 rounded-xl bg-card p-3 text-sm shadow-clay-sm", ticked[i] && "ring-2 ring-success")}>
                  <input type="checkbox" className="mt-0.5 size-5 shrink-0 accent-[var(--color-success)]" checked={!!ticked[i]} onChange={(e) => setTicked((s) => ({ ...s, [i]: e.target.checked }))} />
                  <span>{o}</span>
                </label>
              ))}
            </fieldset>
          ) : (
            <p className="text-sm">{t("noObjectives")}</p>
          )}
          <p role="status" className="text-sm font-bold">
            {objectives.length > 0 ? t("result", { n: count, total: objectives.length }) : null} {t("after")}
          </p>
          {hasQuiz && (
            <a href="#quiz" className={buttonClasses({ size: "sm", variant: "secondary" })}>
              {t("toQuiz")}
            </a>
          )}
        </div>
      )}
    </section>
  );
}
