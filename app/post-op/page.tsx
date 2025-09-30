// app/post-op/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-Op Instructions | Vista Kids Dental",
  description:
    "Care instructions after sealants, composite (white) fillings, amalgam fillings, stainless steel crowns, pulpotomy, local anesthetic, and extractions.",
  alternates: { canonical: "/post-op" },
};

export default function PostOp() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Post-Op Instructions</h1>
      <p className="mt-3 text-slate-700">
        These guidelines will help your child heal comfortably after common pediatric dental procedures.
        If anything seems unusual or you have concerns, please contact us.
      </p>

      {/* Sealants */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">Sealants</h2>
        <p className="mt-2 text-slate-700">
          In order to ensure the life of the sealant, please have your child follow these instructions:
        </p>
        <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
          <li>
            <strong>Do not chew ice cubes</strong> — this can cause the sealant to chip.
          </li>
          <li>
            <strong>Do not eat hard, sticky, or chewy candy</strong> (e.g., Jolly Ranchers, caramel, Fruit
            Roll-Ups). <strong>Sugarless gum is acceptable.</strong>
          </li>
          <li>
            The sealant protects the <strong>chewing surface</strong> of the tooth, but <strong>good brushing
            and flossing</strong> are still required to protect the sides of the teeth.
          </li>
        </ul>
        <p className="mt-3 text-slate-700">
          <strong>Guarantee:</strong> Dr. Ta guarantees the sealants for up to <strong>two (2) years</strong>{" "}
          following the initial application as long as the patient is up to date on his/her{" "}
          <strong>six (6) month check-ups</strong>. At each examination, Dr. Ta will examine the sealant and
          if a sealant comes off in this two (2) year period, <strong>we will reapply a new sealant at no
          charge</strong>.
        </p>
      </div>

      {/* Composite resin fillings */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Composite Resin Fillings (White Fillings)</h2>
        <p className="mt-2 text-slate-700">
          Since the resin filling is <strong>bonded to the tooth</strong>, <strong>sticky foods</strong> and{" "}
          <strong>biting into hard food</strong> should be avoided so these fillings are not “pulled out”.
          <strong> Good oral hygiene and brushing</strong> will protect the tooth from decay around the
          filling.
        </p>
      </div>

      {/* Amalgam fillings */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Amalgam Fillings</h2>
        <p className="mt-2 text-slate-700">
          Sometimes teeth are <strong>slightly sensitive</strong> to new silver amalgam fillings for a few
          days or several weeks, but this usually resolves with time.
        </p>
      </div>

      {/* Stainless steel crowns */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Stainless Steel Crowns</h2>
        <p className="mt-2 text-slate-700">
          To avoid the cost and time of replacement, please have your child <strong>avoid sticky foods</strong>{" "}
          such as hard candy, caramel, and taffy. The crowned teeth will usually <strong>fall out
          normally</strong> when the permanent tooth is ready to come in.
        </p>
      </div>

      {/* Pulpotomy */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Pulpotomy</h2>
        <p className="mt-2 text-slate-700">
          The success of a pulpotomy depends on the severity of the dental infection and the body’s reaction
          to the treatment. If a pulpotomy is not performed, or if the nerve treatment fails and the tooth
          <strong> abscesses</strong>, the <strong>tooth must be extracted</strong>. In that event, a{" "}
          <strong>space maintainer</strong> will be needed to hold space for the permanent tooth. A tooth may
          abscess <strong>with or without pain</strong>; therefore, regular <strong>six (6) month
          check-ups</strong> are recommended to keep the tooth under observation.
        </p>
      </div>

      {/* Local anesthetic */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Local Anesthetic</h2>
        <p className="mt-2 text-slate-700">
          Typically the numb feeling may last <strong>2–4 hours</strong> after treatment, affecting the
          cheeks, lips, and tongue. This can be a curious sensation for a child—take care that your child{" "}
          <strong>does not bite, suck, or chew</strong> the lips, tongue, or cheek. Please keep to a{" "}
          <strong>liquid diet until the anesthetic has worn off</strong>. When the numbness (“bubbles”) wears
          off, there can be a <strong>10–15 minute</strong> period of increased tingling that may cause
          anxiety; reassure your child it will pass and, if needed, give <strong>Children’s Tylenol or
          Children’s Motrin</strong> as directed on the package.
        </p>
      </div>

      {/* Extractions */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Extractions</h2>
        <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
          <li>
            Give <strong>no carbonated beverages</strong>, <strong>no hot foods or drinks</strong>, and{" "}
            <strong>no snack chips for 24 hours</strong>.
          </li>
          <li>
            <strong>No drinking through a straw for 24 hours</strong> after tooth removal.
          </li>
          <li>
            <strong>No vigorous rinsing</strong> for 24 hours.
          </li>
          <li>
            To control minimal bleeding, have your child bite on a <strong>sterile gauze with light
            pressure</strong> for a few minutes.
          </li>
          <li>
            If minor swelling or pain occurs, apply an <strong>ice pack</strong> to the area (
            <strong>15 minutes on</strong> and <strong>15 minutes off</strong> for one hour). If swelling or
            pain persist, please text the office promptly.
          </li>
          <li>
            For discomfort give <strong>Children’s Tylenol</strong> or <strong>Children’s Motrin</strong>{" "}
            (liquid or pills—<strong>no chewables</strong>) as the package directs.
          </li>
        </ul>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="/appointments"
          className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400"
        >
          Request Appointment
        </a>
        <a href="tel:+17603305995" className="rounded-lg border px-4 py-2 hover:text-orange-400">
          Call Us!
        </a>
      </div>
    </section>
  );
}

