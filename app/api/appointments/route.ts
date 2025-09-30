// app/api/appointments/route.ts
import { NextResponse } from "next/server";
import { sendAppointmentEmails } from "@/lib/email";

export async function POST(req: Request) {
  const form = await req.formData();

  // spam honeypot
  if (form.get("nickname")) {
    return NextResponse.redirect(new URL("/appointments", req.url), { status: 303 });
  }

  // YOUR INFO
  const firstName = String(form.get("firstName") || "");
  const lastName = String(form.get("lastName") || "");
  const phone = String(form.get("phone") || "");
  const email = String(form.get("email") || "");

  const address1 = String(form.get("address1") || "");
  const city = String(form.get("city") || "");
  const state = String(form.get("state") || "");
  const zip = String(form.get("zip") || "");

  // PATIENT INFO
  const patientName = String(form.get("patientName") || "");
  const patientAge = String(form.get("patientAge") || "");
  const patientGender = String(form.get("patientGender") || "");

  // APPOINTMENT INFO
  const preferredDate = String(form.get("preferredDate") || "");
  const preferredDays = form.getAll("preferredDays").map(String); // checkboxes
  const preferredTime = String(form.get("preferredTime") || "");
  const reason = String(form.get("reason") || "");

  // COMMENTS
  const comments = String(form.get("comments") || "");

  // very light validation
  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.redirect(new URL("/appointments", req.url), { status: 303 });
  }

  try {
    await sendAppointmentEmails({
      firstName,
      lastName,
      phone,
      email: email || undefined,
      address1,
      city,
      state,
      zip,
      patientName,
      patientAge,
      patientGender,
      preferredDate,
      preferredDays,
      preferredTime,
      reason,
      comments,
    });
  } catch (e) {
    console.error("sendAppointmentEmails failed:", e);
  }

  return NextResponse.redirect(new URL("/appointments/thank-you", req.url), { status: 303 });
}
