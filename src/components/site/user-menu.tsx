"use client";

import { Flame, LogOut, Trophy, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { notifyChanged } from "@/lib/live";
import { cn } from "@/lib/utils";
import { useLiveUser } from "./live-user";

type Props = { user: { displayName: string } | null; className?: string };

/** Header link to Daily Review with the number of questions ready; follows answers live. */
export function ReviewNavLink() {
  const t = useTranslations();
  const review = useLiveUser()?.review;
  if (!review || review.cards === 0) return null;
  return (
    <Link href="/review" className="inline-flex h-11 items-center gap-1.5 rounded-xl px-4 text-sm font-bold hover:bg-muted">
      {t("nav.review")}
      {review.ready > 0 && (
        <span className="grid min-w-6 place-items-center rounded-full bg-primary px-1.5 text-xs font-black leading-6 text-primary-foreground tabular-nums" aria-label={t("review.ready", { n: review.ready })}>
          {review.ready > 99 ? "99+" : review.ready}
        </span>
      )}
    </Link>
  );
}

/** Header widget: "Log in" for guests, name → progress page plus log-out for pupils, with the streak once there is one. */
export function UserMenu({ user, className }: Props) {
  const t = useTranslations("nav");
  const tm = useTranslations("motivation");
  const router = useRouter();
  const streak = useLiveUser()?.streak;
  if (!user) {
    return (
      <Link href="/login" className={cn("clay-sm clay-press inline-flex h-11 items-center gap-2 px-3 text-sm font-bold", className)}>
        <UserRound className="size-4 text-primary" aria-hidden="true" />
        <span className="hidden sm:inline">{t("login")}</span>
      </Link>
    );
  }
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Link href="/progress" className="clay-sm clay-press inline-flex h-11 max-w-[32vw] items-center gap-2 px-3 text-sm font-bold sm:max-w-48" title={t("progress")}>
        {streak && streak.days > 0 ? (
          <span className={cn("inline-flex shrink-0 items-center gap-0.5 font-black tabular-nums", streak.todayDone ? "text-orange-600" : "text-muted-foreground")} title={tm("streak", { n: streak.days })}>
            <Flame className="size-4" aria-hidden="true" />
            <span aria-hidden="true">{streak.days}</span>
            <span className="sr-only">{tm("streak", { n: streak.days })}</span>
          </span>
        ) : (
          <Trophy className="size-4 shrink-0 text-accent" aria-hidden="true" />
        )}
        <span className="truncate">{user.displayName}</span>
      </Link>
      <button
        type="button"
        aria-label={t("logout")}
        title={t("logout")}
        onClick={async () => {
          await fetch("/api/auth/logout", { method: "POST" });
          router.push("/");
          notifyChanged();
        }}
        className="hidden size-11 place-items-center rounded-xl text-muted-foreground hover:bg-muted sm:grid"
      >
        <LogOut className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
