"use client";

import { Flame } from "lucide-react";

import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { successStoryOverviewFeatures } from "../_data/successStoryOverviewFeatures";
import { SuccessStoryOverviewImage } from "./SuccessStoryOverviewImage";

const SuccessStoryOverviewSection = () => {
  return (
    <section className="w-full lg:h-[550px] flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
      <MotionReveal className="w-full lg:w-1/2 h-full" direction="right">
        <SuccessStoryOverviewImage />
      </MotionReveal>

      <MotionStagger
        className="w-full lg:w-1/2 flex flex-col  gap-4 lg:h-full"
        stagger={0.1}
        delay={0.1}
      >
        <MotionStaggerItem>
          <span className="ds-badge w-36 justify-center py-1.5">
            <Flame size={15} />
            Success Story
          </span>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <h2 className="text-2xl lg:text-3xl font-bold text-ds-text leading-tight">
            From Local Sourcing to{" "}
            <span className="bg-gradient-to-br from-ds-primary to-ds-accent bg-clip-text text-transparent">
              Global Trade
            </span>
          </h2>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="text-ds-muted-foreground text-sm lg:text-base">
            What started as a simple idea to connect buyers and suppliers has
            become the world&apos;s most trusted B2B apparel sourcing platform.
            With AI-powered matching, real-time production tracking, and a
            verified global supplier network, we help businesses source
            smarter, faster, and more efficiently.
          </p>
        </MotionStaggerItem>

        <ul className="flex flex-col gap-4">
          {successStoryOverviewFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <MotionStaggerItem key={feature.title}>
                <li className="flex items-start gap-4">
                  <div className="ds-icon-box flex-shrink-0 w-10 h-10">
                    <Icon size={18} />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-ds-text">
                      {feature.title}
                    </p>
                    <p className="text-sm text-ds-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              </MotionStaggerItem>
            );
          })}
        </ul>
      </MotionStagger>
    </section>
  );
};

export default SuccessStoryOverviewSection;
