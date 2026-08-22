"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();

  const whatsappHref = waLink(
    locale === "es"
      ? "Hola Luis, vi tu sitio web y me gustaría empezar mi proyecto."
      : "Hi Luis, I saw your website and I'd like to start my project."
  );

  // Highlight the middle sentence of the headline in accent
  const parts = t("hero_title").split(". ");

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Soft accent wash behind the photo side */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 40%, rgba(132,204,22,0.13), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line text-mid-gray text-xs font-medium mb-8 tracking-wide shadow-soft"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("hero_badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bebas text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tight text-ink mb-6"
            >
              {parts.map((part, i) => (
                <span
                  key={i}
                  className={i === 1 ? "block text-accent" : "block"}
                >
                  {part.replace(/\.$/, "")}.
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-mid-gray text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {t("hero_subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-ink text-white font-semibold text-sm rounded-full hover:bg-ink-soft transition-all duration-200 shadow-lift"
              >
                {t("hero_cta_primary")}
              </a>
              <Link
                href={`/${locale}#results`}
                className="w-full sm:w-auto px-8 py-4 border border-line bg-surface text-ink font-medium text-sm rounded-full hover:border-ink/25 hover:shadow-soft transition-all duration-200 text-center"
              >
                {t("hero_cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Offset accent block behind photo */}
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[2rem] bg-accent/12 hidden sm:block" />

            <div className="relative rounded-[2rem] overflow-hidden bg-surface shadow-lift">
              <Image
                src="/images/luis-serrano.jpg"
                alt="Luis Serrano"
                width={800}
                height={800}
                priority
                sizes="(max-width: 1024px) 384px, 480px"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-5 right-4 sm:right-6 bg-surface border border-line rounded-2xl px-5 py-3 shadow-lift">
              <p className="font-bebas text-3xl text-ink leading-none">+8</p>
              <p className="text-mid-gray text-[11px] tracking-wide mt-0.5">
                {locale === "es" ? "años en marketing" : "years in marketing"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
