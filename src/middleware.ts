import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

/** Largest request body the API takes; admin saves of a whole lesson or exam are the big ones. */
const MAX_BODY = 1_000_000;
const MAX_ADMIN_BODY = 5_000_000;

/**
 * Writes to the API must come from this site's own pages. The cookies are
 * SameSite=Lax already; this also stops other sites on the same domain and
 * old browsers from posting with a pupil's or the admin's cookie.
 */
function crossSite(req: NextRequest) {
  if (req.headers.get("sec-fetch-site") === "cross-site") return true;
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host !== req.headers.get("host");
  } catch {
    return true;
  }
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/api")) {
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (crossSite(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      const size = Number(req.headers.get("content-length") ?? 0);
      if (size > (pathname.startsWith("/api/admin") ? MAX_ADMIN_BODY : MAX_BODY)) return NextResponse.json({ error: "Too large" }, { status: 413 });
    }
    return NextResponse.next();
  }
  // Admin panel is not localized.
  if (pathname.startsWith("/admin")) return NextResponse.next();
  return intl(req);
}

export const config = {
  // Every API path, even one with a dot in an id; pages and files as before.
  matcher: ["/api/:path*", "/((?!_next|.*\\..*).*)"],
};
