import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const LOCALES = ["es", "en"];
const PAGES = [
  "",
  "/work",
  "/work/hant-xepe-hamiime",
  "/work/jaguars",
  "/work/pacific",
  "/work/afterdark",
  "/work/animalprint",
  "/contact",
];

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

  return entries;
}
