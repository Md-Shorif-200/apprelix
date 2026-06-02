import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export type AiFeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  tagClassName: string;
  iconClassName: string;
};

export const aiFeatureCards: AiFeatureCard[] = [
  {
    icon: Users,
    title: "Smart Supplier Matching",
    description:
      "Our AI analyzes buyer requirements — product type, quantity, budget, and deadline — then ranks the most suitable suppliers automatically.",
    tag: "For Buyers",
    tagClassName: "bg-ds-primary/10 text-ds-primary",
    iconClassName: "bg-ds-primary",
  },
  {
    icon: TrendingUp,
    title: "Price Estimation Engine",
    description:
      "Before submitting an RFQ, buyers receive an AI-generated price range based on historical orders, materials, and market data.",
    tag: "For Buyers",
    tagClassName: "bg-ds-primary/10 text-ds-primary",
    iconClassName: "bg-ds-primary",
  },
  {
    icon: Sparkles,
    title: "Smart RFQ Suggestions",
    description:
      "AI reviews your draft RFQ and suggests improvements — better descriptions, realistic budgets, and optimal deadlines — to attract quality suppliers.",
    tag: "For Buyers",
    tagClassName: "bg-ds-primary/10 text-ds-primary",
    iconClassName: "bg-ds-primary",
  },
  {
    icon: BarChart3,
    title: "Demand Prediction",
    description:
      "Suppliers get AI-driven forecasts about upcoming order trends in their product category, helping them prepare inventory and capacity in advance.",
    tag: "For Suppliers",
    tagClassName: "bg-ds-muted text-ds-muted-foreground",
    iconClassName: "bg-ds-foreground/80",
  },
  {
    icon: MessageSquareText,
    title: "AI Negotiation Assistant",
    description:
      "Get smart suggestions during price negotiation. The AI recommends counter-offers based on market benchmarks and previous deals.",
    tag: "Both",
    tagClassName: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
    iconClassName: "bg-purple-500",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Fraud Detection",
    description:
      "AI continuously monitors user behavior, flags suspicious RFQs, and assigns a real-time Trust Score to every buyer and supplier on the platform.",
    tag: "Platform",
    tagClassName: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
    iconClassName: "bg-orange-500",
  },
];

export const buyerBenefits = [
  "Auto-match top suppliers based on your RFQ requirements",
  "AI-estimated price range before posting",
  "Smart RFQ suggestions to improve response rate",
  "Fraud detection & supplier trust score",
] as const;

export const supplierBenefits = [
  "Get notified for RFQs that match your expertise",
  "AI-powered demand prediction for better planning",
  "Smart pricing insights based on market trends",
  "Performance analytics to grow your business",
] as const;
