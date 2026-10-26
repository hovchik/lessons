import { Lightbulb } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getAdminCourses, getSubjects, getTipCounts } from "@/server/queries";

export default async function AdminTips({ searchParams }: { searchParams: Promise<{ subject?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { subject } = await searchParams;
  const [subjects, courses, counts] = await Promise.all([getSubjects(), getAdminCourses(), getTipCounts()]);
  const list = courses.filter((c) => !subject || c.course.subjectId === subject);
  const total = [...counts.values()].reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="flex items-center gap-2 text-2xl font-black sm:text-3xl">
          <Lightbulb className="size-7 text-amber-500" aria-hidden="true" /> Tips & tricks
        </h1>
        <span className="rounded-full bg-muted px-3 py-1 text-sm font-bold">{total} tips</span>
      </div>
      <p className="max-w-3xl text-sm text-muted-foreground">
        Shortcuts, memory aids and study habits shown under each course, outside the standard lesson list. Open a course to edit its tips or add a new one.
      </p>
      <nav className="flex flex-wrap gap-2" aria-label="Filter by subject">
        <Link href="/admin/tips" className={`clay-sm clay-press h-11 px-3 text-sm font-bold leading-[44px] ${!subject ? "text-primary ring-2 ring-primary" : ""}`}>All</Link>
        {subjects.map((s) => (
          <Link key={s.id} href={`/admin/tips?subject=${s.id}`} className={`clay-sm clay-press h-11 px-3 text-sm font-bold leading-[44px] ${subject === s.id ? "text-primary ring-2 ring-primary" : ""}`}>
            {s.name.en}
          </Link>
        ))}
      </nav>
      <div className="clay overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Grade</th>
              <th className="px-4 py-3">Tips</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ course, subject: s }) => {
              const n = counts.get(course.id) ?? 0;
              return (
                <tr key={course.id} className="border-t border-border/60">
                  <td className="px-4 py-3 font-bold">{s.name.en}</td>
                  <td className="px-4 py-3">{course.grade}</td>
                  <td className={`px-4 py-3 ${n === 0 ? "text-muted-foreground" : "font-bold"}`}>{n}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/courses/${course.id}#tips`} className="inline-flex min-h-11 items-center px-2 font-bold text-primary hover:underline">Open</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
