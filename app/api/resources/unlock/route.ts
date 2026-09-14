import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { upsertSubscriber } from "@/lib/mailerlite";
import { COOKIE, MAX_AGE, issueToken } from "@/lib/resourceAccess";
import { FT_COOKIE, parseFirstTouch } from "@/lib/attribution";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Resource gate unlock.
 *
 * The access cookie is issued ONLY after the email is successfully captured:
 * - key present + upsert ok        -> unlock
 * - key present + upsert failed     -> 502, stay locked (retry; lead not lost)
 * - key missing, production         -> 503, stay locked (never silently unlock)
 * - key missing, development        -> no-op capture, unlock (local testing)
 */
export async function POST(req: Request) {
  let email = "";
  let resource = "";
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim();
    resource = String(body?.resource ?? "").slice(0, 80);
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // First-touch attribution (best-effort) captured client-side into a cookie.
  const ft = parseFirstTouch(cookies().get(FT_COOKIE)?.value);
  const fields = {
    first_resource: resource || undefined,
    first_source: ft.source,
    first_medium: ft.medium,
    first_campaign: ft.campaign,
    first_content: ft.content,
    first_acquired_at: ft.acquired_at,
  };

  const hasKey = !!process.env.MAILERLITE_API_KEY;
  if (hasKey) {
    const { ok } = await upsertSubscriber(email, fields);
    if (!ok) {
      // Capture failed: keep the resource locked so the lead isn't lost.
      return NextResponse.json({ error: "signup_failed" }, { status: 502 });
    }
  } else if (process.env.NODE_ENV === "production") {
    // No CRM configured in production: do not unlock without capturing.
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
  // else: development without a key -> proceed (no-op capture).

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, issueToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });
  return res;
}
