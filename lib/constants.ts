/** Shared site-wide constants — single source of truth */

/** Must match the primary domain Vercel serves — it redirects apex to www */
export const SITE_URL = "https://www.luisserranomkt.com";

export const WHATSAPP_NUMBER = "526623361906";

export const CONTACT_EMAIL = "serranoluis94.ls@gmail.com";

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/luis-serrano-50b231138/",
  "https://www.instagram.com/luisserranomkt/",
  "https://www.facebook.com/luisserranomkt",
];

/** Build a wa.me link with an already-encoded or plain message */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Canonical + hreflang for a localised route. `suffix` is the path after /{locale}. */
export function localeAlternates(locale: string, suffix = "") {
  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages: {
      es: `${SITE_URL}/es${suffix}`,
      en: `${SITE_URL}/en${suffix}`,
      "x-default": `${SITE_URL}/es${suffix}`,
    },
  };
}
