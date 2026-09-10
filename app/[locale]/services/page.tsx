import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return { title: `${c.services.label} · Luis Serrano`, description: c.services.title };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const c = getContent(params.locale);
  const base = `/${params.locale}`;
  return (
    <section className="wrap sec">
      <div className="about reveal" style={{ maxWidth: "none", marginBottom: "clamp(40px,6vw,72px)" }}>
        <p className="mono" style={{ marginBottom: 20 }}>{c.services.label}</p>
        <h1 className="display" style={{ fontWeight: 700, fontSize: "clamp(40px,7vw,88px)", letterSpacing: "-.02em", margin: 0 }}>
          {c.services.title}
        </h1>
      </div>
      <hr className="rule" />
      <div className="svc">
        <div className="svc-i reveal">
          <h3>{c.services.sprint.name}</h3>
          <span className="price">{c.services.sprint.price}</span>
          <p>{c.services.sprint.desc}</p>
        </div>
        <div className="svc-i reveal d1">
          <h3>{c.services.campaign.name}</h3>
          <span className="price">{c.services.campaign.price}</span>
          <p>{c.services.campaign.desc}</p>
        </div>
      </div>
      <hr className="rule" />
      <div className="reveal" style={{ marginTop: "clamp(50px,7vw,90px)" }}>
        <Link className="btn btn-solid" href={`${base}/contact`}>{c.hero.startProject}</Link>
      </div>
    </section>
  );
}
