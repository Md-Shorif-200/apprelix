import { getAosProps } from "@/lib/animations/aos";
import { Flame } from "lucide-react";
import { platformStats, type PlatformStat } from "../_data/platformStats";

const StatCardItem = ({ stat, index }: { stat: PlatformStat; index: number }) => {
  const Icon = stat.icon;

  return (
    <article
      {...getAosProps("zoom-in-up", index * 80)}
      className="group ds-card relative p-6 shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="ds-icon-box flex h-12 w-12 items-center justify-center transition-colors duration-300 group-hover:bg-ds-primary/20">
          <Icon className="h-7 w-7" />
        </div>
        <span className="text-3xl font-bold text-ds-primary">{stat.value}</span>
      </div>

      <div className="mb-4 h-px bg-ds-border" />

      <div>
        <p className="mb-1 text-sm font-semibold text-ds-text">{stat.label}</p>
        <p className="text-xs text-ds-muted-foreground">{stat.description}</p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-ds-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </article>
  );
};

const PlatformStats = () => (
  <section
    className="relative overflow-hidden rounded-3xl bg-ds-primary px-6 py-10 lg:px-12"
    {...getAosProps("fade-up", 0)}
  >
    <div
      aria-hidden
      className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-ds-primary-foreground/10"
    />
    <div
      aria-hidden
      className="absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-full bg-ds-foreground/10"
    />

    <div className="relative z-10">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-ds-primary-foreground/20 bg-ds-primary-foreground/15 px-4 py-1.5 text-sm font-medium text-ds-primary-foreground">
          <Flame size={14} />
          Trusted Worldwide
        </span>

        <h2 className="mb-4 text-2xl leading-tight font-bold text-ds-primary-foreground lg:text-4xl">
          Numbers That Tell
          <span className="block text-ds-primary-foreground/80">Our Story</span>
        </h2>

        <p className="text-sm leading-relaxed text-ds-primary-foreground/85 lg:text-base">
          Every number represents real businesses that trust our platform to
          connect, source, and grow with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platformStats.map((stat, index) => (
          <StatCardItem key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default PlatformStats;
