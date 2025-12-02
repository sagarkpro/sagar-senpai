import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "./app/lib/supabaseClient";
import { formDataToJson } from "./utils/FormDataToJson";

export async function middleware(req: NextRequest) {
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

  await logApi(req);

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

async function logApi(req: NextRequest) {
  console.log("\nmiddleware logger");
  
  try {
    // Clone the request body (if JSON) – be careful with large bodies
    let body = null;
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      try {
        body = await req.json();
      } catch {
        // body stays null if parse fails
        body = null;
      }
    }
    else if(contentType.includes('multipart/form-data') || contentType.includes("application/x-www-form-urlencoded")){
      const formData = await req.formData();
      body = formDataToJson(formData);
      try{
        if(body?.payload){
        body.payload = JSON.parse(body.payload);
      }
      }
      catch(ex){
        console.log("cant parse payload: ", ex);
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

    console.log("\ngenerated log: ", logObject);
    
    console.log("\nsaving to supabase");
    
    const { error } = await supabase
      .from('logs')
      .insert({
        logItem: logObject,
      });

    if (error) {
      console.error('Error inserting log into Supabase:', error);
    }
    else {
      console.log("logged data to supabase", new Date());

    }
  } catch (err) {
    console.error('Unexpected error while logging request:', err);
  }
}
