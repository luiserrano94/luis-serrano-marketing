"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/constants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1620281488183-138c20077ba7?w=1400&q=85";

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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-editorial text-mid-gray mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-terracotta inline-block" />
          {t("hero_badge")}
        </motion.p>

        {/* Oversized editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-editorial text-ink max-w-5xl mb-10"
        >
          {parts.map((part, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <em className="not-italic text-terracotta">
                  {part.replace(/\.$/, "")}.
                </em>
              ) : (
                <>{part.replace(/\.$/, "")}.</>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Editorial image band */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-sm overflow-hidden shadow-editorial mb-12"
        >
          <Image
            src={HERO_IMAGE}
            alt={
              locale === "es"
                ? "Retrato editorial de dos profesionales"
                : "Editorial portrait of two professionals"
            }
            width={1400}
            height={800}
            priority
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="w-full h-[46vh] min-h-[320px] max-h-[560px] lg:h-[58vh] lg:max-h-[620px] object-cover object-center"
          />

          {/* Caption strip — magazine credit line */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-5 sm:p-7 bg-gradient-to-t from-ink/70 to-transparent">
            <p className="label-editorial text-white/90 max-w-xs hidden sm:block">
              {locale === "es"
                ? "Diseño con estándar editorial"
                : "Design held to an editorial standard"}
            </p>
            <p className="font-display text-white text-4xl sm:text-5xl leading-none ml-auto">
              14
              <span className="label-editorial ml-2 align-super">
                {locale === "es" ? "días" : "days"}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Subtitle + CTAs in an editorial two-column footer */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end border-t border-line pt-8"
        >
          <p className="text-mid-gray text-base sm:text-lg max-w-2xl leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ink text-white font-medium text-sm rounded-full hover:bg-terracotta transition-colors duration-300 text-center"
            >
              {t("hero_cta_primary")}
            </a>
            <Link
              href={`/${locale}#results`}
              className="px-8 py-4 border border-ink/20 text-ink font-medium text-sm rounded-full hover:border-ink hover:bg-surface transition-all duration-300 text-center"
            >
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
