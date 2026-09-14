/** First-touch attribution cookie (first-party, readable by client + server). */
export const FT_COOKIE = "ls_first_touch";

export interface FirstTouch {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  landing?: string;
  referrer?: string;
  acquired_at?: string;
}

/** Parse the cookie value (server-side use). Never throws. */
export function parseFirstTouch(raw?: string): FirstTouch {
  if (!raw) return {};
  try {
    return JSON.parse(decodeURIComponent(raw)) as FirstTouch;
  } catch {
    return {};
  }
}
