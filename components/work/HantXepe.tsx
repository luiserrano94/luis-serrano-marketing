import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { HXH_HERO_IMG, HXH_SEQUENCE } from "@/lib/hxh";

type Work = { term: string; gloss: string; body: string; classification: string };
type Hxh = {
  title: string;
  subtitle: string;
  curatorial: string;
  hero: Work;
  works: Record<string, Work>;
};
type NavLink = { slug: string; title: string };

const IMG_W = 1456;
const IMG_H = 816;

function Frame({ src, alt, priority, sizes }: { src: string; alt: string; priority?: boolean; sizes: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={IMG_W}
      height={IMG_H}
      priority={priority}
      sizes={sizes}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

export default function HantXepe({
  locale,
  num,
  total,
  prev,
  next,
}: {
  locale: string;
  num: string;
  total: number;
  prev: NavLink;
  next: NavLink;
}) {
  const c = getContent(locale);
  const h = c.hxh as unknown as Hxh;
  const nav = c.projectNav;
  const base = `/${locale}`;

  const Text = (w: Work, bigTerm: boolean) => (
    <div className="hxh-text">
      <p className={bigTerm ? "hxh-term hxh-term-big" : "hxh-term"}>{w.term}</p>
      <p className="hxh-gloss">{w.gloss}</p>
      <p className="hxh-body">{w.body}</p>
      <p className="hxh-class">{w.classification}</p>
    </div>
  );

  return (
    <article className="hxh">
      {/* HERO — IIZAX integrated as the first work (never repeated) */}
      <header className="hxh-hero">
        <div className="hxh-hero-head">
          <Link className="proj-back" href={`${base}/work`}>← {nav.back}</Link>
          <p className="hxh-eyebrow">{nav.project}</p>
        </div>
        <h1 className="hxh-title display">{h.title}</h1>
        <p className="hxh-subtitle">{h.subtitle}</p>

        <figure className="hxh-hero-fig">
          <Frame src={HXH_HERO_IMG} alt={`${h.hero.term} — ${h.hero.gloss}`} priority sizes="100vw" />
        </figure>

        <div className="hxh-hero-work">
          <div className="hxh-hero-lead">
            <p className="hxh-term hxh-term-big">{h.hero.term}</p>
            <p className="hxh-gloss">{h.hero.gloss}</p>
          </div>
          <div className="hxh-hero-copy">
            <p className="hxh-body">{h.hero.body}</p>
            <p className="hxh-class">{h.hero.classification}</p>
          </div>
        </div>

        <a className="hxh-scroll" href="#hxh-azoj">{nav.scroll} <span aria-hidden="true">↓</span></a>
      </header>

      {/* CURATORIAL STATEMENT */}
      <section className="hxh-curatorial reveal">
        <p>{h.curatorial}</p>
      </section>

      {/* WORKS 2–8 */}
      {HXH_SEQUENCE.map((item) => {
        const w = h.works[item.id];
        const big = item.layout === "A" || item.layout === "B";
        const alt = `${w.term} — ${w.gloss}`;

        if (item.layout === "C") {
          return (
            <section key={item.id} id={`hxh-${item.id}`} className="hxh-work hxh-C reveal">
              <figure className="hxh-fig-full">
                <Frame src={item.img} alt={alt} sizes="100vw" />
              </figure>
              <div className="hxh-caption">
                <div className="hxh-caption-term">
                  <p className="hxh-term hxh-term-big">{w.term}</p>
                  <p className="hxh-gloss">{w.gloss}</p>
                </div>
                <div className="hxh-caption-copy">
                  <p className="hxh-body">{w.body}</p>
                  <p className="hxh-class">{w.classification}</p>
                </div>
              </div>
            </section>
          );
        }

        if (item.layout === "D" || item.layout === "closing") {
          return (
            <section
              key={item.id}
              id={`hxh-${item.id}`}
              className={`hxh-work ${item.layout === "closing" ? "hxh-closing" : "hxh-D"} reveal`}
            >
              <figure className="hxh-fig-center">
                <Frame src={item.img} alt={alt} sizes="(max-width:900px) 100vw, 74vw" />
              </figure>
              <div className="hxh-text hxh-text-center">
                <p className="hxh-term">{w.term}</p>
                <p className="hxh-gloss">{w.gloss}</p>
                <p className="hxh-body">{w.body}</p>
                <p className="hxh-class">{w.classification}</p>
              </div>
            </section>
          );
        }

        // A (text | image) and B (image | text)
        return (
          <section
            key={item.id}
            id={`hxh-${item.id}`}
            className={`hxh-work ${item.layout === "A" ? "hxh-A" : "hxh-B"} reveal`}
          >
            {item.layout === "A" ? (
              <>
                {Text(w, big)}
                <figure className="hxh-fig">
                  <Frame src={item.img} alt={alt} sizes="(max-width:900px) 100vw, 58vw" />
                </figure>
              </>
            ) : (
              <>
                <figure className="hxh-fig">
                  <Frame src={item.img} alt={alt} sizes="(max-width:900px) 100vw, 58vw" />
                </figure>
                {Text(w, big)}
              </>
            )}
          </section>
        );
      })}

      {/* prev / next — generous space above (see .hxh + .proj-nav in globals.css) */}
      <nav className="proj-nav hxh-nav">
        <Link className="prev" href={`${base}/work/${prev.slug}`}>
          <span className="lbl">← {nav.prev}</span>
          <span className="nm display">{prev.title}</span>
        </Link>
        <span className="proj-count">{num} / {String(total).padStart(2, "0")}</span>
        <Link className="next" href={`${base}/work/${next.slug}`}>
          <span className="lbl">{nav.next} →</span>
          <span className="nm display">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
