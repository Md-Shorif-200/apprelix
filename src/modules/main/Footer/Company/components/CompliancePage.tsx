import dynamic from "next/dynamic";
import Container from "@/components/common/Container";
import { AosRefresh } from "@/components/animations/AosRefresh";


const SecuritySection = dynamic(() => import("./compliance/SecuritySection"));
const NotificationSection = dynamic(
  () => import("./compliance/NotificationSection"),
);
const FutureSection = dynamic(() => import("./compliance/FutureSection"));

const CompliancePage = () => (
  <main className="ds-section pb-16">
    <Container>
      <div className="mt-14">
        <SecuritySection />
      </div>

        <NotificationSection />
    

        <FutureSection />
     

      <AosRefresh />
    </Container>
  </main>
);

export default CompliancePage;
