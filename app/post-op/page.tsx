import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Treatment Instructions | Vista Kids Dental",
  description:
    "Click to expand easy, parent-friendly post-treatment instructions for numbness, resin fillings, stainless steel crowns & space maintainers, and extractions.",
  alternates: { canonical: "/post-treatment-instructions" },
  robots: { index: true, follow: true },
};

export default function PostTreatmentInstructionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Post Treatment Instructions</h1>

      <p className="mt-4 text-slate-700">
        Please select one of the following categories to view the recommended post-treatment instructions:
      </p>

      <div className="mt-6 space-y-4">
        {/* NUMBNESS */}
        <details className="group rounded-lg border text-white bg-sky-600 p-4 open:shadow">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <span className="text-lg font-medium">
              Numbness Post-Operative Instructions
            </span>
            <span
              className="transition-transform group-open:rotate-180"
              aria-hidden
            >
              ▼
            </span>
          </summary>
          <div className="mt-3 space-y-2 text-white">
            <p>The sensation of being numb after the appointment is typically the most challenging aspect for a child to understand.</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>It may take 1-4 hours for the numbness to wear off.</li>
              <li>Avoid eating foods that require much chewing (a soft food diet is recommended).</li>
              <li>Monitor your child closely so that he/she does not bite their tongue, cheek or lips.</li>
            </ul>
          </div>
        </details>

        {/* RESIN */}
        <details className="group rounded-lg border text-white bg-sky-600 p-4 open:shadow">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <span className="text-lg font-medium">
              Resin Post-Operative Instructions
            </span>
            <span className="transition-transform group-open:rotate-180" aria-hidden>▼</span>
          </summary>
          <div className="mt-3 space-y-2 text-white">
            <p>If your child is numb, please follow the Numbness Post-Operative Instructions listed above.</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Avoid sticky, hard candies and chewing on ice to prevent breaking the filling or crown.</li>
              <li>Avoid using front teeth to bite directly into hard food such as apples, carrots and corn on the cob.</li>
              <li>Limit drinking or eating dark colored beverages and foods as this may cause staining and discoloration of the resin material.</li>
              <li>
                It is important to note that resin fillings are prone to recurrent decay (new decay around the filling margin) and it
                should be brushed and flossed like a natural tooth.
              </li>
              <li>For any discomfort, Tylenol or Ibuprofen is recommended.</li>
            </ul>
          </div>
        </details>

        {/* STAINLESS STEEL CROWN & SPACE MAINTAINER */}
        <details className="group rounded-lg border text-white bg-sky-600 p-4 open:shadow">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <span className="text-lg font-medium">
              Stainless Steel Crown &amp; Space Maintainer Post-Operative Instructions
            </span>
            <span className="transition-transform group-open:rotate-180" aria-hidden>▼</span>
          </summary>
          <div className="mt-3 space-y-2 text-white">
            <ul className="list-disc space-y-1 pl-6">
              <li>Your child will be numb so please follow the post-op instructions for numbness</li>
              <li>To seat the crown or spacer correctly, work must be done just below the gumline; therefore, expect your child's gums to be sore for 2-3 days.</li>
              <li>Your child's gum tissue may bleed upon brushing for the next few days. To help with healing, keep the area clean by gently brushing two to three times a day and flossing.</li>
              <li>It may take a few days for your child to adjust to the crown or spacer. Do not let your child pick or pull at the crown or spacer as continuous force and pressure can pull it off.</li>
              <li>Your child should avoid sticky, hard candies (i.e. taffy, suckers, starbursts, caramels) for the life of the crown or spacer. Although it is cemented on to the tooth structure, these sticky foods can cause the crown or spacer to become loose.</li>
            </ul>
          </div>
        </details>

        {/* EXTRACTION */}
        <details className="group rounded-lg border text-white bg-sky-600 p-4 open:shadow">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <span className="text-lg font-medium">
              Extraction Post-Operative Instructions
            </span>
            <span className="transition-transform group-open:rotate-180" aria-hidden>▼</span>
          </summary>
          <div className="mt-3 space-y-2 text-white">
            <ul className="list-disc space-y-1 pl-6">
              <li>Have your child bite on the provided gauze until bleeding is controlled, which may take up to 30 minutes</li>
              <li>Remember that your child's cheek, lips and tongue may be numb for approximately 2-4 hours after the procedure.</li>
              <li>Avoid sippy cups, bottles, straws and pacifiers for the first 24 hours after the procedure. The sucking action may cause prolonged bleeding.</li>
              <li>Avoid salty, spicy, acidic or crunchy foods for the first 24 hours as this may irritate the extraction site. Cold and/or soft foods are a great choice (i.e. ice cream, applesauce, mac and cheese, etc.).</li>
              <li>Administer children's Tylenol or Motrin for any discomfort.</li>
              <li>Do not allow your child to participate in strenuous activity for the first 24 hours as this may increase bleeding from the extraction site.</li>
              <li>A small amount of oozing is normal; however, if bleeding becomes heavy, have your child bite on a gauze or tea bag for 15 minutes.</li>
              <li>If bleeding continues or is not controlled, call our office immediately.</li>
            </ul>
          </div>
        </details>
      </div>
    </main>
  );
}


