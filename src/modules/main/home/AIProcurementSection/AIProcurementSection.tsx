"use client";

import Container from "@/components/common/Container";
import {
  BrainCircuit,
  BadgeDollarSign,
  Workflow,
  BarChart3,
  Sparkles,
} from "lucide-react";



const aiFeatures = [
  {
    id: 1,
    title: "Smart Supplier Matching",
    description:
      "AI connects buyers with the most suitable manufacturing partners based on production capability and sourcing requirements.",
    icon: Sparkles,
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    title: "AI Price Estimation",
    description:
      "Get intelligent pricing insights using market demand, materials, and production data.",
    icon: BadgeDollarSign,
  },
  {
    id: 3,
    title: "Automated Workflow",
    description:
      "Streamline procurement operations through AI-powered workflow automation.",
    icon: Workflow,
  },
  {
    id: 4,
    title: "Decision Intelligence",
    description:
      "Real-time analytics help businesses make smarter sourcing decisions faster.",
    icon: BrainCircuit,
  },
  {
    id: 5,
    title: "Demand Forecasting",
    description:
      "Predict sourcing trends and production demand using intelligent data analysis and forecasting systems.",
    icon: BarChart3,
    className: "sm:col-span-2",
  },
];

const AIProcurementSection = () => {
  return (
    <section className="section_margin relative overflow-hidden bg-[#07111F] py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {/* badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <BrainCircuit size={18} />
            AI Procurement Intelligence
          </div>

          {/* title */}
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Intelligent sourcing powered by modern AI systems
          </h2>

          {/* description */}
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            Advanced AI technologies optimize supplier discovery, pricing,
            workflow automation, and sourcing decisions for modern apparel
            businesses.
          </p>
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
    icon: React.ComponentType<{ size: number }>;
    className?: string;
  };
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { title, description, icon: Icon, className } = feature;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-white/10
        ${className}
      `}
    >
      {/* Glow Effect */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/20" />

      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-400/10
          text-cyan-300
        "
      >
        <Icon size={28} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};