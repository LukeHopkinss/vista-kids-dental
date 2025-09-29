// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";

export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("nickname")) {
    return NextResponse.redirect(new URL("/contact", req.url), { status: 303 });
  }

  const name = String(form.get("name") || "");
  const phone = String(form.get("phone") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");

  try {
    await sendContactEmails({ name, phone, email: email || undefined, message });
  } catch (e) {
    console.error("contact email failed:", e);
  }

  return NextResponse.redirect(new URL("/contact", req.url), { status: 303 });
}
