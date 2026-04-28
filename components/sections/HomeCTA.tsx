import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomeCTA() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            {t("cta_title").split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "block text-accent" : "block"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="text-mid-gray text-lg mb-10">{t("cta_subtitle")}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-10 py-5 bg-accent text-background font-bold text-lg rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-accent/20"
          >
            {t("cta_button")}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
