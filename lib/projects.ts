export type Project = {
  slug: string;
  num: string;
  cover: string;
  gallery: string[];
  hasNote?: boolean; // shows the disclaimer (Jaguars/Cartier)
};

const gal = (slug: string, n: number): string[] =>
  Array.from({ length: n }, (_, i) => `/work/gallery/${slug}-${String(i + 1).padStart(2, "0")}.jpg`);

export const PROJECTS: Project[] = [
  { slug: "jaguars", num: "01", cover: "/work/cover-jaguars.jpg", gallery: gal("jaguars", 5), hasNote: true },
  { slug: "pacific", num: "02", cover: "/work/cover-pacific.jpg", gallery: gal("pacific", 8) },
  { slug: "afterdark", num: "03", cover: "/work/cover-afterdark.jpg", gallery: gal("afterdark", 8) },
  { slug: "animalprint", num: "04", cover: "/work/cover-animalprint.jpg", gallery: gal("animalprint", 5) },
];
