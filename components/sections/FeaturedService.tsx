import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2, Globe, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionBackdrop from "@/components/SectionBackdrop";
import LaptopMockup from "@/components/LaptopMockup";
import { waLink } from "@/lib/constants";
import { SECTION_BG, LAPTOP_SCREEN } from "@/lib/images";

export default function FeaturedService() {
  const t = useTranslations("home");
  const locale = useLocale();

  const whatsappHref = waLink(
    locale === "es"
      ? "Hola Luis, me interesa cotizar un sitio web profesional..."
      : "Hi Luis, I'm interested in getting a quote for a professional website..."
  );

  const bullets = [
    t("featured_bullet_1"),
    t("featured_bullet_2"),
    t("featured_bullet_4"),
    t("featured_bullet_5"),
    t("featured_bullet_6"),
  ];

  return (
    <section className="relative py-32 sm:py-40">
      <SectionBackdrop src={SECTION_BG.featured} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              <Zap size={12} />
              {t("featured_badge")}
            </span>

            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl text-ink leading-tight mb-4">
              {t("featured_title").split("\n").map((line, i) => (
                <span key={i} className={i === 0 ? "block" : "block text-accent"}>
                  {line}
                </span>
              ))}
            </h2>

            <p className="text-mid-gray text-lg mb-3">{t("featured_subtitle")}</p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-accent font-bold text-2xl">{t("featured_price")}</span>
              <span className="text-mid-gray text-sm">·</span>
              <span className="text-mid-gray text-sm">{t("featured_timeline")}</span>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-10">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-light-gray text-sm">{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sand text-background font-bold rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              <Globe size={18} />
              {t("featured_cta")}
            </a>
          </AnimatedSection>

          {/* Right: Visual */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <LaptopMockup
                src={LAPTOP_SCREEN}
                alt={
                  locale === "es"
                    ? "Sitio web editorial mostrado en una laptop"
                    : "Editorial website shown on a laptop"
                }
                label={locale === "es" ? "Colección" : "Collection"}
                headline={
                  locale === "es" ? "Tu marca, en su mejor versión." : "Your brand, at its best."
                }
              />

              {/* Magazine-style credit block */}
              <div className="absolute -bottom-7 left-4 bg-sand text-background px-6 py-4 shadow-lift">
                <p className="font-display text-3xl leading-none">14</p>
                <p className="label-editorial mt-1 opacity-80">
                  {locale === "es" ? "días a producción" : "days to launch"}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
