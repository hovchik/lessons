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
      <h1 className="text-3xl font-black">Courses</h1>
      <nav className="flex flex-wrap gap-2" aria-label="Filter by subject">
        <Link href="/admin/courses" className={`clay-sm clay-press h-10 px-3 text-sm font-bold leading-10 ${!subject ? "text-primary ring-2 ring-primary" : ""}`}>All</Link>
        {subjects.map((s) => (
          <Link key={s.id} href={`/admin/courses?subject=${s.id}`} className={`clay-sm clay-press h-10 px-3 text-sm font-bold leading-10 ${subject === s.id ? "text-primary ring-2 ring-primary" : ""}`}>
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
              <th className="px-4 py-3">Lessons</th>
              <th className="px-4 py-3">Ready</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map(({ course, subject: s, lessonCount, readyCount }) => (
              <tr key={course.id} className="border-t border-border/60">
                <td className="px-4 py-3 font-bold">{s.name.en}</td>
                <td className="px-4 py-3">{course.grade}</td>
                <td className="px-4 py-3">{lessonCount}</td>
                <td className="px-4 py-3">
                  <span className={readyCount === lessonCount ? "font-bold text-success" : ""}>{readyCount}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/courses/${course.id}`} className="font-bold text-primary hover:underline">Open</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
