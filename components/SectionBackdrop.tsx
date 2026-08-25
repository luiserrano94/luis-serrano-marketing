import Image from "next/image";

/**
 * Fixed photographic backdrop behind a section, under a burgundy scrim.
 * Decorative only — never carries meaning, so alt is empty.
 *
 * `position` maps to object-position; pass a value when the subject would
 * otherwise be cropped by the default centre crop.
 */
export default function SectionBackdrop({
  src,
  position = "center",
}: {
  src: string;
  position?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 scrim-section" />
    </div>
  );
}
