export const WHATSAPP_NUMBER = "526623361906";
export const SITE_URL = "https://luisserranomkt.com";
export const CONTACT_EMAIL = "serranoluis94.ls@gmail.com";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
