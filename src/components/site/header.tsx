import { GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getStreakCached } from "@/server/motivation";
import { getReviewSummaryCached } from "@/server/review";
import { getCurrentUser } from "@/server/user-auth";
import { LanguageSwitcher } from "./language-switcher";
import { UserMenu } from "./user-menu";

export async function SiteHeader() {
  const [t, user] = await Promise.all([getTranslations(), getCurrentUser()]);
  const [review, streak] = user ? await Promise.all([getReviewSummaryCached(user.id), getStreakCached(user.id)]) : [null, null];
  return (
    <header className="pt-safe sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-3 sm:px-6">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2 rounded-xl pr-2 text-base font-extrabold sm:gap-2.5 sm:text-lg">
          <span className="grid size-9 shrink-0 place-items-center rounded-[12px] bg-primary text-primary-foreground shadow-clay-sm sm:size-10 sm:rounded-[14px]">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="truncate">{t("app.name")}</span>
        </Link>
        <nav aria-label={t("nav.menu")} className="hidden items-center gap-1 sm:flex">
          <Link href="/" className="h-11 rounded-xl px-4 text-sm font-bold leading-[44px] hover:bg-muted">
            {t("nav.grades")}
          </Link>
          <Link href="/subjects" className="h-11 rounded-xl px-4 text-sm font-bold leading-[44px] hover:bg-muted">
            {t("nav.subjects")}
          </Link>
          <Link href="/exams" className="h-11 rounded-xl px-4 text-sm font-bold leading-[44px] hover:bg-muted">
            {t("nav.exams")}
          </Link>
          {review && review.cards > 0 && (
            <Link href="/review" className="inline-flex h-11 items-center gap-1.5 rounded-xl px-4 text-sm font-bold hover:bg-muted">
              {t("nav.review")}
              {review.ready > 0 && (
                <span className="grid min-w-6 place-items-center rounded-full bg-primary px-1.5 text-xs font-black leading-6 text-primary-foreground tabular-nums" aria-label={t("review.ready", { n: review.ready })}>
                  {review.ready > 99 ? "99+" : review.ready}
                </span>
              )}
            </Link>
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <UserMenu user={user} streak={streak ? { days: streak.days, todayDone: streak.todayDone } : null} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
