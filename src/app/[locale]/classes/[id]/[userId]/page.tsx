import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link, redirect } from "@/i18n/navigation";
import { RemovePupilButton } from "@/components/site/class-actions";
import { PupilReport } from "@/components/site/pupil-report";
import { canSeePupil, ownedClass, pupilName } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false } };

/** One pupil of a class, as the class's teacher sees them. */
export default async function ClassPupilPage({ params }: { params: Promise<{ locale: string; id: string; userId: string }> }) {
  const { locale, id, userId } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=/classes/${id}/${userId}`, locale });
  const [c, allowed] = await Promise.all([ownedClass(user!.id, id), canSeePupil(user!.id, id, userId)]);
  if (!c || !allowed) notFound();
  const [t, tg, pupil] = await Promise.all([getTranslations("classes"), getTranslations("grade"), pupilName(userId)]);
  if (!pupil) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/classes" className="inline-flex min-h-11 items-center hover:text-primary">{t("title")}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/classes/${c.id}`} className="inline-flex min-h-11 items-center hover:text-primary">{c.name}</Link></li>
        </ol>
      </nav>
      <header className="clay flex flex-wrap items-center justify-between gap-3 p-5 sm:p-8">
        <div>
          <h1 className="text-2xl font-black sm:text-4xl">{pupil.displayName}</h1>
          <p className="mt-1 text-muted-foreground">
            @{pupil.username}
            {pupil.grade ? ` · ${tg("title", { grade: pupil.grade })}` : ""}
          </p>
        </div>
        <RemovePupilButton classId={c.id} userId={userId} />
      </header>
      <PupilReport userId={userId} locale={locale} />
    </div>
  );
}
