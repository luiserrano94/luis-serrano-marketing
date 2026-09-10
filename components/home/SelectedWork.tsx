import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

type ProjText = { title: string; category: string; line: string };
type C = {
  gallery: { images: string };
  projectNav: { viewGallery: string };
  projects: Record<string, ProjText>;
};

const POS = ["c-1", "c-2", "c-3", "c-4"];

export default function SelectedWork({ c, locale }: { c: C; locale: string }) {
  const base = `/${locale}`;
  return (
    <div className="grid">
      {PROJECTS.map((p, i) => {
        const t = c.projects[p.slug];
        return (
          <Link key={p.slug} href={`${base}/work/${p.slug}`} className={`cell ${POS[i]} reveal ${i % 2 ? "d1" : ""}`}>
            <div className="fr">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt={t.title} />
            </div>
            <div className="cap">
              <div className="r">
                <span className="num">{p.num}</span>
                <h3 className="t">{t.title}</h3>
              </div>
              <span className="m">{t.category} · 2026</span>
              <span className="line">{t.line}</span>
              <span className="open">
                {c.projectNav.viewGallery} · {p.gallery.length} {c.gallery.images}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
