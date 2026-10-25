import type { Metadata } from "next";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { CourseCard } from "@/components/site/course-card";
import { GradePicker } from "@/components/site/grade-picker";
import { buttonClasses } from "@/components/ui/button";
import { pick } from "@/lib/utils";
import { getCourses, getExams } from "@/server/queries";

type Params = Promise<{ locale: string; grade: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, grade } = await params;
  const t = await getTranslations({ locale, namespace: "grade" });
  return { title: t("title", { grade: Number(grade) }) };
}

export default async function GradePage({ params }: { params: Params }) {
  const { locale, grade: g } = await params;
  setRequestLocale(locale);
  const grade = Number(g);
  if (!Number.isInteger(grade) || grade < 1 || grade > 12) notFound();
  const t = await getTranslations();
  const l = await getLocale();
  const courses = await getCourses({ grade });
  const exams = await getExams({ grade });
  const stateExams = exams.filter((e) => e.exam.kind === "state");
  const trials = exams.filter((e) => e.exam.kind === "trial");

  return (
    <div className="space-y-8 sm:space-y-10">
      <GradePicker current={grade} compact />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{t("grade.label")}</p>
          <h1 className="text-3xl font-black sm:text-5xl">{t("grade.title", { grade })}</h1>
          <p className="mt-1 text-muted-foreground">{t("grade.subtitle", { count: courses.length, grade })}</p>
        </div>
        <nav className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto" aria-label={t("grade.allGrades")}>
          {grade > 1 && (
            <Link href={`/grade/${grade - 1}`} className={buttonClasses({ variant: "secondary", size: "sm", className: "col-start-1" })}>
              <ChevronLeft className="size-4" aria-hidden="true" />
              {t("grade.prev", { grade: grade - 1 })}
            </Link>
          )}
          {grade < 12 && (
            <Link href={`/grade/${grade + 1}`} className={buttonClasses({ variant: "secondary", size: "sm", className: "col-start-2" })}>
              {t("grade.next", { grade: grade + 1 })}
              <ChevronRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
      {courses.length === 0 ? (
        <p className="clay p-8 text-center text-muted-foreground">{t("grade.noCourses")}</p>
      ) : (
        <ul className="grid gap-4 stagger sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {courses.map((c) => (
            <li key={c.course.id}>
              <CourseCard course={c.course} subject={c.subject} lessonCount={c.lessonCount} readyCount={c.readyCount} />
            </li>
          ))}
        </ul>
      )}
      {exams.length > 0 && (
        <section aria-labelledby="grade-exams" className="clay p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="grade-exams" className="flex items-center gap-2 text-xl font-extrabold sm:text-2xl">
                <Award className="size-6 text-primary" aria-hidden="true" />
                {t("exam.gradeSection", { grade })}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{t("exam.gradeSectionText", { trials: trials.length, state: stateExams.length })}</p>
            </div>
            <Link href="/exams" className="inline-flex min-h-11 items-center font-bold text-primary hover:underline">{t("exam.all")}</Link>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {exams.map((e) => (
              <li key={e.exam.id} className={e.subject ? `subject-${e.subject.color}` : undefined}>
                <Link href={`/exams/${e.exam.id}`} className="clay-sm clay-press inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold" style={e.subject ? { color: "var(--s-text)" } : undefined}>
                  <span className="size-2.5 rounded-full" style={{ background: e.subject ? "var(--s)" : "var(--primary)" }} aria-hidden="true" />
                  {e.exam.kind === "trial" && e.subject ? `${pick(e.subject.name, l)} · ${t("exam.kind.trial")}` : pick(e.exam.title, l)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
