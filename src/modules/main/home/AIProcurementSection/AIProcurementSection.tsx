"use client";

import Image from "next/image";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import {
  Brain,
  Handshake,
  Layers3,
  TrendingUp,
  ScanSearch,
  Flame,
} from "lucide-react";

const aiFeatures = [
  {
    id: 1,
    title: "Smart Supplier Matching",
    description:
      "AI connects buyers with the most suitable manufacturing partners based on production capability and sourcing requirements.",
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    title: "AI Price Estimation",
    description:
      "Get intelligent pricing insights using market demand, materials, and production data.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Automated Workflow",
    description:
      "Streamline procurement operations through AI-powered workflow automation.",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Decision Intelligence",
    description:
      "Real-time analytics help businesses make smarter sourcing decisions faster.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Demand Forecasting",
    description:
      "Predict sourcing trends and production demand using intelligent data analysis and forecasting systems.",
    icon: ScanSearch,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    className: "sm:col-span-2",
  },
];

const AIProcurementSection = () => {
  return (
    <section className="relative mt-14 overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" /> */}

      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle
            label="AI Procurement Intelligence"
            icon={Flame}
            title="Smart sourcing for modern"
            titleHighlight="Businesses"
            description="Advanced AI technologies optimize supplier discovery, pricing, workflow automation, and sourcing decisions for modern apparel businesses."
          />
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-3">
          {aiFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AIProcurementSection;

/* =========================
   Feature Card
========================= */

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    image: string;
    icon: React.ComponentType<{ size?: number }>;
    className?: string;
  };
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { title, description, icon: Icon, image, className } = feature;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/10
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-500/30
        ${className}
      `}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* Cyan Glow */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        {/* Icon */}
        <div
          className="
            mb-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/10
            text-cyan-300
            backdrop-blur-md
          "
        >
          <Icon size={28} />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
