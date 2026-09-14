import type { Metadata } from "next";
import { Suspense } from "react";
import { getContent } from "@/lib/content";
import { waLink } from "@/lib/constants";
import InquiryForm from "@/components/home/InquiryForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const c = getContent(params.locale);
  return { title: `${c.contact.title} · Luis Serrano`, description: c.contact.sub };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const c = getContent(params.locale);
  return (
    <section className="wrap sec">
      <div className="contact-head reveal">
        <h2 className="display" style={{ fontSize: "clamp(42px,6.4vw,92px)" }}>{c.contact.title}</h2>
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
  );
}
