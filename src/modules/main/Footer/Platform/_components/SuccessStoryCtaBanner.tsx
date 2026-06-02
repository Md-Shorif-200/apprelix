"use client";

import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { getAosProps } from "@/lib/animations/aos";
import Image from "next/image";

const CTA_IMAGE = "/banner/img-5.webp";

const SuccessStoryCtaBanner = () => (
  <section className="mb-14" {...getAosProps("fade-up", 0)}>
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src={CTA_IMAGE}
        alt="Team success — join the platform"
        width={1400}
        height={400}
        quality={75}
        sizes="100vw"
        className="h-[350px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ds-foreground/55" />

      <MotionReveal
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        direction="up"
      >
        <MotionStagger className="flex max-w-xl flex-col items-center gap-4" stagger={0.1}>
          <MotionStaggerItem>
            <h3 className="text-3xl font-bold text-ds-primary-foreground md:text-4xl">
              Ready to Write Your Success Story?
            </h3>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <p className="text-base text-ds-primary-foreground/85 md:text-lg">
              Join 15,000+ buyers and 3,500+ suppliers who are already growing
              their business with our platform.
            </p>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="rounded-xl bg-ds-card px-8 py-3 font-bold text-ds-primary transition-colors duration-200 hover:bg-ds-card/90"
              >
                Create Free Account
              </button>
              <button
                type="button"
                className="rounded-xl border-2 border-ds-primary-foreground px-8 py-3 font-bold text-ds-primary-foreground transition-colors duration-200 hover:bg-ds-primary-foreground/10"
              >
                Explore Suppliers
              </button>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </MotionReveal>
    </div>
  </section>
);

export default SuccessStoryCtaBanner;
