import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore pediatric dental service categories at Vista Kids Dental.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const buttons = [
    { href: "/preventative", label: "Preventive Dental Services" },
    { href: "/restorative", label: "Restorative Dentistry for Kids" },
    { href: "/sedation", label: "Sedation Dentistry" },
    { href: "/other", label: "Other Services" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Our Services</h1>

      <div className="mt-4 relative h-90 w-full overflow-hidden rounded-xl bg-slate-200">
        <Image
          src="/images/services/extra1.jpg"
          alt="Our Services"
          fill
          sizes="(min-width: 640px) 720px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="mt-6 space-y-6">
        <div>
          <h2 className="text-2xl font-medium">Our Care Philosophy</h2>
          <p className="mt-2 text-slate-700">
            We emphasize prevention, early diagnosis, and minimally invasive treatment such as SDF, SMART. Checkups include cleanings, cavity risk assessment, growth/development monitoring, and age-appropriate coaching for brushing, flossing, and nutrition. We use digital X-rays and keep exposure as low as reasonably achievable.
          </p>
          <p className="mt-2 text-slate-700">
            For anxious patients, we start with communication tools that build trust. When needed, we may recommend options like nitrous oxide or when appropriate sedation (oral conscious sedation, in-office IV sedation, or general anesthesia at Rady Children&apos;s Hospital for patients with special needs)
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Parents &amp; Guardians</h2>
          <p className="mt-2 text-slate-700">
            Care works best as a team. We welcome your presence for younger or more anxious children, and we&apos;ll guide increasing independence as kids grow more confident. You&apos;ll always have time to ask questions, review findings, and understand next steps.
          </p>
        </div>
      </section>
      

      
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {buttons.map((b) => (
          <Link
            key={b.href}
            href={b.href}
            className="rounded-lg border px-4 py-3 text-center font-medium hover:bg-sky-600 hover:text-white"
          >
            {b.label}
          </Link>
        ))}
      </div>
    </main>
  );
}



