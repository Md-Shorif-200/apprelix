import type { ReactElement } from "react";
import { GlobeIcon, ShieldIcon, SparkleIcon, UsersIcon } from "../SvgIcons";

type CoreValue = {
  icon: ReactElement;
  title: string;
  description: string;
};

const coreValues: CoreValue[] = [
  {
    icon: <ShieldIcon />,
    title: "Trust & Transparency",
    description:
      "Every supplier is verified. Every transaction is traceable. We build trust at every step.",
  },
  {
    icon: <SparkleIcon />,
    title: "AI-Driven Innovation",
    description:
      "Our intelligent algorithms match the right suppliers to every unique sourcing need.",
  },
  {
    icon: <GlobeIcon />,
    title: "Global Reach",
    description:
      "Connecting buyers and suppliers across 50+ countries with seamless cross-border workflows.",
  },
  {
    icon: <UsersIcon />,
    title: "Community First",
    description:
      "We grow when our buyers and suppliers grow. Partnership is at the heart of everything.",
  },
];

const OurCoreValues = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-ds-foreground mb-3">
          Our Core Values
        </h3>

        <p className="text-sm max-w-md text-ds-muted-foreground">
          The principles that guide every decision, feature, and relationship on
          our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreValues.map((value) => (
          <div
            key={value.title}
            className="group relative flex flex-col gap-3 p-5 rounded-2xl overflow-hidden ds-glass-card hover:border-ds-primary/40 transition-[background-color,border-color] duration-300 cursor-pointer"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-ds-primary/10 group-hover:bg-ds-primary/20 transition-[background-color] duration-300 pointer-events-none" />

            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-ds-primary/20 group-hover:bg-ds-primary/40 border border-ds-primary/20 group-hover:border-ds-primary/50 text-ds-primary transition-[background-color,border-color,color] duration-300">
              {value.icon}
            </div>

            <h4 className="relative font-semibold text-sm text-ds-foreground/90 group-hover:text-ds-foreground transition-colors duration-300 leading-tight">
              {value.title}
            </h4>

            <p className="relative text-xs leading-relaxed text-ds-muted-foreground group-hover:text-ds-foreground/80 transition-colors duration-300">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
