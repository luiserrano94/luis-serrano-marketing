import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import FeaturedService from "@/components/sections/FeaturedService";
import ServicesGrid from "@/components/sections/ServicesGrid";
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
    alternates: {
      canonical: `https://luisserranomarketing.com/${params.locale}`,
      languages: {
        es: "https://luisserranomarketing.com/es",
        en: "https://luisserranomarketing.com/en",
        "x-default": "https://luisserranomarketing.com/es",
      },
    },
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      url: `https://luisserranomarketing.com/${params.locale}`,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedService />
      <ServicesGrid />
      <ClientLogos />
      <ResultsMetrics />
      <HomeCTA />
    </>
  );
}
