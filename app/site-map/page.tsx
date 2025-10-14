// app/site-map/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { STATIC_PATHS, SERVICE_SLUGS } from "@/lib/siteMapData";

export const metadata: Metadata = {
  title: "Site Map | Vista Kids Dental",
  description: "Quick links to pages on Vista Kids Dental.",
  alternates: { canonical: "/site-map" },
  robots: { index: false, follow: true }, // keep out of index; flip to true if you want it indexed
};

const prettify = (href: string) =>
  (href === "/" ? "Home" : href.replace(/^\//, "").replace(/-/g, " "))
    .replace(/\b\w/g, (m) => m.toUpperCase());

export default function SiteMapPage() {
  const staticLinks = STATIC_PATHS.filter((p) => p !== "/site-map"); // no self-link
  const serviceLinks = SERVICE_SLUGS; // already full paths like "/preventative"

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Site Map</h1>

      <h2 className="mt-8 text-xl font-medium">Pages</h2>
      <ul className="mt-3 list-disc pl-6 space-y-1">
        {staticLinks.map((href) => (
          <li key={href}>
            <Link href={href} className="underline text-sky-700">
              {prettify(href)}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-medium">Services</h2>
      <ul className="mt-3 list-disc pl-6 space-y-1">
        {serviceLinks.map((href) => (
          <li key={href}>
            <Link href={href} className="underline text-sky-700">
              {prettify(href)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
