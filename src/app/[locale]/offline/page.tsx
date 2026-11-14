import type { Metadata } from "next";
import { WifiOff } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SavedPages } from "@/components/site/save-offline";

export const dynamic = "force-static";
export const metadata: Metadata = { robots: { index: false } };
export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

/** Shown by the service worker (public/sw.js) for a page that was never kept, while offline. */
export default async function OfflinePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("offline");
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="clay p-6 text-center sm:p-10">
        <span className="mx-auto grid size-16 place-items-center rounded-[20px] bg-muted text-primary">
          <WifiOff className="size-8" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-2xl font-black sm:text-3xl">{t("title")}</h1>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">{t("text")}</p>
      </header>
      <SavedPages locale={locale} />
    </div>
  );
}
