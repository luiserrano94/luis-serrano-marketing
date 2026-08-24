/**
 * Editorial imagery — single source of truth.
 * Swap a URL here and it updates everywhere it's used.
 */

const u = (id: string, w = 1600, q = 82) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}`;

export const HERO_SLIDES = [
  {
    src: u("photo-1602582332477-2e82e54d6596", 2000),
    alt: "Retrato editorial contra cielo azul",
  },
  {
    src: u("photo-1540827109409-17f40944f276", 2000),
    alt: "Moda editorial en naranja saturado",
  },
  {
    src: u("photo-1620281488183-138c20077ba7", 2000),
    alt: "Retrato editorial entre vegetación",
  },
];

/** Section backdrops — sit behind a burgundy scrim, so texture over subject. */
export const SECTION_BG = {
  results: u("photo-1571771710201-0dca31239529"),
  clients: u("photo-1495466746667-894969fec21f"),
  featured: u("photo-1519872775884-29a6fea271ca"),
  services: u("photo-1540827109409-17f40944f276"),
  cta: u("photo-1602582332477-2e82e54d6596"),
};

/** Shown inside the laptop screen on the featured-service section. */
export const LAPTOP_SCREEN = u("photo-1540827109409-17f40944f276", 1200);

/** Full-bleed backdrop for the contact page. */
export const CONTACT_BG = u("photo-1571771710201-0dca31239529", 2000);
