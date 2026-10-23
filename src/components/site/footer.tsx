import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations();
  return (
    <footer className="mt-12 border-t border-border/60 py-8 text-sm text-muted-foreground sm:mt-16 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{t("footer.madeFor")}</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
          <Link href="/subjects" className="inline-flex min-h-11 items-center hover:text-primary">{t("nav.subjects")}</Link>
          <NextLink href="/admin" className="inline-flex min-h-11 items-center hover:text-primary">{t("footer.admin")}</NextLink>
        </nav>
      </div>
    </footer>
  );
}
