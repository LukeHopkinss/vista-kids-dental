// app/sitemap/page.tsx
import Link from "next/link";

type LinkItem = { href: string; label: string };

const sections: { title: string; links: LinkItem[] }[] = [
  {
    title: "Core",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/team", label: "Team" },
      { href: "/office-tour", label: "Office Tour" },
      { href: "/new-patient-forms", label: "New Patient Forms" },
      { href: "/appointments", label: "Request Appointment" },
      { href: "/contact", label: "Contact" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/sitemap", label: "Sitemap (this page)" },
    ],
  },
  {
    title: "Service Details",
    // Update these to match your actual service slugs
    links: [
      { href: "/services/exams-cleanings", label: "Exams & Cleanings" },
      { href: "/services/sealants-fluoride", label: "Sealants & Fluoride" },
      { href: "/services/sedation", label: "Sedation Options" },
    ],
  },
  {
    title: "System/SEO",
    links: [
      { href: "/sitemap.xml", label: "Sitemap XML" },
      { href: "/robots.txt", label: "robots.txt" },
      // List the thank-you page if you want it visible:
      { href: "/appointments/thank-you", label: "Appointment Thank You" },
    ],
  },
];

export default function HumanSitemap() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Sitemap</h1>
      <p className="mt-2 text-slate-600">
        A human-readable index of the main pages on this site.
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((sec) => (
          <div key={sec.title} className="rounded-lg border p-5">
            <h2 className="text-lg font-medium">{sec.title}</h2>
            <ul className="mt-3 space-y-2">
              {sec.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
