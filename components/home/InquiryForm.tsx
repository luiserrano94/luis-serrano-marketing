"use client";
import { useState } from "react";

type C = {
  contact: {
    fields: { name: string; email: string; company: string; assets: string; brief: string; timeline: string; budget: string };
    submit: string;
    thanksTitle: string;
    thanksNote: string;
  };
};

export default function InquiryForm({ c }: { c: C }) {
  const [done, setDone] = useState(false);
  const f = c.contact.fields;

  if (done) {
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
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        // TODO(build phase D): wire to Web3Forms for real email delivery.
        setDone(true);
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
      <button className="btn btn-solid" type="submit">{c.contact.submit}</button>
    </form>
  );
}
