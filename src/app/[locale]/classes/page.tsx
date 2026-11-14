import type { Metadata } from "next";
import { ArrowRight, GraduationCap, HeartHandshake, School, Users } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { headers } from "next/headers";
import { Link, redirect } from "@/i18n/navigation";
import { CreateClassForm, JoinClassForm, LeaveClassButton, ParentLinkCard } from "@/components/site/class-actions";
import { getParentLink, joinedClasses, ownClasses } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "classes" });
  return { title: t("title") };
}

/** Where an account keeps its classes (as a teacher), the classes it joined, and its parent link. */
export default async function ClassesPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ code?: string }> }) {
  const { locale } = await params;
  const { code } = await searchParams;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=${encodeURIComponent(`/classes${code ? `?code=${code}` : ""}`)}`, locale });
  const u = user!;
  const [t, own, joined, link, h] = await Promise.all([getTranslations("classes"), ownClasses(u.id), joinedClasses(u.id), getParentLink(u.id), headers()]);
  const origin = `${h.get("x-forwarded-proto") ?? "http"}://${h.get("host")}`;

  return (
    <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <header className="clay p-5 sm:p-8">
        <span className="grid size-14 place-items-center rounded-[18px] bg-primary text-primary-foreground shadow-clay-sm">
          <Users className="size-7" aria-hidden="true" />
        </span>
        <h1 className="mt-4 text-2xl font-black sm:text-4xl">{t("title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("intro")}</p>
      </header>

      <section aria-labelledby="join-title" className="clay space-y-4 p-5 sm:p-7">
        <h2 id="join-title" className="flex items-center gap-2 text-xl font-extrabold">
          <GraduationCap className="size-6 text-primary" aria-hidden="true" />
          {t("joinTitle")}
        </h2>
        <JoinClassForm initialCode={code?.slice(0, 12) ?? ""} />
        {joined.length > 0 && (
          <ul className="divide-y divide-border/70 border-t border-border/70">
            {joined.map((c) => (
              <li key={c.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <span>
                  <span className="block font-bold">{c.name}</span>
                  <span className="block text-sm text-muted-foreground">{t("teacherSees", { name: c.teacher })}</span>
                </span>
                <LeaveClassButton classId={c.id} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="parent-title" className="clay space-y-4 p-5 sm:p-7">
        <h2 id="parent-title" className="flex items-center gap-2 text-xl font-extrabold">
          <HeartHandshake className="size-6 text-primary" aria-hidden="true" />
          {t("parentTitle")}
        </h2>
        <p className="text-muted-foreground">{t("parentIntro")}</p>
        <ParentLinkCard url={link ? `${origin}/parent/${link.token}` : null} />
      </section>

      <section aria-labelledby="teach-title" className="clay space-y-4 p-5 sm:p-7">
        <h2 id="teach-title" className="flex items-center gap-2 text-xl font-extrabold">
          <School className="size-6 text-primary" aria-hidden="true" />
          {t("teachTitle")}
        </h2>
        <p className="text-muted-foreground">{t("teachIntro")}</p>
        {own.length > 0 && (
          <ul className="divide-y divide-border/70 overflow-hidden rounded-[var(--radius)] border border-border/70">
            {own.map((c) => (
              <li key={c.id}>
                <Link href={`/classes/${c.id}`} className="flex min-h-14 items-center gap-3 px-4 py-3 active:bg-muted sm:hover:bg-muted">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold">{c.name}</span>
                    <span className="block text-sm text-muted-foreground">
                      {t("pupils", { n: Number(c.members) })} · <span className="font-mono tracking-widest">{c.code}</span>
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        )}
        <CreateClassForm />
      </section>
    </div>
  );
}
