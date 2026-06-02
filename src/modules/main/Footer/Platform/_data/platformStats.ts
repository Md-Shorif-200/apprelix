import type { LucideIcon } from "lucide-react";
import { Award, Package, TrendingUp, Users } from "lucide-react";

export type PlatformStat = {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
};

export const platformStats: PlatformStat[] = [
  {
    id: 1,
    icon: Users,
    value: "15,000+",
    label: "Happy Buyers",
    description: "Businesses actively sourcing",
  },
  {
    id: 2,
    icon: Package,
    value: "50,000+",
    label: "Orders Completed",
    description: "Successful transactions made",
  },
  {
    id: 3,
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    description: "Industry leading performance",
  },
  {
    id: 4,
    icon: Award,
    value: "3,500+",
    label: "Verified Suppliers",
    description: "Trusted and vetted partners",
  },
];
