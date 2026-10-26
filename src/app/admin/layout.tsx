import type { Metadata, Viewport } from "next";
import { Award, BookOpen, GraduationCap, LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";
import { isAdmin } from "@/server/auth";
import { LogoutButton } from "@/components/admin/logout-button";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Admin · Lessons", template: "%s · Admin" },
  robots: { index: false, follow: false },
  icons: { icon: "/icons/icon-192.png", apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eef2ff",
};

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAdmin();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout; next/font cannot download fonts in offline builds */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Noto+Sans+Armenian:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh">
        {authed ? (
          <div className="flex min-h-dvh flex-col md:flex-row">
            <aside className="pt-safe-2 sticky top-0 z-30 flex items-center gap-1 border-b border-border/60 bg-card px-3 pb-3 sm:gap-2 sm:px-4 md:static md:w-60 md:flex-col md:items-stretch md:gap-1 md:border-b-0 md:border-r md:px-4 md:py-6">
              <Link href="/admin" className="mb-0 flex items-center gap-2 text-lg font-extrabold md:mb-6">
                <span className="grid size-9 place-items-center rounded-[12px] bg-primary text-primary-foreground">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <span className="hidden sm:inline">Admin</span>
              </Link>
              <nav className="scroll-x flex flex-1 gap-1 whitespace-nowrap md:flex-col md:whitespace-normal" aria-label="Admin">
                <Link href="/admin" className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold hover:bg-muted">
                  <LayoutDashboard className="size-4" aria-hidden="true" /> Dashboard
                </Link>
                <Link href="/admin/courses" className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold hover:bg-muted">
                  <BookOpen className="size-4" aria-hidden="true" /> Courses
                </Link>
                <Link href="/admin/users" className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold hover:bg-muted">
                  <Users className="size-4" aria-hidden="true" /> Users
                </Link>
                <Link href="/admin/exams" className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold hover:bg-muted">
                  <Award className="size-4" aria-hidden="true" /> Exams
                </Link>
                <Link href="/en" className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold text-muted-foreground hover:bg-muted">
                  View site
                </Link>
              </nav>
              <LogoutButton />
            </aside>
            <main className="min-w-0 flex-1 px-4 py-5 sm:px-8 sm:py-8">{children}</main>
          </div>
        ) : (
          <main className="grid min-h-dvh place-items-center px-4">{children}</main>
        )}
      </body>
    </html>
  );
}
