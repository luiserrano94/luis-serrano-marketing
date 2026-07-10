"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { waLink } from "@/lib/constants";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const whatsappHref = waLink(
    locale === "es"
      ? "Hola Luis, vi tu sitio web y me interesa cotizar..."
      : "Hi Luis, I saw your website and I'm interested in getting a quote..."
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} aria-label="Inicio">
              <Logo size="sm" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-light-gray hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-6">
              <LanguageToggle />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-accent text-background font-semibold text-sm rounded-full hover:bg-accent/90 transition-colors duration-200"
              >
                {t("cta_quote")}
              </a>
            </div>

            {/* Mobile: lang toggle + hamburger */}
            <div className="flex lg:hidden items-center gap-4">
              <LanguageToggle />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-white"
                aria-label="Abrir menú"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex flex-col pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-block px-6 py-3 bg-accent text-background font-bold text-lg rounded-full text-center hover:bg-accent/90 transition-colors"
              >
                {t("cta_quote")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
