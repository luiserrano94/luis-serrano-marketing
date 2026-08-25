"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { waLink } from "@/lib/constants";
import HeroSlideshow from "./HeroSlideshow";
import { HERO_SLIDES } from "@/lib/images";

export default function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [active, setActive] = useState(0);

  const whatsappHref = waLink(
    locale === "es"
      ? "Hola Luis, vi tu sitio web y me gustaría empezar mi proyecto."
      : "Hi Luis, I saw your website and I'd like to start my project."
  );

  const parts = t("hero_title").split(". ");

  /**
   * The slideshow cross-fades over 1400ms. Switching copy colour the moment
   * `active` changes leaves white type sitting on the still-visible light
   * frame (and vice versa), so the swap is held until the two frames are
   * level — halfway through the fade.
   */
  const [tone, setTone] = useState(HERO_SLIDES[0].tone);
  useEffect(() => {
    const id = setTimeout(() => setTone(HERO_SLIDES[active].tone), 700);
    return () => clearTimeout(id);
  }, [active]);

  const light = tone === "light";

  // Copy colours flip with the frame behind them
  const heading = light ? "text-background" : "text-ink";
  const accentWord = light ? "text-accent-deep" : "text-sky";
  const body = light ? "text-background/85" : "text-sand";
  const eyebrow = light ? "text-background/70" : "text-sand";
  const rule = light ? "bg-background/50" : "bg-sky";
  const divider = light ? "border-background/25" : "border-sand/25";
  const primaryBtn = light
    ? "bg-background text-ink hover:bg-background/90"
    : "bg-sand text-background hover:bg-sky";
  const secondaryBtn = light
    ? "border-background/40 text-background hover:border-background hover:bg-background/10"
    : "border-sand/40 text-ink hover:border-sand hover:bg-sand/10";

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <HeroSlideshow
        images={HERO_SLIDES}
        active={active}
        onChange={setActive}
        tone={tone}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 lg:pb-20 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`label-editorial mb-7 flex items-center gap-3 transition-colors duration-500 ${eyebrow}`}
        >
          <span
            className={`w-10 h-px inline-block transition-colors duration-500 ${rule}`}
          />
          {t("hero_badge")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display text-editorial max-w-5xl mb-8 transition-colors duration-500 ${heading}`}
        >
          {parts.map((part, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <em
                  className={`not-italic transition-colors duration-500 ${accentWord}`}
                >
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
          className={`grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end border-t pt-7 transition-colors duration-500 ${divider}`}
        >
          <p
            className={`text-base sm:text-lg max-w-xl leading-relaxed transition-colors duration-500 ${body}`}
          >
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 font-medium text-sm rounded-full transition-colors duration-300 text-center ${primaryBtn}`}
            >
              {t("hero_cta_primary")}
            </a>
            <Link
              href={`/${locale}#results`}
              className={`px-8 py-4 border font-medium text-sm rounded-full transition-all duration-500 text-center ${secondaryBtn}`}
            >
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
