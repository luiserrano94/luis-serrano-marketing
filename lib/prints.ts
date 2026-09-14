import { PROJECTS, type Project } from "@/lib/projects";

/**
 * Works available as fine-art prints. Every portfolio series is eligible —
 * prints are sold as individual artworks selected from a series, not as whole
 * series, so a multi-image series like HANT · XEPE · HAMÍIME is represented by
 * a chosen image (its cover for now). The exact image(s) offered per series are
 * finalized separately.
 *
 * Prices/sizes/edition are uniform and live in lib/content.ts under `prints`.
 * Purchasing is disabled until physical print QA is approved (plan §20); the
 * catalog is browse-only.
 */
export const PRINT_SLUGS = ["hant-xepe-hamiime", "jaguars", "pacific", "afterdark", "animalprint"] as const;

export const isPrintSlug = (s: string): boolean =>
  (PRINT_SLUGS as readonly string[]).includes(s);

export const PRINTS: Project[] = PRINT_SLUGS
  .map((s) => PROJECTS.find((p) => p.slug === s))
  .filter((p): p is Project => Boolean(p));
