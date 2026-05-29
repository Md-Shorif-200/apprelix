import { GlobeIcon, ShieldIcon, SparkleIcon, UsersIcon } from "../SvgIcons";

const coreValues = [
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
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Our Core Values
        </h3>

        <p className="text-sm max-w-md text-blue-200/60">
          The principles that guide every decision, feature, and relationship on
          our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="
              group relative flex flex-col gap-3 p-5 rounded-2xl overflow-hidden
              border border-white/10
              bg-white/5
              hover:bg-white/10
              hover:border-blue-400/40
              transition-all duration-300
              cursor-pointer
            "
          >
            <div
              className="
                absolute -top-6 -right-6 w-20 h-20 rounded-full
                bg-blue-500/10 group-hover:bg-blue-400/20
                blur-xl transition-all duration-500
                pointer-events-none
              "
            />

            <div
              className="
                relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                bg-blue-500/20 group-hover:bg-blue-500/40
                border border-blue-400/20 group-hover:border-blue-400/50
                text-blue-300 group-hover:text-blue-200
                transition-all duration-300
              "
            >
              {value.icon}
            </div>

            <h4
              className="
                relative font-semibold text-sm
                text-white/90 group-hover:text-white
                transition-colors duration-300 leading-tight
              "
            >
              {value.title}
            </h4>

            <p
              className="
                relative text-xs leading-relaxed
                text-blue-200/60 group-hover:text-blue-200/80
                transition-colors duration-300
              "
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
