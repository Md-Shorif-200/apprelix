import type { LucideIcon } from "lucide-react";
import { Bot, FileText, PackageSearch, ShieldCheck } from "lucide-react";

export type CompanyOverviewFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const companyOverviewFeatures: CompanyOverviewFeature[] = [
  {
    icon: FileText,
    title: "RFQ Management",
    description:
      "Buyers can easily create detailed sourcing requests and receive competitive quotations from verified suppliers.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Matching",
    description:
      "Our AI helps suggest the most suitable suppliers based on your requirements, budget, and delivery timeline.",
  },
  {
    icon: PackageSearch,
    title: "Production & Order Tracking",
    description:
      "Track every stage of production — from cutting to packaging — and monitor shipment status in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Supplier Network",
    description:
      "Every supplier goes through a verification process to ensure quality, reliability, and trust.",
  },
];
