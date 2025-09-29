// app/api/appointments/route.ts
import { NextResponse } from "next/server";
import { sendAppointmentEmails } from "@/lib/email";

export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("nickname")) {
    return NextResponse.redirect(new URL("/appointments/thank-you", req.url), { status: 303 });
  }

  const parentName = String(form.get("name") || "");
  const patientName = String(form.get("patient") || "");
  const phone = String(form.get("phone") || "");
  const email = String(form.get("email") || "");
  const preference = String(form.get("preference") || "");
  const notes = String(form.get("notes") || "");

  try {
    await sendAppointmentEmails({
      parentName, patientName, phone, email: email || undefined, preference, notes
    });
  } catch (e) {
    console.error("appointment email failed:", e);
  }

  return NextResponse.redirect(new URL("/appointments/thank-you", req.url), { status: 303 });
}
