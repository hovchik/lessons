"use client";

import { HelpCircle, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

/** 0 guessing, 2 sure: the values stored with an answer (see answer_events.confidence). */
export type Confidence = 0 | 2;

/**
 * Checks an answer with one tap that also says how sure the pupil is. Saying it
 * first trains self-assessment, and a right guess comes back for review sooner.
 */
export function ConfidenceCheck({ disabled, onCheck, size = "sm", label }: { disabled?: boolean; onCheck: (c: Confidence) => void; size?: "sm" | "lg"; label?: string }) {
  const t = useTranslations("lesson");
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <span className="text-sm font-bold text-muted-foreground">{label ?? t("howSure")}</span>
      <div className="grid grid-cols-2 gap-2 sm:flex">
        <Button size={size} disabled={disabled} onClick={() => onCheck(2)}>
          <ShieldCheck className="size-5" aria-hidden="true" />
          {t("sure")}
        </Button>
        <Button size={size} variant="secondary" disabled={disabled} onClick={() => onCheck(0)}>
          <HelpCircle className="size-5" aria-hidden="true" />
          {t("guessing")}
        </Button>
      </div>
    </div>
  );
}
