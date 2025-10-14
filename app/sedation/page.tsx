import Image from "next/image";
import Link from "next/link";

export default function SedationPage() {
  const subs = [
    { href: "#nitrous", label: "Nitrous Oxide Sedation" },
    { href: "#oral-conscious", label: "Oral Conscious Sedation" },
    { href: "#general-anesthesia", label: "General Anesthesia" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Sedation Dentistry</h1>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {subs.map((b) => (
          <a key={b.href} href={b.href} className="rounded-lg border px-4 py-2 text-center hover:bg-sky-600 hover:text-white">
            {b.label}
          </a>
        ))}
      </div>

      <section className="mt-8 text-slate-700">
        <p>
          At Vista Kids Dental, we're dedicated to providing safe, comfortable care for kids of all ages. And if your little one is nervous about an upcoming dental procedure, dental sedation may be the best way to keep them calm and ensure a smooth, stress-free experience.
          Dr. Ta has years of experience with pediatric sedation dentistry, and is here to help your child get the care they need in Vista. <a className="underline text-sky-600" href="/appointments">Contact us</a> now to schedule a consultation.
        </p>
      </section>

      <div className="mt-4 relative h-100 w-full overflow-hidden rounded-xl bg-slate-200">
        <Image
          src="/images/services/sedation-child.jpg"
          alt="Sedation Dentistry placeholder"
          fill
          sizes="(min-width: 640px) 720px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-medium">We Offer Safe Sedation Dentistry For Your Child's Comfort</h2>
        <p className="mt-2 text-slate-700">
          As long as your child is healthy and does not have any conditions that may interfere with sedation, they are a candidate for sedation dentistry at Vista Kids Dental. We are 100% dedicated to patient safety. Dr. Ta will meet with you before their appointment to discuss their anxiety, their health history, medication they're taking, and other details.
        </p>
        <p className="mt-2 text-slate-700">
          Not only that, but your child will be closely monitored throughout their treatment process. Our dental team will keep an eye on them and ensure that they are safe, no matter which type of sedation they are getting at our office.
        </p>
        <p className="mt-2 text-slate-700">
          With sedation dentistry at our office, Dr. Ta can help your child feel more comfortable, and avoid feelings of fear and anxiety. Beyond this, sedation also helps your child stay still, speeding up the treatment process. Sedation dentistry even helps with the fear of needles and impairs the gag reflex, which can be very valuable when treating kids.
        </p>
      </section>

      <section id="nitrous" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Nitrous Oxide Sedation</h2>
        <p className="mt-2 text-slate-700">
          Nitrous oxide, otherwise known as laughing gas, is the best method of sedation for most kids. It uses a comfortable nose mask, so there's no need for pills or liquid sedatives. Your child just breathes through their nose, and a mixture of nitrous oxide and oxygen flows into their lungs.
          This will make them feel happy, reduce feelings of fear, and even improve their pain tolerance, which provides them with a much better dental experience. Best of all, nitrous oxide wears off within 5 minutes, so you and your child can get back to your normal daily routines.
        </p>
      </section>

      <section id="oral-conscious" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Oral Conscious Sedation</h2>
        <p className="mt-2 text-slate-700">
          In young kids, a liquid sedative is used to deliver oral conscious sedation. Pills are preferred for older kids who can swallow them. These sedatives will make your child feel very tired and sleepy. They may even fall asleep and/or forget what happens during their dental procedure.
        </p>
        <p className="mt-2 text-slate-700">
          However, they will not be unconscious. They can breathe on their own, be woken up, and respond to commands when necessary. This makes oral conscious sedation a good choice for kids who need a deeper method of sedation than nitrous oxide.
        </p>
      </section>

      <section id="general-anesthesia" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">General Anesthesia</h2>
        <p className="mt-2 text-slate-700">
          General anesthesia is typically used only in very serious oral surgeries. This is because it renders your child completely unconscious. General; anesthesia is performed with an anesthesiologist. The anesthesiologist will monitor the patient while the dental treatment is performed by Dr. Ta.
        </p>
        <p className="mt-2 text-slate-700">
          General anesthesia can be performed at Rady Children Hospital for children with special needs or in-office for older healthy children. Dr. Ta will guide you regarding which treatment environment is appropriate for your child.
        </p>
        <p className="mt-2 text-slate-700">
          General anesthesia is always our last resort, since other methods of sedation are much less intense, and are also more affordable.
        </p>
      </section>

      <div className="mt-10 flex w-full justify-center">
        <Link
            href="/appointments"
            className="inline-block rounded-lg bg-sky-600 px-6 py-3 text-white font-medium hover:bg-orange-400"
        >
            Request Appointment
        </Link>
      </div>
    </main>
  );
}

