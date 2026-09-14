/**
 * Signed access token for the Resource gate (server-only).
 *
 * One HMAC-signed httpOnly cookie unlocks the whole library for ~365 days
 * (plan §29). The cookie carries no email, only a signed "granted at" stamp.
 * It is issued ONLY after a successful email capture (see the unlock route).
 */
import crypto from "crypto";

export const COOKIE = "ls_resource_access";
export const MAX_AGE = 60 * 60 * 24 * 365; // 365 days, in seconds

// A real secret is supplied via env in production. The dev fallback only keeps
// local testing working; it is never a security boundary in production.
const secret = () => process.env.RESOURCE_COOKIE_SECRET || "ls-dev-resource-secret";

function sign(payload: string): string {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

export function issueToken(): string {
  const payload = `v1.${Math.floor(Date.now() / 1000)}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token?: string): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [v, issued, sig] = parts;
  const payload = `${v}.${issued}`;
  if (!safeEqual(sign(payload), sig)) return false;
  const age = Math.floor(Date.now() / 1000) - Number(issued);
  return Number.isFinite(age) && age >= 0 && age <= MAX_AGE;
}
