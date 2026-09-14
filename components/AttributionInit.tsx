"use client";
import { useEffect } from "react";
import { FT_COOKIE } from "@/lib/attribution";

/**
 * Captures first-touch attribution once (UTMs, landing page, referrer) into a
 * first-party cookie. First-touch only: it never overwrites an existing value,
 * so the original source survives later visits (plan §31, §61).
 */
export default function AttributionInit() {
  useEffect(() => {
    try {
      if (document.cookie.split("; ").some((c) => c.startsWith(FT_COOKIE + "="))) return;
      const p = new URLSearchParams(window.location.search);
      const ft = {
        source: p.get("utm_source") || (document.referrer ? "referral" : "direct"),
        medium: p.get("utm_medium") || undefined,
        campaign: p.get("utm_campaign") || undefined,
        content: p.get("utm_content") || undefined,
        term: p.get("utm_term") || undefined,
        landing: window.location.pathname,
        referrer: document.referrer || undefined,
        acquired_at: new Date().toISOString(),
      };
      const value = encodeURIComponent(JSON.stringify(ft));
      document.cookie = `${FT_COOKIE}=${value};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    } catch {
      /* cookies unavailable — attribution is best-effort */
    }
  }, []);
  return null;
}
