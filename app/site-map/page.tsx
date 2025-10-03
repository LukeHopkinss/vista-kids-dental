import type { Metadata } from "next";
import Link from "next/link";
import { STATIC_PATHS, SERVICE_SLUGS } from "@/lib/siteMapData";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "Browse all public pages on Vista Kids Dental — services, new patient info, policies, contact, and more.",
  alternates: { canonical: "/site-map" },
  robots: { index: true, follow: true },
};

export default function SiteMapPage() {
  const staticLinks = STATIC_PATHS.filter((p) => p !== "/site-map"); // avoid self-link duplication
  const serviceLinks = SERVICE_SLUGS.map((s) => `/services/${s}`);

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Site Map</h1>

      <h2 className="mt-8 text-xl font-medium">Pages</h2>
      <ul className="mt-3 list-disc pl-6 space-y-1">
        {staticLinks.map((href) => (
          <li key={href}>
            <Link href={href} className="underline capitalize text-sky-700">
              {href === "/" ? "Home" : href.replace(/^\//, "").replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-medium">Services</h2>
      <ul className="mt-3 list-disc pl-6 space-y-1">
        {serviceLinks.map((href) => (
          <li key={href}>
            <Link href={href} className="underline capitalize text-sky-700">
              {href.split("/").pop()!.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}