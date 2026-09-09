"use client";
import { useLocale } from "next-intl";
import { getContent } from "@/lib/content";

export default function Footer() {
  const c = getContent(useLocale());
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
          <a href="#">{c.footer.instagram}</a>
          <br />
          <a href="#">{c.footer.email}</a>
        </div>
        <div className="foot-c">© 2026 Luis Serrano</div>
      </div>
    </footer>
  );
}
