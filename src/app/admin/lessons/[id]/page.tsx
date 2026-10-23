import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getLessonById } from "@/server/queries";
import { db, schema } from "@/server/db/client";
import { eq } from "drizzle-orm";
import { LessonEditor } from "@/components/admin/lesson-editor";

export default async function AdminLesson({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const lesson = getLessonById(id);
  if (!lesson) notFound();
  const course = db.select().from(schema.courses).where(eq(schema.courses.id, lesson.courseId)).get()!;

  return (
    <div className="space-y-5">
      <nav className="text-sm font-semibold text-muted-foreground">
        <Link href="/admin/courses" className="hover:text-primary">Courses</Link> /{" "}
        <Link href={`/admin/courses/${course.id}`} className="hover:text-primary">{course.title.en}</Link> / {lesson.title.en}
      </nav>
      <LessonEditor
        lesson={lesson}
        siteUrl={`/en/${course.subjectId}/${course.grade}/${lesson.slug}`}
        claudeReady={!!process.env.ANTHROPIC_API_KEY}
      />
    </div>
  );
}
