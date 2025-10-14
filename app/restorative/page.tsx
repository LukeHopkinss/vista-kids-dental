import Image from "next/image";
import Link from "next/link";

export default function RestorativePage() {
  const subs = [
    { href: "#white-fillings", label: "White Fillings" },
    { href: "#pulp-therapy", label: "Pulp Therapy" },
    { href: "#crowns", label: "Crowns" },
    { href: "#sdf", label: "Silver Diamine Fluoride" },
    { href: "#space-maintainers", label: "Space Maintainers" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Restorative Dentistry for Kids</h1>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {subs.map((b) => (
          <a key={b.href} href={b.href} className="rounded-lg border px-4 py-2 text-center hover:bg-sky-600 hover:text-white">
            {b.label}
          </a>
        ))}
      </div>

      <section className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <p className="mt-2 text-slate-700">
          Sometimes, children's teeth need a little dental work performed in order to
          improve or restore overall oral health. Some children face higher natural risk factors for tooth decay, damage, or disease than others. Dr. Ta is experienced, patient, and gentle enough to restore any child's precious smile.
        </p>

        <figure className="mt-4 md:float-right md:ml-4 md:mb-2 w-full md:w-64">
          <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-200">
            <Image
              src="/images/services/restorative-child.jpg"
              alt="Restorative care illustrative"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </figure>

        <p className="mt-2 text-slate-700">
          Restorative dentistry refers to the prevention and treatment of diseases of the teeth in order to restore or bring them back to their best health. Restorative dentistry also includes the repair or replacement of damaged or defective teeth.
        </p>
        <p className="mt-2 text-slate-700">
          Restorative dentistry is an important branch of dental services that helps restore the function, health, and appearance of the teeth. Children who have suffered from dental trauma, tooth decay, or gum disease will need to have their teeth treated to restore them to their optimal condition.
        </p>
        <p className="mt-2 text-slate-700">
          This can range from filling cavities and protecting weak teeth with crowns or treating diseased or severely decayed teeth with root canal treatment. Your child's comfort is our priority which is why we offer dental sedation for children who have dental anxiety, special needs, or who have a hard time cooperating during dental appointments.
        </p>
        <p className="mt-2 text-slate-700">
          If your child has a damaged, infected, decayed, or diseased tooth, <a className="underline text-orange-400" href="/contact">contact us</a> at <a className="underline text-sky-600" href="/appointments">Vista Kids Dental</a> today. Schedule a restorative dental appointment with <a className="underline text-sky-600" href="/about#about-dr-ta">Dr. Ta</a> and get your child's oral health back on track.
        </p>
      </section>

      <section id="white-fillings" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">White Fillings</h2>
        <p className="mt-2 text-slate-700">
          Fillings are used to fill cavities by removing the decayed portion of the tooth  and filling the structure of the tooth back up with a dental filling material. The process is quick, painless, and minimally invasive.
        </p>
        <p className="mt-2 text-slate-700">
          These fillings are made out of tooth-colored composite resin. In the old days, silver amalgam was the most common material used for fillings, but recent concerns over mercury and their discoloring effect on visible teeth have phased them out of common use in dentistry.
        </p>
        <p className="mt-2 text-slate-700">
          Composite resin fillings look like natural teeth, blending in with what's left of your tooth's natural structure. The material is a type of plastic that is cured with a blue  light to instantly harden.
        </p>
      </section>

      <section id="pulp-therapy" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Pulp Therapy</h2>
        <p className="mt-2 text-slate-700">
          A pulp therapy is performed when your tooth's soft center, known as the pulp, has become inflamed, damaged, or infected. This can be caused by untreated tooth decay or trauma to the tooth. When the pulp has become damaged or infected, it needs to be removed and disinfected before a restoration can be placed.
        </p>
        <p className="mt-2 text-slate-700">
          If the affected tooth is a deciduous (baby) tooth, we would perform something called a nerve treatment or a pulpotomy. This procedure involves removing the damaged pulp chamber and applying a medicated filling to the area but leaving the tooth's nerve intact. The tooth is filled and sometimes requires the placement of a crown.
        </p>
        <p className="mt-2 text-slate-700">
          If the affected tooth is a permanent tooth, a root canal procedure is performed. This procedure involves removing the pulp from the tooth, cleaning out the canals, and filling the tooth with a rubber gutta-percha material. This procedure, also known as a pulpectomy, would be the treatment for a damaged permanent tooth. The procedure is commonly finished off with the placement of a dental crown to protect the vulnerable tooth from further damage or reinfection.
        </p>
      </section>

      <section id="crowns" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Anterior &amp; Posterior Crowns</h2>
        <p className="mt-2 text-slate-700">
          Dental crowns are used to protect damaged, fractured, vulnerable, or aesthetically displeasing teeth. When a tooth has become cracked, chipped, undergone trauma due to injury, or has been treated with a root canal due to severe decay, it's important to protect the tooth from wear and tear.
        </p>
        <p className="mt-2 text-slate-700">
          A tooth in this condition would be weakened and unable to sustain the same amount of force as the other teeth, which is when we place a durable cap known as a crown over the affected tooth. Crowns are strong and can look just like real teeth, allowing them to restore the structure and functionality of your tooth.
        </p>
        <p className="mt-2 text-slate-700">
          We carry two kinds of dental crowns; stainless steel and ceramic. We recommend stainless steel crowns for the posterior teeth due to their increased durability, lifespan, cost, and ability to withstand the force of chewing in the rear molars. These crowns help fully restore the function of the tooth and will fall out when the baby tooth is ready to come out.
        </p>
        <p className="mt-2 text-slate-700">
          Though stainless steel crowns are ideal for the posterior teeth in children, they can pose an aesthetic problem in the anterior teeth which are visible when the child smiles. Ceramic crowns are made of tooth-colored porcelain materials and will leave your child with a beautiful smile. Because of their increased cost and reduced durability and lifespan, they are better suited to permanent front teeth.
        </p>
      </section>

      <section id="sdf" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Silver Diamine Fluoride</h2>
        <p className="mt-2 text-slate-700">
          Silver Diamine Fluoride (SDF) is an excellent alternative to dental fillings for cavities in baby teeth. This fast, non-invasive treatment allows <a className="underline text-sky-600" href="/about#about-dr-ta">Dr. Ta</a> to quickly and easily treat tooth decay, restore your child's tooth, and protect it until an adult tooth grows in and replaces it. <a className="underline text-orange-400" href="/contact">Contact us</a> for a consultation now, and see if SDF treatment is right for your little one.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-orange-400">Explaining The Basics Of Silver Diamine Fluoride</h3>
        <p className="mt-2 text-slate-700">
          Silver Diamine Fluoride, often shortened to SDF, is a treatment that's used to treat cavities as an alternative to dental fillings. It's almost exclusively used to treat baby teeth.
          It consists of a blend of ammonia, silver, fluoride, and water.
          When this unique mixture is applied to a cavity in your child's tooth, the ingredients kill any remaining bacteria, halt the progression of decay, and strengthen the remaining tooth structure. This stops the cavity from getting worse.
          The main reason that SDF is only used for baby teeth is that the treatment stains the treatment area black. This does not harm the tooth at all, but it will be permanently stained. This is not a big deal for baby teeth, though, since they will fall out and be replaced by adult teeth in the future.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">The SDF Treatment Process</h3>
        <p className="mt-2 text-slate-700">
          The process of applying SDF takes less than a minute, and is often done after a teeth cleaning and oral exam at <a className="underline text-sky-600" href="/appointments">Vista Kids Dental</a>. <a className="underline text-sky-600" href="/about#about-dr-ta">Dr. Ta</a> will simply use a small brush to apply a thin layer of SDF to your child's tooth after it's been cleaned.
          The SDF then will harden and bond to the tooth, protecting it from further decay. That's it! There's no special aftercare required, and you and your child will be sent home to resume your normal day-to-day activities.
        </p>
        <p className="mt-2 text-slate-700">
          In the future, Dr. Ta will check the tooth during your child's six-month appointments at our office and may re-apply SDF to ensure the tooth remains strong and healthy until it falls out naturally and is replaced by an adult tooth.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">The Benefits Of Silver Diamine Fluoride</h3>
        <p className="mt-2 text-slate-700">
          SDF has a lot of great benefits, particularly when compared to other treatments for cavities like fillings.
          First, it requires absolutely no tooth preparation. No enamel has to be removed by a dental drill, unlike dental fillings and crowns. This makes the process a lot faster and easier for your child, particularly if they're nervous or anxious about dentistry.
          SDF is also much cheaper compared to dental fillings, which can cost hundreds of dollars even for baby teeth. It's also covered by most dental insurance plans, though we recommend that you consult directly with your provider to check your coverage before treatment.
          Just like a filling, SDF also helps address the discomfort of a cavity. Because it contains fluoride and other powerful chemicals that help strengthen the teeth, it relieves sensitivity to heat and cold, and allows your child to continue their day-to-day routine without worrying about tooth sensitivity.
        </p>
      </section>

      <section className="mt-10 scroll-mt-32 md:scroll-mt-40" id="space-maintainers">
        <h2 className="text-2xl font-medium">Space Maintainers</h2>
        <p className="mt-2 text-slate-700">
          What Is a Space Maintainer?
          A space maintainer is an oral device made out of stainless steel designed to perform the same function as the lost baby tooth: maintaining the space to prevent shifting teeth and to guide the permanent tooth into the correct spot.
        </p>
        <p className="mt-2 text-slate-700">
          The space maintainer connects to the adjacent teeth and holds the gap open until the permanent tooth is ready to erupt at which point it will be removed. There are different kinds of space maintainers depending on the location and type of tooth that has been lost. 
        </p>
        <p className="mt-2 text-slate-700">
          If your child has lost a baby tooth too soon, contact us at <a className="underline text-sky-600" href="/appointments">Vista Kids Dental</a>. Schedule a consultation for a space maintainer with <a className="underline text-sky-600" href="/about#about-dr-ta">Dr. Ta</a> today.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">What Will Happen If My Child Does Not Get A Space Maintainer?</h3>
        <p className="mt-2 text-slate-700">
          Many parents mistakenly believe that a prematurely lost baby tooth is no big deal since it's supposed to fall out eventually anyway. However, losing a baby tooth too soon can have detrimental orthodontic consequences. Your child's baby teeth perform various jobs, such as:
          The functionality of the tooth to speak and chew
          Maintaining space for the permanent tooth to erupt
          Preventing the surrounding teeth from moving
          When a tooth is lost before it is due to naturally fall out, the permanent tooth will not erupt in its place for a long time. While there is a gap in your teeth, the surrounding teeth will shift, resulting in crooked or overcrowded teeth, teeth that lean into the space where your previous tooth was, and the inability for the permanent tooth to erupt properly.
        </p>
        <p className="mt-2 text-slate-700">
          If your child doesn't get a space maintainer, the teeth on either side of the gap will lean into the space and prevent the permanent tooth from erupting properly.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">Types of Space Maintainers for Children</h3>
        <p className="mt-2 text-slate-700">
          Band and Loop - Instead of using a dental crown over the abutment tooth, a stainless steel band is placed around the abutment tooth and connected to the wire loop that holds the space open. This is ideal for one missing tooth.
        </p>
        <p className="mt-2 text-slate-700">
          Lower Lingual Arch - This is a space maintainer for multiple bilateral missing teeth. It is a wire made of stainless steel that is placed on the palatal arch and connected to the permanent rear molars.
        </p>
        <p className="mt-2 text-slate-700">
          Distal Shoe - This space maintainer is used when the second baby molars have been lost too soon and it prevents the movement of the first permanent molars.
        </p>
        <p className="mt-2 text-slate-700">
          Nance - This space maintainer places bands on the first permanent molars and is a maxillary lingual arch that doesn't come into contact with the front teeth. The wire bar extends beyond the anterior teeth and rests on the roof of the mouth.
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
