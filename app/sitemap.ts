import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const LOCALES = ["es", "en"];
const PAGES = ["", "/services", "/about", "/contact"];

// Use a fixed date — update this when content actually changes
const LAST_MODIFIED = new Date("2025-05-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
