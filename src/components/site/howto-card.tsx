import { Clock, Hand, ShieldCheck, Users } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cn, pick } from "@/lib/utils";
import type { HowtoCard as Card } from "@/server/howto";

const SAFETY = {
  adult: { icon: Users, cls: "bg-red-100 text-red-800" },
  ask: { icon: Hand, cls: "bg-orange-100 text-orange-800" },
  care: { icon: ShieldCheck, cls: "bg-emerald-100 text-emerald-800" },
} as const;

/** One how-to lesson as a tappable card: emoji, title, grade, time and how much an adult is needed. */
export async function HowtoCard({ card, showGrade = true }: { card: Card; showGrade?: boolean }) {
  const [t, l] = await Promise.all([getTranslations("howto"), getLocale()]);
  const s = card.safety ? SAFETY[card.safety] : null;
  return (
    <li className="subject-sienna">
      <Link href={`/howto/${card.grade}/${card.slug}`} className="clay clay-press flex h-full items-start gap-3 p-4 sm:p-5">
        <span className="fx-chip grid size-14 shrink-0 place-items-center rounded-[18px] text-3xl shadow-clay-sm" style={{ background: "var(--s-soft)" }} aria-hidden="true">
          {card.emoji}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-extrabold leading-snug text-balance">{pick(card.title, l)}</span>
          <span className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs font-bold text-muted-foreground">
            {showGrade && <span style={{ color: "var(--s-text)" }}>{t("grade", { grade: card.grade })}</span>}
            {card.minutes ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {t("minutes", { n: card.minutes })}
              </span>
            ) : null}
            {s && card.safety ? (
              <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5", s.cls)}>
                <s.icon className="size-3.5" aria-hidden="true" />
                {t(`safety.${card.safety}`)}
              </span>
            ) : null}
          </span>
        </span>
      </Link>
    </li>
  );
}
