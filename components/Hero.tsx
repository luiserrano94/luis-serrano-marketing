"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { waLink } from "@/lib/constants";
import HeroSlideshow from "./HeroSlideshow";
import { HERO_SLIDES } from "@/lib/images";

export default function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();

  const whatsappHref = waLink(
    locale === "es"
      ? "Hola Luis, vi tu sitio web y me gustaría empezar mi proyecto."
      : "Hi Luis, I saw your website and I'd like to start my project."
  );

  const parts = t("hero_title").split(". ");

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Full-bleed cycling background */}
      <HeroSlideshow images={HERO_SLIDES} />

      {/* Content sits on top of the imagery */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 lg:pb-20 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-editorial text-sand mb-7 flex items-center gap-3"
        >
          <span className="w-10 h-px bg-sky inline-block" />
          {t("hero_badge")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-editorial text-ink max-w-5xl mb-8 drop-shadow-[0_2px_24px_rgba(74,25,35,0.5)]"
        >
          {parts.map((part, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <em className="not-italic text-sky">
                  {part.replace(/\.$/, "")}.
                </em>
              ) : (
                <>{part.replace(/\.$/, "")}.</>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end border-t border-sand/25 pt-7"
        >
          <p className="text-sand text-base sm:text-lg max-w-xl leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-sand text-background font-medium text-sm rounded-full hover:bg-sky transition-colors duration-300 text-center"
            >
              {t("hero_cta_primary")}
            </a>
            <Link
              href={`/${locale}#results`}
              className="px-8 py-4 border border-sand/40 text-ink font-medium text-sm rounded-full hover:border-sand hover:bg-sand/10 transition-all duration-300 text-center"
            >
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
