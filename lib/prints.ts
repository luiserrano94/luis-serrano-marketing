import { PROJECTS, type Project } from "@/lib/projects";

/**
 * Works available as fine-art prints. A curated subset of the portfolio: the
 * four single-hero series. The HANT · XEPE · HAMÍIME editorial series is a
 * multi-image body of work, so it's left out of the print catalog for now.
 *
 * Prices/sizes/edition are uniform and live in lib/content.ts under `prints`.
 * Purchasing is intentionally disabled until physical print QA is approved
 * (plan §20); the catalog is browse-only.
 */
export const PRINT_SLUGS = ["pacific", "jaguars", "afterdark", "animalprint"] as const;

export const isPrintSlug = (s: string): boolean =>
  (PRINT_SLUGS as readonly string[]).includes(s);

export const PRINTS: Project[] = PRINT_SLUGS
  .map((s) => PROJECTS.find((p) => p.slug === s))
  .filter((p): p is Project => Boolean(p));
