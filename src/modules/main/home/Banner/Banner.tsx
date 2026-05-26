// Banner.tsx
import Image from "next/image";
import Container from "@/components/common/Container";
import BannerSlider from "./BannerSlider";

const SIDE_BANNERS = [
  {
    src: "/banner/img-4.webp",
    alt: "Micro investment — Bengali promotion banner",
    label: "Micro Investment",
    tag: "New",
  },
  {
    src: "/banner/img-5.webp",
    alt: "Factory and industrial manufacturing",
    label: "Industrial Hub",
    tag: "Featured",
  },
] as const;

/* ─── Single side banner card ─── */
function SideBanner({
  src,
  alt,
  label,
  tag,
}: {
  src: string;
  alt: string;
  label: string;
  tag: string;
}) {
  return (
    <div className="group relative w-full flex-1 shrink-0 overflow-hidden rounded-2xl min-h-[140px]">

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        quality={80}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Tag pill — top left */}
      <div className="absolute left-3 top-3">
        <span className="rounded-full bg-yellow-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-900">
          {tag}
        </span>
      </div>

      {/* Label — bottom left */}
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-sm font-semibold text-white drop-shadow-md lg:text-base">
          {label}
        </p>

        {/* Animated underline on hover */}
        <div className="mt-1 h-[2px] w-0 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-10" />
      </div>

      {/* Hover shine effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}

/* ─── Main Banner section ─── */
const Banner = () => {
  return (
    <Container>
      <div className="my-6 w-full lg:flex lg:h-[450px] lg:gap-4">

        {/* Main slider — 70% width on large screens */}
        <div className="h-full w-full lg:w-[70%]">
          <BannerSlider />
        </div>

        {/* Side banners — 30% width on large screens */}
        <div
          className="
            mt-3 flex h-[160px] w-full gap-3 overflow-x-auto
            lg:mt-0 lg:h-full lg:w-[30%] lg:flex-col lg:gap-4 lg:overflow-visible
          "
        >
          {SIDE_BANNERS.map((banner) => (
            <SideBanner
              key={banner.src}
              src={banner.src}
              alt={banner.alt}
              label={banner.label}
              tag={banner.tag}
            />
          ))}
        </div>

      </div>
    </Container>
  );
};

export default Banner;