import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import SelectedWork from "@/components/home/SelectedWork";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return { title: `${c.work.indexTitle} · Luis Serrano`, description: c.work.indexIntro };
}

export default function WorkIndex({ params }: { params: { locale: string } }) {
  const c = getContent(params.locale);
  return (
    <>
      <div className="work-hero reveal">
        <p className="mono">{c.work.label}</p>
        <h1 className="display">{c.work.indexTitle}</h1>
        <p>{c.work.indexIntro}</p>
      </div>
      <section className="wrap sec-tight">
        <SelectedWork c={c} locale={params.locale} />
      </section>
    </>
  );
}
