"use client";

import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { buyerBenefits } from "../_data/aiFeatureCards";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";

const HERO_IMAGES = {
  primary: "/about/about-img-1.webp",
  secondary: "/about/about-img-2.webp",
  accent: "/banner/img-2.webp",
} as const;

const IMAGE_SIZES = {
  collage: "(max-width: 1024px) 100vw, 50vw",
  small: "(max-width: 1024px) 40vw, 20vw",
  large: "(max-width: 1024px) 55vw, 28vw",
} as const;

const AiInsightHero = () => (
  <section className="py-10">
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
      <MotionReveal className="relative h-[500px] w-full lg:w-1/2" direction="right">
        <div className="absolute top-0 left-0 h-[280px] w-[90%] overflow-hidden rounded-3xl shadow-sm">
          <Image
            src={HERO_IMAGES.primary}
            alt="AI-Powered Apparel Sourcing"
            fill
            priority
            quality={75}
            sizes={IMAGE_SIZES.collage}
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 h-[200px] w-[40%] overflow-hidden rounded-3xl shadow-md">
          <Image
            src={HERO_IMAGES.accent}
            alt="Smart supplier matching"
            fill
            quality={70}
            sizes={IMAGE_SIZES.small}
            className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:scale-105"
          />
        </div>

        <div className="absolute right-0 bottom-0 z-10 h-[350px] w-[55%] overflow-hidden rounded-3xl border-[10px] border-ds-card shadow-2xl">
          <Image
            src={HERO_IMAGES.secondary}
            alt="AI sourcing dashboard"
            fill
            quality={70}
            sizes={IMAGE_SIZES.large}
            className="object-cover"
          />
        </div>
      </MotionReveal>

      <MotionStagger
        className="w-full space-y-4 lg:w-1/2"
        stagger={0.08}
        delay={0.05}
      >
        <MotionStaggerItem>
          <span className="ds-badge">
            <Sparkles className="h-4 w-4" />
            Artificial Intelligence
          </span>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <h2 className="text-2xl leading-tight font-bold text-ds-text md:text-3xl">
            Smarter Sourcing Starts with{" "}
            <span className="text-ds-primary">AI-Powered</span> Intelligence
          </h2>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="text-sm leading-relaxed text-ds-muted-foreground md:text-base">
            Our built-in AI engine eliminates guesswork from B2B apparel sourcing.
            Whether you&apos;re a buyer searching for the perfect supplier or a
            supplier looking for the right orders — the AI works 24/7 to make the
            best connections possible.
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wider text-ds-muted-foreground uppercase">
              For Buyers
            </p>
            <ul className="space-y-2">
              {buyerBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-ds-primary" />
                  <span className="text-sm text-ds-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ds-primary px-6 py-3 font-semibold text-ds-primary-foreground shadow-md shadow-ds-primary/20 transition-colors duration-200 hover:bg-ds-primary/90"
            >
              Post an RFQ
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ds-border px-6 py-3 font-semibold text-ds-text transition-colors duration-200 hover:border-ds-primary hover:text-ds-primary"
            >
              See How It Works
            </button>
          </div>
        </MotionStaggerItem>
      </MotionStagger>
    </div>
  </section>
);

export default AiInsightHero;
