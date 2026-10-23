import { GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

export async function SiteHeader() {
  const t = await getTranslations();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-xl font-extrabold text-lg">
          <span className="grid size-10 place-items-center rounded-[14px] bg-primary text-primary-foreground shadow-clay-sm">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span>{t("app.name")}</span>
        </Link>
        <nav aria-label={t("nav.menu")} className="hidden items-center gap-1 sm:flex">
          <Link href="/" className="h-11 rounded-xl px-4 text-sm font-bold leading-[44px] hover:bg-muted">
            {t("nav.grades")}
          </Link>
          <Link href="/subjects" className="h-11 rounded-xl px-4 text-sm font-bold leading-[44px] hover:bg-muted">
            {t("nav.subjects")}
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
