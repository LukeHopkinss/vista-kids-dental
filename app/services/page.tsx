import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore pediatric dental services: exams, cleanings, sealants, tooth-colored fillings, digital X-rays, sedation, emergency care, and more.",
  alternates: { canonical: "/services" },
};

const services = [
  { slug: "cavities-and-fillings", title: "Cavities & Fillings", blurb: "Composite resin and other filling options." },
  { slug: "emergency-dental-care", title: "Emergency Dental Care", blurb: "Service in case of emergencies." },
  { slug: "oral-health-exams", title: "Oral Health Exams", blurb: "Professional cleanings and checkups." },
  { slug: "preventative-dentistry", title: "Preventative Dentistry", blurb: "Cleanings, polishing, fluoride as needed." },
  { slug: "restorative-dentistry", title: "Restorative Dentistry", blurb: "Fillings, veneers/caps, implants + crowns." },
  { slug: "sealants", title: "Sealants", blurb: "Protective coating for chewing surfaces." },
  { slug: "sedation-dentistry", title: "Sedation Dentistry", blurb: "Nitrous oxide for comfort during procedures." },
  { slug: "silver-diamine-fluoride", title: "Silver Diamine Fluoride", blurb: "Helps strengthen teeth and prevent decay." },
  { slug: "digital-x-rays", title: "Digital X-Rays", blurb: "See what we can't view with the naked eye." },
  { slug: "intraoral-camera", title: "Intraoral Camera", blurb: "Photos that explain and track treatment." },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="group block cursor-pointer rounded-lg border p-4 transition-colors hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <h2 className="text-xl font-medium group-hover:text-white">{s.title}</h2>
              <p className="text-slate-600 group-hover:text-white">{s.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
