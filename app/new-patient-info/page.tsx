// app/new-patient-info/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function NewPatientInfoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">New Patient Info</h1>

      <div className="mt-4 relative h-120 w-full overflow-hidden rounded-xl bg-slate-200">
        <Image
          src="/images/services/new-patient-child.jpg"
          alt="New Patients"
          fill
          sizes="(min-width: 640px) 720px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-medium">When should you take your child to see a dentist?</h2>
        <p className="mt-2 text-slate-700">
          Our office, as well as the American Academy of Pediatric Dentistry, recommends that your child visits the dentist by
          his/her 1st birthday.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <p>
          As a parent, you can make the first visit to the dentist enjoyable and positive. Your child should be informed of the
          visit and told that the dentist and their staff will explain all procedures and answer any questions. It is best if you
          refrain from using words around your child that might cause unnecessary fear, such as “needle”, “shot”, “pull”, “drill”
          or “hurt”. Our office makes a practice of using words that convey the same message, but are pleasant and non-frightening
          to the child.
        </p>
        <p>
          For the first visit, we invite you to stay with your child during the initial examination. For future appointments, we
          recommend that you allow your child to accompany our staff through the dental experience. You will be able to see your
          child throughout the appointment through our iPads. Even though you are not with them, you will always be able to see
          them. In addition, they are just 5-6 steps away. Our purpose is to gain your child's confidence and trust, and to overcome
          their apprehension.
        </p>
        <p>
          However, if you choose to, you may come with your child to the treatment room. For the safety and privacy of all
          patients, other children who are not being treated should remain in the reception room with a supervising adult.
        </p>
      </section>

      <section className="mt-10 rounded-lg border p-5">
        <h2 className="text-xl font-semibold">Ready to schedule an appointment?</h2>
        <p className="mt-2 text-slate-700">
          <Link href="/request-appointment" className="text-sky-600 underline underline-offset-2 hover:text-orange-400">
            You can schedule your appointment online
          </Link>
          , or give us a call at{" "}
          <a href="tel:+17603305995" className="text-sky-600 underline underline-offset-2 hover:text-orange-400">
            760-330-5995
          </a>{" "}
          .
        </p>
      </section>
    </main>
  );
}
