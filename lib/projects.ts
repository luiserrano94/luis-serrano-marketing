// Layout for the editorial project pages. `rows` describe the concept+gallery
// composition per project: each row is a CSS grid (its `cols` template) whose
// cells are the concept block, the bottom rail, or a gallery image by index.
// Images always render at intrinsic ratio (height:auto) — never cropped.
export type Cell = "concept" | "rail" | { g: number };
export type Row = { cols: string; cells: Cell[] };

export type Project = {
  slug: string;
  num: string;
  cover: string;
  coverW: number;
  coverH: number;
  gallery: string[];
  hasNote?: boolean; // shows the Cartier disclaimer (Jaguars)
  rows: Row[];
};

const gal = (slug: string, n: number): string[] =>
  Array.from({ length: n }, (_, i) => `/work/gallery/${slug}-${String(i + 1).padStart(2, "0")}.jpg`);

export const PROJECTS: Project[] = [
  {
    slug: "jaguars",
    num: "01",
    cover: "/work/cover-jaguars.jpg",
    coverW: 960,
    coverH: 1200,
    gallery: gal("jaguars", 5),
    hasNote: true,
    rows: [
      { cols: "1.15fr 1fr 1fr", cells: ["concept", { g: 0 }, { g: 1 }] },
      { cols: "1fr 1fr 1fr 0.55fr", cells: [{ g: 2 }, { g: 3 }, { g: 4 }, "rail"] },
    ],
  },
  {
    slug: "pacific",
    num: "02",
    cover: "/work/cover-pacific.jpg",
    coverW: 1456,
    coverH: 816,
    gallery: gal("pacific", 8),
    // g7 (street entrance) excluded: it is the same shot as the hero.
    rows: [
      { cols: "1fr 1.85fr", cells: ["concept", { g: 0 }] },
      { cols: "1fr 1fr", cells: [{ g: 1 }, { g: 2 }] },
      { cols: "1fr 1fr", cells: [{ g: 3 }, { g: 4 }] },
      { cols: "1fr 1fr", cells: [{ g: 5 }, { g: 6 }] },
    ],
  },
  {
    slug: "afterdark",
    num: "03",
    cover: "/work/cover-afterdark.jpg",
    coverW: 941,
    coverH: 1672,
    gallery: gal("afterdark", 8),
    // captions 01..07 in reading order, each on its scene: g5 tray(01) g3 motion(02)
    // g2 pour(03) / g6 couple(04) g1 piano(05) g0 toast(06) g4 pour(07).
    // g7 excluded: it is the same shot as the hero.
    rows: [
      { cols: "1.3fr 1fr 1fr 1fr", cells: ["concept", { g: 5 }, { g: 3 }, { g: 2 }] },
      { cols: "1fr 1fr 1fr 1fr", cells: [{ g: 6 }, { g: 1 }, { g: 0 }, { g: 4 }] },
    ],
  },
  {
    slug: "animalprint",
    num: "04",
    cover: "/work/cover-animalprint.jpg",
    coverW: 960,
    coverH: 1200,
    gallery: gal("animalprint", 5),
    // g0 leopard(02) g2 peacock(03) / g3 fox(04) g1 ostrich(05).
    // g4 zebra excluded: it is the same shot as the hero.
    rows: [
      { cols: "1.2fr 1fr 1fr", cells: ["concept", { g: 0 }, { g: 2 }] },
      { cols: "1fr 1fr", cells: [{ g: 3 }, { g: 1 }] },
    ],
  },
];
