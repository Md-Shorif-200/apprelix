import dynamic from "next/dynamic";
import Container from "@/components/common/Container";
import { AosRefresh } from "@/components/animations/AosRefresh";
import { LazySection } from "@/components/animations/LazySection";
import SuccessStoryOverviewSection from "../_components/SuccessStoryOverviewSection";

const ClientReviews = dynamic(() => import("../_components/ClientReviews"));
const PlatformStats = dynamic(() => import("../_components/PlatformStats"));
const Achievements = dynamic(() => import("../_components/Achievements"));
const SuccessStoryCtaBanner = dynamic(
  () => import("../_components/SuccessStoryCtaBanner"),
);

const SuccessStoryPage = () => (
  <main className="ds-section">
    <Container>
      <div className="mt-14 mb-6">
        <SuccessStoryOverviewSection />
      </div>

      <LazySection minHeight="360px" className="mt-10 mb-14 lg:mt-4">
        <ClientReviews />
      </LazySection>

      <PlatformStats />

      <div className="mt-10 mb-14 lg:mt-14">
        <Achievements />
      </div>

      <SuccessStoryCtaBanner />

      <AosRefresh />
    </Container>
  </main>
);

export default SuccessStoryPage;
