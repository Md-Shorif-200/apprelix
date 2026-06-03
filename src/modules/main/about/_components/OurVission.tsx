import { CheckIcon, EyeIcon } from "../SvgIcons";

const visionPoints: string[] = [
  "Become the world's #1 B2B apparel sourcing intelligence platform",
  "Power 1 million+ successful buyer-supplier connections globally",
  "Set the new standard for ethical & transparent supply chains",
  "Lead the digital transformation of the global fashion industry",
];

const OurVission = () => {
  return (
    <div className="relative group rounded-3xl overflow-hidden ds-glass-card hover:border-ds-accent/40 p-8">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-ds-accent/10 group-hover:bg-ds-accent/20 transition-[background-color] duration-300 pointer-events-none" />

      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ds-accent/40 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-ds-accent/20 group-hover:bg-ds-accent/40 border border-ds-accent/20 group-hover:border-ds-accent/50 text-ds-accent transition-[background-color,border-color,color] duration-300">
            <EyeIcon />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-ds-accent">
              Our Vision
            </p>

            <h3 className="text-ds-foreground text-xl font-bold">
              Where We Are Going
            </h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-7 text-ds-muted-foreground">
          We envision a future where every apparel brand — from emerging
          startups to global enterprises — can source with complete confidence,
          powered by real-time data, AI intelligence, and a trusted global
          network.
        </p>

        <ul className="flex flex-col gap-3.5">
          {visionPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 bg-ds-accent/20 border border-ds-accent/20 flex items-center justify-center text-ds-accent">
                <CheckIcon />
              </span>

              <span className="text-sm leading-relaxed text-ds-foreground/80">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurVission;
