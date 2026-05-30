"use client";

import Container from "@/components/common/Container";
import { Flame } from "lucide-react";
import { companyOverviewFeatures } from "./_data/companyOverviewFeatures";
import { CompanyOverviewImage } from "./CompanyOverviewImage";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";

const CompanyOverviewSection = () => {
  return (
    <Container>
      <section className="w-full lg:h-[630px] flex flex-col lg:flex-row gap-6 lg:gap-8 items-start mt-14">
        <MotionReveal className="w-full lg:w-1/2 h-full" direction="right">
          <CompanyOverviewImage />
        </MotionReveal>

        <MotionStagger
          className="w-full lg:w-1/2 flex flex-col lg:justify-center gap-4 lg:h-full"
          stagger={0.1}
          delay={0.1}
        >
          <MotionStaggerItem>
            <span className="w-32 flex justify-center items-center gap-1.5 bg-[#0d9488]/10 text-[#0d9488] text-sm font-semibold py-1.5 rounded-full">
              <Flame size={15} className="text-[#0d9488]" />
              About Us
            </span>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              A Complete B2B{" "}
              <span className="bg-gradient-to-br from-[#0d9488] to-[#0891b2] bg-clip-text text-transparent">
                Apparel Sourcing
              </span>{" "}
              Ecosystem
            </h2>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <p className="text-gray-500 text-sm lg:text-base">
              This platform is not just about AI — it is a full sourcing
              ecosystem. From posting an RFQ to receiving quotations, managing
              production, tracking shipments, and communicating in real time,
              everything happens in one place. AI is one of the tools we use to
              make the process smarter and faster.
            </p>
          </MotionStaggerItem>

          <ul className="flex flex-col gap-4">
            {companyOverviewFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <MotionStaggerItem key={feature.title}>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0fdfa] border border-[#99f6e4]">
                      <Icon size={18} className="text-[#0d9488]" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold text-gray-800">
                        {feature.title}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
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
    </Container>
  );
};

export default CompanyOverviewSection;
