import { supabase } from "@/app/lib/supabaseClient";
import { NextRequest } from "next/server";

async function logApi(req: NextRequest){
  try {
    // Clone the request body (if JSON) – be careful with large bodies
    let body: unknown = null;
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      try {
        body = await req.json();
      } catch {
        // body stays null if parse fails
        body = null;
      }
    }

    // You can add more to this logObject as needed
    const logObject = {
      method: req.method,
      url: req.nextUrl?.href ?? req.url,
      pathname: req.nextUrl?.pathname,
      searchParams: Object.fromEntries(req.nextUrl?.searchParams ?? []),
      headers: Object.fromEntries(req.headers),
      body,
      timestamp: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('logs')
      .insert({
        logItem: logObject,
      });

    if (error) {
      console.error('Error inserting log into Supabase:', error);
    }
  } catch (err) {
    console.error('Unexpected error while logging request:', err);
  }
}

export async function GET(req: NextRequest) {
  logApi(req);
  return new Response("ok");
}

export async function POST(req: NextRequest) {
  logApi(req);
  return new Response("ok");
}

export async function PUT(req: NextRequest) {
  logApi(req);
  return new Response("ok");
}

export async function DELETE(req: NextRequest) {
  logApi(req);
  return new Response("ok");
}

export async function PATCH(req: NextRequest) {
  logApi(req);
  return new Response("ok");
}
