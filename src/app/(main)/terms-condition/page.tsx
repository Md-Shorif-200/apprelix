import TermsCondition from "@/modules/main/Footer/Legal/TermsCondition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Apprelix",
  description:
    "Read the platform usage agreement for buyers, suppliers, and admins on the Apprelix B2B apparel sourcing ecosystem.",
};

export default function TermsPage() {
  return <TermsCondition />;
}
