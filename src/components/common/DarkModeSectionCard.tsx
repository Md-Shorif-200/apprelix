import { getAosProps } from "@/lib/animations/aos";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index?: number;
}

const DarkModeSectionCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <div
      {...getAosProps("fade-up", index * 100)}
      className="
        ds-always-dark
        group
        relative
        rounded-2xl
        p-4
        transition-all
        duration-300
        ds-glass-card
        hover:border-ds-primary/40
        cursor-pointer
        overflow-hidden
      "
    >
      {/* Background Glow Effect */}
      <div
        className="
          absolute -top-6 -right-6
          w-20 h-20
          rounded-full
          bg-ds-primary/10
          group-hover:bg-ds-primary/20
          blur-xl
          transition-all duration-500
        "
      />

      <div className="relative flex items-start gap-3">
        {/* Icon Box */}
        <div
          className="
            w-10 h-10
            flex-shrink-0
            flex justify-center items-center
            rounded-xl
            bg-ds-primary/20
            group-hover:bg-ds-primary/40
            border border-ds-primary/20
            group-hover:border-ds-primary/50
            transition-all duration-300
            text-ds-primary
          "
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h4
            className="
              font-semibold
              text-sm
              text-ds-foreground/90
              group-hover:text-ds-foreground
              transition-colors duration-300
              leading-tight
            "
          >
            {title}
          </h4>
          <p className="text-xs text-ds-muted-foreground group-hover:text-ds-foreground/80 mt-1 leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSectionCard;
