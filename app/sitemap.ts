// app/sitemap.ts
import type { MetadataRoute } from "next";
import { STATIC_PATHS, SERVICE_SLUGS } from "@/lib/siteMapData";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Combine, de-dupe, and (optionally) exclude /site-map
  const pages = new Set<string>([
    ...STATIC_PATHS.filter((p) => p !== "/site-map"),
    ...SERVICE_SLUGS,
  ]);

  const now = new Date().toISOString();

  return Array.from(pages).map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}

