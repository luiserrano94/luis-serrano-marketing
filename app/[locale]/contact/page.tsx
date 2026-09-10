import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import InquiryForm from "@/components/home/InquiryForm";

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
      </div>
      <InquiryForm c={c} />
    </section>
  );
}
