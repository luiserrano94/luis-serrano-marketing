import type { Metadata } from "next";
import { getContent } from "@/lib/content";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return { title: `${c.resources.title} · Luis Serrano`, description: c.resources.intro };
}

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  const c = getContent(params.locale);
  return (
    <section className="wrap sec">
      <div className="res reveal">
        <p className="mono">{c.resources.label}</p>
        <h1 className="display">{c.resources.title}</h1>
        <p>{c.resources.intro}</p>
        <span className="soon">{c.resources.soon}</span>
      </div>
    </section>
  );
}
