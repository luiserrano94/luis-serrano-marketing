import { MetadataRoute } from "next";

const BASE_URL = "https://luisserranomarketing.com";
const LOCALES = ["es", "en"];
const PAGES = ["", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
