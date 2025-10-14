import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance and Payments | Vista Kids Dental",
  description:
    "We're in-network with most major dental insurance plans and Medi-Cal. Get a complimentary benefits check and an estimate before treatment. Flexible options available for families without insurance.",
  alternates: {
    canonical: "/insurance-and-payments",
  }
}

export default function InsuranceAndPaymentsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Insurance and Payments</h1>

      <section className="mt-6 space-y-4 text-slate-700">
        <p>
          For the convenience of our patients, we are in-network with most major dental insurance companies and Medi-Cal. We will
          be happy to do a complimentary benefit check and provide you with an ESTIMATE prior to treatment.
        </p>
        <p>
          No insurance? No problem! We have several different financial options to help your child receive the dental care they
          need. Please{" "}
          <Link href="/contact" className="text-orange-600 underline underline-offset-2 hover:text-orange-700">
            contact our office
          </Link>{" "}
          and speak to our financial coordinator for more information.
        </p>
      </section>

      <div className="mt-10 flex justify-center">
        <Link
          href="/contact"
          aria-label="Contact Us"
          className="inline-flex items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-medium text-white shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
