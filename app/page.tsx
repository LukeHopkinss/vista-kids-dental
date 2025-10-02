// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export const metadata: Metadata = {
  title: "Pediatric Dentist in Colleyville, TX",
  description:
    "Pediatric dentistry for infants, children, and teens—gentle visits, prevention-first care, same-day emergency help. New patients welcome.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pediatric Dentist in Colleyville, TX",
    description:
      "Gentle pediatric dental care with prevention-first philosophy, emergency help, and age-appropriate guidance.",
    type: "website",
    url: "/",
    images: ["/og.jpg"],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b">
        <BackgroundBlobs variant="left" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-block rounded-full border px-3 py-1 text-xs uppercase tracking-wide text-slate-600">
              vista kids dental • vista, CA
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              We keep <span className="text-orange-500">kids smiling</span> with calm, confident visits
            </h1>
            <p className="mt-4 text-slate-700">
              Prevention-first care for infants, children, and teens—cleanings, sealants, fillings,
              and emergency help when you need it.
            </p>

            <div className="not-prose mt-6 flex flex-wrap gap-3">
              <Link
                href="/appointments"
                className="inline-block rounded-lg bg-sky-600 px-5 py-3 text-white font-medium hover:bg-orange-400"
              >
                Request Appointment
              </Link>
              <a href="tel:+17603305995" className="inline-block rounded-lg border px-5 py-3 hover:text-orange-400">
                (760) 330-5995
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Check /> Gentle, kid-centered team</li>
              <li className="flex items-center gap-2"><Check /> Digital X-rays when indicated</li>
              <li className="flex items-center gap-2"><Check /> Nitrous oxide available</li>
              <li className="flex items-center gap-2"><Check /> Same-day emergency help</li>
            </ul>
          </div>

          {/* Hero image*/}
          <div className="relative mx-auto h-[340px] w-full max-w-[520px] overflow-hidden rounded-3xl border shadow-sm">
            <Image
              src="/images/hero/kid-smile.jpg"
              alt="Happy pediatric dental patient"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

   {/*    {Office Blurbs} 
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Welcome to our Pediatric Dental Home</h2>
            <p className="mt-2 text-slate-700">
              We specialize in dentistry for children and patients with special health care needs—creating
              positive visits, building healthy habits, and partnering with parents every step of the way.
            </p>
            <div className="not-prose mt-4 flex flex-wrap gap-3">
              <Link href="/about" className="inline-block rounded-lg border px-5 py-3 hover:bg-orange-400 hover:text-white">
                Meet the Practice!
              </Link>
            </div>
          </div>

          {Office Image}
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border">
            <Image
              src="/images/office/office-welcome.jpg"
              alt="Office welcome area"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    
    */}
     

      {/* FEATURED SERVICES (mirror their Services hub, but as cards) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Comprehensive Pediatric Services</h2>
          <p className="mt-2 text-slate-700">
            Prevention, comfort, and communication—everything your child needs in one place.
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.href}>
                <Link
                  href={f.href}
                  className="group block rounded-2xl border p-5 transition-colors hover:bg-orange-400 focus:bg-orange-400 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border">
                      <span aria-hidden>{f.emoji}</span>
                    </div>
                    <h3 className="text-lg font-medium group-hover:text-white">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-slate-600 group-hover:text-white">{f.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="not-prose mt-6">
            <Link
              href="/services"
              className="inline-block rounded-lg border px-5 py-3 hover:bg-orange-400 hover:text-white"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* NEW PATIENTS (mirrors their New Patients intro) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 rounded-3xl border p-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold">New Patients</h2>
            <p className="mt-2 text-slate-700">
              First visits are relaxed and informative. We’ll review health history, complete a gentle exam and
              cleaning as appropriate, and share age-specific tips for home care.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Friendly introductions and tell-show-do</li>
              <li>Digital X-rays only when indicated</li>
              <li>Nitrous oxide available when appropriate</li>
            </ul>
            <div className="not-prose mt-5 flex flex-wrap gap-3">
              <Link href="/office-policy" className="inline-block rounded-lg border px-5 py-3 hover:text-orange-400">
                Office Policy
              </Link>
              <Link href="/post-op" className="inline-block rounded-lg border px-5 py-3 hover:text-orange-400">
                Post-Op Instructions
              </Link>
            </div>
          </div>
          <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border">
            <Image
              src="/images/hero/new-patients.jpg"
              alt="New patients welcome"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM PREVIEW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Meet Dr. Ta</h2>
          <p className="mt-2 text-slate-700">
            A friendly clinical dentist focused on comfort, communication, and kid-friendly care.
          </p>

          <div className="not-prose mt-4">
            <Link
              href="/about"
              className="inline-block rounded-lg bg-sky-600 px-5 py-3 text-white font-medium hover:bg-orange-400"
            >
              Dr. Ta, board certified dentist!
            </Link>
          </div>
        </div>
      </section>

         {/* CONTACT • HOURS • MAP (like their Contact page footer band) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Got a Question?</h2>
            <p className="mt-2 text-slate-700">1235 W Vista Way, Ste. F, Vista CA, 92083</p>
            <p className="text-slate-700">
              Phone: <a className="underline" href="tel:+17603305995">(760)-330-5995</a>
            </p>
            <ul className="mt-3 text-slate-700">
              <li>Mon–Fri: 8:00am – 5:00pm</li>
              <li>Sat–Sun: Closed</li>
            </ul>
            <div className="not-prose mt-4 flex flex-wrap gap-3">
              <Link href="/appointments" className="inline-block rounded-lg bg-sky-600 px-5 py-3 text-white font-medium hover:bg-orange-400">
                Request Appointment
              </Link>
              <Link href="/contact" className="inline-block rounded-lg border px-5 py-3 hover:text-orange-400">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-2xl border">
            {/* Map Iframe */}
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
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold text-white">Ready for an easy first visit?</h2>
          <p className="mt-2 text-slate-300">
            Request an appointment—our team will help you choose the best time for your child.
          </p>
          <div className="not-prose mt-5">
            <Link
              href="/appointments"
              className="inline-block rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-orange-400"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- helpers & content data ---------- */

function Check() {
  return (
    <svg
      className="h-4 w-4 text-sky-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const FEATURES = [
  {
    href: "/services/oral-health-exams",
    title: "Oral Health Exams",
    blurb: "Cleanings, cavity risk assessment, growth & development checks.",
    emoji: "🪥",
  },
  {
    href: "/services/sealants",
    title: "Sealants",
    blurb: "Protective coatings for cavity-prone chewing surfaces.",
    emoji: "🦷",
  },
  {
    href: "/services/cavities-and-fillings",
    title: "Cavities & Fillings",
    blurb: "Tooth-colored fillings for natural smiles.",
    emoji: "✨",
  },
  {
    href: "/services/sedation-dentistry",
    title: "Nitrous Oxide",
    blurb: "Comfort support for anxious visits when appropriate.",
    emoji: "🌬️",
  },
  {
    href: "/services/digital-x-rays",
    title: "Digital X-rays",
    blurb: "Low-dose imaging only when needed.",
    emoji: "📷",
  },
  {
    href: "/services/emergency-dental-care",
    title: "Emergency Care",
    blurb: "Same-day help for toothaches and injuries.",
    emoji: "⏱️",
  },
];
