import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { getResource } from "@/lib/resources";
import { COOKIE, verifyToken } from "@/lib/resourceAccess";
import { localeAlternates } from "@/lib/constants";
import ResourceGate from "@/components/resources/ResourceGate";

type Item = { title: string; desc: string; includes: readonly string[] };

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const items = getContent(params.locale).resources.items as unknown as Record<string, Item>;
  const it = items[params.slug];
  if (!it) return {};
  return {
    title: `${it.title} · Luis Serrano`,
    description: it.desc,
    alternates: localeAlternates(params.locale, `/resources/${params.slug}`),
  };
}

export default function ResourcePage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const meta = getResource(slug);
  const r = getContent(locale).resources;
  const items = r.items as unknown as Record<string, Item>;
  const it = items[slug];
  if (!meta || !it) notFound();

  // Gate check happens on the server. When locked, the full body is never
  // sent to the client (plan §28) — only the teaser + the email form.
  const unlocked = verifyToken(cookies().get(COOKIE)?.value);
  const base = `/${locale}`;

  return (
    <article className="wrap sec res-article">
      <Link className="proj-back" href={`${base}/resources`}>← {r.title}</Link>
      <p className="res-meta">{r.categories[meta.category]} · {r.formats[meta.format]}</p>
      <h1 className="display res-title">{it.title}</h1>
      <p className="res-desc">{it.desc}</p>

      <div className="res-inc reveal">
        <p className="mono">{r.includesLabel}</p>
        <ul>
          {it.includes.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>

      {unlocked ? (
        <div className="res-body reveal">
          <hr className="rule" />
          <p className="res-draft">{r.gate.draft}</p>
        </div>
      ) : (
        // Pass only what the form renders. The body/draft is never sent to a
        // locked client, so an unauthenticated request can't receive it.
        <ResourceGate
          slug={slug}
          gate={{
            heading: r.gate.heading,
            body: r.gate.body,
            placeholder: r.gate.placeholder,
            button: r.gate.button,
            sending: r.gate.sending,
            invalid: r.gate.invalid,
            error: r.gate.error,
            unavailable: r.gate.unavailable,
          }}
        />
      )}
    </article>
  );
}
