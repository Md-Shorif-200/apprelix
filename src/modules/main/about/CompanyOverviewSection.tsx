// CompanyOverviewSection.tsx (Server Component)
import Container from "@/components/common/Container";
import { CompanyOverviewImage } from "./CompanyOverviewImage";
import {
  Bot,
  ShieldCheck,
  PackageSearch,
  FileText,
  Flame,
} from "lucide-react";


const features = [
  {
    icon: FileText,
    title: "RFQ Management",
    description:
      "Buyers can easily create detailed sourcing requests and receive competitive quotations from verified suppliers.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Matching",
    description:
      "Our AI helps suggest the most suitable suppliers based on your requirements, budget, and delivery timeline.",
  },
  {
    icon: PackageSearch,
    title: "Production & Order Tracking",
    description:
      "Track every stage of production — from cutting to packaging — and monitor shipment status in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Supplier Network",
    description:
      "Every supplier goes through a verification process to ensure quality, reliability, and trust.",
  },

];

const CompanyOverviewSection = () => {
  return (
   
      <Container>
        <section className="w-full  lg:h-[630px] flex flex-col lg:flex-row gap-6 lg:gap-8 items-start mt-14">
          {/* LEFT — IMAGE */}
          <div className="w-full lg:w-1/2 h-full">
            <CompanyOverviewImage />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col lg:justify-center gap-4 lg:h-full">
            <span className="w-32 flex justify-center items-center gap-1.5 bg-[#0d9488]/10 text-[#0d9488] text-sm font-semibold  py-1.5 rounded-full">
              <Flame size={15} className="text-[#0d9488]" />
              About Us
            </span>

            {/* --- Heading --- */}
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              A Complete B2B{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Apparel Sourcing
              </span>{" "}
              Ecosystem
            </h2>

            {/* --- Description --- */}
            <p className="text-gray-500 text-sm lg:text-base">
              This platform is not just about AI — it is a full sourcing
              ecosystem. From posting an RFQ to receiving quotations, managing
              production, tracking shipments, and communicating in real time,
              everything happens in one place. AI is one of the tools we use to
              make the process smarter and faster.
            </p>

            {/* --- Divider --- */}
            {/* <div
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: "#0d9488" }}
            /> */}

            {/* --- Features List --- */}
            <ul className="flex flex-col gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <li key={i} className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#f0fdfa",
                        border: "1px solid #99f6e4",
                      }}
                    >
                      <Icon size={18} style={{ color: "#0d9488" }} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold text-gray-800">
                        {feature.title}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </Container>
 
  );
};

export default CompanyOverviewSection;
