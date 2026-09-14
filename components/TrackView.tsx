"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires a GA4 event once on mount. Dropped into server pages for view events. */
export default function TrackView({ event, params }: { event: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    track(event, params || {});
    // Fire once per mount; params are a snapshot of the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
