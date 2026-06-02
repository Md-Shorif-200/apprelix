"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { getAosProps } from "@/lib/animations/aos";
import { Flame, Package, Users, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import {
  HOW_IT_WORKS_IMAGES,
  buyerBenefits,
  supplierBenefits,
  type BenefitItem,
} from "./_data/howItWorksData";

const BenefitCardItem = memo(function BenefitCardItem({
  benefit,
  index,
}: {
  benefit: BenefitItem;
  index: number;
}) {
  const Icon = benefit.icon;

  return (
    <article
      {...getAosProps("fade-up", index * 80)}
      className="ds-card-interactive flex flex-col items-start gap-3 p-6"
    >
      <div className="ds-icon-box h-11 w-11">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-base font-bold text-ds-text">{benefit.title}</h4>
      <p className="text-sm leading-relaxed text-ds-muted-foreground">
        {benefit.description}
      </p>
    </article>
  );
});

const BenefitGroup = memo(function BenefitGroup({
  title,
  headerIcon: HeaderIcon,
  benefits,
  aosDelay,
}: {
  title: string;
  headerIcon: LucideIcon;
  benefits: BenefitItem[];
  aosDelay: number;
}) {
  return (
    <div {...getAosProps("fade-up", aosDelay)}>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ds-primary">
          <HeaderIcon className="h-5 w-5 text-ds-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-ds-text">{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <BenefitCardItem key={benefit.id} benefit={benefit} index={index} />
        ))}
      </div>
    </div>
  );
});

const BenefitsSection = () => (
  <section className="mt-24">
    <div className="mb-12">
      <SectionTitle
        label="Platform Benefits"
        icon={Flame}
        title="Why Everyone"
        titleHighlight="Wins Here"
        description="We deliver real value to both buyers and suppliers. Here is what you gain the moment you join."
        aosAnimation="fade-up"
      />
    </div>

    <BenefitGroup
      title="Benefits for Buyers"
      headerIcon={Users}
      benefits={buyerBenefits}
      aosDelay={0}
    />

    <div className="my-12 border-t border-ds-border" />

    <BenefitGroup
      title="Benefits for Suppliers"
      headerIcon={Package}
      benefits={supplierBenefits}
      aosDelay={50}
    />

    <section className="relative mt-16 overflow-hidden rounded-3xl">
      <Image
        src={HOW_IT_WORKS_IMAGES.cta}
        alt="Join the platform"
        width={1400}
        height={350}
        quality={75}
        sizes="100vw"
        className="h-[300px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ds-foreground/55" />

      <MotionReveal
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        direction="up"
      >
        <MotionStagger
          className="flex max-w-lg flex-col items-center gap-4"
          stagger={0.1}
        >
          <MotionStaggerItem>
            <h3 className="text-3xl font-bold text-ds-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h3>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <p className="text-lg text-ds-primary-foreground/85">
              Join thousands of buyers and suppliers already transforming global
              apparel sourcing.
            </p>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="rounded-xl bg-ds-card px-8 py-3 font-bold text-ds-primary transition-colors duration-200 hover:bg-ds-card/90"
              >
                Post an RFQ
              </button>
              <button
                type="button"
                className="rounded-xl border-2 border-ds-primary-foreground px-8 py-3 font-bold text-ds-primary-foreground transition-colors duration-200 hover:bg-ds-primary-foreground/10"
              >
                Join as Supplier
              </button>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </MotionReveal>
    </section>
  </section>
);

export default BenefitsSection;
