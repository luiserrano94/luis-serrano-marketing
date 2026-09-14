"use client";
import Link from "next/link";
import { track } from "@/lib/analytics";

/** A Link that fires a GA4 event on click (used for service CTAs). */
export default function TrackedLink({
  event, params, href, className, children,
}: {
  event: string;
  params?: Record<string, unknown>;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event, params || {})}>
      {children}
    </Link>
  );
}
