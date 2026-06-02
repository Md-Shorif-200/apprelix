import dynamic from "next/dynamic";
import Container from "@/components/common/Container";
import { AosRefresh } from "@/components/animations/AosRefresh";
import HeroIntro from "./howitworks/HeroIntro";

const StepsSection = dynamic(() => import("./howitworks/StepsSection"));
const ProductionTracking = dynamic(
  () => import("./howitworks/ProductionTracking"),
);
const BenefitsSection = dynamic(() => import("./howitworks/BenefitsSection"));

const HowItWorksPage = () => (
  <main className="ds-section pb-16">
    <Container>
      <HeroIntro />

      <StepsSection />

      <ProductionTracking />

      <BenefitsSection />

      <AosRefresh />
    </Container>
  </main>
);

export default HowItWorksPage;
