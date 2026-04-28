"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations, useLocale } from "next-intl";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(7, "Número inválido"),
  company: z.string().optional(),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().optional(),
  privacy: z.boolean().refine((v) => v === true, "Debes aceptar la política"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [dialCode, setDialCode] = useState("+52");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const services = [
    t("services_option_1"),
    t("services_option_2"),
    t("services_option_3"),
    t("services_option_4"),
    t("services_option_5"),
    t("services_option_6"),
    t("services_option_7"),
    t("services_option_8"),
    t("services_option_9"),
    t("services_option_10"),
    t("services_option_11"),
    t("services_option_12"),
    t("services_option_other"),
  ];

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          phone: `${dialCode} ${data.phone}`,
          company: data.company || "—",
          service: data.service,
          message: data.message || "—",
          subject: `[luisserranomarketing.com] ${data.service} - ${data.name}`,
          from_name: "Luis Serrano Marketing Services",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-accent" />
        <h3 className="text-2xl font-bold text-white">{t("form_success_title")}</h3>
        <p className="text-mid-gray max-w-sm">{t("form_success_desc")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2 border border-white/10 text-light-gray rounded-full text-sm hover:border-accent hover:text-accent transition-colors"
        >
          {locale === "es" ? "Enviar otro mensaje" : "Send another message"}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#111] border border-white/10 text-white placeholder-mid-gray px-4 py-3 rounded-xl focus:outline-none focus:border-accent transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-light-gray mb-1.5";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className={labelClass}>{t("form_name")} *</label>
        <input
          {...register("name")}
          placeholder={t("form_name_placeholder")}
          className={inputClass}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>{t("form_email")} *</label>
        <input
          {...register("email")}
          type="email"
          placeholder={t("form_email_placeholder")}
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Phone with dial code */}
      <div>
        <label className={labelClass}>{t("form_phone")} *</label>
        <div className="flex gap-2">
          <select
            value={dialCode}
            onChange={(e) => setDialCode(e.target.value)}
            className="bg-[#111] border border-white/10 text-white px-3 py-3 rounded-xl focus:outline-none focus:border-accent transition-colors text-sm w-32 shrink-0"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.dialCode}>
                {c.flag} {c.dialCode}
              </option>
            ))}
          </select>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("form_phone_placeholder")}
            className={`${inputClass} flex-1`}
          />
        </div>
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Company */}
      <div>
        <label className={labelClass}>{t("form_company")}</label>
        <input
          {...register("company")}
          placeholder={t("form_company_placeholder")}
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label className={labelClass}>{t("form_service")} *</label>
        <select
          {...register("service")}
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            {t("form_service_placeholder")}
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>{t("form_message")}</label>
        <textarea
          {...register("message")}
          placeholder={t("form_message_placeholder")}
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Privacy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("privacy")}
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-accent shrink-0"
          />
          <span className="text-sm text-mid-gray">
            {t("form_privacy")}{" "}
            <Link
              href={`/${locale}/privacy`}
              target="_blank"
              className="text-accent underline hover:no-underline"
            >
              {locale === "es" ? "política de privacidad" : "privacy policy"}
            </Link>
          </span>
        </label>
        {errors.privacy && <p className={errorClass}>{errors.privacy.message}</p>}
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-xl">
          <AlertCircle size={16} />
          {t("form_error")}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
            {t("form_submitting")}
          </>
        ) : (
          <>
            <Send size={16} />
            {t("form_submit")}
          </>
        )}
      </button>

      {/*
        ALTERNATIVA: Google Forms iframe
        Para usar Google Forms en lugar de Web3Forms, comenta todo el formulario de arriba
        y descomenta el iframe de abajo con tu URL de Google Forms:

        <iframe
          src="TU_URL_DE_GOOGLE_FORMS/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Formulario de contacto"
        >
          Cargando...
        </iframe>
      */}
    </form>
  );
}
