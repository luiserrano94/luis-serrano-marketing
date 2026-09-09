"use client";
import { useLocale } from "next-intl";
import { getContent } from "@/lib/content";

export default function Navbar() {
  const locale = useLocale();
  const c = getContent(locale);
  const base = `/${locale}`;
  return (
    <nav className="nav">
      <a className="nav-brand" href={base}>Luis Serrano</a>
      <div className="nav-links">
        <a href={`${base}#work`}>{c.nav.work}</a>
        <a href={`${base}#services`}>{c.nav.services}</a>
        <a href={`${base}#work`}>{c.nav.resources}</a>
        <a href={`${base}#about`}>{c.nav.about}</a>
        <a href={`${base}#contact`}>{c.nav.contact}</a>
      </div>
      <div className="nav-lang">
        <a href="/es" aria-current={locale === "es" ? "true" : undefined}>ES</a>
        <span aria-hidden="true">/</span>
        <a href="/en" aria-current={locale === "en" ? "true" : undefined}>EN</a>
      </div>
    </nav>
  );
}
