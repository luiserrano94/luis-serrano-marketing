import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL, localeAlternates } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeaturedService from "@/components/sections/FeaturedService";
import ServiceCategoriesGrid from "@/components/sections/ServiceCategoriesGrid";
import ClientLogos from "@/components/sections/ClientLogos";
import ResultsMetrics from "@/components/sections/ResultsMetrics";
import HomeCTA from "@/components/sections/HomeCTA";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "home" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: localeAlternates(params.locale),
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      url: `${SITE_URL}/${params.locale}`,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="results">
        <ResultsMetrics />
      </div>
      <ClientLogos />
      <FeaturedService />
      <ServiceCategoriesGrid />
      <HomeCTA />
    </>
  );
}
