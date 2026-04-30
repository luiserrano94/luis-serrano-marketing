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
      ? "Hola Luis, vi tu sitio web y me gustaría empezar mi proyecto."
      : "Hi Luis, I saw your website and I'd like to start my project."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#C5F82A 1px, transparent 1px), linear-gradient(90deg, #C5F82A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-mid-gray text-xs font-medium mb-10 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {t("hero_badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bebas text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight text-white mb-6 max-w-4xl mx-auto"
        >
          {t("hero_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-mid-gray text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-accent text-background font-semibold text-sm rounded-full hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/10"
          >
            {t("hero_cta_primary")}
          </a>
          <Link
            href={`/${locale}#results`}
            className="w-full sm:w-auto px-7 py-3.5 border border-white/15 text-white font-medium text-sm rounded-full hover:border-white/40 hover:bg-white/[0.03] transition-all duration-200"
          >
            {t("hero_cta_secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
