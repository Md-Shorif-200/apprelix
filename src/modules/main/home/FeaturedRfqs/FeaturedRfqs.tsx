import SectionTitle from "@/components/common/SectionTitle";
import FeaturedRfqsCard from "./FeaturedRfqsCard";
import { Flame } from "lucide-react";
import Container from "@/components/common/Container";
import { rfqsData } from "../_data/featuredRfqs";

const FeaturedRfqs = () => {
  return (
    <section className="mt-14">
      <Container>
        <div className="mb-10">
          <SectionTitle
            label="Live  Opportunities"
            icon={Flame}
            title="Featured"
            titleHighlight="RFQ Listings"
            description="Review verified commercial sourcing requests from international buyers. Tailor your propositions and pitch bids instantly."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {rfqsData.map((rfq, index) => (
            <FeaturedRfqsCard key={rfq.id} rfq={rfq} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedRfqs;
