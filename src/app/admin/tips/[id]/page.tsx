import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getCourse, getCourseById, getTipById } from "@/server/queries";
import { TipEditor } from "@/components/admin/tip-editor";

export default async function AdminTip({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const tip = await getTipById(id);
  if (!tip) notFound();
  const course = (await getCourseById(tip.courseId))!;
  const data = await getCourse(course.subjectId, course.grade);
  const lessons = (data?.units ?? []).flatMap((u) => u.lessons).map((x) => ({ slug: x.slug, title: x.title.en || x.title.hy }));

  return (
    <div className="space-y-5">
      <nav className="text-sm font-semibold text-muted-foreground">
        <Link href="/admin/courses" className="hover:text-primary">Courses</Link> /{" "}
        <Link href={`/admin/courses/${course.id}`} className="hover:text-primary">{course.title.en}</Link> / Tips / {tip.title.en || tip.slug}
      </nav>
      <TipEditor tip={tip} lessons={lessons} siteUrl={tip.lessonSlug ? `/en/${course.subjectId}/${course.grade}/${tip.lessonSlug}#lesson-tricks` : `/en/${course.subjectId}/${course.grade}#tips-title`} courseAdminUrl={`/admin/courses/${course.id}`} />
    </div>
  );
}
