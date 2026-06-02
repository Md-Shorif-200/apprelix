import SectionTitle from "@/components/common/SectionTitle";
import { Factory } from "lucide-react";
import BlogCard from "./BlogCard";
import { supplierBlogs } from "./_data/blogsData";

const SupplierBlogsSection = () => (
  <section className="mt-20 pb-4 [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
    <div className="mb-10">
      <SectionTitle
        label="For Suppliers"
        icon={Factory}
        title="Supplier Growth &"
        titleHighlight="Production Insights"
        description="Actionable tips for suppliers to win more contracts, manage production efficiently, and grow revenue on the platform."
        aosAnimation="fade-up"
      />
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {supplierBlogs.map((card, index) => (
        <BlogCard key={card.id} card={card} index={index} />
      ))}
    </div>
  </section>
);

export default SupplierBlogsSection;
