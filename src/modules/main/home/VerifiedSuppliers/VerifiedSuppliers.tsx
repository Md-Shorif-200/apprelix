import Container from "@/components/common/Container";
import SupplierSlider from "./SupplierSlider";
import SectionTitle from "@/components/common/SectionTitle";
import { Flame } from "lucide-react";
import { TOP_SUPPLIERS } from "../_data/suppliers";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";

const VerifiedSuppliers = () => {
  return (
    <section className="mt-14">
      <Container>
        <div className="mb-10">
          <SectionTitle
            label=" Trust & Quality"
            icon={Flame}
            title="  Top Verified "
            titleHighlight="Suppliers"
            description="    Partner with globally certified manufacturers ensuring premium
            quality and compliance standards."
          />
        </div>

        <div {...getAosProps("fade-up", 100)}>
          <SupplierSlider suppliers={TOP_SUPPLIERS} />
        </div>
        <AosRefresh />
      </Container>
    </section>
  );
};

export default VerifiedSuppliers;
