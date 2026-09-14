import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { PRINTS } from "@/lib/prints";
import { localeAlternates } from "@/lib/constants";

type Proj = { title: string; category: string };

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return {
    title: `${c.prints.title} · Luis Serrano`,
    description: c.prints.intro,
    alternates: localeAlternates(params.locale, "/prints"),
  };
}

export default function PrintsIndex({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const c = getContent(locale);
  const p = c.prints;
  const proj = c.projects as unknown as Record<string, Proj>;
  const from = p.sizes[0].price;
  const base = `/${locale}`;

  return (
    <>
      <div className="work-hero reveal">
        <p className="mono">{p.label}</p>
        <h1 className="display">{p.title}</h1>
        <p>{p.intro}</p>
      </div>
      <section className="wrap sec-tight res-list">
        {PRINTS.map((art) => {
          const t = proj[art.slug];
          if (!t) return null;
          return (
            <Link key={art.slug} href={`${base}/prints/${art.slug}`} className="res-card reveal">
              <div className="print-thumb">
                <Image
                  src={art.cover}
                  alt={t.title}
                  width={art.coverW}
                  height={art.coverH}
                  sizes="(max-width:720px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="res-card-h">
                <span className="mono">{t.category}</span>
                <span className="mono res-fmt">{p.fromLabel} {from}</span>
              </div>
              <h2 className="display">{t.title}</h2>
            </Link>
          );
        })}
      </section>
    </>
  );
}
