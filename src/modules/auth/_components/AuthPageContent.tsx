// AuthPageContent.tsx
import RegistrationContentTab from "./RegistrationContentTab";
import Logo from "@/components/shared/Navbar/Logo";
import { Sparkles } from "lucide-react";

const AuthPageContent = () => {
  return (
    <div className="relative w-full lg:h-full lg:overflow-hidden">
      {/* Fixed background — does not scroll on lg+ */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[-80px] left-[-80px] h-72 w-72 rounded-full bg-[#14b8a6]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-60px] bottom-[-60px] h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden
      />

      {/* Scrollable content — hidden scrollbar on lg+ */}
      <div className="relative z-10 flex flex-col px-8 py-8 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:scrollbar-hide lg:py-12">
        <div className="mb-6">
          <Logo section="footer" />
        </div>

        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/30 bg-[#14b8a6]/20 px-3 py-1.5 text-xs font-semibold text-teal-300">
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Platform
        </div>

        <h2 className="mb-3 text-3xl leading-snug font-bold text-white">
          Smart Apparel Sourcing <br />
          <span className="text-teal-400">Starts Here</span>
        </h2>

        <p className="mb-8 max-w-md text-sm leading-relaxed text-teal-100/70">
          Connect with verified buyers and suppliers worldwide. Create RFQs,
          manage quotations, track production — all in one intelligent platform
          built for the modern apparel industry.
        </p>

        <RegistrationContentTab />
      </div>
    </div>
  );
};

export default AuthPageContent;
