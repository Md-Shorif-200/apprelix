import Image from "next/image";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { Flame } from "lucide-react";
import {
  aiFeatures,
  type AiFeature,
} from "../_data/aiProcurementFeatures";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";

const AIProcurementSection = () => {
  return (
    <section className="relative mt-14 overflow-hidden">
      <Container>
        <div className="mb-10">
          <SectionTitle
            label="AI Procurement Intelligence"
            icon={Flame}
            title="Smart sourcing for modern"
            titleHighlight="Businesses"
            description="Advanced AI technologies optimize supplier discovery, pricing, workflow automation, and sourcing decisions for modern apparel businesses."
          />
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-3">
          {aiFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
        <AosRefresh />
      </Container>
    </section>
  );
};

export default AIProcurementSection;

interface FeatureCardProps {
  feature: AiFeature;
  index?: number;
}

const FeatureCard = ({ feature, index = 0 }: FeatureCardProps) => {
  const { title, description, icon: Icon, image, className } = feature;

  return (
    <div
      {...getAosProps("fade-up", index * 90)}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/10
        transition-all
        duration-500
        motion-safe:hover:-translate-y-1
        hover:border-cyan-500/30
        ${className ?? ""}
      `}
    >
      <Image
        src={image}
        alt={title}
        fill
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="
          object-cover
          motion-safe:transition-transform
          motion-safe:duration-700
          motion-safe:group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
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
