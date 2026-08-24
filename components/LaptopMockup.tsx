import Image from "next/image";

/**
 * CSS laptop frame with a mock editorial site rendered on the screen.
 * Built rather than photographed so the screen content is actually ours.
 */
export default function LaptopMockup({
  src,
  alt,
  headline,
  label,
}: {
  src: string;
  alt: string;
  headline: string;
  label: string;
}) {
  return (
    <div className="w-full">
      {/* Lid */}
      <div className="relative rounded-t-xl bg-[#2A2A2E] p-2.5 sm:p-3 shadow-editorial">
        <div className="relative overflow-hidden rounded-md bg-[#FBF9F6] aspect-[16/10]">
          {/* Mock site: image left, type right */}
          <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr]">
            <div className="relative">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 60vw, 340px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-[6%] p-[7%] bg-[#FBF9F6]">
              <p
                className="text-[#8A4453] uppercase"
                style={{ fontSize: "clamp(5px,0.85vw,9px)", letterSpacing: "0.2em" }}
              >
                {label}
              </p>
              <p
                className="font-display text-[#1A1614] leading-[0.95]"
                style={{ fontSize: "clamp(13px,2.3vw,30px)" }}
              >
                {headline}
              </p>
              {/* Faux body copy */}
              <div className="space-y-[5px]">
                <span className="block h-[3px] w-full rounded-full bg-[#1A1614]/12" />
                <span className="block h-[3px] w-[88%] rounded-full bg-[#1A1614]/12" />
                <span className="block h-[3px] w-[72%] rounded-full bg-[#1A1614]/12" />
              </div>
              <span className="inline-block w-[52%] rounded-full bg-[#60212E] h-[9%] min-h-[10px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Base */}
      <div className="relative h-3 sm:h-3.5 rounded-b-xl bg-[#3A3A3F]">
        <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-[#2A2A2E]" />
      </div>
    </div>
  );
}
