import type { LucideIcon } from "lucide-react";
import { Globe2, Handshake, PackageCheck, TrendingUp } from "lucide-react";

export type GlobalSupplyChainFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const globalSupplyChainFeatures: GlobalSupplyChainFeature[] = [
  {
    icon: Globe2,
    title: "Worldwide Supplier Network",
    description:
      "Access a curated network of verified apparel suppliers from major manufacturing hubs across Asia, Europe, and beyond — all in one place.",
  },
  {
    icon: PackageCheck,
    title: "End-to-End Order Tracking",
    description:
      "Monitor every stage of your order — from production and quality check to packaging and shipment — with real-time status updates.",
  },
  {
    icon: Handshake,
    title: "Trusted B2B Partnerships",
    description:
      "Every supplier on our platform is verified and rated by real buyers, ensuring you always work with reliable and professional partners.",
  },
  {
    icon: TrendingUp,
    title: "AI-Optimized Sourcing",
    description:
      "Our AI engine analyzes your RFQ and matches you with the best-fit suppliers globally, helping you save time and get competitive pricing.",
  },
];
