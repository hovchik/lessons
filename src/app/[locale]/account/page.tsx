import type { Metadata } from "next";
import { KeyRound, LogOut, ShieldCheck, Trash2 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { ChangePasswordForm, DeleteAccountForm, SignOutEverywhereForm } from "@/components/site/account-forms";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "account" });
  return { title: t("title"), robots: { index: false } };
}

/** The pupil's own account: a new password, signing out other devices, deleting the account. */
export default async function AccountPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: "/login?next=/account", locale });
  const t = await getTranslations("account");

  return (
    <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8">
      <header className="clay p-5 sm:p-8">
        <span className="grid size-14 place-items-center rounded-[18px] bg-primary text-primary-foreground shadow-clay-sm">
          <ShieldCheck className="size-7" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-2xl font-black sm:text-4xl">{t("title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("intro", { username: user!.username })}</p>
      </header>

      <section aria-labelledby="password-title" className="clay space-y-4 p-5 sm:p-7">
        <h2 id="password-title" className="flex items-center gap-2 text-xl font-extrabold">
          <KeyRound className="size-6 text-primary" aria-hidden="true" />
          {t("passwordTitle")}
        </h2>
        <p className="text-muted-foreground">{t("passwordIntro")}</p>
        <ChangePasswordForm />
      </section>

      <section aria-labelledby="signout-title" className="clay space-y-4 p-5 sm:p-7">
        <h2 id="signout-title" className="flex items-center gap-2 text-xl font-extrabold">
          <LogOut className="size-6 text-primary" aria-hidden="true" />
          {t("signoutTitle")}
        </h2>
        <p className="text-muted-foreground">{t("signoutIntro")}</p>
        <SignOutEverywhereForm />
      </section>

      <section aria-labelledby="delete-title" className="clay space-y-4 p-5 sm:p-7">
        <h2 id="delete-title" className="flex items-center gap-2 text-xl font-extrabold">
          <Trash2 className="size-6 text-destructive" aria-hidden="true" />
          {t("deleteTitle")}
        </h2>
        <p className="text-muted-foreground">{t("deleteIntro")}</p>
        <DeleteAccountForm />
      </section>
    </div>
  );
}
