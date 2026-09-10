"use client";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/content";
import { waLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname() || `/${locale}`;
  const c = getContent(locale);
  const base = `/${locale}`;

  const switchTo = (loc: string) => {
    const parts = pathname.split("/");
    parts[1] = loc;
    return parts.join("/") || `/${loc}`;
  };

  return (
    <nav className="nav">
      <a className="nav-brand" href={base}>Luis Serrano</a>
      <div className="nav-links">
        <a href={`${base}/work`}>{c.nav.work}</a>
        <a href={`${base}/services`}>{c.nav.services}</a>
        <a href={`${base}/about`}>{c.nav.about}</a>
        <a href={`${base}/contact`}>{c.nav.contact}</a>
      </div>
      <div className="nav-end">
        <a className="nav-wa" href={waLink(c.whatsapp.message)} target="_blank" rel="noopener noreferrer" aria-label={c.whatsapp.cta}>
          <WhatsAppIcon size={17} />
        </a>
        <div className="nav-lang">
          <a href={switchTo("es")} aria-current={locale === "es" ? "true" : undefined}>ES</a>
          <span aria-hidden="true">/</span>
          <a href={switchTo("en")} aria-current={locale === "en" ? "true" : undefined}>EN</a>
        </div>
      </div>
    </nav>
  );
}
