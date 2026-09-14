import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { Suspense } from "react";
import { getContent } from "@/lib/content";
import { waLink } from "@/lib/constants";
import SelectedWork from "@/components/home/SelectedWork";
import InquiryForm from "@/components/home/InquiryForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Home({ params }: { params: { locale: string } }) {
  const c = getContent(params.locale);
  return (
    <>
      <header className="hero">
        <Image
          src="/work/hero-pacific.jpg"
          alt="Interior of a 1970s coastal beach house at golden hour, with a floor-to-ceiling ocean view"
          width={2912}
          height={1632}
          priority
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="hero-scrim" />
        <div className="hero-cap">
          <p className="mono">{c.hero.eyebrow}</p>
          <h1 className="display hero-h">{c.hero.title}</h1>
          <p className="hero-sub">{c.hero.sub}</p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#work">{c.hero.viewWork}</a>
            <a className="btn btn-line" href="#contact">{c.hero.startProject}</a>
          </div>
        </div>
      </header>

      <section id="work" className="wrap sec">
        <p className="mono work-label reveal">{c.work.label}</p>
        <SelectedWork c={c} locale={params.locale} />
      </section>

      <section className="sec pos wrap">
        <h2 className="display reveal">{c.positioning.title}</h2>
        <p className="reveal d1">{c.positioning.body}</p>
      </section>

      <section id="services" className="sec-tight">
        <div className="wrap" style={{ marginBottom: "clamp(28px,4vw,50px)" }}>
          <p className="mono reveal">{c.services.label}</p>
          <h2 className="display reveal svc-h">{c.services.title}</h2>
        </div>
        <hr className="rule" />
        <div className="wrap svc-list">
          {c.services.items.map((it) => (
            <div
              key={it.slug}
              id={it.slug}
              className={`svc-row reveal${it.secondary ? " secondary" : ""}`}
            >
              <div className="svc-row-h">
                <h3>{it.name}</h3>
                <span className="price">{c.services.quote}</span>
              </div>
              <p>{it.desc}</p>
              <TrackedLink
                event="service_view"
                params={{ service: it.slug }}
                className="svc-cta"
                href={`/${params.locale}?type=${it.inquiry}#contact`}
              >
                {c.services.cta} →
              </TrackedLink>
            </div>
          ))}
        </div>
        <hr className="rule" />
      </section>

      <section id="about" className="sec-tight wrap">
        <div className="about reveal">
          <h2 className="display">{c.about.label}</h2>
          <p>{c.about.body}</p>
        </div>
      </section>

      <section id="resources" className="sec-tight wrap res-teaser">
        <div className="res-teaser-h reveal">
          <p className="mono">{c.resources.label}</p>
          <h2 className="display">{c.resources.title}</h2>
          <p>{c.resources.intro}</p>
          <Link className="btn btn-line" href={`/${params.locale}/resources`}>
            {c.resources.teaserCta}
          </Link>
        </div>
      </section>

      <section id="contact" className="sec wrap">
        <div className="contact-head reveal">
          <h2 className="display">{c.contact.title}</h2>
          <p>{c.contact.sub}</p>
          <div className="contact-wa">
            <a className="btn btn-line" href={waLink(c.whatsapp.message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} /> {c.whatsapp.cta}
            </a>
          </div>
        </div>
        <Suspense>
          <InquiryForm c={c} />
        </Suspense>
      </section>
    </>
  );
}
