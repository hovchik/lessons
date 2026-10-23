import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getAdminCourses, getSubjects } from "@/server/queries";

export default async function AdminCourses({ searchParams }: { searchParams: Promise<{ subject?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { subject } = await searchParams;
  const subjects = await getSubjects();
  const courses = (await getAdminCourses()).filter((c) => !subject || c.course.subjectId === subject);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black sm:text-3xl">Courses</h1>
      <nav className="flex flex-wrap gap-2" aria-label="Filter by subject">
        <Link href="/admin/courses" className={`clay-sm clay-press h-11 px-3 text-sm font-bold leading-[44px] ${!subject ? "text-primary ring-2 ring-primary" : ""}`}>All</Link>
        {subjects.map((s) => (
          <Link key={s.id} href={`/admin/courses?subject=${s.id}`} className={`clay-sm clay-press h-11 px-3 text-sm font-bold leading-[44px] ${subject === s.id ? "text-primary ring-2 ring-primary" : ""}`}>
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
              <th className="hidden px-4 py-3 sm:table-cell">Lessons</th>
              <th className="px-4 py-3">Ready</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map(({ course, subject: s, lessonCount, readyCount }) => (
              <tr key={course.id} className="border-t border-border/60">
                <td className="px-4 py-3 font-bold">{s.name.en}</td>
                <td className="px-4 py-3">{course.grade}</td>
                <td className="hidden px-4 py-3 sm:table-cell">{lessonCount}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={readyCount === lessonCount ? "font-bold text-success" : ""}>{readyCount}</span>
                  <span className="text-muted-foreground sm:hidden"> / {lessonCount}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/courses/${course.id}`} className="inline-flex min-h-11 items-center px-2 font-bold text-primary hover:underline">Open</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
