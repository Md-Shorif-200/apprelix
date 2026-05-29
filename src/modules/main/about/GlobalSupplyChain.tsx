// components/GlobalSupplyChain/GlobalSupplyChain.tsx

import React from "react";
import {
  Globe2,
  PackageCheck,
  Handshake,
  TrendingUp,
  Flame,
} from "lucide-react";
import WorldMapCard from "./_components/WorldMapCard";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    icon: Globe2,
    title: "Worldwide Supplier Network",
    description:
      "Access a curated network of verified apparel suppliers from major manufacturing hubs across Asia, Europe, and beyond — all in one place.",
  },
  {
    icon: PackageCheck,
    title: "End-to-End Order Tracking",
    description:
      "Monitor every stage of your order — from production and quality check to packaging and shipment — with real-time status updates.",
  },
  {
    icon: Handshake,
    title: "Trusted B2B Partnerships",
    description:
      "Every supplier on our platform is verified and rated by real buyers, ensuring you always work with reliable and professional partners.",
  },
  {
    icon: TrendingUp,
    title: "AI-Optimized Sourcing",
    description:
      "Our AI engine analyzes your RFQ and matches you with the best-fit suppliers globally, helping you save time and get competitive pricing.",
  },
];

// ─── Types ─────────────────────────────────────────────────────────────────────

type StatCardProps = {
  label: string;
  value: string;
};

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};



// ─── FeatureCard Component ─────────────────────────────────────────────────────

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
 <div
  className="
    group relative overflow-hidden rounded-2xl border border-gray-100
    bg-white p-5 transition-all duration-500
    hover:-translate-y-1 
    hover:border-teal-200
    hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)]
  "
>
  {/* Gradient Glow */}
  <div
    className="
      absolute inset-0 opacity-0 transition-opacity duration-500
      bg-gradient-to-br from-teal-50 via-white to-cyan-50
      group-hover:opacity-100
    "
  />

  {/* Top Accent Line */}
  {/* <div
    className="
      absolute left-0 top-0 h-1 w-0
      bg-gradient-to-r from-teal-500 to-cyan-500
      transition-all duration-500
      group-hover:w-full
    "
  /> */}

  {/* Content */}
  <div className="relative z-10 flex gap-4 items-start">
    
    {/* Icon Box */}
    <div
      className="
        flex-shrink-0 w-12 h-12 rounded-xl
        bg-teal-50 flex items-center justify-center
        transition-all duration-500
        group-hover:bg-gradient-to-br
        group-hover:from-teal-500
        group-hover:to-cyan-500
        group-hover:shadow-lg
        group-hover:shadow-teal-200
      "
    >
      <Icon
        className="
          w-5 h-5 text-teal-600
          transition-all duration-500
          group-hover:text-white
          group-hover:scale-110
        "
      />
    </div>

    {/* Text */}
    <div>
      <h4
        className="
          text-base font-semibold text-gray-800
          transition-colors duration-300
          group-hover:text-teal-700
        "
      >
        {title}
      </h4>

      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
</div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────

export default function GlobalSupplyChain() {
  return (
    <section className="mt-20">
      <Container>
      
        <div className="mb-14">
          <SectionTitle
            label=" Global Supply Chain"
            icon={Flame}
            title="Source Smarter."
            titleHighlight="Scale Globally."
            description="  Our platform connects buyers and suppliers across 80+ countries,
            making global apparel sourcing faster, more transparent, and
            remarkably efficient — no matter where you are."
          />
        </div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       
            {/* Feature List */}
            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

   

          {/* ── RIGHT: World Map Part (Separate Component) ── */}
          <WorldMapCard />
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="mt-8 rounded-2xl bg-teal-600 px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-bold">
              Ready to source from the global market?
            </h3>
            <p className="text-teal-100 text-sm mt-1">
              Post your RFQ today and receive competitive quotes from verified
              suppliers worldwide — within 24 hours.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/auth/register"
              className="bg-white text-teal-600 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
            >
              Post an RFQ
            </a>
            <a
              href="/suppliers"
              className="border border-white text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors"
            >
              Browse Suppliers
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
