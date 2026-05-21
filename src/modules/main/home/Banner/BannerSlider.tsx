"use client";

import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const BannerSlider = () => {
  return (
    <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-xl">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          // delay: 300000,
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full"
      >

        {/* Slide 1 */}
   <SwiperSlide>
  <div className="relative h-[350px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
 
    <Image
      src="/banner/img-h.png"
      alt="Hero Banner"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 60vw"
      className="object-cover object-center scale-105"
    />

    {/* Dark Gradient Overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" /> */}

    {/* Decorative Blur */}
    <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-teal-500/20 blur-3xl" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-2xl px-6 md:px-10 lg:px-14">
        {/* Small Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            AI-Powered Apparel Sourcing
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
          Grow Your Business <br />
          <span className="text-yellow-300">with Us</span>
        </h1>

        {/* Professional Short Paragraph */}
        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-200 md:text-base">
          Connect with verified apparel manufacturers, manage RFQs,
          streamline production workflows, and scale your sourcing
          operations through a modern AI-driven B2B platform.
        </p>

    
      </div>
    </div>
  </div>
</SwiperSlide>



       
<SwiperSlide>
  <div className="relative h-[350px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
    
    {/* Background Image */}
    <Image
      src="/banner/img-l.png"
      alt="Hero Banner"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 60vw"
      className="object-cover object-center scale-105"
    />


    {/* Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-[430px] px-5 md:px-8 lg:px-10">
        
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-xs">
            Global Apparel Network
          </p>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold leading-[1.02] tracking-tight text-white md:text-5xl lg:text-[58px]">
          Connect <br/> Source
          <br />
          <span className="text-yellow-300">
            Scale
          </span>
        </h1>

        {/* Short Paragraph */}
        <p className="mt-4 max-w-[360px] text-sm leading-6 text-gray-200 md:text-base">
          Connect buyers with trusted manufacturers, manage RFQs,
          and streamline apparel production in one platform.
        </p>

    
      </div>
    </div>
  </div>
</SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[350px] w-full lg:h-[500px]">
            <Image
              src="/banner/img-1.webp"
              alt="Micro investment promotion"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />

            {/* Content */}
            <div className="absolute left-6 top-1/2 z-10 max-w-xl -translate-y-1/2 md:left-12">
              <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Connect. Source. Scale.
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;




