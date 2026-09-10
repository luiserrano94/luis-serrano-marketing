"use client";
import { useState } from "react";

type C = {
  contact: {
    fields: { name: string; email: string; company: string; assets: string; brief: string; timeline: string; budget: string };
    submit: string;
    sending: string;
    thanksTitle: string;
    thanksNote: string;
    errorNote: string;
  };
};

export default function InquiryForm({ c }: { c: C }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const f = c.contact.fields;

  if (state === "done") {
    return (
      <div className="inq-done">
        <p className="display">{c.contact.thanksTitle}</p>
        <p className="dp">{c.contact.thanksNote}</p>
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
              subject: "New project inquiry from luisserrano.ai",
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
      <div className="fgrid">
        <label className="field"><span>{f.name}</span><input name="name" type="text" autoComplete="name" required /></label>
        <label className="field"><span>{f.email}</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="field"><span>{f.company}</span><input name="company" type="text" /></label>
        <label className="field"><span>{f.assets}</span><input name="assets" type="text" /></label>
        <label className="field span2"><span>{f.brief}</span><textarea name="brief" rows={4} /></label>
        <label className="field"><span>{f.timeline}</span><input name="timeline" type="text" /></label>
        <label className="field"><span>{f.budget}</span><input name="budget" type="text" /></label>
      </div>
      <button className="btn btn-solid" type="submit" disabled={state === "sending"}>
        {state === "sending" ? c.contact.sending : c.contact.submit}
      </button>
      {state === "error" && (
        <p className="dp" style={{ marginTop: 18, color: "var(--muted)" }}>{c.contact.errorNote}</p>
      )}
    </form>
  );
}
