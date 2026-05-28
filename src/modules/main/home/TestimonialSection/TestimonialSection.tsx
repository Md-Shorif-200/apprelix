"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { Flame, Star } from "lucide-react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Sophia Lee",
    role: "Procurement Lead",
    company: "Urban Stitch",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Sourcing Manager",
    company: "Texon Apparel",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Brand Owner",
    company: "Veloura",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Production Director",
    company: "NorthWear",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "Fashion Buyer",
    company: "ModeCraft",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Daniel Kim",
    role: "Supply Chain Lead",
    company: "NovaWear",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Ava Johnson",
    role: "Operations Head",
    company: "Threadline",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Ethan Clark",
    role: "Apparel Consultant",
    company: "WearFlow",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
  },

  // second slide
  {
    id: 9,
    name: "Liam Scott",
    role: "Sourcing Expert",
    company: "Texora",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Mia Taylor",
    role: "Brand Manager",
    company: "Trendify",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Noah Davis",
    role: "Factory Coordinator",
    company: "Garment Hub",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Isabella Moore",
    role: "Product Lead",
    company: "Clothify",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "James Walker",
    role: "Operations Manager",
    company: "Fabrix",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Charlotte Hall",
    role: "Merchandising Head",
    company: "UrbanTex",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Benjamin Young",
    role: "Fashion Director",
    company: "StyleNova",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Amelia King",
    role: "Supply Partner",
    company: "WearHive",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
];

const TestimonialSection = () => {
  // split 8 cards per slide
  const slides = [];

  for (let i = 0; i < testimonials.length; i += 8) {
    slides.push(testimonials.slice(i, i + 8));
  }

  return (
    <section className="mt-14">
      <Container>
        {/* section title */}
        <div className="mb-10">
          <SectionTitle
            label="Client Reviews"
            icon={Flame}
            title="Trusted By Global"
            titleHighlight="Fashion Brands"
            description="Real feedback from apparel businesses using our sourcing platform worldwide."
          />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          speed={1800} // smooth transition speed
          autoplay={{
            delay: 5000, // each slide stays longer
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // optional nice UX
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* 4 column grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {slide.map((item, cardIndex) => (
                  <div
                    key={item.id}
                    className={`group rounded-[26px] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      cardIndex === 0 ? "hover:-rotate-2" : "hover:rotate-1"
                    }`}
                  >
                    {/* top */}
                    <div className="mb-4 flex items-start justify-between">
                      {/* left */}
                      <div className="flex items-center gap-3">
                        {/* profile image */}
                        <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* name */}
                        <div>
                          <h3 className="text-sm font-bold text-slate-800">
                            {item.name}
                          </h3>

                          <p className="text-xs text-slate-500">{item.role}</p>
                        </div>
                      </div>

                      {/* rating */}
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

                    {/* review */}
                    <p className="text-sm leading-7 text-slate-600">
                      “The sourcing workflow became faster and more professional
                      after using this platform. Highly recommended for apparel
                      businesses.”
                    </p>

                    {/* company */}
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
      </Container>
    </section>
  );
};

export default TestimonialSection;
