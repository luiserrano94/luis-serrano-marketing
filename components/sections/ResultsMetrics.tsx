"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

interface MetricCardProps {
  value: string;
  label: string;
  client: string;
  delay?: number;
}

function MetricCard({ value, label, client, delay = 0 }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const prefix = value.match(/[+]/) ? "+" : "";
  const suffix = value.match(/%/) ? "%" : "";

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200 + delay * 200;
    const stepTime = Math.max(duration / numericValue, 16);
    const timer = setInterval(() => {
      start += Math.ceil(numericValue / (duration / stepTime));
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, numericValue, delay]);

  return (
    <div
      ref={ref}
      className="text-center p-6 lg:p-8 bg-surface rounded-2xl border border-white/[0.06] hover:border-accent/20 transition-colors"
    >
      <div className="font-bebas text-5xl lg:text-6xl text-accent mb-3 leading-none">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p className="text-white font-medium text-sm mb-1">{label}</p>
      <p className="text-mid-gray text-xs">{client}</p>
    </div>
  );
}

export default function ResultsMetrics() {
  const t = useTranslations("home");

  const metrics = [
    { value: t("result_1_value"), label: t("result_1_label"), client: t("result_1_client") },
    { value: t("result_2_value"), label: t("result_2_label"), client: t("result_2_client") },
    { value: t("result_3_value"), label: t("result_3_label"), client: t("result_3_client") },
    { value: t("result_4_value"), label: t("result_4_label"), client: t("result_4_client") },
    { value: t("result_5_value"), label: t("result_5_label"), client: t("result_5_client") },
  ];

  return (
    <section className="py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight">
            {t("results_title").split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-mid-gray text-base sm:text-lg mt-5 leading-relaxed">
            {t("results_subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
