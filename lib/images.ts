/**
 * Editorial imagery — single source of truth.
 * Local files live in /public/images/editorial (JPEG, max 2000px wide).
 */

/**
 * `tone` describes the frame behind the headline: "light" frames get
 * burgundy type on a pale scrim, "dark" frames get white type.
 */
export const HERO_SLIDES = [
  {
    src: "/images/editorial/hero-leopard.jpg",
    alt: "Leopardo en blanco y negro sobre fondo claro",
    tone: "light" as const,
  },
  {
    src: "/images/editorial/hero-beach.jpg",
    alt: "Retrato editorial en la playa al atardecer",
    tone: "dark" as const,
  },
  {
    src: "/images/editorial/hero-diner.jpg",
    alt: "Retrato editorial en un diner con luces de neón",
    tone: "dark" as const,
  },
  {
    src: "/images/editorial/hero-interior.jpg",
    alt: "Retrato editorial en un interior con luz natural",
    tone: "dark" as const,
  },
];

/** Section backdrops — held under a burgundy scrim. */
export const SECTION_BG = {
  results: "/images/editorial/hero-interior.jpg",
  clients: "/images/editorial/page-product.jpg",
  featured: "/images/editorial/hero-diner.jpg",
  services: "/images/editorial/hero-beach.jpg",
  cta: "/images/editorial/page-product.jpg",
};

/** Page title backdrops. */
/**
 * Title-band backdrops. These need mid-to-dark tone under the headline —
 * the leopard's white field kills white type, so it stays hero-only.
 */
export const PAGE_BG = {
  about: "/images/editorial/hero-interior.jpg",
  services: "/images/editorial/page-product.jpg",
};

/** Shown inside the laptop screen on the featured-service section. */
export const LAPTOP_SCREEN = "/images/editorial/laptop-screen.jpg";

/** Full-bleed backdrop for the contact page. */
export const CONTACT_BG = "/images/editorial/contact-nova.jpg";
