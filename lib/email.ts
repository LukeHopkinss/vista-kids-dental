// lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use onboarding@resend.dev in dev if FROM_EMAIL not set
const FROM = process.env.APPT_FROM_EMAIL || "onboarding@resend.dev";
const TO = process.env.APPT_TO_EMAIL || "";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}
if (!TO) {
  throw new Error("Missing APPT_TO_EMAIL");
}

type ContactPayload = { name: string; phone: string; email?: string; message: string };

function esc(s: string) {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function sendContactEmails({ name, phone, email, message }: ContactPayload) {
  const safe = {
    name: esc(name),
    phone: esc(phone),
    email: email ? esc(email) : "",
    message: esc(message),
  };

  // 1) Office email
  await resend.emails.send({
    from: FROM,                            // ✅ always present now
    to: TO,
    subject: `New contact message — ${process.env.NEXT_PUBLIC_SITE_NAME ?? "Website"}`,
    html: `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
        <h2 style="margin:0 0 8px">${process.env.NEXT_PUBLIC_SITE_NAME ?? "Website"} — New Contact</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px"><b>Name</b></td><td style="padding:4px 8px">${safe.name}</td></tr>
          <tr><td style="padding:4px 8px"><b>Phone</b></td><td style="padding:4px 8px">${safe.phone}</td></tr>
          <tr><td style="padding:4px 8px"><b>Email</b></td><td style="padding:4px 8px">${safe.email || "—"}</td></tr>
          <tr><td style="padding:4px 8px;vertical-align:top"><b>Message</b></td><td style="padding:4px 8px;white-space:pre-wrap">${safe.message}</td></tr>
        </table>
      </div>
    `,
    replyTo: safe.email || undefined,
  });

  // 2) Visitor confirmation (only if they provided an email)
  if (safe.email) {
    await resend.emails.send({
      from: FROM,                          // ✅ include from here too
      to: safe.email,
      subject: "Thanks — we received your message",
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial">
          <p>Hi ${safe.name},</p>
          <p>Thanks for reaching out to ${process.env.NEXT_PUBLIC_SITE_NAME ?? "our office"}.
          We’ve received your message and will get back to you soon.</p>
          <p style="margin:16px 0 4px"><b>Your message:</b></p>
          <blockquote style="margin:0;border-left:3px solid #e2e8f0;padding-left:12px;white-space:pre-wrap">${safe.message}</blockquote>
        </div>
      `,
    });
  }
}

