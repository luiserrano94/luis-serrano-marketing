"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    // Replace current locale prefix in pathname
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div
      className={`flex items-center gap-1 text-sm font-medium ${isPending ? "opacity-60" : ""}`}
    >
      <button
        onClick={() => switchLocale("es")}
        className={`px-1 py-0.5 transition-colors ${
          locale === "es"
            ? "text-accent font-semibold"
            : "text-mid-gray hover:text-white"
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <span className="text-mid-gray">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-1 py-0.5 transition-colors ${
          locale === "en"
            ? "text-accent font-semibold"
            : "text-mid-gray hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
