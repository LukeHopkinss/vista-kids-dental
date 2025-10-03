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
        <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-100 md:w-100 overflow-hidden rounded-2xl border">
          <Image
            src="/images/about/dr-ta.jpg"
            alt="Dr. Ta — Pediatric Dentist"
            fill
            // Let Next choose a larger source for bigger breakpoints:
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 224px, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-slate-700">
            Dr. Tuong (David) Ta is a board-certified pediatric dentist who truly believes in the <strong>early prevention</strong> of dental problems and educating families about <strong>life-long healthy teeth</strong>.
            Getting to know the <strong>uniqueness of each child</strong>, building a trusting relationship, <strong>understanding each family’s individual needs</strong>, and making balloon animals are how he delivers gentle dentistry and creates <strong>positive dental experiences</strong>.
          </p>

          <p className="mt-3">
            Dr. Ta and his wife, Mymy, reside in Carlsbad with their three active children, Adrianna, Andrew and Colin. 
            When he is not in the office, he is pretty much an Uber driver for his kids to their volleyball, football, and basketball practices and games. 
            He is also their biggest cheerleader at all of their games and tournaments.
          </p>

          <p className="mt-3 text-slate-700">
            Dr. Ta provides comprehensive care — from first-tooth visits and routine cleanings to sealants,
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
          <li>Doctor of Dental Surgery (DDS) — <span className="italic">University of Washington</span></li>
          <li>Specialty residency in Pediatric Dentistry — <span className="italic">University of Rochester, Eastman Institute of Oral Health</span></li>
          <li>Member — American Academy of Pediatric Dentistry (AAPD)</li>
          <li>Member — American Dental Association (ADA) &amp; state/local dental societies</li>
          <li>Masters Degree in Public Health — <span className="italic">Yale University</span></li>
          <li>Bachelor's of Science in Biology and Engineering — <span className="italic">University of California, Los Angeles</span></li>
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

