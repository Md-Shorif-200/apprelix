import type { LucideIcon } from "lucide-react";
import { Award, Package, TrendingUp, Users } from "lucide-react";

export type AchievementItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
};

export const achievementItems: AchievementItem[] = [
  {
    id: 1,
    title: "AI-Powered Matching",
    description:
      "Our intelligent algorithm matches buyers with the most suitable suppliers based on product type, budget, quality standards, and delivery requirements — saving hours of manual research.",
    icon: TrendingUp,
    iconClassName: "text-ds-primary",
  },
  {
    id: 2,
    title: "Global Supplier Network",
    description:
      "Access to 3,500+ verified suppliers across 40+ countries. Every supplier is thoroughly verified, rated, and reviewed by real buyers to ensure quality and reliability.",
    icon: Users,
    iconClassName: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: 3,
    title: "End-to-End Tracking",
    description:
      "From RFQ creation to final delivery, track every step of your order — cutting, stitching, quality check, packaging, and shipment — all in one place.",
    icon: Package,
    iconClassName: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 4,
    title: "Award-Winning Platform",
    description:
      "Recognized as the Best B2B Sourcing Platform of 2024 by Global Fashion Tech Awards. Trusted by leading brands across 60+ countries worldwide.",
    icon: Award,
    iconClassName: "text-amber-600 dark:text-amber-400",
  },
];
