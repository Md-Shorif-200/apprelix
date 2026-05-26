// BannerSlider.tsx
"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/banner/img-1.webp",
    badge: "AI-Powered Platform",
    title: "Grow Your Business",
    highlight: "with Us",
    description:
      "Connect with verified apparel manufacturers, manage RFQs, and scale your sourcing operations through a modern AI-driven B2B platform.",
  },
  {
    id: 2,
    image: "/banner/img-3.webp",
    badge: "Global Manufacturing Hub",
    title: "Modern Fashion",
    highlight: "Supply Chain",
    description:
      "Discover trusted apparel suppliers and accelerate production workflows through one smart B2B ecosystem.",
  },
  {
    id: 3,
    image: "/banner/img-2.webp",
    badge: "Global Apparel Network",
    title: "Build Smarter",
    highlight: "Apparel Operations",
    description:
      "Empower your apparel business with smart sourcing solutions and trusted supplier networks designed for global scalability.",
  },
];

const BannerSlider = () => {
 

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-2xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[320px] w-full lg:h-[450px]">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                quality={80}
                placeholder="blur"
                blurDataURL="/blur-placeholder.jpg"
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
              />

              {/* Dark gradient overlay — always visible for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Decorative glow circles */}
              <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-10 h-44 w-44 rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center px-6 lg:px-12">
                <div className="max-w-[420px] space-y-4">

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl">
                    {slide.title}{" "}
                    <br />
                    <span className="text-yellow-300">{slide.highlight}</span>
                  </h1>

                  {/* Divider line */}
                  <div className="h-[2px] w-12 rounded-full bg-yellow-400" />

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  {/* <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-yellow-300 hover:gap-3 active:scale-95">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button> */}
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