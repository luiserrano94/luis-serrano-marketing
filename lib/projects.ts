// Layout for the editorial project pages. `rows` describe the concept+gallery
// composition per project: each row is a CSS grid (its `cols` template) whose
// cells are the concept block, the bottom rail, or a gallery image by index.
// Images always render at intrinsic ratio (height:auto) — never cropped.
export type Cell = "concept" | "rail" | { g: number };
// `size` is an optional per-row scale: "full" breaks the row out to the maxw
// edges (immersive); "quiet" caps and centers it (breathing room / human-scale).
export type Row = { cols: string; cells: Cell[]; size?: "full" | "quiet" };

export type Project = {
  slug: string;
  num: string;
  cover: string;
  coverW: number;
  coverH: number;
  gallery: string[];
  hasNote?: boolean; // shows the Cartier disclaimer (Jaguars)
  kind?: "editorial"; // bespoke editorial page (HANT · XEPE · HAMÍIME) instead of the rows template
  rows: Row[];
};

const gal = (slug: string, n: number): string[] =>
  Array.from({ length: n }, (_, i) => `/work/gallery/${slug}-${String(i + 1).padStart(2, "0")}.jpg`);

export const PROJECTS: Project[] = [
  {
    // Flagship editorial project — bespoke page (see components/work/HantXepe.tsx).
    // Cover / thumbnail / representative image is always the submerged moon (iizax).
    slug: "hant-xepe-hamiime",
    num: "01",
    cover: "/work/cover-hant-xepe-hamiime.jpg",
    coverW: 1456,
    coverH: 816,
    gallery: [
      "/work/hxh/iizax.jpg",
      "/work/hxh/azoj.jpg",
      "/work/hxh/xepe.jpg",
      "/work/hxh/hax.jpg",
      "/work/hxh/azojcpoc.jpg",
      "/work/hxh/moosni.jpg",
      "/work/hxh/footprint.jpg",
      "/work/hxh/hantxepe.jpg",
    ],
    kind: "editorial",
    rows: [],
  },
  {
    slug: "jaguars",
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
  {
    // Conceptual greenhouse nursery-café read as a landscape. Continuous,
    // image-led editorial rhythm (no bespoke page). The hero "The Canopy"
    // lives in .phero and is not repeated in the body. Gallery = body order:
    // g0 Exterior, g1 Floating Rooms, g2 Among the Garden, g3 Glass Nest,
    // g4 The Forum, g5 Falling Water, g6 The Bar.
    slug: "under-glass",
    num: "06",
    cover: "/work/cover-under-glass.jpg",
    coverW: 960,
    coverH: 1200,
    gallery: gal("under-glass", 7),
    rows: [
      { cols: "1fr", cells: [{ g: 0 }], size: "full" },                    // Exterior — monumental scale
      { cols: "1fr 1.15fr", cells: ["concept", { g: 1 }] },                // concept + Floating Rooms
      { cols: "1fr 1fr", cells: [{ g: 2 }, { g: 3 }], size: "quiet" },     // Among the Garden + Glass Nest — intimate, breathing room
      { cols: "1fr", cells: [{ g: 4 }] },                                  // The Forum — spatial discovery
      { cols: "1fr", cells: [{ g: 5 }], size: "full" },                    // Falling Water — immersive climax
      { cols: "1fr", cells: [{ g: 6 }], size: "quiet" },                   // The Bar — quiet human-scale close
    ],
  },
];
