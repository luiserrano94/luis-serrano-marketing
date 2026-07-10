"use client";

import { useState } from "react";

interface Props {
  lang?: "en" | "es";
}

const COPY = {
  en: {
    badge: "Or send us a message",
    title: "Start Your Project",
    subtitle: "Fill in the form and we'll reply within 24 hours.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Tell us about your project",
    messagePlaceholder:
      "What kind of site do you need? Timeline? Any references?",
    submit: "Send Message",
    sending: "Sending…",
    success: "Message sent! We'll be in touch soon.",
    error: "Something went wrong. Try again or reach us on WhatsApp.",
    subject: "Website Project Inquiry — luisserranomkt.com",
  },
  es: {
    badge: "O envíanos un mensaje",
    title: "Comienza Tu Proyecto",
    subtitle: "Llena el formulario y te respondemos en menos de 24 horas.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    message: "Cuéntanos tu proyecto",
    messagePlaceholder:
      "¿Qué tipo de sitio necesitas? ¿Tienes fecha límite? ¿Referencias?",
    submit: "Enviar Mensaje",
    sending: "Enviando…",
    success: "¡Mensaje enviado! Te contactamos pronto.",
    error: "Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.",
    subject: "Consulta Proyecto Web — luisserranomkt.com",
  },
};

export default function LandingLeadForm({ lang = "en" }: Props) {
  const c = COPY[lang];
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)
        .value;

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: c.subject,
      from_name: getValue("name"),
      name: getValue("name"),
      email: getValue("email"),
      message: getValue("message"),
      botcheck: "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-5 py-24">
      <div className="max-w-xl mx-auto">
        {/* Badge */}
        <p className="text-accent text-xs font-semibold font-poppins tracking-widest uppercase mb-3 text-center">
          {c.badge}
        </p>
        <h2 className="font-bebas text-5xl md:text-6xl text-white text-center mb-3">
          {c.title}
        </h2>
        <p className="text-mid-gray text-sm font-poppins text-center mb-10">
          {c.subtitle}
        </p>

        {status === "success" ? (
          <div className="border border-accent/30 bg-accent/5 rounded-2xl p-10 text-center">
            <svg
              className="w-10 h-10 text-accent mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-5" />
            </svg>
            <p className="text-white font-semibold font-poppins text-lg">
              {c.success}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border border-white/8 bg-surface rounded-2xl p-8 flex flex-col gap-5"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ld-name"
                className="text-white text-sm font-semibold font-poppins"
              >
                {c.name}
              </label>
              <input
                id="ld-name"
                name="name"
                type="text"
                required
                placeholder={c.namePlaceholder}
                className="bg-background border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-poppins placeholder-mid-gray/50 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ld-email"
                className="text-white text-sm font-semibold font-poppins"
              >
                {c.email}
              </label>
              <input
                id="ld-email"
                name="email"
                type="email"
                required
                placeholder={c.emailPlaceholder}
                className="bg-background border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-poppins placeholder-mid-gray/50 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ld-message"
                className="text-white text-sm font-semibold font-poppins"
              >
                {c.message}
              </label>
              <textarea
                id="ld-message"
                name="message"
                required
                rows={4}
                placeholder={c.messagePlaceholder}
                className="bg-background border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-poppins placeholder-mid-gray/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* Error */}
            {status === "error" && (
              <p className="text-red-400 text-xs font-poppins">{c.error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-accent text-black font-semibold font-poppins py-4 rounded-lg hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {status === "sending" ? c.sending : c.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
