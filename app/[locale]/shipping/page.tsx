import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/lib/constants";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "shipping" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: localeAlternates(params.locale, "/shipping"),
  };
}

export default async function ShippingPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "shipping" });
  const sections = Array.from({ length: 5 }, (_, i) => ({
    title: t(`s${i + 1}_title` as never),
    body: t(`s${i + 1}_body` as never),
  }));

  return (
    <section className="wrap sec">
      <div className="legal reveal">
        <h1 className="display">{t("title")}</h1>
        <p className="upd">{t("last_updated")}</p>
        <p className="lead">{t("intro")}</p>
        {sections.map((s, i) => (
          <section key={i}>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
