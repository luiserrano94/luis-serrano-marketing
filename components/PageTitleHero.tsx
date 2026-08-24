import Image from "next/image";

/**
 * Photographic band behind a page title only — not the whole page.
 * Warm neutral darkening (no burgundy tint) so the photo keeps its own colour.
 */
export default function PageTitleHero({
  src,
  eyebrow,
  title,
  subtitle,
}: {
  src: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-[46vh] min-h-[320px] max-h-[520px] flex items-end overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Neutral scrim — darkens for legibility without recolouring the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(20,12,10,0.86) 0%, rgba(20,12,10,0.58) 55%, rgba(20,12,10,0.28) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 lg:pb-14">
        {eyebrow && (
          <p className="label-editorial text-sand/90 mb-3">{eyebrow}</p>
        )}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sand text-base sm:text-lg max-w-2xl mt-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
