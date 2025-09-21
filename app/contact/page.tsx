export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 space-y-4">
      <h1 className="text-3xl font-semibold">contact</h1>
      <div className="text-slate-700">
        123 main st, vista, ca ·{" "}
        <a className="underline" href="tel:+17605551234">(760) 555-1234</a> ·{" "}
        <a className="underline" href="sms:+17605551234">text us</a>
      </div>
      <div className="aspect-[16/9] overflow-hidden rounded-lg border">
        <iframe
          title="map"
          width="100%" height="100%" loading="lazy" className="h-full w-full"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Vista%20CA&output=embed"
        />
      </div>
    </section>
  );
}
