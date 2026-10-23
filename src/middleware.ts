import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Admin panel and API are not localized.
  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }
  return intl(req);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
