"use client";

import { useTranslations, useLocale } from "next-intl";
import ServiceCard, { ServiceIconName } from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";

const ICON_NAMES: ServiceIconName[] = [
  "Globe",
  "BarChart3",
  "Megaphone",
  "Palette",
  "Type",
  "Calendar",
  "DollarSign",
  "Target",
  "Search",
  "Clock",
  "Users",
  "RefreshCcw",
];

export default function ServicesGrid() {
  const t = useTranslations("home");
  const ts = useTranslations("services");
  const locale = useLocale();

  const services = Array.from({ length: 12 }, (_, i) => ({
    iconName: ICON_NAMES[i],
    title: ts(`service_${i + 1}_title` as never),
    description: ts(`service_${i + 1}_desc` as never),
    price: i === 0 ? ts("service_1_price") : undefined,
    badge: i === 0 ? ts("service_1_badge") : undefined,
    featured: i === 0,
    whatsappMessage:
      locale === "es"
        ? `¡Hola Luis! Vi tu sitio web y me interesa tu servicio de ${ts(`service_${i + 1}_title` as never)}. ¿Podrías compartirme más detalles? 👋`
        : `Hi Luis! I saw your website and I'm interested in your ${ts(`service_${i + 1}_title` as never)} service. Could you share more details? 👋`,
  }));

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-bebas text-5xl lg:text-6xl text-white mb-4">
            {t("services_title")}
          </h2>
          <p className="text-mid-gray max-w-2xl mx-auto">{t("services_subtitle")}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(1).map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <ServiceCard {...service} ctaLabel={ts("cta_quote")} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
