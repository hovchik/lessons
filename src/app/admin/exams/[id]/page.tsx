import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { getExam } from "@/server/queries";
import { ExamEditor } from "@/components/admin/exam-editor";

export default async function AdminExam({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { id } = await params;
  const data = await getExam(id, { includeDrafts: true });
  if (!data) notFound();

  return (
    <div className="space-y-5">
      <nav className="text-sm font-semibold text-muted-foreground">
        <Link href="/admin/exams" className="hover:text-primary">Exams</Link> / {data.exam.title.en}
      </nav>
      <ExamEditor exam={data.exam} siteUrl={`/en/exams/${data.exam.id}`} />
    </div>
  );
}
