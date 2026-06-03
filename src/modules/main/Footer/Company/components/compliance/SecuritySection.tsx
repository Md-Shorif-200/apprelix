"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { getAosProps } from "@/lib/animations/aos";
import { CheckCircle, Lock, Shield } from "lucide-react";
import { memo } from "react";
import {
  securityFeatures,
  trustBadges,
  type SecurityFeature,
} from "./_data/complianceData";

const SecurityCard = memo(function SecurityCard({
  feature,
  index,
}: {
  feature: SecurityFeature;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <article
      {...getAosProps("fade-up", index * 80)}
      className="ds-card-interactive group p-6"
    >
      <div className="ds-icon-box mb-5 h-14 w-14 transition-colors duration-300 group-hover:bg-ds-primary/20">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ds-text">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-ds-muted-foreground">
        {feature.description}
      </p>
    </article>
  );
});

const SecuritySection = () => (
  <section className="py-16 [content-visibility:auto]">
    <div className="mb-12">
      <SectionTitle
        label="Platform Security"
        icon={Lock}
        title="Enterprise-Grade"
        titleHighlight="Security System"
        description="Your data, transactions, and communications are protected by industry-leading security standards at every layer of the platform."
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {securityFeatures.map((feature, index) => (
        <SecurityCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>

    <MotionReveal className="mt-12" delay={0.15}>
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-ds-primary px-8 py-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ds-primary-foreground/20">
            <Shield className="h-6 w-6 text-ds-primary-foreground" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-ds-primary-foreground">
              100% Secure & Compliant
            </h4>
            <p className="text-sm text-ds-primary-foreground/80">
              Built with enterprise security standards for global B2B
              operations.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-ds-primary-foreground/70" />
              <span className="text-sm font-medium text-ds-primary-foreground">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MotionReveal>
  </section>
);

export default SecuritySection;
