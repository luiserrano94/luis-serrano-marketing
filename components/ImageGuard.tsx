"use client";
import { useEffect } from "react";

/** Client-side image deterrents: block right-click "Save image" and drag-out
 *  on <img>. Paired with CSS user-drag/user-select:none in globals.css.
 *  Note: this only raises friction. Screenshots, devtools and direct asset
 *  URLs can never be prevented on the web. */
export default function ImageGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);
  return null;
}
