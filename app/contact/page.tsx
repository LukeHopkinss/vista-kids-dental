export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 space-y-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="text-slate-700">
        1235 W Vista Way Ste. F Vista CA, 92083 ·{" "}
        <a className="underline" href="tel:+17605551234">(760) 555-1234</a> ·{" "}
      </div>
      <div className="aspect-[16/9] overflow-hidden rounded-lg border">
        <iframe
          title="map"
          width="100%" height="100%" loading="lazy" className="h-full w-full"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.7681972632686!2d-117.26791030000001!3d33.193951500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7154b5f4f1c9%3A0x27a70b0b159a4835!2s1235%20W%20Vista%20Way%20f%2C%20Vista%2C%20CA%2092083!5e0!3m2!1sen!2sus!4v1759170501548!5m2!1sen!2sus"
        />
      </div>
    </section>
  );
}
