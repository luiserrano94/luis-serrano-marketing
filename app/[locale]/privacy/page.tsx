import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "privacy" });
  return {
    title: t("meta_title"),
    robots: { index: false, follow: false },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "privacy" });

  const sections = Array.from({ length: 11 }, (_, i) => ({
    title: t(`s${i + 1}_title` as never),
    body: t(`s${i + 1}_body` as never),
  }));

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-bebas text-5xl sm:text-6xl text-white mb-2">{t("title")}</h1>
          <p className="text-mid-gray text-sm">{t("last_updated")}</p>
        </div>

        <div className="prose-custom">
          <p className="text-light-gray leading-relaxed mb-10">{t("intro")}</p>

          {sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-white font-semibold text-lg mb-3">{section.title}</h2>
              <p className="text-mid-gray leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
