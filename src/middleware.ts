import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("\n\nINSIDE MIDDLEWARE");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let body: any = null;
  const contentType = req.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      body = await req.json();
    } catch {
      // body stays null if parse fails
      body = null;
    }
  }

  const logObject = {
    method: req.method,
    url: req.nextUrl?.href ?? req.url,
    pathname: req.nextUrl?.pathname,
    searchParams: Object.fromEntries(req.nextUrl?.searchParams ?? []),
    headers: Object.fromEntries(req.headers),
    body,
    timestamp: new Date().toISOString(),
  };

  console.log("middleware logger: ", logObject);

  if (body?.challenge) {
    console.log("slackbot challenge");

    return new NextResponse(JSON.stringify({ challenge: body.challenge }), {
      status: 200,
    });
  }



  // Handle preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  // Add headers to all other responses
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export const config = {
  matcher: "/api/:path*", // Applies only to API routes
};
