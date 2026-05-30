"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { Flame, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../_data/testimonials";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";

const SLIDE_SIZE = 4;

const testimonialSlides = Array.from(
  { length: Math.ceil(testimonials.length / SLIDE_SIZE) },
  (_, index) =>
    testimonials.slice(index * SLIDE_SIZE, index * SLIDE_SIZE + SLIDE_SIZE),
);

const TestimonialSection = () => {
  return (
    <section className="mt-14">
      <Container>
        <div className="mb-10">
          <SectionTitle
            label="Client Reviews"
            icon={Flame}
            title="Trusted By Global"
            titleHighlight="Fashion Brands"
            description="Real feedback from apparel businesses using our sourcing platform worldwide."
          />
        </div>

        <div {...getAosProps("fade-up", 80)}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={testimonialSlides.length > 1}
          speed={1800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {testimonialSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {slide.map((item, cardIndex) => (
                  <div
                    key={item.id}
                    className={`group rounded-[26px] border border-slate-200 bg-white p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl ${
                      cardIndex === 0
                        ? "motion-safe:hover:-rotate-2"
                        : "motion-safe:hover:rotate-1"
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            quality={75}
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-slate-800">
                            {item.name}
                          </h3>

                          <p className="text-xs text-slate-500">{item.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 rounded-full bg-cyan-50 px-2.5 py-1">
                        <span className="text-sm font-semibold text-slate-700">
                          {item.rating}
                        </span>

                        <Star
                          size={14}
                          fill="currentColor"
                          className="text-cyan-500"
                        />
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600">
                      “The sourcing workflow became faster and more professional
                      after using this platform. Highly recommended for apparel
                      businesses.”
                    </p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
                        {item.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <AosRefresh />
      </Container>
    </section>
  );
};

export default TestimonialSection;
