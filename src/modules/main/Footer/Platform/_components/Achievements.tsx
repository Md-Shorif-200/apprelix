import SectionTitle from "@/components/common/SectionTitle";
import { getAosProps } from "@/lib/animations/aos";
import { Sparkles } from "lucide-react";
import { achievementItems, type AchievementItem } from "../_data/achievements";

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: AchievementItem;
  index: number;
}) => {
  const Icon = achievement.icon;

  return (
    <article
      {...getAosProps("fade-up", index * 70)}
      className="ds-card flex gap-4 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="ds-icon-box h-fit shrink-0 p-3">
        <Icon className={`h-6 w-6 ${achievement.iconClassName}`} />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-ds-text">
          {achievement.title}
        </h3>
        <p className="text-sm leading-relaxed text-ds-muted-foreground">
          {achievement.description}
        </p>
      </div>
    </article>
  );
};

const Achievements = () => (
  <div>
    <div className="mb-14">
      <SectionTitle
        label="Why We Stand Out"
        icon={Sparkles}
        title="Built for"
        titleHighlight="Success"
        description="We did not just build a marketplace. We built a complete sourcing ecosystem that empowers every stakeholder in the apparel supply chain."
        aosAnimation="fade-up"
      />
    </div>

    <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
      {achievementItems.map((achievement, index) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          index={index}
        />
      ))}
    </div>
  </div>
);

export default Achievements;
