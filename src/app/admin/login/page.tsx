import { redirect } from "next/navigation";
import { adminConfigured, isAdmin } from "@/server/auth";
import { LoginForm } from "@/components/admin/login-form";

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");
  return <LoginForm configured={adminConfigured()} />;
}
