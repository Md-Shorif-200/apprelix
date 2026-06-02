import SectionTitle from "@/components/common/SectionTitle";
import { getAosProps } from "@/lib/animations/aos";
import ClientReviewsCard from "@/modules/common/ClientReviewsCard";
import { testimonials } from "@/modules/main/home/_data/testimonials";
import { Flame } from "lucide-react";

const ClientReviews = () => (
  <div>
    <div className="mb-10">
      <SectionTitle
        label="Client Reviews"
        icon={Flame}
        title="What Our"
        titleHighlight="Clients Say"
        description="Trusted by thousands of buyers and suppliers across the globe. Here is what they have to say about us."
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {testimonials.map((item, cardIndex) => (
        <div key={item.id} {...getAosProps("fade-up", cardIndex * 60)}>
          <ClientReviewsCard item={item} cardIndex={cardIndex} />
        </div>
      ))}
    </div>
  </div>
);

export default ClientReviews;
