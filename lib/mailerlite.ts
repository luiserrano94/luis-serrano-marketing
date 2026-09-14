/**
 * MailerLite upsert (server-only). Creates or updates a subscriber.
 *
 * Returns {ok:false, skipped:true} when no API key is configured, so callers
 * can decide policy: the unlock route treats a missing key as a hard failure
 * in production (stay locked, don't lose the lead) and a no-op in development.
 *
 * ponytail: MailerLite's POST /subscribers is idempotent on email (upsert), so
 * no lookup-then-update dance is needed. Group ids + richer first-touch fields
 * land once the account provides them (handoff); email + first_resource is the
 * minimum that captures the lead now.
 */
export async function upsertSubscriber(
  email: string,
  resource: string
): Promise<{ ok: boolean; skipped?: boolean }> {
  const key = process.env.MAILERLITE_API_KEY;
  if (!key) return { ok: false, skipped: true };
  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        email,
        fields: resource ? { first_resource: resource } : undefined,
      }),
      // Don't let a slow CRM hang the request forever.
      signal: AbortSignal.timeout(8000),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
