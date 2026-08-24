import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/SocialIcons";
import PageTitleHero from "@/components/PageTitleHero";
import { CONTACT_BG } from "@/lib/images";

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
    <div className="pb-20">
      <PageTitleHero
        src={CONTACT_BG}
        title={t("hero_title")}
        subtitle={t("hero_subtitle")}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form (wider) */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-surface rounded-sm p-8 border border-line">
              <h2 className="text-ink font-semibold text-xl mb-8">{t("form_title")}</h2>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Direct contact */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-ink font-semibold text-xl mb-6">{t("direct_title")}</h2>
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
                  className="flex items-start gap-4 p-5 bg-surface rounded-sm border border-line hover:border-accent/20 transition-colors group"
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
                        className="text-ink hover:text-accent transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-ink text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Response time */}
              <div className="mt-4 p-4 bg-accent/5 border border-accent/10 rounded-sm">
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
