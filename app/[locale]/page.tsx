import Image from "next/image";
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
          width={1456}
          height={816}
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
        </div>
        <hr className="rule" />
        <div className="wrap svc">
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
      </section>

      <section id="about" className="sec-tight wrap">
        <div className="about reveal">
          <h2 className="display">{c.about.label}</h2>
          <p>{c.about.body}</p>
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
        <InquiryForm c={c} />
      </section>
    </>
  );
}
