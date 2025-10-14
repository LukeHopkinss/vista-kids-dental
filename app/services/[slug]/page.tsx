import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Entry = { title: string; body: string };

const copy: Record<string, Entry> = {
  "cavities-and-fillings": {
    title: "Cavities & Fillings",
    body:
      "Dental fillings treat problems like cavities and broken teeth. We commonly use composite resin designed to look like natural teeth, though gold, porcelain, and silver amalgam are also options. Composite resin typically takes more than one layer and a special light is used to harden the material for a natural-looking result.",
  },
  "emergency-dental-care": {
    title: "Emergency Dental Care",
    body:
      "Be prepared—emergencies do happen. Knowing what to do can be the difference between losing and saving a tooth, and keeping your dentist's phone number handy is important. Contact us right away if you're having an emergency. If we are not open, go to the nearest emergency center.",
  },
  "oral-health-exams": {
    title: "Oral Health Exams",
    body:
      "Regular examinations support good dental health and a confident smile. We begin with a professional cleaning to remove tartar and buildup, then carefully examine each tooth to catch issues early—such as decay, damage, or signs of infection—so they can be addressed before they worsen.",
  },
  "preventative-dentistry": {
    title: "Preventive Dentistry",
    body:
      "Routine cleanings remove plaque and tartar, including in hard-to-reach areas like along the gumline. After cleaning, we polish so teeth shine, and—when appropriate—apply fluoride to help prevent tooth decay.",
  },
  "restorative-dentistry": {
    title: "Restorative Dentistry",
    body:
      "We can restore chipped or broken teeth with tooth-colored materials so they look natural. When needed, veneers or caps help cover defects. For missing teeth, options include implants topped with crowns to restore normal function.",
  },
  sealants: {
    title: "Sealants",
    body:
      "A dental sealant is a protective plastic coating painted on chewing surfaces to smooth grooves and depressions and help prevent decay. Sealants are often placed on back teeth, which are harder to reach. Even with good brushing and flossing, sealants add an extra layer of protection.",
  },
  "sedation-dentistry": {
    title: "Sedation Dentistry",
    body:
      "Nitrous oxide—often called laughing gas—helps many children relax during treatment. It's a mix of oxygen and nitrous oxide delivered through a small mask over the nose. The goal is comfort and cooperation without the full effects of deeper anesthesia.",
  },
  "silver-diamine-fluoride": {
    title: "Silver Diamine Fluoride",
    body:
      "Fluoride strengthens teeth and helps prevent tooth decay across all ages. Major professional organizations support topical fluoride for good oral health. Depending on your water supply and risk factors, additional fluoride treatments may or may not be necessary—we'll guide you.",
  },
  "digital-x-rays": {
    title: "Digital X-Rays",
    body:
      "Dental X-rays help us examine areas we can't see directly, allowing us to spot cavities between teeth and evaluate teeth and supporting structures. Radiographs guide treatment decisions by revealing issues not visible to the eye.",
  },
  "intraoral-camera": {
    title: "Intraoral Camera",
    body:
      "High-resolution photos help explain conditions and show progress. Visuals can make concerns clearer, track changes before and after treatment, and support decisions when more involved care is considered.",
  },
};

export function generateStaticParams() {
  return Object.keys(copy).map((slug) => ({ slug }));
}

function descFromBody(s: string, max = 160) {
  const d = s.replace(/\s+/g, " ").trim();
  if (d.length <= max) return d;
  const cut = d.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).concat("…");
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const data = copy[params.slug];
  if (!data) return { title: "Service Not Found" };

  const title = `${data.title}`;
  const description = descFromBody(data.body);
  const canonical = `/services/${params.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "article", url: canonical },
    twitter: { card: "summary", title, description },
  };
}

export default function Service({ params }: { params: { slug: string } }) {
  const data = copy[params.slug];
  if (!data) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 pt-[72px] md:pt-[88px] prose">
      {/* Four family buttons for quick jump to new service pages */}
      <div className="not-prose mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link href="/preventative" className="rounded-lg border px-4 py-2 text-center hover:bg-orange-400 hover:text-white">Preventive Dental Services</Link>
        <Link href="/restorative"  className="rounded-lg border px-4 py-2 text-center hover:bg-orange-400 hover:text-white">Restorative Dentistry for Kids</Link>
        <Link href="/sedation"     className="rounded-lg border px-4 py-2 text-center hover:bg-orange-400 hover:text-white">Sedation Dentistry</Link>
        <Link href="/other"        className="rounded-lg border px-4 py-2 text-center hover:bg-orange-400 hover:text-white">Other Services</Link>
      </div>

      <h1 className="mb-2">{data.title}</h1>
      <p>{data.body}</p>

      <div className="not-prose mt-6">
        <a
          href="/appointments"
          className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400"
        >
          Request Appointment
        </a>
      </div>
    </article>
  );
}
