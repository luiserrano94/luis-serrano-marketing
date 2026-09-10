// Fixed narrative sequence for HANT · XEPE · HAMÍIME.
// iizax is the hero (first work, integrated into the hero — never repeated).
// footprint is fixed second-to-last; hantxepe is fixed last.
// The middle five are curated for a Sky -> Sea -> Earth descent.
// `layout` picks an editorial composition (see .hxh-* in globals.css); the copy
// for each id lives in lib/content.ts (bilingual).
export type HxhLayout = "A" | "B" | "C" | "D" | "closing";

export const HXH_HERO_IMG = "/work/hxh/iizax.jpg";

export const HXH_SEQUENCE: { id: string; img: string; layout: HxhLayout }[] = [
  { id: "azoj", img: "/work/hxh/azoj.jpg", layout: "A" },
  { id: "xepe", img: "/work/hxh/xepe.jpg", layout: "C" },
  { id: "hax", img: "/work/hxh/hax.jpg", layout: "B" },
  { id: "azojcpoc", img: "/work/hxh/azojcpoc.jpg", layout: "A" },
  { id: "moosni", img: "/work/hxh/moosni.jpg", layout: "D" },
  { id: "footprint", img: "/work/hxh/footprint.jpg", layout: "B" },
  { id: "hantxepe", img: "/work/hxh/hantxepe.jpg", layout: "closing" },
];
