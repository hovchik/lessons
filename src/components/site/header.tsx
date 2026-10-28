import { GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCurrentUser } from "@/server/user-auth";
import { LanguageSwitcher } from "./language-switcher";
import { ReviewNavLink, UserMenu } from "./user-menu";

export async function SiteHeader() {
  const [t, user] = await Promise.all([getTranslations(), getCurrentUser()]);
  return (
    <header className="pt-safe sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-3 sm:px-6">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2 rounded-xl pr-2 text-base md:max-lg:shrink-0 font-extrabold sm:gap-2.5 sm:text-lg">
          <span className="grid size-9 shrink-0 place-items-center rounded-[12px] bg-primary text-primary-foreground shadow-clay-sm sm:size-10 sm:rounded-[14px]">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          {/* Between md and lg the nav needs the room; the name stays for screen readers. */}
          <span className="truncate md:max-lg:sr-only">{t("app.name")}</span>
        </Link>
        <nav aria-label={t("nav.menu")} className="hidden items-center gap-0.5 md:flex lg:gap-1">
          <Link href="/" className="h-11 rounded-xl px-3 text-sm font-bold leading-[44px] hover:bg-muted lg:px-4">
            {t("nav.grades")}
          </Link>
          <Link href="/subjects" className="h-11 rounded-xl px-3 text-sm font-bold leading-[44px] hover:bg-muted lg:px-4">
            {t("nav.subjects")}
          </Link>
          <Link href="/exams" className="h-11 rounded-xl px-3 text-sm font-bold leading-[44px] hover:bg-muted lg:px-4">
            {t("nav.exams")}
          </Link>
          <Link href="/play" className="h-11 rounded-xl px-3 text-sm font-bold leading-[44px] hover:bg-muted lg:px-4">
            {t("nav.play")}
          </Link>
          <ReviewNavLink />
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <UserMenu user={user} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
