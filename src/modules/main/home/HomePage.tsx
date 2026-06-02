import dynamic from "next/dynamic";
import { AosRefresh } from "@/components/animations/AosRefresh";
import { LazySection } from "@/components/animations/LazySection";
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
const GlobalSupplyChain = dynamic(() => import("../about/GlobalSupplyChain"));
const FAQSection = dynamic(() => import("./FAQSection/FAQSection"));

const HomePage = () => (
  <div>
    <Banner />
    <HowItWorkes />
    <FeaturedRfqs />
    <ManufacturingExcellence />

    <LazySection minHeight="400px">
      <VerifiedSuppliers />
    </LazySection>

    <LazySection minHeight="400px">
      <AIProcurementSection />
    </LazySection>

    <LazySection minHeight="360px">
      <TestimonialSection />
    </LazySection>

    <LazySection minHeight="400px">
      <AISourceSection />
    </LazySection>

    <LazySection minHeight="400px">
      <GlobalSupplyChain />
    </LazySection>

    <LazySection minHeight="320px">
      <FAQSection />
    </LazySection>

    <AosRefresh />
  </div>
);

export default HomePage;
