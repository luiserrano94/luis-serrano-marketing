"use client";

import { useLocale } from "next-intl";
import {
  Globe,
  BarChart3,
  Megaphone,
  Palette,
  Type,
  Calendar,
  DollarSign,
  Target,
  Search,
  Clock,
  Users,
  RefreshCcw,
  LucideIcon,
} from "lucide-react";

export type ServiceIconName =
  | "Globe"
  | "BarChart3"
  | "Megaphone"
  | "Palette"
  | "Type"
  | "Calendar"
  | "DollarSign"
  | "Target"
  | "Search"
  | "Clock"
  | "Users"
  | "RefreshCcw";

const ICON_MAP: Record<ServiceIconName, LucideIcon> = {
  Globe,
  BarChart3,
  Megaphone,
  Palette,
  Type,
  Calendar,
  DollarSign,
  Target,
  Search,
  Clock,
  Users,
  RefreshCcw,
};

const WHATSAPP_NUMBER = "526623361906";

interface ServiceCardProps {
  iconName: ServiceIconName;
  title: string;
  description: string;
  price?: string;
  badge?: string;
  featured?: boolean;
  ctaLabel: string;
  whatsappMessage: string;
}

export default function ServiceCard({
  iconName,
  title,
  description,
  price,
  badge,
  featured = false,
  ctaLabel,
  whatsappMessage,
}: ServiceCardProps) {
  const locale = useLocale();
  void locale;
  const Icon = ICON_MAP[iconName];
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 group ${
        featured
          ? "bg-surface border-accent/50 shadow-lg shadow-accent/10"
          : "bg-surface border-white/5 hover:bg-white/[0.03]"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-background text-xs font-bold rounded-full">
          {badge}
        </span>
      )}

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
          featured ? "bg-accent/20" : "bg-white/5 group-hover:bg-accent/10"
        }`}
      >
        <Icon
          size={22}
          className={
            featured
              ? "text-accent"
              : "text-mid-gray group-hover:text-accent transition-colors"
          }
        />
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-mid-gray text-sm leading-relaxed flex-1">{description}</p>

      {price && <p className="text-accent font-bold text-base mt-3">{price}</p>}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
          featured
            ? "bg-accent text-background hover:bg-accent/90"
            : "border border-white/10 text-light-gray hover:border-accent hover:text-accent"
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
