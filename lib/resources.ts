/**
 * Resources — structural data (locale-independent). Localized copy lives in
 * lib/content.ts under `resources` (index, categories, formats, gate, items),
 * keyed by slug. Bodies are intentionally placeholders until Luis writes each
 * guide; the index metadata ("what's inside") is an outline, not the guide.
 */

export type ResourceCategory = "agents" | "tools" | "creative" | "coding";
export type ResourceFormat = "quick" | "guide" | "playbook";

export interface Resource {
  slug: string;
  category: ResourceCategory;
  format: ResourceFormat;
}

export const RESOURCES: Resource[] = [
  { slug: "openmemory", category: "agents", format: "guide" },
  { slug: "claude-code-setup", category: "coding", format: "playbook" },
  { slug: "openreply", category: "tools", format: "guide" },
  { slug: "ai-visual-workflow", category: "creative", format: "playbook" },
];

export const getResource = (slug: string) => RESOURCES.find((r) => r.slug === slug);
