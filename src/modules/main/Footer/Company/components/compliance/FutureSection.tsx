"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { getAosProps } from "@/lib/animations/aos";
import { CheckCircle, Eye } from "lucide-react";
import { memo } from "react";
import {
  roadmapPhases,
  upcomingFeatures,
  type RoadmapPhase,
  type UpcomingFeature,
} from "./_data/complianceData";

const FeaturePill = memo(function FeaturePill({
  feat,
  index,
}: {
  feat: UpcomingFeature;
  index: number;
}) {
  const Icon = feat.icon;

  return (
    <div
      {...getAosProps("zoom-in", index * 60)}
      className="flex items-center gap-2.5 rounded-full border border-ds-border bg-ds-card px-5 py-2.5 transition-all duration-200 hover:border-ds-primary/40 hover:bg-ds-primary/5"
    >
      <Icon className="h-5 w-5 text-ds-primary" />
      <div>
        <span className="text-sm font-medium text-ds-text">{feat.title}</span>
        <span className="ml-1.5 text-xs text-ds-muted-foreground">
          · {feat.detail}
        </span>
      </div>
    </div>
  );
});

const RoadmapCard = memo(function RoadmapCard({
  phase,
  index,
}: {
  phase: RoadmapPhase;
  index: number;
}) {
  return (
    <article
      {...getAosProps("fade-up", index * 100)}
      className={`ds-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${phase.borderClassName}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest text-ds-primary uppercase">
          {phase.phase}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${phase.statusClassName}`}
        >
          {phase.status}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-ds-text">{phase.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-ds-muted-foreground">
        {phase.description}
      </p>

      <ul className="space-y-2.5">
        {phase.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <CheckCircle
              className={`h-4 w-4 shrink-0 ${phase.checkClassName}`}
            />
            <span className="text-sm text-ds-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
});

const FutureSection = () => (
  <section className="py-16 [content-visibility:auto]">
    <div className="mb-12">
      <SectionTitle
        label="Product Roadmap"
        icon={Eye}
        title="What's Coming"
        titleHighlight="Next"
        description="We are continuously evolving. Here's our roadmap for making the platform more intelligent, automated, and globally scalable."
        aosAnimation="fade-up"
      />
    </div>

    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {upcomingFeatures.map((feat, index) => (
        <FeaturePill key={feat.id} feat={feat} index={index} />
      ))}
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {roadmapPhases.map((phase, index) => (
        <RoadmapCard key={phase.id} phase={phase} index={index} />
      ))}
    </div>

    <MotionReveal className="mt-12" delay={0.12}>
      <MotionStagger
        className="rounded-2xl bg-gradient-to-r from-ds-primary to-ds-accent px-8 py-8 text-center"
        stagger={0.1}
      >
        <MotionStaggerItem>
          <h3 className="mb-2 text-2xl font-bold text-ds-primary-foreground">
            Ready to Scale Your Apparel Sourcing?
          </h3>
        </MotionStaggerItem>
        <MotionStaggerItem>
          <p className="mx-auto mb-6 max-w-md text-sm text-ds-primary-foreground/85">
            Join thousands of buyers and suppliers already using our platform to
            streamline global B2B apparel sourcing.
          </p>
        </MotionStaggerItem>
        <MotionStaggerItem>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-xl bg-ds-card px-6 py-2.5 text-sm font-semibold text-ds-primary transition-colors duration-200 hover:bg-ds-card/90"
            >
              Create RFQ Free
            </button>
            <button
              type="button"
              className="rounded-xl border border-ds-primary-foreground/40 bg-ds-primary-foreground/10 px-6 py-2.5 text-sm font-semibold text-ds-primary-foreground transition-colors duration-200 hover:bg-ds-primary-foreground/20"
            >
              Become a Supplier
            </button>
          </div>
        </MotionStaggerItem>
      </MotionStagger>
    </MotionReveal>
  </section>
);

export default FutureSection;
