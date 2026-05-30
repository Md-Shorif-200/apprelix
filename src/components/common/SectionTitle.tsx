// components/common/SectionTitle.tsx

import { LucideIcon } from "lucide-react";
import { getAosProps, type AosAnimation } from "@/lib/animations/aos";

interface SectionTitleProps {
  // Content - dynamic
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;

  // Icon - dynamic
  icon?: LucideIcon;

  // Alignment - dynamic
  align?: "left" | "center" | "right";

  // Scroll animation
  animate?: boolean;
  aosAnimation?: AosAnimation;
  aosDelay?: number;
}

const SectionTitle = ({
  label,
  title,
  titleHighlight,
  description,
  icon: Icon,
  align = "center",
  animate = true,
  aosAnimation = "fade-up",
  aosDelay = 0,
}: SectionTitleProps) => {
  // ---- Alignment Classes ----
  const alignmentClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  // ---- Description max-width only for center ----
  const descMaxWidth = align === "center" ? "max-w-xl" : "";

  const aosProps = animate ? getAosProps(aosAnimation, aosDelay) : {};

  return (
    <div
      className={`flex flex-col gap-2 ${alignmentClass[align]}`}
      {...aosProps}
    >
      {/* ---- Small Label Badge ---- */}
      {label && (
        <span className="inline-flex items-center gap-1.5 bg-[#0d9488]/10 text-[#0d9488] text-sm font-semibold px-4 py-1.5 rounded-full">
          {Icon && <Icon size={15} className="text-[#0d9488]" />}
          {label}
        </span>
      )}

      {/* ---- Main Heading ---- */}
      <h2 className="text-3xl  font-extrabold leading-tight text-[#0f172a]">
        {title}{" "}
        {titleHighlight && (
          <span className="text-[#0d9488]">{titleHighlight}</span>
        )}
      </h2>

      {/* ---- Description ---- */}
      {description && (
        <p
          className={`text-sm lg:text-base leading-relaxed text-[#64748b] ${descMaxWidth}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
