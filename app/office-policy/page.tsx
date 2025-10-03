// app/office-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Policy",
  description:
    "Financial policy, insurance information, and scheduling guidelines for Pediatric Dentistry of Colleyville.",
  alternates: { canonical: "/office-policy" },
};

export default function OfficePolicy() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Office Policy</h1>
      <p className="mt-3 text-slate-700">
        We’re committed to a friendly, efficient visit for every child and family. Below you’ll find our
        guidelines for appointments, billing, privacy, and what to expect during visits.
      </p>

      {/* APpointments */}
      <div className="mt-10">
        <h2 className="text-xl font-medium">How Are Appointments Scheduled?</h2>
        <p className="mt-2 text-slate-700">
          The office attempts to schedule appointments at your convenience and when time is available. 
          Preschool children should be seen in the morning because they are fresher and we can work more slowly with the child for their comfort.  
          School children with a lot of work to be done should be seen in the morning for the same reason. 
          Dental appointments are an excused absence. 
          Missing school can be kept to a minimum when regular dental care is continued.
        </p>
      </div>

      {/* Financials */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Financial Arrangments</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Our mission is to provide affordable, high-quality treatment that fits your budget.</li>
            <li>Accepted payment methods: <strong>Cash, Check, and Visa, MasterCard, American Express, and Discover</strong>.</li>
            <li>Low and no-interest financing is available through <strong>CareCredit</strong>.</li>
            <li>If you have questions about financing or payment, please ask—we’ll explain your choices and work to accommodate your needs.</li>
            <li><strong>All deductible, coinsurance, non-covered services, and other charges not covered by insurance are due at the time of service.</strong></li>
        </ul>

    
      </div>

      {/* Insurance */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Insurance Policy</h2>
        <p className="mt-2 text-slate-700">
          Our office is committed to helping you <strong>maximize your insurance benefits</strong>. Because
          insurance policies vary, we can only estimate your coverage in good faith and <strong>cannot guarantee
          coverage</strong> due to the complexities of insurance contracts. As a courtesy, we will file your
          insurance; however, <strong>your estimated patient portion must be paid at the time of service</strong>.
          We are a preferred provider for many insurance plans; however, it is <strong>your responsibility to
          confirm</strong> with your insurance carrier that our dentist is currently under contract with your
          particular plan. Some plans require a referral prior to seeing a specialist; if required, please contact
          your primary dentist so you have the <strong>referral in hand at the time of your appointment</strong> to
          avoid rescheduling. We also suggest that you know your <strong>benefit coverage for specialist
          visits</strong>. To help us with your insurance filing, please provide <strong>all the required
          information</strong> to file a claim. We allow <strong>45 days</strong> from the date the claim is filed
          for the insurance company to pay; if your carrier does not pay within this time, <strong>you will be
          responsible for the entire balance</strong>. Please remember that <strong>insurance is a benefit for you
          and your child</strong>. Should your insurance change, we request <strong>48-hours’ notice</strong> prior
          to your appointment so we can obtain updated information.
        </p>
      </div>

      {/* Dental Insurance Facts */}
      <div className="mt-8">
        <h2 className="text-xl font-medium">Facts You Should Know About Dental Insurance</h2>
        <p className="text-slate-700">
            In an effort to help you understand your insurance policy and maximize your insurance benefits, we would
            like to share some facts about dental insurance with you.
        </p>
        <ol className="mt-3 space-y-2 text-slate-700">
            <li>
                <strong>FACT #1 –</strong> Dental insurance is a contract between you, your employer and the insurance
                company. We are not a party to that contract.
            </li>
            <li>
                <strong>FACT #2 –</strong> Dental insurance is NOT meant to cover all fees. It is meant to be an aid to
                your investment in your child’s dental healthcare. Many routine dental services are not covered by
                dental insurance.
            </li>
            <li>
                <strong>FACT #3 –</strong> Many carriers claim that they reimburse the insured promptly “up to 80% or up
                to 100% of the total fees.” In actuality, we have found that most plans cover about 40%–50% of average
                fees. Some plans pay more, some less. The less paid for the insurance by your employer, the less
                coverage you will receive.
            </li>
            <li>
                <strong>FACT #4 –</strong> Usual, Customary or Reasonable Fees (UCR), a term used by your insurance
                carrier, is an arbitrary amount which the insurance company chooses to pay for each procedure. It is
                not based on the average charge of practicing specialists in the area; it is merely the “allowable”
                amount they will reimburse so they can make a net 20%–30% profit. Our fees are within range of other
                pediatric dental offices in the area.
            </li>
            <li>
                <strong>FACT #5 –</strong> Insurance companies will not release the exact amount they will pay for a
                procedure until the treatment is completed and the claim is submitted. They will only state the
                percentage of their fee schedule that they will cover. We will make every effort to assure you receive
                maximum benefits. We will file your insurance at no charge. In order to provide this service, we will
                need your updated insurance information before each appointment. Please do not hesitate to ask questions
                about our financial policy. We want you to be comfortable in dealing with these matters. If you have any
                questions regarding your insurance, we ask that you contact your company regarding the specifics and
                details of your plan.
            </li>
        </ol>
      </div>
      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/appointments" className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400">
          Request Appointment
        </a>
      </div>
    </section>
  );
}
