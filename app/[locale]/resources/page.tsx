import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { RESOURCES } from "@/lib/resources";
import { localeAlternates } from "@/lib/constants";

type Item = { title: string; desc: string; includes: readonly string[] };

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return {
    title: `${c.resources.title} · Luis Serrano`,
    description: c.resources.intro,
    alternates: localeAlternates(params.locale, "/resources"),
  };
}

export default function ResourcesIndex({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const r = getContent(locale).resources;
  const items = r.items as unknown as Record<string, Item>;
  const base = `/${locale}`;

  return (
    <>
      <div className="work-hero reveal">
        <p className="mono">{r.label}</p>
        <h1 className="display">{r.title}</h1>
        <p>{r.intro}</p>
      </div>
      <section className="wrap sec-tight res-list">
        {RESOURCES.map((res) => {
          const it = items[res.slug];
          if (!it) return null;
          return (
            <Link key={res.slug} href={`${base}/resources/${res.slug}`} className="res-card reveal">
              <div className="res-card-h">
                <span className="mono">{r.categories[res.category]}</span>
                <span className="mono res-fmt">{r.formats[res.format]}</span>
              </div>
              <h2 className="display">{it.title}</h2>
              <p>{it.desc}</p>
              <span className="res-card-cta mono">{r.lockedLabel} →</span>
            </Link>
          );
        })}
      </section>
    </>
  );
}
