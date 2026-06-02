"use client";

import Image from "next/image";
import { memo } from "react";
import {
  ArrowRight,
  CheckCircle,
  Flame,
  Play,
  type LucideIcon,
} from "lucide-react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import {
  HOW_IT_WORKS_IMAGES,
  heroStats,
} from "./_data/howItWorksData";

const HERO_IMAGE_SIZES = "(max-width: 1024px) 100vw, 50vw";

const StatCard = memo(function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="ds-card flex-1 p-4 text-center transition-shadow duration-200 motion-safe:hover:shadow-md">
      <div className="ds-icon-box mx-auto mb-2 h-8 w-8">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-2xl font-bold text-ds-text">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-ds-muted-foreground">
        {label}
      </p>
    </div>
  );
});

const HeroIntro = () => (
  <section className="mt-14">
    <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
      <MotionReveal
        className="relative h-[480px] overflow-hidden rounded-3xl shadow-2xl lg:h-[550px]"
        direction="right"
      >
        <Image
          src={HOW_IT_WORKS_IMAGES.hero}
          alt="Platform overview"
          fill
          priority
          quality={75}
          sizes={HERO_IMAGE_SIZES}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ds-foreground/80 via-ds-foreground/20 to-transparent" />

        <div className="absolute top-5 left-5">
          <div className="rounded-full border border-ds-primary-foreground/30 bg-ds-foreground/20 px-3 py-1.5 text-xs font-semibold text-ds-primary-foreground backdrop-blur-md">
            Trusted in 40+ Countries
          </div>
        </div>

        <div className="absolute right-5 bottom-5 left-5">
          <div className="rounded-2xl bg-ds-card p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ds-primary">
                <ArrowRight className="h-5 w-5 text-ds-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-ds-text">
                  From RFQ to Delivery
                </p>
                <p className="text-xs text-ds-muted-foreground">
                  Complete digital workflow in one platform
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ds-primary" />
                <span className="text-xs font-medium text-ds-muted-foreground">
                  Live
                </span>
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ds-muted">
              <div className="h-full w-3/4 rounded-full bg-ds-primary" />
            </div>
            <p className="mt-1 text-xs text-ds-muted-foreground">
              Order fulfillment: 75% complete
            </p>
          </div>
        </div>
      </MotionReveal>

      <MotionStagger
        className="flex flex-col justify-between gap-7"
        stagger={0.08}
        delay={0.05}
      >
        <MotionStaggerItem>
          <span className="ds-badge w-36">
            <Flame className="h-4 w-4" />
            How It Works
          </span>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-ds-text lg:text-4xl">
            A Smarter Way to
            <br />
            <span className="bg-gradient-to-r from-ds-primary to-ds-accent bg-clip-text text-transparent">
              Source & Supply
            </span>
          </h2>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="text-base leading-relaxed text-ds-muted-foreground">
            Whether you are a{" "}
            <span className="font-semibold text-ds-text">buyer</span> searching
            for the perfect manufacturing partner or a{" "}
            <span className="font-semibold text-ds-text">supplier</span> looking
            to grow your international client base — our platform makes every
            step simple, transparent, and efficient.
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="text-sm leading-relaxed text-ds-muted-foreground">
            From the moment a buyer posts an RFQ to the final product landing at
            their doorstep, every stage is digitally managed, tracked, and
            verified in real-time on a single platform.
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="h-px bg-gradient-to-r from-transparent via-ds-border to-transparent" />
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="flex gap-3">
            {heroStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-ds-primary px-6 py-3 font-semibold text-ds-primary-foreground shadow-md shadow-ds-primary/20 transition-colors duration-200 hover:bg-ds-primary/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ds-border bg-ds-card px-6 py-3 font-semibold text-ds-text transition-colors duration-200 hover:border-ds-primary hover:text-ds-primary"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ds-primary/10">
                <Play className="h-3 w-3 fill-ds-primary text-ds-primary" />
              </span>
              Watch Demo
            </button>
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="flex items-center gap-1.5 text-xs text-ds-muted-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-ds-primary" />
            No credit card required · Free 14-day trial · Cancel anytime
          </p>
        </MotionStaggerItem>
      </MotionStagger>
    </div>
  </section>
);

export default HeroIntro;
