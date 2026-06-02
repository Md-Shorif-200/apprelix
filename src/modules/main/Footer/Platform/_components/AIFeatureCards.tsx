import SectionTitle from "@/components/common/SectionTitle";
import { getAosProps } from "@/lib/animations/aos";
import { ArrowRight, Sparkles } from "lucide-react";
import { aiFeatureCards } from "../_data/aiFeatureCards";

const AIFeatureCards = () => (
  <section className="py-16">
    <div className="mb-10">
      <SectionTitle
        label="AI Capabilities"
        icon={Sparkles}
        title="Everything AI Does"
        titleHighlight="Behind the Scenes"
        description="From the moment you sign up, AI is working to save you time, reduce costs, and improve every sourcing decision you make"
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {aiFeatureCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <article
            key={card.title}
            {...getAosProps("fade-up", index * 70)}
            className="group ds-card-interactive flex flex-col gap-4 p-6"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${card.iconClassName}`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${card.tagClassName}`}
              >
                {card.tag}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-ds-text transition-colors group-hover:text-ds-primary">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-ds-muted-foreground">
                {card.description}
              </p>
            </div>

            <div className="mt-auto pt-2">
              <span className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-ds-primary transition-all hover:gap-2">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default AIFeatureCards;
