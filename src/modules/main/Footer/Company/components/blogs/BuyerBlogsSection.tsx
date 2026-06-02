import SectionTitle from "@/components/common/SectionTitle";
import { ShoppingBag } from "lucide-react";
import BlogCard from "./BlogCard";
import { buyerBlogs } from "./_data/blogsData";

const BuyerBlogsSection = () => (
  <section className="mt-20 [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
    <div className="mb-10">
      <SectionTitle
        label="For Buyers"
        icon={ShoppingBag}
        title="Sourcing Tips &"
        titleHighlight="Buyer Guides"
        description="Practical guides to help buyers source smarter — from writing RFQs to tracking production and building supplier relationships."
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {buyerBlogs.map((card, index) => (
        <BlogCard key={card.id} card={card} index={index} />
      ))}
    </div>
  </section>
);

export default BuyerBlogsSection;
