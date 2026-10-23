import { redirect } from "next/navigation";
import { isAdmin } from "@/server/auth";
import { LoginForm } from "@/components/admin/login-form";

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");
  return <LoginForm configured={!!process.env.ADMIN_PASSWORD && !!process.env.ADMIN_SESSION_SECRET} />;
}
