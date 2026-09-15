import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { localeAlternates } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import Lightbox from "@/components/Lightbox";
import HantXepe from "@/components/work/HantXepe";
import TrackView from "@/components/TrackView";

type Cap = { n: string; label: string; line: string };
type Rail = { lines?: readonly string[]; italic?: string; words?: readonly string[] };
type PCopy = {
  title: string;
  titleLines: readonly string[];
  category: string;
  intro: string;
  rail: Rail;
  conceptTitle: readonly string[];
  conceptBody: readonly string[];
  conceptNote?: readonly string[];
  bottomRail?: readonly string[];
  caps?: readonly Cap[];
};

export function generateStaticParams() {
  return PROJECTS.flatMap((p) => [
    { locale: "es", slug: p.slug },
    { locale: "en", slug: p.slug },
  ]);
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const c = getContent(params.locale);
  const pt = (c.projects as Record<string, { title: string; intro: string }>)[params.slug];
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!pt || !p) return {};
  return {
    title: `${pt.title} · Luis Serrano`,
    description: pt.intro,
    alternates: localeAlternates(params.locale, `/work/${params.slug}`),
    openGraph: { title: pt.title, description: pt.intro, images: [p.cover] },
  };
}

export default function ProjectPage({ params }: { params: { locale: string; slug: string } }) {
  const c = getContent(params.locale);
  const i = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (i === -1) notFound();
  const p = PROJECTS[i];
  const proj = c.projects as unknown as Record<string, PCopy>;
  const pt = proj[p.slug];
  const nav = c.projectNav;
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const base = `/${params.locale}`;

  // Flagship editorial project renders its own bespoke page.
  if (p.kind === "editorial") {
    return (
      <>
        <TrackView event="project_view" params={{ project: p.slug }} />
        <HantXepe
          locale={params.locale}
          num={p.num}
          total={PROJECTS.length}
          prev={{ slug: prev.slug, title: proj[prev.slug].title }}
          next={{ slug: next.slug, title: proj[next.slug].title }}
        />
      </>
    );
  }

  // Gallery images in display order → lightbox list + each image's zoom index.
  const shown: number[] = [];
  p.rows.forEach((r) => r.cells.forEach((cell) => { if (typeof cell !== "string") shown.push(cell.g); }));
  const zoomImages = shown.map((g) => p.gallery[g]);
  const zoomIndex = new Map(shown.map((g, idx) => [g, idx]));

  const Concept = (
    <div className="pconcept">
      <p className="pk">{nav.concept}</p>
      <h2 className="pctitle display">
        {pt.conceptTitle.map((l, k) => (
          <span key={k}>{l}</span>
        ))}
      </h2>
      {pt.conceptBody.map((para, k) => (
        <p className="pcbody" key={k}>{para}</p>
      ))}
      {p.hasNote && <p className="proj-note">{c.cartier}</p>}
      {pt.conceptNote && (
        <p className="pcnote">
          {pt.conceptNote.map((l, k) => (
            <span key={k}>{l}</span>
          ))}
        </p>
      )}
    </div>
  );

  return (
    <>
      <TrackView event="project_view" params={{ project: p.slug }} />
      <header className="phero">
        <div className="phero-txt">
          <Link className="proj-back" href={`${base}/work`}>← {nav.back}</Link>
          <p className="phero-eyebrow">{nav.project}</p>
          <h1 className="phero-title display">
            {pt.titleLines.map((l, k) => (
              <span key={k}>{l}</span>
            ))}
          </h1>
          <span className="phero-rule" aria-hidden="true" />
          <p className="phero-meta">{pt.category} · 2026</p>
          <p className="phero-intro">{pt.intro}</p>
          <a className="phero-scroll" href="#concept">
            {nav.scroll} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="phero-figure">
          <Image
            src={p.cover}
            alt={pt.title}
            width={p.coverW}
            height={p.coverH}
            priority
            sizes="(max-width:820px) 100vw, 58vw"
            style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "84vh" }}
          />
        </figure>
        <div className="phero-rail" aria-hidden="true">
          {pt.rail.italic && <span className="pr-i">{pt.rail.italic}</span>}
          {pt.rail.lines?.map((l, k) => (
            <span key={k}>{l}</span>
          ))}
          {pt.rail.words && (
            <span className="pr-w">
              {pt.rail.words.map((w, k) => (
                <span key={k}>{w}</span>
              ))}
            </span>
          )}
        </div>
      </header>

      <div id="concept" className="pbody">
        {p.rows.map((row, ri) => (
          <div className={`prow${row.size ? ` prow-${row.size}` : ""}`} key={ri} style={{ gridTemplateColumns: row.cols }}>
            {row.cells.map((cell, ci) => {
              if (cell === "concept") return <div className="pconcept-w reveal" key={ci}>{Concept}</div>;
              if (cell === "rail")
                return (
                  <div className="pbrail-w" key={ci}>
                    {pt.bottomRail && (
                      <div className="pbrail">
                        {pt.bottomRail.map((l, k) => (
                          <span key={k}>{l}</span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              const g = cell.g;
              const cap = pt.caps?.[g];
              return (
                <figure className="pcell reveal" key={ci}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.gallery[g]}
                    alt={cap ? `${pt.title}, ${cap.label}` : `${pt.title}, ${g + 1}`}
                    data-zoom
                    data-i={zoomIndex.get(g)}
                    loading={ri === 0 ? "eager" : "lazy"}
                  />
                  {cap && (
                    <figcaption className="pcap">
                      <span className="pcap-l">{cap.n} / {cap.label}</span>
                      <span className="pcap-t">{cap.line}</span>
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        ))}
      </div>

      <nav className="proj-nav">
        <Link className="prev" href={`${base}/work/${prev.slug}`}>
          <span className="lbl">← {nav.prev}</span>
          <span className="nm display">{proj[prev.slug].title}</span>
        </Link>
        <span className="proj-count">{p.num} / {String(PROJECTS.length).padStart(2, "0")}</span>
        <Link className="next" href={`${base}/work/${next.slug}`}>
          <span className="lbl">{nav.next} →</span>
          <span className="nm display">{proj[next.slug].title}</span>
        </Link>
      </nav>

      <Lightbox images={zoomImages} closeLabel={c.gallery.close} />
    </>
  );
}
