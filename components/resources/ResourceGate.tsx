"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Gate = {
  heading: string; body: string; placeholder: string; button: string;
  sending: string; invalid: string; error: string; unavailable: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ResourceGate({ slug, category, gate }: { slug: string; category?: string; gate: Gate }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "error" | "unavailable" | "invalid">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email)) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      const r = await fetch("/api/resources/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resource: slug }),
      });
      if (r.ok) {
        const w = window as Window & { gtag?: (...a: unknown[]) => void };
        if (typeof w.gtag === "function") w.gtag("event", "resource_unlock", { resource: slug, category });
        // Cookie is set; re-render the server component so the body appears.
        router.refresh();
        return;
      }
      setState(r.status === 503 ? "unavailable" : "error");
    } catch {
      setState("error");
    }
  }

  const msg =
    state === "invalid" ? gate.invalid :
    state === "unavailable" ? gate.unavailable :
    state === "error" ? gate.error : "";

  return (
    <form className="res-gate reveal" onSubmit={submit} noValidate>
      <h2 className="display">{gate.heading}</h2>
      <p>{gate.body}</p>
      <div className="res-gate-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={gate.placeholder}
          aria-label={gate.placeholder}
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state !== "sending") setState("idle"); }}
          required
        />
        <button className="btn btn-solid" type="submit" disabled={state === "sending"}>
          {state === "sending" ? gate.sending : gate.button}
        </button>
      </div>
      {msg && <p className="res-gate-msg" role="alert">{msg}</p>}
    </form>
  );
}
