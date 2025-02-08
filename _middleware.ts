import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";

  // If the request is coming from admin.localhost:3000, redirect to /login on the same subdomain
  if (host.startsWith("http://admin.scbwfoundation.org")) {
    url.pathname = "/login"; // Ensure redirection happens to /login
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Continue normally for other routes
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all admin routes
};

