"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { Flame } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../_data/testimonials";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";
import ClientReviewsCard from "@/modules/common/ClientReviewsCard";

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
                    <ClientReviewsCard
                      key={item.id}
                      item={item}
                      cardIndex={cardIndex}
                    />
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
