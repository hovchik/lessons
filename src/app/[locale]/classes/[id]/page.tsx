import type { Metadata } from "next";
import { ArrowRight, CircleAlert, Users } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Link, redirect } from "@/i18n/navigation";
import { CopyButton, DeleteClassButton } from "@/components/site/class-actions";
import { localShown } from "@/lib/questions";
import { cn, pick } from "@/lib/utils";
import { classReport, ownedClass } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false } };

/** The teacher's view of one class: who learned this week, and what many of them got wrong. */
export default async function ClassPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const user = await getCurrentUser();
  if (!user) redirect({ href: `/login?next=/classes/${id}`, locale });
  const c = await ownedClass(user!.id, id);
  if (!c) notFound();
  const [t, tg, l, report, h] = await Promise.all([getTranslations("classes"), getTranslations("grade"), getLocale(), classReport(c.id), headers()]);
  const joinUrl = `${h.get("x-forwarded-proto") ?? "http"}://${h.get("host")}/classes?code=${c.code}`;
  const dateFmt = new Intl.DateTimeFormat(l, { day: "numeric", month: "short" });
  const seen = (s: string | null) => (s ? dateFmt.format(new Date(s.includes("T") ? s : `${s.replace(" ", "T")}Z`)) : "–");
  const pct = (x: number | null) => (x === null ? "–" : `${Math.round(x * 100)}%`);

  return (
    <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <Link href="/classes" className="inline-flex min-h-11 items-center hover:text-primary">{t("title")}</Link>
      </nav>
      <header className="clay flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h1 className="text-2xl font-black sm:text-4xl">{c.name}</h1>
          <p className="mt-1 text-muted-foreground">{t("pupils", { n: report.pupils.length })}</p>
        </div>
        <div className="rounded-[var(--radius)] bg-muted p-4 text-center">
          <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">{t("codeLabel")}</p>
          <p className="font-mono text-3xl font-black tracking-[0.25em] sm:text-4xl">{c.code}</p>
          <CopyButton text={joinUrl} label={t("copyJoinLink")} />
        </div>
      </header>

      {report.pupils.length === 0 ? (
        <section className="clay p-6 text-center sm:p-10">
          <Users className="mx-auto size-10 text-primary" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-extrabold">{t("emptyTitle")}</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">{t("emptyText", { code: c.code })}</p>
        </section>
      ) : (
        <>
          <section aria-labelledby="pupils-title" className="space-y-3">
            <h2 id="pupils-title" className="text-xl font-extrabold">{t("thisWeek")}</h2>
            <div className="clay overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-border/70 text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-4 py-3">{t("colPupil")}</th>
                    <th scope="col" className="px-3 py-3 text-right">{t("colDays")}</th>
                    <th scope="col" className="px-3 py-3 text-right">{t("colAnswers")}</th>
                    <th scope="col" className="px-3 py-3 text-right">{t("colRight")}</th>
                    <th scope="col" className="px-3 py-3 text-right">{t("colLessons")}</th>
                    <th scope="col" className="px-3 py-3 text-right">{t("colReview")}</th>
                    <th scope="col" className="px-3 py-3 text-right">{t("colSeen")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70">
                  {report.pupils.map((p) => (
                    <tr key={p.userId} className={cn(p.activeDays === 0 && "bg-amber-50/60")}>
                      <th scope="row" className="px-4 py-2 font-bold">
                        <Link href={`/classes/${c.id}/${p.userId}`} className="inline-flex min-h-11 items-center gap-1 text-primary hover:underline">
                          {p.displayName}
                        </Link>
                        <span className="block text-xs font-semibold text-muted-foreground">
                          @{p.username}
                          {p.grade ? ` · ${tg("title", { grade: p.grade })}` : ""}
                          {p.streak > 1 ? ` · ${t("streakShort", { n: p.streak })}` : ""}
                        </span>
                      </th>
                      <td className="px-3 py-2 text-right tabular-nums">{p.activeDays}/7</td>
                      <td className="px-3 py-2 text-right tabular-nums">{p.answers7}</td>
                      <td className={cn("px-3 py-2 text-right font-bold tabular-nums", p.accuracy7 !== null && p.accuracy7 < 0.6 && "text-destructive")}>{pct(p.accuracy7)}</td>
                      <td className="px-3 py-2 text-right tabular-nums">
                        {p.lessonsDone7} <span className="text-muted-foreground">/ {p.lessonsDone}</span>
                      </td>
                      <td className="px-3 py-2 text-right tabular-nums">{p.due}</td>
                      <td className="px-3 py-2 text-right tabular-nums text-muted-foreground">{seen(p.lastSeenAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs font-semibold text-muted-foreground">{t("tableNote")}</p>
          </section>

          <section aria-labelledby="missed-title" className="space-y-3">
            <h2 id="missed-title" className="flex items-center gap-2 text-xl font-extrabold">
              <CircleAlert className="size-6 text-destructive" aria-hidden="true" />
              {t("missedTitle")}
            </h2>
            {report.missed.length === 0 ? (
              <p className="clay p-5 text-muted-foreground">{t("missedNone")}</p>
            ) : (
              <ol className="clay divide-y divide-border/70 overflow-hidden">
                {report.missed.map(({ item, pupils, wrong, answers }) => {
                  const shown = localShown(item.shown, (x) => pick(x, l));
                  return (
                    <li key={item.itemId} className="flex items-start gap-3 px-4 py-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-red-50 text-sm font-black tabular-nums text-destructive" title={t("missedBy", { n: pupils })}>
                        {pupils}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold leading-snug">{shown.prompt}</span>
                        <span className="mt-0.5 block text-xs font-semibold text-muted-foreground">
                          {t("missedLine", { n: pupils, wrong, answers })}
                          {" · "}
                          {item.subjectName ? `${pick(item.subjectName, l)} · ` : ""}
                          {pick(item.refTitle, l)}
                        </span>
                      </span>
                      {item.href && (
                        <Link href={item.href} aria-label={pick(item.refTitle, l)} className="grid size-11 shrink-0 place-items-center rounded-xl text-primary hover:bg-muted">
                          <ArrowRight className="size-5" aria-hidden="true" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            )}
          </section>
        </>
      )}

      <div className="flex justify-end">
        <DeleteClassButton classId={c.id} />
      </div>
    </div>
  );
}
