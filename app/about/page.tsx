// app/about/page.tsx
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Vista Kids Dental",
  description:
    "Meet Dr. Ta and the Vista Kids Dental team. Learn our pediatric philosophy, training, and how we care for children from their first visit onward.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 pt-[72px] md:pt-[88px]">
      {/* Page Title / Hero */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">About Us | Kids Dentist in Vista</h1>
        <p className="mt-3 text-slate-700">
          At Vista Kids Dental, we greet every patient with warmth and care, making them feel like part of our
          family. <strong>Dr. Tuong (David) Ta</strong> is a board-certified pediatric dentist specialized in
          children's oral health and provides gentle, anxiety-free treatments to help children maintain healthy
          smiles as they grow. Located in Vista, CA, our mission is to deliver compassionate, educational, and fun
          dental experiences.
        </p>
      </header>

      {/* Offerings */}
      <section aria-labelledby="offerings" className="mb-12">
        <h2 id="offerings" className="text-xl md:text-2xl font-medium">We proudly offer:</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
          <li>Mercury-free, latex-free, and BPA-free materials</li>
          <li>Advanced, minimally invasive procedures such as SDF and SMART</li>
          <li>
            Modern technology and evidence-based care to Vista and surrounding communities like Carlsbad,
            Oceanside, San Marcos, Escondido, and Encinitas
          </li>
        </ul>
      </section>

      {/* About Dr. Ta (anchor target for /about#about-dr-ta) */}
      <section
        id="about-dr-ta"
        aria-labelledby="drta-heading"
        className="scroll-mt-32 md:scroll-mt-40 mb-12"
      >
        <h2 id="drta-heading" className="text-xl md:text-2xl font-medium">About Dr. Ta</h2>
        <p className="mt-3 text-slate-700">
          <strong>Dr. Tuong (David) Ta</strong> is a board-certified pediatric dentist who truly believes in the
          early prevention of dental problems and educating families about life-long healthy teeth. Getting to know
          the uniqueness of each child, building a trusting relationship, understanding each family's individual
          needs and making balloon animals are how he delivers gentle dentistry and creates positive dental
          experiences.
        </p>
        <p className="mt-2 text-slate-700">
          Dr. Ta graduated from the University of California, Los Angeles with a Bachelor of Sciences in Biology and
          Engineering. Dr. Ta also has a Master in Public Health from Yale University. Following his dream to become
          a pediatric dentist, Dr. Ta obtained his Doctor in Dental Surgery degree from the University of Washington
          and certificate in pediatric dentistry at the University of Rochester, Eastman Institute of Oral Health.
        </p>
        <p className="mt-2 text-slate-700">
          Dr. Ta and his wife, reside in Carlsbad with their three active children. When he is not in the office, he is pretty much an Uber driver for his kids to their volleyball,
          football, and basketball practices and games. He is also their biggest cheerleader at all of their games
          and tournaments.
        </p>
      </section>

      {/* Training & Affiliations */}
      <section aria-labelledby="training-heading" className="mb-6">
        <h2 id="training-heading" className="text-xl md:text-2xl font-medium">Training &amp; Affiliations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
          <li>Board Certified in Pediatric Dentistry — American Board of Pediatric Dentistry</li>
          <li>Certificate in Pediatric Dentistry — University of Rochester, Eastman Institute of Oral Health</li>
          <li>Doctor of Dental Surgery (DDS) — University of Washington</li>
          <li>Master in Public Health — Yale University</li>
          <li>Bachelors of Sciences in Biology and Engineering — UCLA</li>
          <li>Member — American Academy of Pediatric Dentistry (AAPD)</li>
          <li>Member — American Dental Association (ADA) &amp; state/local dental societies</li>
        </ul>
      </section>

      {/* Why Pediatric Dentists? (anchor target for /about#why-pediatric-dentists) */}
      <section
        id="why-pediatric-dentists"
        aria-labelledby="why-heading"
        // Increase scroll margin so the heading isn't hidden under the fixed header
        className="scroll-mt-32 md:scroll-mt-40 mb-12"
      >
        <h2 id="why-heading" className="text-xl md:text-2xl font-medium">Why Pediatric Dentists?</h2>
        <p className="mt-3 text-slate-700">
          Most families with children rely on a pediatrician to be responsible for the health of their kids, and the
          same approach should be taken with dentistry. Pediatric dentists specialize in the oral healthcare of
          children and patients with special needs. Here are the answers to some frequently asked questions about
          pediatric dentists:
        </p>

        <h3 className="mt-6 text-lg font-semibold">What Does a Pediatric Dentist Do?</h3>
        <p className="mt-2 text-slate-700">
          A pediatric dentist is a dentist that after graduating from dental school completes an additional 2-3 years
          of education focused solely on the oral health of children and those with special needs. This additional
          schooling encompasses topics such as oral trauma, dental emergencies, sedation and general anesthesia, as
          well as managing cases with extensive dental needs. Furthermore, pediatric dentists train in the behavior
          management of pediatric patients, a critical skill needed to lower dental anxiety and, consequently, lower
          the chance of any long-term “dental trauma”.
        </p>
        <p className="mt-2 text-slate-700">
          Pediatric dentists are professionals who have completed a specialized course of dentistry that caters to
          children who have special needs or otherwise need gentler care. The program consists of two to three years
          of further training after graduation from dental school. It includes hospital training, where they work
          with children who have more severe dental needs and emergencies, and training in numerous orthodontic
          teeth-straightening methods. Pediatric dentists work closely with pediatricians and general dentists, who
          refer select patients for this specialized dental treatment that requires this advanced training. The
          American Academy of Pediatric Dentistry (AAPD) is an organization of pediatric dentists, and its website
          has a good selection of brochures explaining their role in dentistry.
        </p>
      </section>
    </main>
  );
}
