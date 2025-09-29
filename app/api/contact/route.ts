// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("nickname")) {
    return NextResponse.redirect(new URL("/contact", req.url), { status: 303 });
  }
  // TODO: send an email (Resend/Postmark) or pipe to your CRM
  console.log("Contact message:", Object.fromEntries(form.entries()));
  return NextResponse.redirect(new URL("/contact/thank-you", req.url), { status: 303 });
}
