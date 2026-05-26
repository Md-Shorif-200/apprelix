// components/DarkModeSectionCard.tsx
import React from "react";

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
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
      data-aos-once="true"
      className="
        group
        relative
        rounded-2xl
        p-4
        transition-all
        duration-300
        bg-white/5
        hover:bg-white/10
        border border-white/10
        hover:border-blue-400/40
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
          bg-blue-500/10
          group-hover:bg-blue-400/20
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
            bg-blue-500/20
            group-hover:bg-blue-500/40
            border border-blue-400/20
            group-hover:border-blue-400/50
            transition-all duration-300
            text-blue-300
            group-hover:text-blue-200
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
              text-white/90
              group-hover:text-white
              transition-colors duration-300
              leading-tight
            "
          >
            {title}
          </h4>
          <p className="text-xs text-blue-200/60 group-hover:text-blue-200/80 mt-1 leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSectionCard;