"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type UploadedFile = { url: string; publicId: string };

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    display: "none",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${src})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-slate-50 border border-slate-100 rounded-xl cursor-zoom-in group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-no-repeat transition-transform duration-75"
        style={zoomStyle}
      />
    </div>
  );
}

export default function RfqImageGallery({
  images,
}: {
  images: UploadedFile[];
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full space-y-3 pb-4 border-b border-slate-100">
      <div className="relative group/arrows">
        <Swiper
          style={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "--swiper-navigation-color": "#0d9488",
            "--swiper-navigation-size": "20px",
          }}
          loop={images.length > 1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full rounded-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.publicId || index}>
              <ZoomableImage
                src={image.url}
                alt={`Reference Large ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <>
            <button className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-100 transition-all cursor-pointer opacity-0 group-hover/arrows:opacity-100">
              <ChevronLeft size={18} />
            </button>
            <button className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-100 transition-all cursor-pointer opacity-0 group-hover/arrows:opacity-100">
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={images.length > 4}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full mt-2"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`thumb-${image.publicId || index}`}
              className="cursor-pointer opacity-60 [.swiper-slide-thumb-active_&]:opacity-100 transition-opacity duration-200"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-50 border-2 border-transparent [.swiper-slide-thumb-active_&]:border-[#14b8a6] shadow-sm">
                <Image
                  src={image.url}
                  alt={`Thumb ${index + 1}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
