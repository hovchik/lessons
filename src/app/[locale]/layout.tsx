import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { LiveUserProvider } from "@/components/site/live-user";
import { MobileNav } from "@/components/site/mobile-nav";
import { NavProgress } from "@/components/site/nav-progress";
import { getLiveUser } from "@/server/live";
import { getCurrentUser } from "@/server/user-auth";
import "../globals.css";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "app" });
  return {
    title: { default: t("name"), template: `%s · ${t("name")}` },
    description: t("tagline"),
    applicationName: t("name"),
    appleWebApp: { capable: true, title: t("name"), statusBarStyle: "default" },
    icons: { icon: "/icons/icon-192.png", apple: "/icons/apple-touch-icon.png" },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eef2ff",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const [t, user] = await Promise.all([getTranslations({ locale, namespace: "app" }), getCurrentUser()]);
  const live = user ? await getLiveUser(user.id) : null;

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout; next/font cannot download fonts in offline builds */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Armenian:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <NavProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {t("skipToContent")}
        </a>
        <NextIntlClientProvider>
          <LiveUserProvider initial={live}>
            <SiteHeader />
            <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-10">
              {children}
            </main>
            <SiteFooter />
            {/* Space for the fixed bottom tab bar on phones. */}
            <div className="pb-safe h-16 md:hidden" aria-hidden="true" />
            <MobileNav />
          </LiveUserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
