import Link from "next/link";

const services = [
  { slug: "exams-cleanings", title: "exams & cleanings", blurb: "preventive care and education" },
  { slug: "sealants-fluoride", title: "sealants & fluoride", blurb: "extra cavity protection" },
  { slug: "sedation", title: "sedation options", blurb: "nitrous oxide and minimal sedation" },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">services</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <li key={s.slug} className="rounded-lg border p-4">
            <h2 className="text-xl font-medium">
              <Link href={`/services/${s.slug}`}>{s.title}</Link>
            </h2>
            <p className="text-slate-600">{s.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
