import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { cn, pick } from "@/lib/utils";
import { getCourses, getSubjects } from "@/server/queries";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "subject" });
  return { title: t("title") };
}

export const dynamic = "force-dynamic";

export default async function SubjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const l = await getLocale();
  const [subjects, courses] = await Promise.all([getSubjects(), getCourses()]);

  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-3xl font-black sm:text-4xl">{t("subject.title")}</h1>
      <ul className="space-y-4 stagger sm:space-y-6">
        {subjects.map((s) => {
          const mine = courses.filter((c) => c.course.subjectId === s.id);
          return (
            <li key={s.id} className={cn("clay p-4 sm:p-7", `subject-${s.color}`)}>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-[16px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
                  <SubjectIcon name={s.icon} className="size-6" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold sm:text-xl">{pick(s.name, l)}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{pick(s.description, l)}</p>
                </div>
              </div>
              <ol className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {mine.map(({ course, lessonCount, readyCount }) => (
                  <li key={course.id}>
                    <Link
                      href={`/${s.id}/${course.grade}`}
                      className="clay-sm clay-press flex h-12 min-w-14 items-center justify-center gap-2 px-3 font-extrabold"
                      title={t("course.progress", { done: readyCount, total: lessonCount })}
                    >
                      <span style={{ color: "var(--s-text)" }}>{t("grade.short", { grade: course.grade })}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
