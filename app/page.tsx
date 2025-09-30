import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl/tight md:text-5xl font-bold">
            pediatric dental care in vista
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            gentle, specialized care for infants, children, and teens. board-certified pediatric dentist. parents welcome.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/appointments" className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400">
              Request Appointment
            </Link>
            <Link href="/services" className="rounded-lg border px-4 py-2 hover:text-orange-400">
              Our Services
            </Link>
          </div>
        </div>
        <div className="aspect-video rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100" />
      </div>
    </section>
  );
}
