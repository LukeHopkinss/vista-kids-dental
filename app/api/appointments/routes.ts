import { NextResponse } from "next/server";
// import { sendAppointmentEmail } from "@/lib/email"; // optional later

export async function POST(req: Request) {
  const form = await req.formData();

  // spam honeypot: if filled, silently succeed
  if (form.get("nickname")) {
    return NextResponse.redirect(new URL("/appointments/thank-you", req.url), { status: 303 });
  }

  // TODO: validate (optional) and send email
  // await sendAppointmentEmail(Object.fromEntries(form.entries()));

  // for now, log the submission so you can see it in the server console
  console.log("Appointment request:", Object.fromEntries(form.entries()));

  // redirect to confirmation
  return NextResponse.redirect(new URL("/appointments/thank-you", req.url), { status: 303 });
}
