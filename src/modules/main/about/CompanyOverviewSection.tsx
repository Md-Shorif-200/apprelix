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
  // const { data, isPending, isError } = useGetUsers();
  //  console.warn(data)

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
            <span className="ds-badge w-32 justify-center py-1.5">
              <Flame size={15} />
              About Us
            </span>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <h2 className="text-2xl lg:text-3xl font-bold text-ds-text leading-tight">
              A Complete B2B{" "}
              <span className="bg-gradient-to-br from-ds-primary to-ds-accent bg-clip-text text-transparent">
                Apparel Sourcing
              </span>{" "}
              Ecosystem
            </h2>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <p className="text-ds-muted-foreground text-sm lg:text-base">
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
    </Container>
  );
};

export default CompanyOverviewSection;
