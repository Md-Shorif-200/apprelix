import Image from "next/image";

import Container from "@/components/common/Container";

import BannerSlider from "./BannerSlider";

const SIDE_BANNERS = [
  { src: "/banner/img-4.webp", alt: "Micro investment — Bengali promotion banner" },
  { src: "/banner/img-5.webp", alt: "Factory and industrial manufacturing" },
] as const;

/** Single right-side banner image */
function SideBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative  rounded-lg h-1/2 ">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover rounded-lg"
      />
    </div>
  );
}

const Banner = () => {
  return (
    <Container>
      <div className="w-full flex gap-4 h-[450px] my-6">
        {/* Main slider — 60% on large screens */}
        <div className="w-full lg:w-[70%] h-full">
          <BannerSlider />
        </div>

        {/* Stacked side banners — 40% on large screens */}
        <div className="w-full lg:w-[30%] h-full flex flex-col gap-4">
          {SIDE_BANNERS.map((banner) => (
            <SideBanner key={banner.src} src={banner.src} alt={banner.alt} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Banner;
