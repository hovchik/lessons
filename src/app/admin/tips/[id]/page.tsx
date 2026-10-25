import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getCourseById, getTipById } from "@/server/queries";
import { TipEditor } from "@/components/admin/tip-editor";

export default async function AdminTip({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const tip = await getTipById(id);
  if (!tip) notFound();
  const course = (await getCourseById(tip.courseId))!;

  return (
    <div className="space-y-5">
      <nav className="text-sm font-semibold text-muted-foreground">
        <Link href="/admin/courses" className="hover:text-primary">Courses</Link> /{" "}
        <Link href={`/admin/courses/${course.id}`} className="hover:text-primary">{course.title.en}</Link> / Tips / {tip.title.en || tip.slug}
      </nav>
      <TipEditor tip={tip} siteUrl={`/en/${course.subjectId}/${course.grade}#tips-title`} courseAdminUrl={`/admin/courses/${course.id}`} />
    </div>
  );
}
