import dynamic from "next/dynamic";
import CompanyOverviewSection from "./CompanyOverviewSection";

const MissionVisionSection = dynamic(() => import("./MissionVisionSection"));
const GlobalSupplyChain = dynamic(() => import("./GlobalSupplyChain"));
const SecurityTrustSection = dynamic(() => import("./SecurityTrustSection"));

const AboutPage = () => {
  return (
    <div>
      <CompanyOverviewSection />
      <MissionVisionSection />
      <GlobalSupplyChain />
      <SecurityTrustSection />
    </div>
  );
};

export default AboutPage;
