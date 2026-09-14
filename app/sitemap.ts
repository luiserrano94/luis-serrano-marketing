import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { RESOURCES } from "@/lib/resources";
import { PRINT_SLUGS } from "@/lib/prints";

const LOCALES = ["es", "en"];
const STATIC = ["", "/work", "/resources", "/prints", "/contact", "/terms", "/shipping"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Build time — every deploy tells Google there is something new to recrawl.
  const lastModified = new Date();
  const paths = [
    ...STATIC,
    ...PROJECTS.map((p) => `/work/${p.slug}`),
    ...RESOURCES.map((r) => `/resources/${r.slug}`),
    ...PRINT_SLUGS.map((s) => `/prints/${s}`),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    for (const path of paths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
