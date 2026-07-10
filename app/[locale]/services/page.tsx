import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "services" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical: `https://luisserranomkt.com/${params.locale}/services`,
      languages: {
        es: "https://luisserranomkt.com/es/services",
        en: "https://luisserranomkt.com/en/services",
        "x-default": "https://luisserranomkt.com/es/services",
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "services" });
  const locale = params.locale;

  const services = Array.from({ length: 12 }, (_, i) => ({
    iconName: ICON_NAMES[i],
    title: t(`service_${i + 1}_title` as never),
    description: t(`service_${i + 1}_desc` as never),
    price: i === 0 ? t("service_1_price") : undefined,
    badge: i === 0 ? t("service_1_badge") : undefined,
    featured: i === 0,
    whatsappMessage:
      locale === "es"
        ? `¡Hola Luis! Vi tu sitio web y me interesa tu servicio de ${t(`service_${i + 1}_title` as never)}. ¿Podrías compartirme más detalles? 👋`
        : `Hi Luis! I saw your website and I'm interested in your ${t(`service_${i + 1}_title` as never)} service. Could you share more details? 👋`,
  }));

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <AnimatedSection>
          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white mb-4">
            {t("hero_title")}
          </h1>
          <p className="text-mid-gray text-xl max-w-2xl mx-auto">{t("hero_subtitle")}</p>
        </AnimatedSection>
      </div>

      {/* Featured service */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <AnimatedSection>
          <ServiceCard {...services[0]} ctaLabel={t("cta_quote")} />
        </AnimatedSection>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(1).map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <ServiceCard {...service} ctaLabel={t("cta_quote")} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
