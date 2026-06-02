import CodeOfConduct from "@/modules/main/Footer/Legal/CodeOfConduct";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct | Apprelix",
  description:
    "Professional standards for buyers, suppliers, and admins on the Apprelix apparel sourcing platform.",
};

export default function CodeOfConductPage() {
  return <CodeOfConduct />;
}
