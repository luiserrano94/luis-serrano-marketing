"use client";
import { useEffect, useState } from "react";
import { PROJECTS } from "@/lib/projects";

type ProjText = { title: string; category: string; line: string };
type C = {
  gallery: { images: string; close: string; viewProject: string };
  cartier: string;
  projects: Record<string, ProjText>;
};

const POS = ["c-1", "c-2", "c-3", "c-4"];

export default function SelectedWork({ c }: { c: C }) {
  const [open, setOpen] = useState<string | null>(null);
  const proj = PROJECTS.find((p) => p.slug === open) || null;
  const pt = proj ? c.projects[proj.slug] : null;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid">
        {PROJECTS.map((p, i) => {
          const t = c.projects[p.slug];
          return (
            <button
              key={p.slug}
              className={`cell ${POS[i]} reveal ${i % 2 ? "d1" : ""}`}
              onClick={() => setOpen(p.slug)}
              aria-label={`${c.gallery.viewProject}: ${t.title}, ${p.gallery.length} ${c.gallery.images}`}
            >
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
                  {c.gallery.viewProject} · {p.gallery.length} {c.gallery.images}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {proj && pt && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={pt.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(null);
          }}
        >
          <div className="lb-bar">
            <div className="lb-title">
              {pt.title}{" "}
              <span>
                {proj.gallery.length} {c.gallery.images}
              </span>
            </div>
            <button className="lb-x" onClick={() => setOpen(null)}>
              {c.gallery.close} ✕
            </button>
          </div>
          <div
            className="lb-scroll"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(null);
            }}
          >
            {proj.hasNote && <p className="lb-note">{c.cartier}</p>}
            <div className="lb-imgs">
              {proj.gallery.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt={`${pt.title}, ${i + 1}`} loading={i < 3 ? "eager" : "lazy"} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
