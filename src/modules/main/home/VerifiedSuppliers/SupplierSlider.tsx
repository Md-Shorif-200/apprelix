"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import SupplierCard from "./SupplierCard";
import type { Supplier } from "../_data/suppliers";

interface SupplierSliderProps {
  suppliers: Supplier[];
}

const SupplierSlider = ({ suppliers }: SupplierSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      loopAdditionalSlides={2}
      speed={900}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
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
