import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { PROJECTS } from "@/lib/projects";

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
    openGraph: { title: pt.title, description: pt.intro, images: [p.cover] },
  };
}

export default function ProjectPage({ params }: { params: { locale: string; slug: string } }) {
  const c = getContent(params.locale);
  const i = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (i === -1) notFound();
  const p = PROJECTS[i];
  const proj = c.projects as Record<string, { title: string; category: string; line: string; intro: string }>;
  const pt = proj[p.slug];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const base = `/${params.locale}`;

  return (
    <>
      <div className="proj-head reveal">
        <Link className="proj-back" href={`${base}/work`}>
          ← {c.projectNav.back}
        </Link>
        <p className="proj-meta">
          {p.num} · {pt.category} · 2026
        </p>
        <h1 className="proj-title display">{pt.title}</h1>
        <p className="proj-intro">{pt.intro}</p>
        {p.hasNote && <p className="proj-note">{c.cartier}</p>}
      </div>

      <div className="pgal">
        {p.gallery.map((src, k) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={`${pt.title}, ${k + 1}`} loading={k < 3 ? "eager" : "lazy"} />
        ))}
      </div>

      <nav className="proj-nav">
        <Link className="prev" href={`${base}/work/${prev.slug}`}>
          <span className="lbl">{c.projectNav.prev}</span>
          <span className="nm display">{proj[prev.slug].title}</span>
        </Link>
        <Link className="next" href={`${base}/work/${next.slug}`}>
          <span className="lbl">{c.projectNav.next}</span>
          <span className="nm display">{proj[next.slug].title}</span>
        </Link>
      </nav>
    </>
  );
}
