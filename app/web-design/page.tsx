import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "../globals.css";
import LandingLeadForm from "@/components/LandingLeadForm";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Website Design — Live in 14 Days | Luis Serrano",
  description:
    "Get a custom, conversion-focused website built and live in 14 days. Starting at $2,599 USD. Contact us to get started.",
  robots: { index: false, follow: false },
};

const WA_LINK =
  "https://wa.me/526623361906?text=Hi%20Luis%2C%20I%20saw%20your%20website%20design%20service%20and%20I'm%20interested%20in%20getting%20started.";
const EMAIL = "serranoluis94.ls@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}?subject=Custom%20Website%20Project`;

const INCLUDED = [
  {
    title: "Custom Design",
    desc: "Unique, brand-aligned design built from scratch. Desktop and mobile-first.",
  },
  {
    title: "Domain Setup",
    desc: "Guidance through domain purchase and full DNS configuration — no tech headaches.",
  },
  {
    title: "Hosting Included",
    desc: "Fast, reliable hosting set up and ready to go from day one.",
  },
  {
    title: "Contact Form",
    desc: "Functional lead capture form — inquiries go straight to your inbox.",
  },
  {
    title: "Basic SEO",
    desc: "Meta titles, descriptions, page speed optimization, and structured data.",
  },
  {
    title: "Backend Development",
    desc: "Server-side logic included — APIs, databases, or custom functionality your business needs.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We align on your goals, brand, audience, and the pages your site needs. One focused call is all it takes.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Design and development happen fast. You get progress updates — no radio silence.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Your site goes live. Domain configured, hosting ready, forms working. Done in 14 days.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="9" fill="#C5F82A" fillOpacity="0.12" />
      <path
        d="M5 9.5L7.5 12L13 6.5"
        stroke="#C5F82A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Isotipo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Luis Serrano"
    >
      <rect width="44" height="44" rx="4" fill="#1A1A1A" />
      <rect x="10" y="10" width="5" height="24" fill="#C5F82A" />
      <path
        d="M20 10H36V16H26L36 26V34H20V28H30L20 18V10Z"
        fill="#C5F82A"
      />
    </svg>
  );
}

