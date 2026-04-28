import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

const CLIENTS = [
  "Ranching4Profit LATAM",
  "Parque La Ruina",
  "Ganfer Fresh",
  "Nature's Love",
  "Molina Group",
  "Fresh Farms LLC",
  "Rancho El 17",
  "Caffenio / Andatti",
];

export default function ClientLogos() {
  const t = useTranslations("home");

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-mid-gray text-sm uppercase tracking-widest mb-10">
            {t("clients_title")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="text-mid-gray/60 font-semibold text-sm sm:text-base tracking-wide hover:text-mid-gray transition-colors duration-200 select-none"
              >
                {client}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
