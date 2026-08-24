import Image from "next/image";

/**
 * Fixed-ish photographic backdrop behind a section, under a burgundy scrim.
 * Decorative only — never carries meaning, so alt is empty.
 */
export default function SectionBackdrop({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 scrim-section" />
    </div>
  );
}
