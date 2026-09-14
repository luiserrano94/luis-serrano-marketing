/**
 * MailerLite upsert (server-only). Creates or updates a subscriber.
 *
 * Returns {ok:false, skipped:true} when no API key is configured, so callers
 * can decide policy: the unlock route treats a missing key as a hard failure
 * in production (stay locked, don't lose the lead) and a no-op in development.
 *
 * ponytail: MailerLite's POST /subscribers is idempotent on email (upsert).
 * First-touch fields are best-effort — if the account hasn't defined them yet
 * the request is retried with email only, so a missing field config can never
 * cost the lead.
 */
export async function upsertSubscriber(
  email: string,
  fields?: Record<string, string | undefined>
): Promise<{ ok: boolean; skipped?: boolean }> {
  const key = process.env.MAILERLITE_API_KEY;
  if (!key) return { ok: false, skipped: true };

  const clean = fields
    ? Object.fromEntries(Object.entries(fields).filter(([, v]) => v != null && v !== ""))
    : undefined;

  const send = async (body: Record<string, unknown>): Promise<boolean> => {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  };

  try {
    const hasFields = !!clean && Object.keys(clean).length > 0;
    let ok = await send(hasFields ? { email, fields: clean } : { email });
    if (!ok && hasFields) ok = await send({ email }); // never lose the lead over field config
    return { ok };
  } catch {
    return { ok: false };
  }
}
