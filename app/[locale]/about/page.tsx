import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return { title: `${c.about.label} · Luis Serrano`, description: c.about.body.slice(0, 160) };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const c = getContent(params.locale);
  const base = `/${params.locale}`;
  return (
    <section className="wrap sec">
      <div className="about reveal">
        <p className="mono" style={{ marginBottom: 22 }}>{c.about.label}</p>
        <h1 className="display" style={{ fontWeight: 700, fontSize: "clamp(38px,6vw,80px)", letterSpacing: "-.02em", margin: "0 0 .5em" }}>
          Luis Serrano
        </h1>
        <p style={{ fontSize: 22 }}>{c.about.body}</p>
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
          <Link className="btn btn-line" href={`${base}/contact`}>{c.hero.startProject}</Link>
        </div>
      </div>
    </section>
  );
}
