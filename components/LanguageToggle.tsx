"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LOCALES = [
  { code: "es", label: "ES", aria: "Cambiar a español" },
  { code: "en", label: "EN", aria: "Switch to English" },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {LOCALES.map(({ code, label, aria }, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-mid-gray">|</span>}
          {code === locale ? (
            <span className="px-1 py-0.5 text-accent font-semibold">
              {label}
            </span>
          ) : (
            // A real <a> so crawlers follow it — the old <button> left the
            // other locale with zero internal links.
            <Link
              href={pathname.replace(`/${locale}`, `/${code}`)}
              hrefLang={code}
              aria-label={aria}
              className="px-1 py-0.5 transition-colors text-mid-gray hover:text-ink"
            >
              {label}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
