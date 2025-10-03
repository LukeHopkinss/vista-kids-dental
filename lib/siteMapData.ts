
/** Public, user-reachable static paths (no API, no thank-you, no drafts). */
export const STATIC_PATHS: string[] = [
  "/",
  "/about",
  "/services",
  "/appointments",
  "/contact",
  "/office-policy",
  "/post-op",
  "/accessibility",
  "/site-map", // human sitemap page
];

/** Slugs for /services/[slug] that are live on the site. */
export const SERVICE_SLUGS: string[] = [
  "cavities-and-fillings",
  "emergency-dental-care",
  "oral-health-exams",
  "preventative-dentistry",
  "restorative-dentistry",
  "sealants",
  "sedation-dentistry",
  "silver-diamine-fluoride",
  "digital-x-rays",
  "intraoral-camera",
];

/** Convenience builder to turn paths into absolute URLs. */
export function buildAbsoluteUrls(baseUrl: string) {
  const now = new Date();
  const pages = STATIC_PATHS.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const services = SERVICE_SLUGS.map((slug) => ({
    url: new URL(`/services/${slug}`, baseUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...services];
}
