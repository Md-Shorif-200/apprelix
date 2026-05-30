import dynamic from "next/dynamic";
import Banner from "./Banner/Banner";
import HowItWorkes from "./HowItWorkes/HowItWorkes";
import FeaturedRfqs from "./FeaturedRfqs/FeaturedRfqs";
import { ManufacturingExcellence } from "./ManufacturingExcellence/ManufacturingExcellence";

const VerifiedSuppliers = dynamic(
  () => import("./VerifiedSuppliers/VerifiedSuppliers"),
);
const AIProcurementSection = dynamic(
  () => import("./AIProcurementSection/AIProcurementSection"),
);
const TestimonialSection = dynamic(
  () => import("./TestimonialSection/TestimonialSection"),
);
const AISourceSection = dynamic(
  () => import("./AISourceSection/AISourceSection"),
);
const GlobalSupplyChain = dynamic(
  () => import("../about/GlobalSupplyChain"),
);
const FAQSection = dynamic(() => import("./FAQSection/FAQSection"));

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorkes />
      <FeaturedRfqs />
      <ManufacturingExcellence />
      <VerifiedSuppliers />
      <AIProcurementSection />
      <TestimonialSection />
      <AISourceSection />
      <GlobalSupplyChain />
      <FAQSection />
    </div>
  );
};

export default HomePage;
