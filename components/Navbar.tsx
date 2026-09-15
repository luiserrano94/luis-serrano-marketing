"use client";
import { useEffect, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const switchTo = (loc: string) => {
    const parts = pathname.split("/");
    parts[1] = loc;
    return parts.join("/") || `/${loc}`;
  };

  const links = [
    { href: `${base}/work`, label: c.nav.work },
    { href: `${base}#services`, label: c.nav.services },
    { href: `${base}/resources`, label: c.nav.resources },
    { href: `${base}#about`, label: c.nav.about },
    { href: `${base}/contact`, label: c.nav.contact },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    // The close button (currently focused) unmounts with the panel; without
    // this the browser's own "focused element removed" handling drops focus
    // to <body> a tick after this runs, racing past a plain effect-based
    // refocus. rAF defers to after that DOM commit so this wins instead.
    requestAnimationFrame(() => menuBtnRef.current?.focus());
  };

  // Scroll lock while the panel is open (mobile menu covers the page, so the
  // page behind it must not scroll). Restored on close/unmount either way.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  // On open: move focus into the panel and listen for Escape. (Closing-focus
  // is handled directly in closeMenu — see the note there.)
  useEffect(() => {
    if (!menuOpen) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <nav className="nav">
        <a className="nav-brand" href={base}>Luis Serrano</a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
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
          <button
            ref={menuBtnRef}
            type="button"
            className="nav-burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={c.nav.menu}
            onClick={() => setMenuOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mmenu"
          role="dialog"
          aria-modal="true"
          aria-label={c.nav.menu}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="mmenu-x"
            aria-label={c.nav.close}
            onClick={closeMenu}
          >
            {c.nav.close}
          </button>
          <nav className="mmenu-links" aria-label={c.nav.menu}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
