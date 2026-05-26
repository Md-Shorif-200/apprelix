import Image from "next/image";

import Container from "@/components/common/Container";

import BannerSlider from "./BannerSlider";

const SIDE_BANNERS = [
  {
    src: "/banner/img-4.webp",
    alt: "Micro investment — Bengali promotion banner",
  },
  { src: "/banner/img-5.webp", alt: "Factory and industrial manufacturing" },
] as const;

function SideBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full flex-1 rounded-lg overflow-hidden shrink-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

const Banner = () => {
  return (
    <Container>
      <div className="w-full lg:flex gap-4 h-full  lg:h-[450px] my-6">
        {/* Main slider — 60% on large screens */}
        <div className="w-full lg:w-[70%] h-full">
          <BannerSlider />
        </div>

        {/* Stacked side banners — 40% on large screens */}
        <div className="w-full lg:w-[30%] h-[180px] lg:h-[450px] flex gap-2 lg:gap-4 overflow-x-auto lg:overflow-hidden lg:flex-col mt-4 lg:mt-0">
          {SIDE_BANNERS.map((banner) => (
            <SideBanner key={banner.src} src={banner.src} alt={banner.alt} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Banner;
