import type { LucideIcon } from "lucide-react";
import { Flame } from "lucide-react";
import Link from "next/link";
import WorldMapCard from "./_components/WorldMapCard";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { globalSupplyChainFeatures } from "./_data/globalSupplyChainFeatures";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps & { index?: number }) {
  return (
    <div
      {...getAosProps("fade-left", index * 80)}
      className="group relative overflow-hidden rounded-2xl border border-ds-border bg-ds-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:border-ds-primary/30 motion-safe:hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-ds-primary/5 via-ds-card to-ds-accent/5 group-hover:opacity-100" />

      <div className="relative z-10 flex gap-4 items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ds-primary/10 flex items-center justify-center transition-[background-color,box-shadow] duration-300 group-hover:bg-ds-primary group-hover:shadow-lg group-hover:shadow-ds-primary/20">
          <Icon className="w-5 h-5 text-ds-primary transition-[color,transform] duration-300 group-hover:text-ds-primary-foreground motion-safe:group-hover:scale-110" />
        </div>

        <div>
          <h4 className="text-base font-semibold text-ds-text transition-colors duration-300 group-hover:text-ds-primary">
            {title}
          </h4>

          <p className="mt-1 text-sm text-ds-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GlobalSupplyChain() {
  return (
    <section className="mt-20">
      <Container>
        <div className="mb-14">
          <SectionTitle
            label=" Global Supply Chain"
            icon={Flame}
            title="Source Smarter."
            titleHighlight="Scale Globally."
            description="  Our platform connects buyers and suppliers across 80+ countries,
            making global apparel sourcing faster, more transparent, and
            remarkably efficient — no matter where you are."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-3">
            {globalSupplyChainFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          <div {...getAosProps("fade-right", 120)}>
            <WorldMapCard />
          </div>
        </div>

        <div
          {...getAosProps("fade-up", 160)}
          className="mt-8 rounded-2xl bg-ds-primary px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white text-xl font-bold">
              Ready to source from the global market?
            </h3>
            <p className="text-ds-primary-foreground/80 text-sm mt-1">
              Post your RFQ today and receive competitive quotes from verified
              suppliers worldwide — within 24 hours.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/auth/register"
              className="bg-ds-card text-ds-primary text-sm font-semibold px-6 py-3 rounded-xl hover:bg-ds-primary/10 transition-colors"
            >
              Post an RFQ
            </Link>
            <Link
              href="/suppliers"
              className="border border-ds-primary-foreground text-ds-primary-foreground text-sm font-semibold px-6 py-3 rounded-xl hover:bg-ds-primary-foreground/10 transition-colors"
            >
              Browse Suppliers
            </Link>
          </div>
        </div>
        <AosRefresh />
      </Container>
    </section>
  );
}
