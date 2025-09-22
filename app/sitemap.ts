// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

  const routes = [
    "", // home
    "/services",
    "/team",
    "/office-tour",
    "/new-patient-forms",
    "/appointments",
    "/contact",
    "/accessibility",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
