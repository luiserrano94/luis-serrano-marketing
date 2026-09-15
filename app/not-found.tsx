"use client";
import { useEffect, useState } from "react";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { getContent, type Locale } from "@/lib/content";
import "./globals.css";

// Next.js 14's App Router routes a genuinely-unmatched URL (as opposed to an
// explicit notFound() call from within a rendered page) to this ROOT
// not-found.tsx, never to app/[locale]/not-found.tsx — even when the URL has
// a valid locale prefix. This is the primary 404 handler in practice, not a
// rare fallback, so it duplicates the [locale] layout's font setup (root
// layout.tsx is a bare pass-through with no <html>/<body> of its own) to stay
// visually identical rather than degrading to system fonts.
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-body", display: "swap" });
const jetmono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });

const DEFAULT_LOCALE: Locale = "es"; // matches defaultLocale in middleware.ts

export default function RootNotFound() {
  // usePathname() resolves differently between this page's SSR pass and its
  // client hydration (a Next 14 quirk specific to the root not-found
  // boundary), which was throwing real hydration-mismatch errors (React
  // #425/418/423) even though the recovered render looked fine. Rendering a
  // fixed default on first paint and correcting the locale only after mount
  // keeps server and client output identical, so there is nothing to
  // reconcile — at the cost of a brief flash of default-locale text on a
  // non-default-locale 404, which is an acceptable trade for a page that
  // fires this rarely and this is not one Google indexes anyway.
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  useEffect(() => {
    const seg = window.location.pathname.split("/")[1];
    if (seg === "en") setLocale("en");
  }, []);
  const c = getContent(locale);
  const base = `/${locale}`;

  return (
    <html lang={locale} className={`${sourceSerif.variable} ${playfair.variable} ${jetmono.variable}`}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>{`${c.notFound.title} · Luis Serrano`}</title>
      </head>
      <body className="antialiased font-body">
        <section className="wrap sec nf">
          <p className="mono">{c.notFound.eyebrow}</p>
          <h1 className="display">{c.notFound.title}</h1>
          <p>{c.notFound.body}</p>
          <div className="hero-cta">
            <a className="btn btn-solid" href={base}>{c.notFound.ctaHome}</a>
            <a className="btn btn-line" href={`${base}/work`}>{c.notFound.ctaWork}</a>
          </div>
        </section>
      </body>
    </html>
  );
}
