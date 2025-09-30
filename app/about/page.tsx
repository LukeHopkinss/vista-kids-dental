// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Vista Kids Dental",
  description:
    "Meet Dr. Ta and the Vista Kids Dental team. Learn our pediatric philosophy, training, and how we care for children from their first visit onward.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      {/* Hero / Title */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Meet Dr. Ta</h1>
        <p className="mt-2 text-slate-700">
          Gentle, prevention-first pediatric dentistry for infants, children, and teens — focused on comfort,
          education, and building healthy habits that last.
        </p>
      </header>

      {/* Headshot + Bio */}
      <div className="grid gap-6 sm:grid-cols-[140px,1fr] sm:items-start">
        <div className="relative h-36 w-36 overflow-hidden rounded-xl border">
          <Image
            src="/images/team/dr-ta.jpg" // TODO: replace with your actual path
            alt="Dr. Ta — Pediatric Dentist"
            fill
            sizes="144px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-slate-700">
            Dr. Ta is a board-trained pediatric dentist who loves helping kids feel <strong>safe</strong>,
            <strong> understood</strong>, and even <strong>excited</strong> about visiting the dentist. His
            approach blends evidence-based care with a calm, kid-friendly style: <em>tell-show-do</em>,
            positive reinforcement, and treatment tailored to each child’s needs and personality.
          </p>

          <p className="mt-3 text-slate-700">
            He provides comprehensive care — from first-tooth visits and routine cleanings to sealants,
            fillings, crowns, and behavior guidance options like <strong>nitrous oxide</strong> when appropriate.
            Parents are partners in the process, and every visit includes clear explanations and practical tips
            you can use at home.
          </p>
        </div>
      </div>

      {/* Training & Affiliations */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">Training &amp; Affiliations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
          <li>Doctor of Dental Surgery (DDS) — <span className="italic">University / School name</span></li>
          <li>Specialty residency in Pediatric Dentistry — <span className="italic">Program / Hospital name</span></li>
          <li>Certified in Pediatric Advanced Life Support (PALS) and Basic Life Support (BLS)</li>
          <li>Member — American Academy of Pediatric Dentistry (AAPD)</li>
          <li>Member — American Dental Association (ADA) &amp; state/local dental societies</li>
        </ul>
      </div>

      {/* Care Philosophy */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">Our Care Philosophy</h2>
        <p className="mt-2 text-slate-700">
          We emphasize <strong>prevention</strong>, early diagnosis, and minimally invasive treatment. Checkups
          include cleanings, cavity risk assessment, growth/development monitoring, and age-appropriate coaching
          for brushing, flossing, and nutrition. We use <strong>digital X-rays</strong> only when clinically
          indicated and keep exposure as low as reasonably achievable.
        </p>
        <p className="mt-2 text-slate-700">
          For anxious patients, we start with communication tools that build trust. When needed, we may
          recommend options like <strong>nitrous oxide</strong> or in select cases sedation — always discussed
          with you beforehand so you can make the best decision for your child.
        </p>
      </div>

      {/* Parent/Guardian Participation */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">Parents &amp; Guardians</h2>
        <p className="mt-2 text-slate-700">
          Care works best as a team. We welcome your presence for younger or more anxious children, and we’ll
          guide increasing independence as kids grow more confident. You’ll always have time to ask questions,
          review findings, and understand next steps.
        </p>
      </div>

      {/* New Patients / What to Expect */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">New Patients</h2>
        <p className="mt-2 text-slate-700">
          First visits are relaxed and informative. We’ll review health history, complete a gentle exam and
          cleaning as appropriate, and share personalized tips to keep smiles healthy at home.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
          <li>Preventive checkups &amp; cleanings</li>
          <li>Fluoride, sealants &amp; cavity risk counseling</li>
          <li>Fillings, crowns &amp; space maintenance</li>
          <li>Comfort options (e.g., <strong>nitrous oxide</strong>) when appropriate</li>
        </ul>
        <div className="not-prose mt-4 flex flex-wrap gap-3">
          <Link
            href="/appointments"
            className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

