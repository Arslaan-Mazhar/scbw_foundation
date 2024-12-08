import { NextResponse } from "next/server";

export function middleware(req: any) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host"); // Get the host (e.g., "admin.scbwfoundation.com")

  if (host?.startsWith("admin")) {
    // Redirect to admin page if "admin" subdomain
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next(); // Continue with the default behavior
}
