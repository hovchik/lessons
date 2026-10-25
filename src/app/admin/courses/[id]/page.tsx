import { CheckCircle2, Circle, Lightbulb } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getAdminCourseTips, getCourse } from "@/server/queries";
import { NewTipForm } from "@/components/admin/new-tip-form";
import { CATEGORY_LABELS } from "@/lib/tips";

export default async function AdminCourse({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const dash = id.lastIndexOf("-");
  const data = await getCourse(id.slice(0, dash), Number(id.slice(dash + 1)));
  if (!data) notFound();
  const { course, subject, units, readyCount, totalCount } = data;
  const tips = await getAdminCourseTips(course.id);

  return (
    <div className="space-y-6">
      <nav className="text-sm font-semibold text-muted-foreground">
        <Link href="/admin/courses" className="hover:text-primary">Courses</Link> / {subject.name.en} · Grade {course.grade}
      </nav>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-2xl font-black sm:text-3xl">{course.title.en}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
          <span className="rounded-full bg-muted px-3 py-1">{readyCount} / {totalCount} ready</span>
          <a href={`/en/${subject.id}/${course.grade}`} className="inline-flex min-h-11 items-center text-primary hover:underline" target="_blank" rel="noreferrer">View on site</a>
        </div>
      </div>
      <p className="max-w-3xl text-sm text-muted-foreground">{course.description.en}</p>
      <ol className="space-y-4">
        {units.map((u, ui) => (
          <li key={u.id} className="clay overflow-hidden">
            <div className="flex items-center gap-3 p-4">
              <span className="grid size-9 place-items-center rounded-[12px] bg-primary text-sm font-black text-primary-foreground">{ui + 1}</span>
              <div>
                <h2 className="font-extrabold">{u.title.en}</h2>
                <p className="text-xs text-muted-foreground">{u.title.hy} · {u.title.ru}</p>
              </div>
            </div>
            <ol className="divide-y divide-border/60 border-t border-border/60">
              {u.lessons.map((l, li) => (
                <li key={l.id}>
                  <Link href={`/admin/lessons/${l.id}`} className="flex min-h-12 items-center gap-3 px-4 py-2 hover:bg-muted">
                    <span className="w-6 text-xs font-bold text-muted-foreground">{li + 1}</span>
                    {l.status === "published" ? (
                      <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="Published" />
                    ) : (
                      <Circle className="size-4 shrink-0 text-muted-foreground" aria-label="Draft" />
                    )}
                    <span className="min-w-0 flex-1 text-sm font-semibold">{l.title.en}</span>
                    <span className="hidden text-xs text-muted-foreground md:inline">{l.slug}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>

      <section id="tips" aria-labelledby="tips-heading" className="clay overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 p-4">
          <h2 id="tips-heading" className="flex items-center gap-2 font-extrabold">
            <Lightbulb className="size-5 text-amber-500" aria-hidden="true" /> Tips & tricks
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-bold text-muted-foreground">{tips.length}</span>
          </h2>
          <NewTipForm courseId={course.id} />
        </div>
        {tips.length > 0 && (
          <ol className="divide-y divide-border/60 border-t border-border/60">
            {tips.map((tp, i) => (
              <li key={tp.id}>
                <Link href={`/admin/tips/${tp.id}`} className="flex min-h-12 items-center gap-3 px-4 py-2 hover:bg-muted">
                  <span className="w-6 text-xs font-bold text-muted-foreground">{i + 1}</span>
                  {tp.status === "published" ? (
                    <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="Published" />
                  ) : (
                    <Circle className="size-4 shrink-0 text-muted-foreground" aria-label="Draft" />
                  )}
                  <span className="min-w-0 flex-1 text-sm font-semibold">{tp.title.en || tp.slug}</span>
                  <span className="hidden text-xs text-muted-foreground md:inline">{CATEGORY_LABELS[tp.category]}</span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
