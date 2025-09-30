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
export async function sendAppointmentEmails(payload: {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;

  address1?: string;
  city?: string;
  state?: string;
  zip?: string;

  patientName?: string;
  patientAge?: string;
  patientGender?: string;

  preferredDate?: string;
  preferredDays?: string[];  // Monday, Tuesday...
  preferredTime?: string;    // Morning/Afternoon/Evening
  reason?: string;

  comments?: string;
}) {
  const p = Object.fromEntries(
    Object.entries(payload).map(([k, v]) => [k, Array.isArray(v) ? v.map(esc) : v ? esc(String(v)) : ""])
  ) as typeof payload & { preferredDays?: string[] };

  const fullName = `${p.firstName} ${p.lastName}`.trim();
  const days = (p.preferredDays && p.preferredDays.length) ? p.preferredDays.join(", ") : "";

  const officeSubject = `New appointment request — ${SITE}`;
  const officeHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
      <h2 style="margin:0 0 8px">${SITE} — Appointment Request</h2>

      <h3 style="margin:12px 0 4px">Your Information</h3>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 8px"><b>Name</b></td><td style="padding:4px 8px">${fullName}</td></tr>
        <tr><td style="padding:4px 8px"><b>Phone</b></td><td style="padding:4px 8px">${p.phone}</td></tr>
        <tr><td style="padding:4px 8px"><b>Email</b></td><td style="padding:4px 8px">${p.email || "—"}</td></tr>
        ${(p.address1 || p.city || p.state || p.zip) ? `
        <tr><td style="padding:4px 8px"><b>Address</b></td><td style="padding:4px 8px">
          ${[p.address1, [p.city, p.state].filter(Boolean).join(", "), p.zip].filter(Boolean).join(" • ")}
        </td></tr>` : ""}
      </table>

      <h3 style="margin:16px 0 4px">Patient Information</h3>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 8px"><b>Patient</b></td><td style="padding:4px 8px">${p.patientName || "—"}</td></tr>
        <tr><td style="padding:4px 8px"><b>Age</b></td><td style="padding:4px 8px">${p.patientAge || "—"}</td></tr>
        <tr><td style="padding:4px 8px"><b>Gender</b></td><td style="padding:4px 8px">${p.patientGender || "—"}</td></tr>
      </table>

      <h3 style="margin:16px 0 4px">Appointment Preferences</h3>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 8px"><b>Preferred Date</b></td><td style="padding:4px 8px">${p.preferredDate || "—"}</td></tr>
        <tr><td style="padding:4px 8px"><b>Preferred Day(s)</b></td><td style="padding:4px 8px">${days || "—"}</td></tr>
        <tr><td style="padding:4px 8px"><b>Preferred Time</b></td><td style="padding:4px 8px">${p.preferredTime || "—"}</td></tr>
        <tr><td style="padding:4px 8px"><b>Reason</b></td><td style="padding:4px 8px">${p.reason || "—"}</td></tr>
      </table>

      ${p.comments ? `<h3 style="margin:16px 0 4px">Comments</h3><p style="white-space:pre-wrap">${p.comments}</p>` : ""}
    </div>
  `;

  const userSubject = `We received your appointment request`;
  const userHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
      <p>Hi ${p.firstName || "there"},</p>
      <p>Thanks for requesting an appointment with ${SITE}. Our team will contact you by phone to confirm availability.</p>
      ${(p.preferredDate || days || p.preferredTime || p.reason) ? `
      <p><b>Your preferences:</b><br/>
        ${[
          p.preferredDate && `Date: ${p.preferredDate}`,
          days && `Day(s): ${days}`,
          p.preferredTime && `Time: ${p.preferredTime}`,
          p.reason && `Reason: ${p.reason}`
        ].filter(Boolean).join("<br/>")}
      </p>` : ""}
      ${p.comments ? `<p><b>Your comment:</b><br/><span style="white-space:pre-wrap">${p.comments}</span></p>` : ""}
      <p style="color:#64748b;font-size:12px;margin-top:16px">If this wasn’t you, you can ignore this email.</p>
    </div>
  `;

  // Office inbox
  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: officeSubject,
    html: officeHtml,
    replyTo: p.email || undefined,
  });

  // Visitor confirmation
  if (p.email) {
    await resend.emails.send({
      from: FROM,
      to: p.email,
      subject: userSubject,
      html: userHtml,
    });
  }
}