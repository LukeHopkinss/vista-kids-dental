// lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// From: use a verified domain in prod; onboarding@resend.dev is fine for dev
const FROM = process.env.APPT_FROM_EMAIL || "onboarding@resend.dev";

// The ONE office recipient (used for both contact + appointment)
const TO = process.env.APPT_TO_EMAIL || "";

const SITE = process.env.NEXT_PUBLIC_SITE_NAME ?? "Website";

// Fail fast if critical envs are missing
if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
if (!TO) throw new Error("Missing APPT_TO_EMAIL");

const esc = (s: string) => String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();

/** Contact form: email office + (optional) confirmation to visitor */
export async function sendContactEmails({
  name, phone, email, message,
}: { name: string; phone: string; email?: string; message: string }) {
  const safe = {
    name: esc(name),
    phone: esc(phone),
    email: email ? esc(email) : "",
    message: esc(message),
  };

  // Office copy
  await resend.emails.send({
    from: FROM,
    to: TO, // ← single recipient var
    subject: `New contact message — ${SITE}`,
    html: `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
        <h2 style="margin:0 0 8px">${SITE} — New Contact</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px"><b>Name</b></td><td style="padding:4px 8px">${safe.name}</td></tr>
          <tr><td style="padding:4px 8px"><b>Phone</b></td><td style="padding:4px 8px">${safe.phone}</td></tr>
          <tr><td style="padding:4px 8px"><b>Email</b></td><td style="padding:4px 8px">${safe.email || "—"}</td></tr>
          <tr><td style="padding:4px 8px;vertical-align:top"><b>Message</b></td><td style="padding:4px 8px;white-space:pre-wrap">${safe.message}</td></tr>
        </table>
      </div>
    `,
    replyTo: safe.email || undefined, // SDK uses camelCase
  });

  // Visitor confirmation
  if (safe.email) {
    await resend.emails.send({
      from: FROM,
      to: safe.email,
      subject: `Thanks — we received your message`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
          <p>Hi ${safe.name},</p>
          <p>Thanks for contacting ${SITE}. We’ve received your message and will get back to you soon.</p>
          <p style="margin:16px 0 4px"><b>Your message:</b></p>
          <blockquote style="margin:0;border-left:3px solid #e2e8f0;padding-left:12px;white-space:pre-wrap">${safe.message}</blockquote>
          <p style="color:#64748b;font-size:12px;margin-top:16px">If this wasn’t you, you can ignore this email.</p>
        </div>
      `,
    });
  }
}

/** Appointment request: email office + (optional) confirmation to visitor */
export async function sendAppointmentEmails({
  parentName, patientName, phone, email, preference, notes,
}: {
  parentName: string;
  patientName?: string;
  phone: string;
  email?: string;
  preference?: string; // preferred day/time
  notes?: string;
}) {
  const safe = {
    parentName: esc(parentName),
    patientName: patientName ? esc(patientName) : "",
    phone: esc(phone),
    email: email ? esc(email) : "",
    preference: preference ? esc(preference) : "",
    notes: notes ? esc(notes) : "",
  };

  // Office copy
  await resend.emails.send({
    from: FROM,
    to: TO, // ← same recipient for appointments
    subject: `New appointment request — ${SITE}`,
    html: `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
        <h2 style="margin:0 0 8px">${SITE} — Appointment Request</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px"><b>Parent/Guardian</b></td><td style="padding:4px 8px">${safe.parentName}</td></tr>
          ${safe.patientName ? `<tr><td style="padding:4px 8px"><b>Patient</b></td><td style="padding:4px 8px">${safe.patientName}</td></tr>` : ""}
          <tr><td style="padding:4px 8px"><b>Phone</b></td><td style="padding:4px 8px">${safe.phone}</td></tr>
          <tr><td style="padding:4px 8px"><b>Email</b></td><td style="padding:4px 8px">${safe.email || "—"}</td></tr>
          ${safe.preference ? `<tr><td style="padding:4px 8px"><b>Preferred time</b></td><td style="padding:4px 8px">${safe.preference}</td></tr>` : ""}
          ${safe.notes ? `<tr><td style="padding:4px 8px;vertical-align:top"><b>Notes</b></td><td style="padding:4px 8px;white-space:pre-wrap">${safe.notes}</td></tr>` : ""}
        </table>
      </div>
    `,
    replyTo: safe.email || undefined,
  });

  // Visitor confirmation
  if (safe.email) {
    await resend.emails.send({
      from: FROM,
      to: safe.email,
      subject: `We received your appointment request`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
          <p>Hi ${safe.parentName},</p>
          <p>Thanks for requesting an appointment with ${SITE}. Our team will contact you to confirm details and availability.</p>
          ${safe.preference ? `<p><b>Preferred time:</b> ${safe.preference}</p>` : ""}
          ${safe.notes ? `<p><b>Your notes:</b><br/><span style="white-space:pre-wrap">${safe.notes}</span></p>` : ""}
          <p style="color:#64748b;font-size:12px;margin-top:16px">If this wasn’t you, you can ignore this email.</p>
        </div>
      `,
    });
  }
}
