"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Hammer, TrendingUp, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface CategoryCardProps {
  label: string;
  title: string;
  subtitle: string;
  items: string[];
  Icon: typeof Hammer;
  href: string;
  cta: string;
  delay?: number;
}

function CategoryCard({
  label,
  title,
  subtitle,
  items,
  Icon,
  href,
  cta,
  delay = 0,
}: CategoryCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative h-full p-8 lg:p-10 bg-surface rounded-3xl border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-mid-gray">
            {label}
          </span>
        </div>

        <h3 className="font-sans font-semibold text-2xl lg:text-3xl text-white mb-3 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-mid-gray text-sm leading-relaxed mb-8">{subtitle}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-light-gray text-sm"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-white text-sm font-medium hover:text-accent transition-colors"
        >
          {cta}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </AnimatedSection>
  );
}

export default function ServiceCategoriesGrid() {
  const t = useTranslations("home");
  const locale = useLocale();

  const categories = [
    {
      label: t("category_build_label"),
      title: t("category_build_title"),
      subtitle: t("category_build_subtitle"),
      items: [
        t("category_build_item_1"),
        t("category_build_item_2"),
        t("category_build_item_3"),
        t("category_build_item_4"),
      ],
      Icon: Hammer,
    },
    {
      label: t("category_grow_label"),
      title: t("category_grow_title"),
      subtitle: t("category_grow_subtitle"),
      items: [
        t("category_grow_item_1"),
        t("category_grow_item_2"),
        t("category_grow_item_3"),
        t("category_grow_item_4"),
      ],
      Icon: TrendingUp,
    },
    {
      label: t("category_audit_label"),
      title: t("category_audit_title"),
      subtitle: t("category_audit_subtitle"),
      items: [
        t("category_audit_item_1"),
        t("category_audit_item_2"),
        t("category_audit_item_3"),
        t("category_audit_item_4"),
      ],
      Icon: Search,
    },
  ];

  return (
    <section className="py-32 sm:py-40 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-[1.05] tracking-tight">
            {t("categories_title")}
          </h2>
          <p className="text-mid-gray text-base sm:text-lg leading-relaxed">
            {t("categories_subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard
              key={i}
              {...cat}
              href={`/${locale}/services`}
              cta={t("category_cta")}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
