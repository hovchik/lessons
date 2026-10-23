import type { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { CourseCard } from "@/components/site/course-card";
import { GradePicker } from "@/components/site/grade-picker";
import { buttonClasses } from "@/components/ui/button";
import { getCourses } from "@/server/queries";

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
  const courses = await getCourses({ grade });

  return (
    <div className="space-y-10">
      <GradePicker current={grade} compact />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{t("grade.label")}</p>
          <h1 className="text-4xl font-black sm:text-5xl">{t("grade.title", { grade })}</h1>
          <p className="mt-1 text-muted-foreground">{t("grade.subtitle", { count: courses.length, grade })}</p>
        </div>
        <nav className="flex gap-2" aria-label={t("grade.allGrades")}>
          {grade > 1 && (
            <Link href={`/grade/${grade - 1}`} className={buttonClasses({ variant: "secondary", size: "sm" })}>
              <ChevronLeft className="size-4" aria-hidden="true" />
              {t("grade.prev", { grade: grade - 1 })}
            </Link>
          )}
          {grade < 12 && (
            <Link href={`/grade/${grade + 1}`} className={buttonClasses({ variant: "secondary", size: "sm" })}>
              {t("grade.next", { grade: grade + 1 })}
              <ChevronRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
      {courses.length === 0 ? (
        <p className="clay p-8 text-center text-muted-foreground">{t("grade.noCourses")}</p>
      ) : (
        <ul className="grid gap-5 stagger sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <li key={c.course.id}>
              <CourseCard course={c.course} subject={c.subject} lessonCount={c.lessonCount} readyCount={c.readyCount} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
