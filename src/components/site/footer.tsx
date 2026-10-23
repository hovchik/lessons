import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations();
  return (
    <footer className="mt-16 border-t border-border/60 py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{t("footer.madeFor")}</p>
        <nav className="flex gap-4 font-semibold">
          <Link href="/subjects" className="hover:text-primary">{t("nav.subjects")}</Link>
          <NextLink href="/admin" className="hover:text-primary">{t("footer.admin")}</NextLink>
        </nav>
      </div>
    </footer>
  );
}
