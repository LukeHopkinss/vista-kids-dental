import type { MetadataRoute } from "next";
import { buildAbsoluteUrls } from "@/lib/siteMapData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vistakidsdental.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildAbsoluteUrls(SITE_URL);
}
