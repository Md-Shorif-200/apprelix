import { Headset } from "lucide-react";

const Support = () => {
  return (
    <div
      className=" group flex items-center gap-3 rounded-2xl  cursor-pointer
        transition-all duration-300 ease-out   "
    >
      {/* Icon with online indicator */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ds-primary/10 transition-colors duration-300 group-hover:bg-ds-primary/15">
        <Headset
          size={20}
          className="text-ds-primary transition-transform duration-300 group-hover:scale-110"
        />
        <span
          className="
            absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-400
            ring-2 ring-white dark:ring-ds-card animate-pulse
          "
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wide text-ds-muted-foreground ">
          Need help?
        </span>
        <span className="text-sm font-bold text-ds-text transition-colors duration-300  group-hover:text-ds-primary">
          24/7 Support
        </span>
      </div>
    </div>
  );
};

export default Support;
