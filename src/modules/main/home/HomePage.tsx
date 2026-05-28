import React from "react";
import Banner from "./Banner/Banner";
import HowItWorkes from "./HowItWorkes/HowItWorkes";
import FeaturedRfqs from "./FeaturedRfqs/FeaturedRfqs";
import { ManufacturingExcellence } from "./ManufacturingExcellence/ManufacturingExcellence";
import VerifiedSuppliers from "./VerifiedSuppliers/VerifiedSuppliers";
import AISourceSection from "./AISourceSection/AISourceSection";
import AIProcurementSection from "./AIProcurementSection/AIProcurementSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import FAQSection from "./FAQSection/FAQSection";

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
      {/* <AISourceSection /> */}
      <FAQSection />
    </div>
  );
};

export default HomePage;
