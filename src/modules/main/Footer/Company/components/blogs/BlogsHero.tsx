import { getAosProps } from "@/lib/animations/aos";
import { BookOpen, TrendingUp, Users, FileText } from "lucide-react";
import { memo } from "react";
import { blogStats } from "./_data/blogsData";
import Image from "next/image";

const StatItem = memo(function StatItem({
  value,
  label,
  icon: Icon,
  delay,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}) {
  return (
    <div {...getAosProps("fade-up", delay)} className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ds-primary/10">
        <Icon className="h-5 w-5 text-ds-primary" />
      </div>
      <div>
        <p className="text-xl font-bold text-ds-foreground">{value}</p>
        <p className="text-xs text-ds-muted-foreground">{label}</p>
      </div>
    </div>
  );
});

const statIcons = [FileText, Users, TrendingUp, BookOpen];

const BlogsHero = () => (
  <header className="overflow-hidden rounded-2xl mt-14">
    <div className="grid min-h-[480px] grid-cols-1 lg:grid-cols-2">
      
      {/* Left — Image */}
      <div {...getAosProps("fade-right", 0)} className="relative min-h-[320px] lg:min-h-full">
        
        {/* Main large image */}
        <div className="absolute inset-0">
          <Image
            src="/images/blog/hero-main.jpg"
            alt="Blog hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>

        {/* Small floating image — bottom right */}
        <div className="absolute bottom-6 right-6 h-36 w-48 overflow-hidden rounded-xl border-4 border-white shadow-xl">
          <Image
            src="/images/blog/hero-secondary.jpg"
            alt="Blog secondary"
            fill
            className="object-cover"
          />
        </div>

        {/* Badge */}
        <div className="absolute left-6 top-6">
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 shadow-md backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-ds-primary" />
            <span className="text-xs font-semibold text-ds-foreground">
              Platform Insights
            </span>
          </div>
        </div>
      </div>

      {/* Right — Content */}
      <div
        {...getAosProps("fade-left", 80)}
        className="flex flex-col justify-center gap-8 bg-ds-card px-8 py-12 lg:px-12"
      >
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight text-ds-foreground lg:text-4xl">
            Learn, Grow &{" "}
            <span className="text-ds-primary">Source Smarter</span>
          </h1>
          <p className="text-sm leading-relaxed text-ds-muted-foreground">
            Expert articles for buyers and suppliers — covering sourcing
            strategies, production tips, AI tools, and platform guides to help
            you succeed in global apparel trade.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-ds-border" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {blogStats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={statIcons[index] ?? BookOpen}
              delay={index * 80 + 160}
            />
          ))}
        </div>

        {/* CTA */}
        <div {...getAosProps("fade-up", 400)}>
          <button className="rounded-xl bg-ds-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-ds-primary/90">
            Explore Articles
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default BlogsHero;