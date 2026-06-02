"use client";

import Container from "@/components/common/Container";
import OurMission from "./_components/OurVission";
import OurVission from "./_components/OurMission";
import OurCoreValues from "./_components/OurCoreValues";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";

const MissionVisionSection = () => {
  return (
    <section className="relative w-full overflow-hidden [content-visibility:auto]">
      <div className="ds-always-dark ds-section-dark border shadow-2xl mt-14 text-ds-foreground">
        <Container>
          <MotionReveal className="flex flex-col items-center text-center py-10">
            <div className="inline-flex items-center gap-2 mb-3 lg:mb-4 bg-ds-primary/15 border border-ds-primary/25 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-ds-primary motion-safe:animate-pulse" />

              <span className="text-xs font-semibold tracking-widest uppercase text-ds-primary">
                Who We Are
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-ds-foreground leading-tight max-w-3xl">
              Built with a{" "}
              <span className="bg-gradient-to-r from-ds-primary via-ds-accent to-ds-primary bg-clip-text text-transparent">
                Purpose
              </span>
              , <br className="hidden md:block" />
              Driven by a{" "}
              <span className="bg-gradient-to-r from-ds-accent via-ds-primary to-ds-accent bg-clip-text text-transparent">
                Vision
              </span>
            </h2>

            <p className="mt-5 text-sm lg:text-base max-w-2xl leading-relaxed text-ds-muted-foreground">
              We are redefining how the global apparel industry connects,
              sources, and grows — through intelligence, automation, and trust.
            </p>
          </MotionReveal>

          <MotionStagger
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            stagger={0.12}
          >
            <MotionStaggerItem direction="left">
              <OurMission />
            </MotionStaggerItem>
            <MotionStaggerItem direction="right">
              <OurVission />
            </MotionStaggerItem>
          </MotionStagger>

          <MotionReveal delay={0.1}>
            <OurCoreValues />
          </MotionReveal>

          <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </Container>
      </div>
    </section>
  );
};

export default MissionVisionSection;
