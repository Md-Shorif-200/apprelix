import { CheckIcon, RocketIcon } from "../SvgIcons";

const missionPoints: string[] = [
  "Eliminate sourcing inefficiencies with AI-powered supplier matching",
  "Provide transparent pricing & real-time production visibility",
  "Connect global buyers with verified, high-quality suppliers",
  "Reduce sourcing time from weeks to hours through automation",
];

const OurMission = () => {
  return (
    <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 transition-[background-color,border-color] duration-300 p-8">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 group-hover:bg-blue-400/20 transition-[background-color] duration-300 pointer-events-none" />

      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-blue-500/20 group-hover:bg-blue-500/40 border border-blue-400/20 group-hover:border-blue-400/50 text-blue-300 group-hover:text-blue-200 transition-[background-color,border-color,color] duration-300">
            <RocketIcon />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-blue-300">
              Our Mission
            </p>

            <h3 className="text-white text-xl font-bold">What We Do Today</h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-7 text-blue-200/60">
          Our mission is to make B2B apparel sourcing faster, smarter, and more
          reliable — empowering businesses of every size to access world-class
          manufacturing through cutting-edge AI technology.
        </p>

        <ul className="flex flex-col gap-3.5">
          {missionPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 bg-blue-500/20 border border-blue-400/20 flex items-center justify-center text-blue-300">
                <CheckIcon />
              </span>

              <span className="text-sm leading-relaxed text-blue-200/80">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurMission;
