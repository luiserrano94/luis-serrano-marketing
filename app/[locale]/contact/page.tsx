import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/SocialIcons";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "contact" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical: `https://luisserranomarketing.com/${params.locale}/contact`,
      languages: {
        es: "https://luisserranomarketing.com/es/contact",
        en: "https://luisserranomarketing.com/en/contact",
        "x-default": "https://luisserranomarketing.com/es/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "contact" });

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white mb-4">
            {t("hero_title")}
          </h1>
          <p className="text-mid-gray text-xl max-w-xl mx-auto">{t("hero_subtitle")}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form (wider) */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-surface rounded-3xl p-8 border border-white/5">
              <h2 className="text-white font-semibold text-xl mb-8">{t("form_title")}</h2>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Direct contact */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-white font-semibold text-xl mb-6">{t("direct_title")}</h2>
              </div>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: t("direct_email"),
                  href: `mailto:${t("direct_email")}`,
                },
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: t("direct_whatsapp"),
                  href: "https://wa.me/526623361906",
                },
                {
                  icon: MapPin,
                  label: t("direct_location"),
                  value: t("direct_location_sub"),
                  href: null,
                },
                {
                  icon: LinkedInIcon,
                  label: "LinkedIn",
                  value: "luis-serrano-50b231138",
                  href: "https://www.linkedin.com/in/luis-serrano-50b231138/",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 bg-surface rounded-2xl border border-white/5 hover:border-accent/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-mid-gray text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-accent transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Response time */}
              <div className="mt-4 p-4 bg-accent/5 border border-accent/10 rounded-2xl">
                <p className="text-accent text-sm font-medium">
                  ⚡{" "}
                  {params.locale === "es"
                    ? "Tiempo de respuesta: menos de 24 horas"
                    : "Response time: under 24 hours"}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
