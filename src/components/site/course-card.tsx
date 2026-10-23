import { ArrowRight, BookOpen } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Course, Subject } from "@/server/db/schema";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { cn, pick } from "@/lib/utils";

export async function CourseCard({
  course,
  subject,
  lessonCount,
  readyCount,
  showGrade = false,
}: {
  course: Course;
  subject: Subject;
  lessonCount: number;
  readyCount: number;
  showGrade?: boolean;
}) {
  const locale = await getLocale();
  const t = await getTranslations();
  const pct = lessonCount ? Math.round((readyCount / lessonCount) * 100) : 0;
  return (
    <Link
      href={`/${subject.id}/${course.grade}`}
      className={cn("clay clay-press group flex flex-col gap-4 p-5", `subject-${subject.color}`)}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-[16px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
          <SubjectIcon name={subject.icon} className="size-6" />
        </span>
        {showGrade && (
          <span className="rounded-full px-3 py-1 text-xs font-extrabold" style={{ background: "var(--s-soft)", color: "var(--s-text)" }}>
            {t("grade.title", { grade: course.grade })}
          </span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-extrabold leading-snug text-balance">{pick(subject.name, locale)}</h3>
        <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{pick(course.description, locale)}</p>
      </div>
      <div className="flex items-center justify-between text-sm font-bold">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <BookOpen className="size-4" aria-hidden="true" />
          {t("course.lessonsCount", { count: lessonCount })}
        </span>
        <span className="inline-flex items-center gap-1 text-primary transition-transform group-hover:translate-x-0.5">
          {t("course.start")}
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={t("course.progress", { done: readyCount, total: lessonCount })}>
        <div className="h-full rounded-full transition-[width]" style={{ width: `${pct}%`, background: "var(--s)" }} />
      </div>
    </Link>
  );
}
