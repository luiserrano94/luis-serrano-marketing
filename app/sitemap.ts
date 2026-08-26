import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const LOCALES = ["es", "en"];
const PAGES = ["", "/services", "/about", "/contact"];

// Landing pages live outside /[locale]
const LANDINGS = ["/diseno-web", "/web-design"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Build time — every deploy tells Google there is something new to recrawl.
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  for (const landing of LANDINGS) {
    entries.push({
      url: `${SITE_URL}${landing}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  return entries;
}
