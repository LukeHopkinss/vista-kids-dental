// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have questions? Contact Vista Kids Dental for appointments, insurance questions, directions, and office hours.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Left: details, hours, CTAs */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-medium">Vista Kids Dental</h2>
            <div className="text-slate-700">
              1235 W Vista Way Ste. F<br />
              Vista, CA 92083
            </div>
            <div className="pt-1 space-x-3">
              <a className="underline" href="tel:+17605551234">(760) 330-5995</a>
            </div>
          </div>

          <div>
            <h3 className="font-medium">Business Hours</h3>
            <ul className="mt-2 grid grid-cols-2 gap-y-1 text-slate-700">
              <li>Monday</li><li>8:00 AM - 5:00 PM</li>
              <li>Tuesday</li><li>8:00 AM - 5:00 PM</li>
              <li>Wednesday</li><li>8:00 AM - 5:00 PM</li>
              <li>Thursday</li><li>8:00 AM - 5:00 PM</li>
              <li>Friday</li><li>8:00 AM - 5:00 PM</li>
              <li>Saturday</li><li>Closed</li>
              <li>Sunday</li><li>Closed</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/appointments" className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400">
              Request Appointment
            </a>
            <a href="tel:+17605551234" className="rounded-lg border px-4 py-2 text-slate-600 font-medium hover:text-orange-400">Call</a>
          </div>
        </div>

        {/* Right: simple contact form */}
        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-medium">Send Us a Message</h2>
          <p className="mt-1 text-sm text-slate-600">
            Please use this form for general information only. Do not send personal health information.
          </p>

          <form action="/api/contact" method="POST" className="mt-4 grid gap-4">
            {/* honeypot anti-spam */}
            <input name="nickname" className="hidden" autoComplete="off" />
            <label className="grid gap-1">
              <span className="text-sm">Name*</span>
              <input name="name" required className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Phone*</span>
              <input type="tel" name="phone" required className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Email</span>
              <input type="email" name="email" className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Message*</span>
              <textarea name="message" rows={5} required className="rounded-md border px-3 py-2" />
            </label>
            <button className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 aspect-[16/9] overflow-hidden rounded-lg border">
        <iframe
          title="Map"
          width="100%"
          height="100%"
          loading="lazy"
          className="h-full w-full"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.7681972632686!2d-117.26791030000001!3d33.193951500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7154b5f4f1c9%3A0x27a70b0b159a4835!2s1235%20W%20Vista%20Way%20f%2C%20Vista%2C%20CA%2092083!5e0!3m2!1sen!2sus!4v1759170501548!5m2!1sen!2sus"
        />
      </div>
    </section>
  );
}
