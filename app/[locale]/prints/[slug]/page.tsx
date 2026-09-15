import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PROJECTS } from "@/lib/projects";
import { PRINT_SLUGS, isPrintSlug } from "@/lib/prints";
import { localeAlternates } from "@/lib/constants";
import TrackView from "@/components/TrackView";

type Proj = { title: string; category: string; intro: string };

export function generateStaticParams() {
  return PRINT_SLUGS.flatMap((slug) => [
    { locale: "es", slug },
    { locale: "en", slug },
  ]);
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const c = getContent(params.locale);
  const t = (c.projects as unknown as Record<string, Proj>)[params.slug];
  const art = PROJECTS.find((x) => x.slug === params.slug);
  if (!t || !art || !isPrintSlug(params.slug)) return {};
  return {
    title: `${t.title} — ${c.prints.title} · Luis Serrano`,
    description: t.intro,
    alternates: localeAlternates(params.locale, `/prints/${params.slug}`),
    openGraph: { title: t.title, description: t.intro, images: [art.cover] },
  };
}

export default function PrintPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const art = PROJECTS.find((x) => x.slug === slug);
  if (!art || !isPrintSlug(slug)) notFound();

  const c = getContent(locale);
  const p = c.prints;
  const t = (c.projects as unknown as Record<string, Proj>)[slug];
  const base = `/${locale}`;

  return (
    <article className="wrap sec print-article">
      <TrackView event="print_view" params={{ artwork: slug, series: t.category }} />
      <Link className="proj-back" href={`${base}/prints`}>← {p.back}</Link>

      <div className="print-grid">
        <figure className="print-figure">
          <Image
            src={art.cover}
            alt={t.title}
            width={art.coverW}
            height={art.coverH}
            priority
            sizes="(max-width:820px) 100vw, 55vw"
            style={{ width: "100%", height: "auto" }}
          />
        </figure>

        <div className="print-info">
          <p className="res-meta">{t.category}</p>
          <h1 className="display print-title">{t.title}</h1>
          <p className="print-context">{t.intro}</p>

          <div className="print-sizes">
            <p className="mono">{p.sizesLabel}</p>
            <ul>
              {p.sizes.map((s) => (
                <li key={s.name}>
                  <span>{s.name} · {s.dim}</span>
                  <span className="price">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="print-spec">
            <div><dt className="mono">{p.editionLabel}</dt><dd>{p.edition}</dd></div>
            <div><dt className="mono">{p.paperLabel}</dt><dd>{p.paper}</dd></div>
            <div><dt className="mono">{p.coaLabel}</dt><dd>{p.coa}</dd></div>
            <div><dt className="mono">{p.shippingLabel}</dt><dd>{p.shipping}</dd></div>
          </dl>

          <div className="print-buy">
            {/* Purchasing is disabled until physical print QA is approved (plan §20). */}
            <button className="btn btn-solid" type="button" disabled aria-disabled="true">
              {p.buy}
            </button>
            <p className="print-soon">{p.soon}</p>
            <Link className="btn btn-line" href={`${base}?type=general#contact`}>{p.inquire}</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
