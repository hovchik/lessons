import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { redirect } from "@/i18n/navigation";
import { AuthForm } from "@/components/site/auth-form";
import { accountsConfigured, getCurrentUser } from "@/server/user-auth";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "auth" });
  return { title: t("loginTitle") };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (await getCurrentUser()) redirect({ href: "/progress", locale });
  return (
    <div className="py-4 sm:py-10">
      <Suspense>
        <AuthForm mode="login" configured={accountsConfigured()} />
      </Suspense>
    </div>
  );
}
