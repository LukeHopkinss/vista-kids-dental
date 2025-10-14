import Link from "next/link";

export default function OtherServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold text-center">Other Services</h1>

      <p className="mt-6 text-slate-700 text-center">
        Didn't find exactly what you were looking for? Tell us a bit about your child's needs and we'll let you know if we can accommodate the service or recommend the best next step.
      </p>

      <div className="mt-6 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-white font-medium shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          aria-label="Contact Us"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
