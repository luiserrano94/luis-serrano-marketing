import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ServiceCard, { ServiceIconName } from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import PageTitleHero from "@/components/PageTitleHero";
import { PAGE_BG } from "@/lib/images";
import { waLink } from "@/lib/constants";

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

  // The other eleven are grouped rather than given a card each — twelve
  // equal cards with twelve buttons reads as a wall of choices.
  const groups = [
    {
      label: locale === "es" ? "Estrategia y planeación" : "Strategy & planning",
      items: [1, 2, 5, 6],
    },
    {
      label: locale === "es" ? "Marca" : "Brand",
      items: [3, 4],
    },
    {
      label: locale === "es" ? "Ejecución y acompañamiento" : "Execution & support",
      items: [7, 8, 9, 10, 11],
    },
  ];

  const groupCta = waLink(
    locale === "es"
      ? "Hola Luis, me interesan tus servicios de marketing. ¿Podemos platicar?"
      : "Hi Luis, I'm interested in your marketing services. Can we talk?"
  );

  return (
    <div className="pb-24">
      <PageTitleHero
        src={PAGE_BG.services}
        title={t("hero_title")}
        subtitle={t("hero_subtitle")}
      />
      <div className="h-16" />

      {/* Lead service, kept as the protagonist with its own CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatedSection>
          <ServiceCard {...services[0]} ctaLabel={t("cta_quote")} />
        </AnimatedSection>
      </div>

      {/* Everything else, as a grouped index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <p className="label-editorial text-sky mb-3">
            {locale === "es" ? "Todo lo demás" : "Everything else"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl leading-tight">
            {locale === "es"
              ? "Y once formas más de mover tu marketing."
              : "And eleven more ways to move your marketing."}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          {groups.map((g, gi) => (
            <AnimatedSection key={g.label} delay={gi * 0.08}>
              <p className="label-editorial text-sand/70 mb-6">{g.label}</p>
              <ul>
                {g.items.map((idx) => (
                  <li
                    key={idx}
                    className="border-t border-line py-4 last:pb-0"
                  >
                    <h3 className="font-display text-xl text-ink leading-snug mb-1">
                      {services[idx].title}
                    </h3>
                    <p className="text-sand/75 text-sm leading-relaxed">
                      {services[idx].description}
                    </p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>

        {/* One CTA for the whole group */}
        <AnimatedSection>
          <div className="mt-20 border-t border-line pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sand text-base max-w-md">
              {locale === "es"
                ? "¿Te interesa alguno? La primera conversación no cuesta nada."
                : "Interested in any of these? The first conversation is free."}
            </p>
            <a
              href={groupCta}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 bg-sand text-background font-semibold text-sm rounded-full hover:bg-sky transition-colors duration-300"
            >
              {t("cta_quote")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
