"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Fields = {
  name: string; email: string; company: string;
  assets: string; brief: string; timeline: string; budget: string;
  space: string; dimensions: string;
  needs: string; websiteUrl: string; pageCount: string; branding: string;
  references: string; message: string; optional: string;
};
type C = {
  contact: {
    typeLabel: string;
    types: { visual: string; print: string; website: string; general: string };
    fields: Fields;
    opt: { yes: string; no: string; notSure: string; select: string };
    submit: string; sending: string; thanksTitle: string; thanksNote: string; errorNote: string;
  };
};

const TYPES = ["visual", "print", "website", "general"] as const;
type T = (typeof TYPES)[number];
const isType = (v: string | null): v is T => !!v && (TYPES as readonly string[]).includes(v);

export default function InquiryForm({ c }: { c: C }) {
  const params = useSearchParams();
  const q = params.get("type");
  const [type, setType] = useState<T>(isType(q) ? q : "visual");
  useEffect(() => { if (isType(q)) setType(q); }, [q]);

  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const t = c.contact;
  const f = t.fields;
  const opt = (label: string) => (
    <>{label} <em>({f.optional})</em></>
  );

  if (state === "done") {
    return (
      <div className="inq-done">
        <p className="display">{t.thanksTitle}</p>
        <p className="dp">{t.thanksNote}</p>
      </div>
    );
  }

  return (
    <form
      className="inq"
      noValidate
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        setState("sending");
        try {
          const data = Object.fromEntries(new FormData(form).entries());
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
              subject: `New ${type} inquiry — Luis Serrano`,
              from_name: String(data.name || "Website inquiry"),
              ...data,
            }),
          });
          setState(res.ok ? "done" : "error");
        } catch {
          setState("error");
        }
      }}
    >
      <p className="inq-type-label">{t.typeLabel}</p>
      <div className="inq-types">
        {TYPES.map((v) => (
          <button
            key={v}
            type="button"
            className="inq-type"
            aria-pressed={type === v}
            onClick={() => setType(v)}
          >
            {t.types[v]}
          </button>
        ))}
      </div>
      <input type="hidden" name="inquiry_type" value={t.types[type]} />

      <div className="fgrid">
        <label className="field"><span>{f.name}</span><input name="name" type="text" autoComplete="name" required /></label>
        <label className="field"><span>{f.email}</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="field span2"><span>{opt(f.company)}</span><input name="company" type="text" /></label>

        {type === "visual" && (
          <>
            <label className="field span2"><span>{f.brief}</span><textarea name="brief" rows={4} /></label>
            <label className="field"><span>{opt(f.assets)}</span><input name="assets" type="text" /></label>
            <label className="field"><span>{opt(f.timeline)}</span><input name="timeline" type="text" /></label>
            <label className="field span2"><span>{opt(f.budget)}</span><input name="budget" type="text" /></label>
          </>
        )}

        {type === "print" && (
          <>
            <label className="field span2"><span>{f.brief}</span><textarea name="brief" rows={4} /></label>
            <label className="field"><span>{opt(f.space)}</span><input name="space" type="text" /></label>
            <label className="field"><span>{opt(f.dimensions)}</span><input name="dimensions" type="text" /></label>
            <label className="field"><span>{opt(f.timeline)}</span><input name="timeline" type="text" /></label>
            <label className="field"><span>{opt(f.budget)}</span><input name="budget" type="text" /></label>
          </>
        )}

        {type === "website" && (
          <>
            <label className="field span2"><span>{f.needs}</span><textarea name="needs" rows={4} /></label>
            <label className="field"><span>{opt(f.websiteUrl)}</span><input name="websiteUrl" type="text" /></label>
            <label className="field"><span>{opt(f.pageCount)}</span><input name="pageCount" type="text" /></label>
            <label className="field span2">
              <span>{f.branding}</span>
              <select name="branding" defaultValue="">
                <option value="" disabled>{t.opt.select}</option>
                <option value={t.opt.yes}>{t.opt.yes}</option>
                <option value={t.opt.no}>{t.opt.no}</option>
                <option value={t.opt.notSure}>{t.opt.notSure}</option>
              </select>
            </label>
            <label className="field span2"><span>{opt(f.references)}</span><input name="references" type="text" /></label>
            <label className="field"><span>{opt(f.timeline)}</span><input name="timeline" type="text" /></label>
            <label className="field"><span>{opt(f.budget)}</span><input name="budget" type="text" /></label>
          </>
        )}

        {type === "general" && (
          <label className="field span2"><span>{f.message}</span><textarea name="message" rows={5} /></label>
        )}
      </div>

      <button className="btn btn-solid" type="submit" disabled={state === "sending"}>
        {state === "sending" ? t.sending : t.submit}
      </button>
      {state === "error" && (
        <p className="dp" style={{ marginTop: 18, color: "var(--muted)" }}>{t.errorNote}</p>
      )}
    </form>
  );
}
