"use client";

import { Hand, ShieldCheck, Users } from "lucide-react";
import { ArtFrame, ArtText } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { L, t } from "../labels";

/**
 * The safety card of a how-to lesson. `level` says how much an adult has to be involved,
 * chosen for the pupil's age; the body lists the rules in the lesson's own language:
 *
 *   ```sim
 *   safety level=adult
 *   - Fire is lit only by an adult.
 *   - Keep a bucket of water next to the fire.
 *   ```
 */
export const SAFETY_LEVELS = ["adult", "ask", "care"] as const;
type Level = (typeof SAFETY_LEVELS)[number];

const LEVEL: Record<Level, { icon: typeof Users; title: ReturnType<typeof t>; tag: ReturnType<typeof t> }> = {
  adult: {
    icon: Users,
    title: t("Safety first: do this only together with an adult", "Անվտանգությունը՝ առաջին տեղում․ արա՛ սա միայն մեծահասակի հետ", "Безопасность прежде всего: делай это только вместе со взрослым"),
    tag: t("An adult stays with you the whole time", "Մեծահասակն ամբողջ ժամանակ քեզ հետ է", "Взрослый всё время рядом с тобой"),
  },
  ask: {
    icon: Hand,
    title: t("Safety first: ask an adult before you start", "Անվտանգությունը՝ առաջին տեղում․ սկսելուց առաջ հարցրու մեծահասակին", "Безопасность прежде всего: спроси взрослого, прежде чем начать"),
    tag: t("An adult knows what you are doing and is close by", "Մեծահասակը գիտի, թե ինչ ես անում, և մոտակայքում է", "Взрослый знает, что ты делаешь, и находится рядом"),
  },
  care: {
    icon: ShieldCheck,
    title: t("Safety first", "Անվտանգությունը՝ առաջին տեղում", "Безопасность прежде всего"),
    tag: t("Safe to do on your own if you follow the rules", "Կարող ես անել ինքնուրույն, եթե պահես կանոնները", "Можно делать самостоятельно, если соблюдать правила"),
  },
};

export default function Safety({ spec, lang }: SimProps) {
  const level: Level = (SAFETY_LEVELS as readonly string[]).includes(spec.opts.level ?? "") ? (spec.opts.level as Level) : "care";
  const { icon: Icon, title, tag } = LEVEL[level];
  return (
    <ArtFrame kind="safety" title={L(title, lang)} className="howto-safety">
      <p className={`howto-safety-tag is-${level}`}>
        <Icon className="size-4 shrink-0" aria-hidden="true" />
        {L(tag, lang)}
      </p>
      {spec.body ? <ArtText className="howto-safety-rules">{spec.body}</ArtText> : null}
    </ArtFrame>
  );
}
