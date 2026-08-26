import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import Logo from "./Logo";
import { LinkedInIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("footer");

  return (
    <footer className="bg-[#050505] border-t border-line pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-mid-gray text-sm leading-relaxed mt-4">
              {t("tagline")}
            </p>
          </div>

          {/* Col 2: Nav */}
          <div>
            <h3 className="text-ink font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("col1_title")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: `/${locale}`, label: t("nav_home") },
                { href: `/${locale}/services`, label: t("nav_services") },
                { href: `/${locale}/about`, label: t("nav_about") },
                { href: `/${locale}/contact`, label: t("nav_contact") },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-mid-gray hover:text-ink transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-ink font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("col2_title")}
            </h3>
            <ul className="space-y-3">
              {[
                // The web-design landing was orphaned: no page linked to it.
                {
                  label: t("service_web"),
                  href: locale === "es" ? "/diseno-web" : "/web-design",
                },
                { label: t("service_branding"), href: `/${locale}/services` },
                { label: t("service_digital"), href: `/${locale}/services` },
                { label: t("service_ads"), href: `/${locale}/services` },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-mid-gray hover:text-ink transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Social */}
          <div>
            <h3 className="text-ink font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("col3_title")}
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-mid-gray hover:text-ink transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={14} />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mid-gray hover:text-ink transition-colors text-sm flex items-center gap-2"
                >
                  <span className="text-xs">📱</span>
                  +52 662 336 1906
                </a>
              </li>
              <li className="text-mid-gray text-sm flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                Juárez, Chihuahua, MX
              </li>
            </ul>

            <h3 className="text-ink font-semibold text-sm mb-3 uppercase tracking-widest">
              {t("col4_title")}
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/luisserranomkt/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-gray hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/luisserranomkt?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-gray hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-serrano-50b231138/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-gray hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mid-gray">
          <p>{t("copyright")}</p>
          <Link
            href={`/${locale}/privacy`}
            className="hover:text-ink transition-colors"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
