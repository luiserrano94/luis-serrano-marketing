/**
 * Minimal GA4 event helper (client). Safe no-op when gtag isn't present
 * (e.g. no real measurement id configured yet), so calls are cheap to leave in.
 */
export type GtagParams = Record<string, unknown>;

export function track(event: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...a: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event, params);
}
