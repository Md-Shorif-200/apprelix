"use client";

import Image from "next/image";
import { memo } from "react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { getAosProps } from "@/lib/animations/aos";
import {
  HOW_IT_WORKS_IMAGES,
  productionStages,
  type ProductionStage,
} from "./_data/howItWorksData";

const TRACKING_IMAGE_SIZES = "(max-width: 1024px) 100vw, 40vw";

const ProductionStageCard = memo(function ProductionStageCard({
  stage,
  isLast,
  index,
}: {
  stage: ProductionStage;
  isLast: boolean;
  index: number;
}) {
  const Icon = stage.icon;

  return (
    <article
      {...getAosProps("fade-left", index * 70)}
      className="relative flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="ds-card z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl p-0 shadow-md">
          <Icon className="h-7 w-7 text-ds-primary" />
        </div>
        {!isLast && (
          <div className="mt-2 min-h-[40px] w-0.5 flex-1 bg-gradient-to-b from-ds-border to-transparent" />
        )}
      </div>

      <div className="flex-1 pb-8">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-ds-primary/10 px-3 py-1 text-xs font-bold text-ds-primary">
            {stage.stage}
          </span>
          <span className="text-xs font-medium text-ds-muted-foreground">
            {stage.duration}
          </span>
        </div>
        <h4 className="mb-1 text-lg font-bold text-ds-text">{stage.title}</h4>
        <p className="text-sm leading-relaxed text-ds-muted-foreground">
          {stage.description}
        </p>
      </div>
    </article>
  );
});

const ProductionTracking = () => (
  <section className="mt-20">
    <div className="flex flex-col items-start gap-14 lg:flex-row lg:gap-20">
      <MotionReveal
        className="w-full lg:sticky lg:top-10 lg:w-2/5"
        direction="right"
      >
        <div className="mb-6">
          <h2 className="mt-4 mb-4 text-4xl leading-tight font-bold text-ds-text">
            From Order to <span className="text-ds-primary">Your Doorstep</span>
          </h2>
          <p className="mb-6 leading-relaxed text-ds-muted-foreground">
            Once a buyer places an order, the entire production journey is
            digitally tracked — stage by stage. No more guessing, no more
            delays, no more surprises.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={HOW_IT_WORKS_IMAGES.tracking}
            alt="Production tracking"
            width={600}
            height={380}
            quality={75}
            sizes={TRACKING_IMAGE_SIZES}
            className="h-[260px] w-full object-cover"
          />
        </div>

        <div
          className="ds-always-dark ds-section-dark mt-6 rounded-2xl border p-6 text-ds-foreground"
          {...getAosProps("zoom-in", 100)}
        >
          <p className="mb-2 text-lg font-bold">Real-Time Updates</p>
          <p className="text-sm leading-relaxed text-ds-muted-foreground">
            Both buyers and suppliers get instant notifications at every stage.
            Full transparency — no confusion, no delays.
          </p>
        </div>
      </MotionReveal>

      <div className="w-full lg:w-3/5">
        <div className="flex flex-col">
          {productionStages.map((stage, index) => (
            <ProductionStageCard
              key={stage.id}
              stage={stage}
              index={index}
              isLast={index === productionStages.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductionTracking;
