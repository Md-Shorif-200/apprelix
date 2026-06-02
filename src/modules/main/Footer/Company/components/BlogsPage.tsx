import dynamic from "next/dynamic";
import Container from "@/components/common/Container";
import { AosRefresh } from "@/components/animations/AosRefresh";
import { LazySection } from "@/components/animations/LazySection";
import BlogsHero from "./blogs/BlogsHero";

const BuyerBlogsSection = dynamic(() => import("./blogs/BuyerBlogsSection"));
const SupplierBlogsSection = dynamic(
  () => import("./blogs/SupplierBlogsSection"),
);

const BlogsPage = () => (
  <main className="ds-section pb-16">
    <Container>
      <BlogsHero />

      <LazySection minHeight="520px">
        <BuyerBlogsSection />
      </LazySection>

      <LazySection minHeight="520px">
        <SupplierBlogsSection />
      </LazySection>

      <AosRefresh />
    </Container>
  </main>
);

export default BlogsPage;