export default function WebDesignPage() {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${bebasNeue.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-704568380"
          strategy="afterInteractive"
        />
        <Script id="gtag-ads-wd" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-704568380');
        `}</Script>
      </head>
      <body
        className="bg-background text-white antialiased font-poppins"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        {/* ── NAVBAR ── */}
        <header className="border-b border-white/5 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
            {/* Isotipo */}
            <a
              href="https://www.luisserranomkt.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Luis Serrano Marketing — Home"
            >
              <Isotipo />
            </a>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-mid-gray text-sm font-poppins">
                {EMAIL}
              </span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black text-sm font-semibold font-poppins px-5 py-2.5 rounded-lg hover:brightness-110 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* ── HERO ── */}
          <section className="max-w-6xl mx-auto px-5 pt-20 pb-24 text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 text-accent text-xs font-semibold font-poppins tracking-widest uppercase px-4 py-2 rounded-full mb-8 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              14-Day Delivery — Spots Limited
            </div>

            {/* H1 */}
            <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wide mb-6">
              Your Website.
              <br />
              <span className="text-accent">Live in 14 Days.</span>
              <br />
              Built to Get You Clients.
            </h1>

            {/* Price */}
            <p className="text-mid-gray text-lg font-poppins mb-10">
              Professional, conversion-focused website starting at{" "}
              <span className="text-white font-semibold">$2,599 USD</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-black font-semibold font-poppins px-8 py-4 rounded-lg hover:brightness-110 transition-all text-base w-full sm:w-auto justify-center"
              >
                {/* WhatsApp icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.523 5.854L.057 23.886a.75.75 0 00.906.918l6.197-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.95-1.356l-.355-.211-3.677.854.893-3.565-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                Start on WhatsApp
              </a>
              <a
                href={EMAIL_LINK}
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold font-poppins px-8 py-4 rounded-lg hover:border-accent/50 hover:text-accent transition-all text-base w-full sm:w-auto justify-center"
              >
                {/* Email icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send an Email
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { value: "14 Days", label: "to launch" },
                { value: "$2,599", label: "Starting price USD" },
                { value: "100%", label: "Custom design" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border border-white/8 bg-surface rounded-xl p-5"
                >
                  <p className="font-bebas text-3xl text-accent leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-mid-gray text-xs font-poppins">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SOCIAL PROOF ── */}
          <section className="border-y border-white/5 bg-surface py-14">
            <div className="max-w-6xl mx-auto px-5 text-center">
              <p className="text-mid-gray text-xs font-semibold font-poppins tracking-widest uppercase mb-6">
                Built for
              </p>
              <a
                href="https://www.uncorazoninternship.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <p className="text-white text-xl font-semibold font-poppins group-hover:text-accent transition-colors">
                  Un Corazón Internship
                </p>
                <p className="text-mid-gray text-sm font-poppins mt-1">
                  Nonprofit Organization — El Paso, TX
                </p>
              </a>
            </div>
          </section>

          {/* ── WHAT'S INCLUDED ── */}
          <section className="max-w-6xl mx-auto px-5 py-24">
            <div className="text-center mb-14">
              <p className="text-accent text-xs font-semibold font-poppins tracking-widest uppercase mb-3">
                What you get
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl text-white">
                Everything Included
              </h2>
            </div>

            {/* 6-card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {INCLUDED.map((item) => (
                <div
                  key={item.title}
                  className="border border-white/8 bg-surface rounded-xl p-6 flex gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-poppins mb-1">
                      {item.title}
                    </h3>
                    <p className="text-mid-gray text-sm font-poppins leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add-on card */}
            <div className="border border-accent/20 bg-surface rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="9" fill="#C5F82A" fillOpacity="0.12" />
                  <path d="M9 5v4M9 13h.01" stroke="#C5F82A" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold font-poppins">
                    Client Portal / Login System
                  </h3>
                  <span className="text-xs font-semibold font-poppins text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 rounded-full">
                    Add-on
                  </span>
                </div>
                <p className="text-mid-gray text-sm font-poppins leading-relaxed mb-2">
                  Custom authentication, dashboards, and member-only content —
                  built directly into your website.
                </p>
                <p className="text-mid-gray/60 text-xs font-poppins">
                  Custom pricing — contact for quote
                </p>
              </div>
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="border-y border-white/5 bg-surface py-24">
            <div className="max-w-6xl mx-auto px-5">
              <div className="text-center mb-14">
                <p className="text-accent text-xs font-semibold font-poppins tracking-widest uppercase mb-3">
                  The process
                </p>
                <h2 className="font-bebas text-5xl md:text-6xl text-white">
                  How It Works
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {STEPS.map((step) => (
                  <div key={step.num} className="relative">
                    <p
                      className="font-bebas text-7xl leading-none mb-4 select-none"
                      style={{ color: "rgba(197,248,42,0.08)" }}
                    >
                      {step.num}
                    </p>
                    <h3 className="font-bebas text-3xl text-white mb-2 -mt-6">
                      {step.title}
                    </h3>
                    <p className="text-mid-gray text-sm font-poppins leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PRICING ── */}
          <section className="max-w-6xl mx-auto px-5 py-24">
            <div className="text-center mb-14">
              <p className="text-accent text-xs font-semibold font-poppins tracking-widest uppercase mb-3">
                Investment
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl text-white">
                Simple, Flat Pricing
              </h2>
            </div>

            <div className="max-w-xl mx-auto border border-white/10 bg-surface rounded-2xl p-8">
              {/* Price */}
              <div className="mb-6">
                <p className="font-bebas text-6xl text-white leading-none">
                  $2,599{" "}
                  <span className="text-mid-gray text-3xl">USD</span>
                </p>
                <p className="text-accent font-semibold font-poppins text-sm mt-1">
                  Delivered in 14 days
                </p>
              </div>

              {/* Deliverables */}
              <ul className="space-y-3 mb-8">
                {INCLUDED.map((item) => (
                  <li key={item.title} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-white text-sm font-poppins">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-black font-semibold font-poppins px-6 py-4 rounded-lg hover:brightness-110 transition-all text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.523 5.854L.057 23.886a.75.75 0 00.906.918l6.197-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.95-1.356l-.355-.211-3.677.854.893-3.565-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Start on WhatsApp
                </a>
                <a
                  href={EMAIL_LINK}
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold font-poppins px-6 py-4 rounded-lg hover:border-accent/50 hover:text-accent transition-all text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="border-t border-white/5 bg-surface py-24">
            <div className="max-w-6xl mx-auto px-5 text-center">
              <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
                Ready to Get Your
                <br />
                <span className="text-accent">Website Done?</span>
              </h2>
              <p className="text-mid-gray font-poppins text-base max-w-md mx-auto mb-10">
                Skip the agencies. Get a professional, conversion-ready website
                in 14 days — flat price, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-black font-semibold font-poppins px-8 py-4 rounded-lg hover:brightness-110 transition-all text-base w-full sm:w-auto justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.523 5.854L.057 23.886a.75.75 0 00.906.918l6.197-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.95-1.356l-.355-.211-3.677.854.893-3.565-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Start on WhatsApp
                </a>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold font-poppins px-8 py-4 rounded-lg hover:border-accent/50 hover:text-accent transition-all text-base w-full sm:w-auto justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ── LEAD FORM ── */}
        <LandingLeadForm lang="en" />

        {/* ── FOOTER MÍNIMO ── */}
        <footer className="border-t border-white/5 bg-background py-8">
          <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-mid-gray text-xs font-poppins">
            <p>
              © {new Date().getFullYear()} Luis Serrano Marketing Services. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.luisserranomkt.com/en/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <span>·</span>
              <a
                href="https://www.luisserranomkt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                luisserranomkt.com →
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
