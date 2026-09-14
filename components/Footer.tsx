"use client";
import { useLocale } from "next-intl";
import { getContent } from "@/lib/content";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const locale = useLocale();
  const c = getContent(locale);
  const instagram = SOCIAL_LINKS.find((u) => u.includes("instagram")) ?? "#";
  return (
    <footer className="foot">
      <div className="wrap foot-g">
        <div className="foot-b">
          Luis Serrano<span>{c.footer.descriptor}</span>
        </div>
        <div className="foot-c">
          {c.footer.worldwide}
          <br />
          {c.footer.location}
        </div>
        <div className="foot-c">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            {c.footer.instagram}
          </a>
          <br />
          <a href={`mailto:${CONTACT_EMAIL}`}>{c.footer.email}</a>
        </div>
        <div className="foot-c">
          <a href={`/${locale}/privacy`}>{c.footer.privacy}</a>
          <br />
          <a href={`/${locale}/terms`}>{c.footer.terms}</a>
          <br />
          <a href={`/${locale}/shipping`}>{c.footer.shipping}</a>
        </div>
        <div className="foot-c">© 2026 Luis Serrano</div>
      </div>
    </footer>
  );
}
