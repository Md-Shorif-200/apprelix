// components/suppliers/SupplierSlider.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import SupplierCard from "./SupplierCard";

interface Supplier {
  id: string;
  name: string;
  logo: string;
  bannerImage: string;
  category: string[];
  rating: number;
  reviewsCount: number;
  certifications: string[];
  country: string;
  capacity: string;
  experience: string;
}

interface SupplierSliderProps {
  suppliers: Supplier[];
}

const SupplierSlider = ({ suppliers }: SupplierSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      // Layout
      spaceBetween={24}
      slidesPerView={1}
      // Infinite Professional Loop
      loop={true}
      loopAdditionalSlides={2}
      // Smooth Continuous Feel
      speed={900}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // Better UX
      grabCursor={true}
      watchSlidesProgress={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },
      }}
      className="pb-14"
    >
      {suppliers.map((supplier) => (
        <SwiperSlide key={supplier.id}>
          <SupplierCard supplier={supplier} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SupplierSlider;
