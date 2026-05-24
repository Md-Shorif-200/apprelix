"use client";

import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/banner/img-1.webp",
    badge: "AI-Powered",
    badgeDot: "bg-yellow-400",
    title: (
      <>
        Grow Your Business <br />
        <span className="text-yellow-300">with Us</span>
      </>
    ),
    description:
      "Connect with verified apparel manufacturers, manage RFQs, streamline production workflows, and scale your sourcing operations through a modern AI-driven B2B platform.",
    overlay: false,
  },

  {
    id: 2,
    image: "/banner/img-3.webp",
    badge: "Global Manufacturing Hub",
    badgeDot: "bg-green-400",
    title: (
      <>
        Modern Fashion <br />
        <span className="text-yellow-300">Supply Chain</span>
      </>
    ),
    description:
      "Discover trusted apparel suppliers, manage sourcing operations, and accelerate production workflows through one smart B2B ecosystem.",
    overlay: true,
  },

  {
    id: 3,
    image: "/banner/img-2.webp",
    badge: "Global Apparel Network",
    badgeDot: "bg-yellow-400",
    title: (
      <>
        Build Smarter <br />
        <span className="text-yellow-300">
          Apparel Operations
        </span>
      </>
    ),
    description:
      "Empower your apparel business with smart sourcing solutions, trusted supplier networks, and modern production management designed for global scalability.",
    overlay: false,
  },
];

const BannerSlider = () => {
  return (
    <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-xl">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt="Hero Banner"
                fill
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="/blur-placeholder.jpg"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center scale-105"
              />

              {/* Optional Overlay */}
              {slide.overlay && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
              )}

              {/* Decorative Blur */}
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-teal-500/20 blur-3xl" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`max-w-[430px] px-6 md:px-10 lg:px-14`}
                >
                  {/* Badge */}
                  <div className=" hidden  mb-5 sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span
                      className={`h-2 w-2 rounded-full animate-pulse ${slide.badgeDot}`}
                    ></span>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-xs">
                      {slide.badge}
                    </p>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className=" mt-5 text-sm   text-gray-200 lg:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;