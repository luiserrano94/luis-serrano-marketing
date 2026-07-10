/** Shared site-wide constants — single source of truth */

export const SITE_URL = "https://luisserranomkt.com";

export const WHATSAPP_NUMBER = "526623361906";

export const CONTACT_EMAIL = "serranoluis94.ls@gmail.com";

/** Build a wa.me link with an already-encoded or plain message */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
