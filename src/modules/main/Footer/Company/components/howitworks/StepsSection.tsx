import SectionTitle from "@/components/common/SectionTitle";
import { getAosProps } from "@/lib/animations/aos";
import { Flame, Package, Users } from "lucide-react";
import { memo } from "react";
import {
  buyerSteps,
  supplierSteps,
  type ProcessStep,
} from "./_data/howItWorksData";

const ProcessStepCard = memo(function ProcessStepCard({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const Icon = step.icon;

  return (
    <article
      {...getAosProps("fade-up", index * 60)}
      className="ds-card-interactive flex gap-4 p-5"
    >
      <div className="ds-icon-box h-12 w-12 flex-shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="mb-1 text-xs font-bold tracking-widest text-ds-primary uppercase">
          {step.step}
        </p>
        <h4 className="mb-1 text-base font-bold text-ds-text">{step.title}</h4>
        <p className="text-sm leading-relaxed text-ds-muted-foreground">
          {step.description}
        </p>
      </div>
    </article>
  );
});

type JourneyColumnProps = {
  title: string;
  subtitle: string;
  headerIcon: typeof Users;
  steps: ProcessStep[];
  aosDirection: "fade-right" | "fade-left";
};

const JourneyColumn = memo(function JourneyColumn({
  title,
  subtitle,
  headerIcon: HeaderIcon,
  steps,
  aosDirection,
}: JourneyColumnProps) {
  return (
    <div
      {...getAosProps(aosDirection, 0)}
      className="rounded-3xl border border-ds-border bg-ds-card p-8 shadow-sm"
    >
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ds-primary">
          <HeaderIcon className="h-5 w-5 text-ds-primary-foreground" />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-ds-muted-foreground uppercase">
            {subtitle}
          </p>
          <h3 className="text-xl font-bold text-ds-text">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <ProcessStepCard key={step.id} step={step} index={index} />
        ))}
      </div>
    </div>
  );
});

const StepsSection = () => (
  <section className="mt-20">
    <div className="mb-12">
      <SectionTitle
        label="The Process"
        icon={Flame}
        title="How Buyers & Suppliers"
        titleHighlight="Work Together"
        description="A seamless, step-by-step process designed for both sides of the sourcing equation — fast, transparent, and fully digital."
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <JourneyColumn
        title="Buyer Journey"
        subtitle="For Buyers"
        headerIcon={Users}
        steps={buyerSteps}
        aosDirection="fade-right"
      />
      <JourneyColumn
        title="Supplier Journey"
        subtitle="For Suppliers"
        headerIcon={Package}
        steps={supplierSteps}
        aosDirection="fade-left"
      />
    </div>
  </section>
);

export default StepsSection;
