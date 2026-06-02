import type { LucideIcon } from "lucide-react";
import { Clock, CircleDollarSign, Truck, TrendingUp } from "lucide-react";

export type SuccessStoryOverviewFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const successStoryOverviewFeatures: SuccessStoryOverviewFeature[] = [
  {
    icon: Clock,
    title: "Faster Sourcing",
    description:
      "Reduced average sourcing time from 3 weeks to 3 days with streamlined RFQ workflows.",
  },
  {
    icon: CircleDollarSign,
    title: "Lower Costs",
    description:
      "Buyers save an average of 35% on sourcing costs through competitive supplier matching.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "99.2% on-time delivery rate across all orders with real-time production tracking.",
  },
  {
    icon: TrendingUp,
    title: "Supplier Growth",
    description:
      "Suppliers see 3x growth in international orders through our verified global network.",
  },
];
