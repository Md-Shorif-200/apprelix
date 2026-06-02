import dynamic from "next/dynamic";
import Container from "@/components/common/Container";
import { AosRefresh } from "@/components/animations/AosRefresh";
import AiInsightHero from "../_components/AiInsightHero";

const AIFeatureCards = dynamic(() => import("../_components/AIFeatureCards"));
const SupplierAISection = dynamic(
  () => import("../_components/SupplierAISection"),
);

const AiInsightPage = () => (
  <main className="ds-section">
    <Container>
      <AiInsightHero />

      <AIFeatureCards />

      <SupplierAISection />

      <AosRefresh />
    </Container>
  </main>
);

export default AiInsightPage;
