// components/DarkModeSectionCard.tsx
import React from "react";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const DarkModeSectionCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true" // animate only once
      className="
       h-[130px]
        rounded-xl 
        p-4 
        shadow-sm 
        transition-all 
        duration-300 
        hover:shadow-lg 
        bg-[#1F3A5F]
        hover:bg-[#24466E]
        cursor-pointer
        transform 

      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
            w-10 h-10 
            flex justify-center items-center 
            rounded-full 
            transition-colors 
            duration-300  
            bg-gray-800  
            text-[#ffffff]
          "
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm md:text-base text-[#ffffff] transition-colors duration-300">
            {title}
          </h4>
          <p className="text-xs md:text-sm text-[#C7D9EE] mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSectionCard;
