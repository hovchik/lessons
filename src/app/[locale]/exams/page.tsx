import type { Metadata } from "next";
import { Award, ClipboardCheck, Flag } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ExamCard } from "@/components/site/exam-card";
import { cn, GRADES, pick } from "@/lib/utils";
import { getExams } from "@/server/queries";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "exam" });
  return { title: t("title"), description: t("intro") };
}

export default async function ExamsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const l = await getLocale();
  const exams = await getExams();
  const state = exams.filter((e) => e.exam.kind === "state");
  const trials = exams.filter((e) => e.exam.kind === "trial");
  const systems = [
    { key: "armenia", items: state.filter((e) => e.exam.system === "armenia") },
    { key: "russia", items: state.filter((e) => e.exam.system === "russia") },
  ] as const;

  return (
    <div className="space-y-10 sm:space-y-14">
      <header className="clay relative overflow-hidden px-5 py-8 sm:px-12 sm:py-12">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-bold text-primary">
            <Award className="size-4" aria-hidden="true" />
            {t("exam.badge")}
          </p>
          <h1 className="mt-4 text-3xl font-black text-balance sm:text-5xl">{t("exam.title")}</h1>
          <p className="mt-4 text-muted-foreground sm:text-lg">{t("exam.intro")}</p>
        </div>
      </header>

      {systems.map(({ key, items }) => {
        const grades = [...new Set(items.map((e) => e.exam.grade))].sort((a, b) => a - b);
        return (
          <section key={key} aria-labelledby={`state-${key}`} className="space-y-5">
            <div>
              <h2 id={`state-${key}`} className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
                <Flag className="size-6 text-primary" aria-hidden="true" />
                {t(`exam.system.${key}`)}
              </h2>
              <p className="mt-1 text-muted-foreground">{t(`exam.systemText.${key}`)}</p>
            </div>
            {grades.map((g) => (
              <div key={g} className="space-y-3">
                <h3 className="text-lg font-extrabold">{t(`exam.gradeHeading.${key}`, { grade: g })}</h3>
                <ul className="grid gap-4 stagger sm:grid-cols-2 lg:grid-cols-3">
                  {items.filter((e) => e.exam.grade === g).map((e) => (
                    <li key={e.exam.id}><ExamCard item={e} /></li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        );
      })}

      <section aria-labelledby="trials-title" className="space-y-5">
        <div>
          <h2 id="trials-title" className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
            <ClipboardCheck className="size-6 text-primary" aria-hidden="true" />
            {t("exam.trialsTitle")}
          </h2>
          <p className="mt-1 text-muted-foreground">{t("exam.trialsText")}</p>
        </div>
        <ol className="space-y-4">
          {GRADES.map((g) => {
            const mine = trials.filter((e) => e.exam.grade === g);
            if (mine.length === 0) return null;
            return (
              <li key={g} className="clay p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-extrabold">{t("grade.title", { grade: g })}</h3>
                  <Link href={`/grade/${g}`} className="min-h-11 inline-flex items-center text-sm font-bold text-primary hover:underline">{t("exam.toGrade")}</Link>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {mine.map((e) => (
                    <li key={e.exam.id} className={cn(e.subject && `subject-${e.subject.color}`)}>
                      <Link
                        href={`/exams/${e.exam.id}`}
                        className="clay-sm clay-press inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold"
                        style={{ color: "var(--s-text)" }}
                      >
                        <span className="size-2.5 rounded-full" style={{ background: "var(--s)" }} aria-hidden="true" />
                        {e.subject ? pick(e.subject.name, l) : pick(e.exam.title, l)}
                        <span className="text-xs font-semibold text-muted-foreground">· {t("exam.questionsCount", { n: e.exam.questionCount })}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

