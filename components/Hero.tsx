"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const WHATSAPP_NUMBER = "526623361906";

export default function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();

  const whatsappMsg = encodeURIComponent(
    locale === "es"
      ? "Hola Luis, vi tu sitio web y me interesa cotizar mi sitio web..."
      : "Hi Luis, I saw your website and I'm interested in getting a quote for my website..."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C5F82A 1px, transparent 1px), linear-gradient(90deg, #C5F82A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Luis Serrano Marketing Services
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bebas text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight text-white mb-6"
        >
          {t("hero_title").split(" ").map((word, i) => (
            <span key={i}>
              {word === "DINERO." || word === "MONEY." ? (
                <span className="text-accent">{word}</span>
              ) : (
                word
              )}
              {i < t("hero_title").split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-mid-gray text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-background font-bold text-base rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-accent/20"
          >
            {t("hero_cta_primary")}
          </a>
          <Link
            href={`/${locale}/services`}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-200"
          >
            {t("hero_cta_secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
