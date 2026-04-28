import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2, Globe, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_NUMBER = "526623361906";

export default function FeaturedService() {
  const t = useTranslations("home");
  const locale = useLocale();

  const whatsappMsg = encodeURIComponent(
    locale === "es"
      ? "Hola Luis, me interesa cotizar un sitio web profesional..."
      : "Hi Luis, I'm interested in getting a quote for a professional website..."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  const bullets = [
    t("featured_bullet_1"),
    t("featured_bullet_2"),
    t("featured_bullet_4"),
    t("featured_bullet_5"),
    t("featured_bullet_6"),
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              <Zap size={12} />
              {t("featured_badge")}
            </span>

            <h2 className="font-bebas text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-bold rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              <Globe size={18} />
              {t("featured_cta")}
            </a>
          </AnimatedSection>

          {/* Right: Visual */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              {/* Browser mockup */}
              <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0D0D0D] border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-xs text-mid-gray">
                    tuempresa.com
                  </div>
                </div>
                {/* Mock content */}
                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 bg-white/10 rounded-md" />
                  <div className="h-4 w-full bg-white/5 rounded-md" />
                  <div className="h-4 w-5/6 bg-white/5 rounded-md" />
                  <div className="h-10 w-40 bg-accent/30 rounded-full mt-6" />
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-white/5 rounded-xl" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-background px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                ✓ {locale === "es" ? "Entrega en 14 días" : "Delivered in 14 days"}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
