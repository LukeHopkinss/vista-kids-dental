export default function PreventativePage() {
  const subs = [
    { href: "#dental-exam", label: "Dental Exam" },
    { href: "#infant-exam", label: "Infant Exam" },
    { href: "#tooth-sealants", label: "Tooth Sealants" },
    { href: "#fluoride-treatment", label: "Fluoride Treatment" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Preventive Dental Services</h1>

      {/* Page-only sub buttons */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {subs.map((b) => (
          <a key={b.href} href={b.href} className="rounded-lg border px-4 py-2 text-center hover:bg-sky-600 hover:text-white">
            {b.label}
          </a>
        ))}
      </div>


      <section id="dental-exam" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Dental Exam</h2>
        <p className="mt-2 text-slate-700">
          At Vista Kids Dental, your child's dental exam is much more than just a cavity check. Our specialty may be oral health, but we know that children are much more than just a mouth with teeth. Our exams are comprehensive, looking at your child as a whole. We make sure to include everything from an airway evaluation to space analysis, and everything in between. In addition, our dental exams always include instructions on brushing and flossing, as well as a discussion on diet and figuring out the best strategies to keep your child cavity free!!
        </p>
      </section>

      <section id="infant-exam" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Infant Exam</h2>
        <p className="mt-2 text-slate-700">
          The American Academy of Pediatric Dentistry advises parents to create their child's “dental home” around the time of the child's first birthday or whenever their first teeth erupt, whatever comes first. It may seem odd to take a child to the dentist that early, but the establishment of a dental home is one of the best ways to set the foundation for your child's healthy smile for life!
        </p>
        <p className="mt-2 text-slate-700">
          During the infant visit, our board certified pediatric dentist will evaluate your child's oral development to ensure everything is erupting properly and, most importantly, answer any questions that you may have regarding how to care for the oral health of your child.
        </p>
        <p className="mt-2 text-slate-700">
          Topics we will discuss during the infant visit include:
          <br />Appropriate toothbrush and toothpaste to use for your child
          <br />When to start brushing
          <br />How to brush an uncooperative child's teeth
          <br />Diet, including breastfeeding and bottle feeding
          <br />Sugars! And how to make the “best” choices of treats for your child
        </p>
      </section>

      <section id="tooth-sealants" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Tooth Sealants</h2>
        <p className="mt-2 text-slate-700">
          At Vista Kids Dental, our number one goal is the prevention of cavities and disease for your child. In addition to proper oral hygiene and a healthy diet, one of our greatest tools for cavity prevention are dental sealants.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-orange-500">What are sealants?</h3>
        <p className="mt-2 text-slate-700">
          Sealants are a thin coating that are placed in the grooves of our back teeth (molars and premolars). We like to think of them as a protective shield for the tooth.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">Why are sealants beneficial?</h3>
        <p className="mt-2 text-slate-700">
          Our back teeth (molars and premolars) have very deep grooves. Even with great brushing, grooves in the teeth can be difficult to keep clean, allowing for the accumulation of food, plaque, and bacteria, increasing the chance of cavities. The sealant “seals” these grooves, lowering the accumulation of food and plaque, which as a result, lowers the chance of decay (cavities) in these teeth.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">When will my child receive sealants?</h3>
        <p className="mt-2 text-slate-700">
          Most of the time, sealants are placed when the first permanent molars have erupted in your child's mouth (around age 6), however, some children may benefit from sealants even on their baby teeth. During each dental exam, our doctor will discuss when sealants will be appropriate for your child.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">How long do sealants last?</h3>
        <p className="mt-2 text-slate-700">
          It depends! There are many factors that determine how long a sealant may last in your child's mouth, such as diet, how they chew, etc. At every dental exam, we will evaluate your child's sealants and touch them up if they appear to be chipping.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">Do sealants hurt?</h3>
        <p className="mt-2 text-slate-700">
          NO! Think of sealants like “nail polish for the tooth”. There is no drilling or numbing necessary and each one takes 1-2 minutes to place. We will show your child each step and make sure they are comfortable the entire time.
        </p>

        <p className="mt-4 text-slate-700">
          Dental sealants are thin coatings that when painted on the chewing surfaces of the back teeth (molars) can prevent cavities (tooth decay) for many years. Sealants protect the chewing surfaces from cavities by covering them with a protective shield that blocks out germs and food.
        </p>
      </section>

      <section id="fluoride-treatment" className="mt-10 scroll-mt-32 md:scroll-mt-40">
        <h2 className="text-2xl font-medium">Fluoride Treatment</h2>
        <p className="mt-2 text-slate-700">
          We understand that taking care of your child's wellbeing is your number one priority. At Vista Kids Dental, we are here to help you do that by preventing cavities and keeping little smiles healthy. With regular fluoride treatments, we can strengthen weakened enamel and keep cavities at bay.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">What Is Fluoride?</h3>
        <p className="mt-2 text-slate-700">
          Fluoride is a mineral that occurs naturally and is commonly found in water, tea, eggs, and other types of foods. Almost all water contains at least a little bit of fluoride, but usually not enough to help prevent tooth decay. When a tooth begins to be weakened by oral bacteria (plaque and tartar), soft spots form. These soft spots are depleted of key minerals that keep teeth strong. Fluoride works by soaking into the soft spots and attracting these healthy minerals back into the tooth.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">Is Fluoride Treatment Safe?</h3>
        <p className="mt-2 text-slate-700">
          As a parent, it is completely understandable to be concerned about the safety of what is going into your child's body. If you're wondering about the toxicity of fluoride, we want to assure you that fluoride treatments are completely safe and highly effective in preventing tooth decay. Fluoride is a natural mineral that we all come in contact with almost daily. Fluoride is present in water, toothpastes, and even supplements which are all safe when used properly. In fact, research indicates that water fluoridation has decreased the rate of tooth decay by over 50 percent. Just think how much more effective and safe fluoride treatments are since they are administered by a highly trained professional in a healthcare setting such as our office!
        </p>
        <p className="mt-2 text-slate-700">
          At Vista Kids Dental, we spend time with you to discuss the safe usage of fluoride treatments, toothpaste, and rinses to ensure you are comfortable, confident, and informed every step of the way. We'll work together to create an at-home regime that compliments our in-office treatments and suits your child's unique needs. Our pediatric dental specialist considers multiple factors, such as the developmental age of your child, when developing our treatment plans and recommendations.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">Does My Child Need Fluoride Treatments?</h3>
        <p className="mt-2 text-slate-700">
          According to the American Dental Association and the American Academy of Pediatric Dentistry, children at moderate caries (tooth decay) risk should receive a professional fluoride treatment at least every six months, and that children of high risk should receive fluoride treatment more frequently, every three to six months.
        </p>
        <p className="mt-2 text-slate-700">
          Fluoride treatments are extremely common and dentists have effectively used them for decades to help protect the oral health of children and adults, especially patients who may be at a higher risk of developing tooth decay. Factors that can contribute to a higher risk of developing cavities include a history of dental decay, poor oral hygiene, or health issues that affect the health of tooth enamel. For these cases, we usually recommend topical fluoride treatments every three to six months. Every child is different though, so it is best to discuss any questions you may have at your next cleaning appointment.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-sky-600">What Is the Fluoride Treatment Process Like?</h3>
        <p className="mt-2 text-slate-700">
          At your child's routine dental visit, we apply a fluoride solution to each tooth with a brush. After the treatment, your little one should not rinse, eat, or drink for at least 30 minutes to allow the teeth to absorb the fluoride. That's it! Fluoride treatments are a simple part of any oral healthcare routine.
        </p>
        <p className="mt-2 text-slate-700">
          If you are interested in helping to reduce your child's risk of developing cavities, fluoride treatment can make a big difference.
        </p>
        <p className="mt-2 text-slate-700">
          Fluoride treatments use a thin layer of fluoride-rich “varnish” that's painted onto your child's teeth after their teeth cleaning. This process takes only a few minutes, and is very beneficial for kids, especially those prone to cavities.
        </p>
        <p className="mt-2 text-slate-700">
          Fluoride helps strengthen the teeth and can even reverse very minor decay (soft spots). It attracts minerals like calcium and phosphates to the teeth to make them stronger and protect your child's oral health.
        </p>
      </section>
    </main>
  );
}

