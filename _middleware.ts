import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase"; // Import Firebase Firestore instance
import { collection, addDoc } from "firebase/firestore";


// const rateLimit = new Map(); // Store IPs and request timestamps
// const BLOCKED_IPS = new Set(); // Set of permanently blocked IPs
// const MAX_REQUESTS = 5; // Allowed attempts before blocking
// const TIME_WINDOW = 60 * 1000; // Time window (1 minute)

// async function blockIP(ip: string) {
//   await addDoc(collection(db, "blocked_ips"), { ip, createdAt: new Date() });
// }


export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  // const ip = req.headers.get("x-forwarded-for") || req.ip || "Unknown IP";

  // If the request is coming from admin.localhost:3000, redirect to /login on the same subdomain
  if (host.startsWith("https://admin.scbwfoundation.org")) {
    url.pathname = "/login"; // Ensure redirection happens to /login
    return NextResponse.redirect(url);
  }


  // if (!ip) return NextResponse.next();

  // if (BLOCKED_IPS.has(ip)) {
  //   return new Response("Access Denied", { status: 403 });
  // }

  // const now = Date.now();
  // const requests = rateLimit.get(ip) || [];

  // // Filter out old requests
  // const recentRequests = requests.filter((timestamp:any) => now - timestamp < TIME_WINDOW);
  // recentRequests.push(now);
  // rateLimit.set(ip, recentRequests);

  // if (recentRequests.length > MAX_REQUESTS) {
  //   BLOCKED_IPS.add(ip);
  //   blockIP(ip);
  //   console.warn(`Blocked IP: ${ip} due to excessive requests.`);
  //   return new Response("Too many attempts. You are blocked.", { status: 403 });
  // }

  return NextResponse.next(); // Continue normally for other routes
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all admin routes
  // matcher: "/api/finalize-payment/:path*",
};

