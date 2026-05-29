import Container from "@/components/common/Container";
import OurMission from "./_components/OurVission";
import OurVission from "./_components/OurMission";
import OurCoreValues from "./_components/OurCoreValues";

const MissionVisionSection = () => {
  return (
    <section className="relative w-full  overflow-hidden">
      <div className="bg-gradient-to-br from-[#0F1F35] via-[#172C45] to-[#1a3a5c] border border-white/10 shadow-2xl mt-14">
        <Container>
          {/* Header */}
          <div className="flex flex-col items-center text-center py-10">
            <div
              className="
                inline-flex items-center gap-2 mb-3 lg:mb-4
                bg-blue-500/15 border border-blue-400/25
                rounded-full px-4 py-1.5 " >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>

              <span
                className="
                  text-xs font-semibold tracking-widest uppercase
                  text-blue-300 ">
                Who We Are
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight max-w-3xl">
              Built with a{" "}
              <span
                className="
                  bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400
                  bg-clip-text text-transparent
                "
              >
                Purpose
              </span>
              , <br className="hidden md:block" />
              Driven by a{" "}
              <span
                className="
                  bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400
                  bg-clip-text text-transparent
                "
              >
                Vision
              </span>
            </h2>

            <p className="mt-5 text-sm lg:text-base max-w-2xl leading-relaxed text-blue-200/60">
              We are redefining how the global apparel industry connects,
              sources, and grows — through intelligence, automation, and trust.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <OurMission />
            <OurVission />
          </div>

          {/* Core Values */}
          <OurCoreValues />

          <div
            className="
              mt-20 h-px w-full
              bg-gradient-to-r from-transparent via-white/10 to-transparent
            "
          />
        </Container>
      </div>
    </section>
  );
};

export default MissionVisionSection;
