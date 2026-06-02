import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MessageSquare,
  Package,
  Scissors,
  Search,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  Zap,
  Star,
} from "lucide-react";

export type ProcessStep = {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductionStage = {
  id: number;
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
};

export type BenefitItem = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const heroStats = [
  { icon: Clock, value: "3 Days", label: "Avg. Sourcing Time" },
  { icon: TrendingUp, value: "35%", label: "Cost Savings" },
  { icon: CheckCircle, value: "98%", label: "Success Rate" },
] as const;

export const buyerSteps: ProcessStep[] = [
  {
    id: 1,
    step: "Step 01",
    title: "Create Your RFQ",
    description:
      "Post a detailed Request for Quotation with product type, quantity, material, budget, and deadline. Upload reference images for better accuracy.",
    icon: BarChart3,
  },
  {
    id: 2,
    step: "Step 02",
    title: "AI Matches Suppliers",
    description:
      "Our intelligent algorithm instantly analyzes your RFQ and matches you with the most suitable verified suppliers from our global network.",
    icon: Search,
  },
  {
    id: 3,
    step: "Step 03",
    title: "Receive & Compare Quotes",
    description:
      "Get multiple competitive quotations from suppliers. Compare price, delivery time, and ratings side by side using our smart comparison table.",
    icon: BarChart3,
  },
  {
    id: 4,
    step: "Step 04",
    title: "Select & Confirm Order",
    description:
      "Choose the best supplier, negotiate through our built-in chat, finalize the deal, and confirm your order — all within the platform.",
    icon: CheckCircle,
  },
];

export const supplierSteps: ProcessStep[] = [
  {
    id: 1,
    step: "Step 01",
    title: "Get Verified & Listed",
    description:
      "Complete your supplier profile, upload company documents, and get verified by our team. Become a trusted supplier visible to global buyers.",
    icon: Users,
  },
  {
    id: 2,
    step: "Step 02",
    title: "Browse Matching RFQs",
    description:
      "Get notified of relevant RFQs that match your expertise. Filter by product category, budget, quantity, and region to find the best fits.",
    icon: Package,
  },
  {
    id: 3,
    step: "Step 03",
    title: "Submit Your Quotation",
    description:
      "Send a detailed quotation with your price, delivery timeline, and production notes. Communicate directly with buyers through our secure chat.",
    icon: MessageSquare,
  },
  {
    id: 4,
    step: "Step 04",
    title: "Manage & Deliver Orders",
    description:
      "Once selected, manage production stages digitally, update progress in real-time, and confirm shipment — all tracked on the platform.",
    icon: Package,
  },
];

export const productionStages: ProductionStage[] = [
  {
    id: 1,
    stage: "Stage 1",
    title: "Order Confirmed",
    description:
      "Buyer selects the supplier and confirms the order. Both parties receive instant notifications and the production clock starts.",
    icon: CheckCircle,
    duration: "Day 1",
  },
  {
    id: 2,
    stage: "Stage 2",
    title: "Fabric Cutting",
    description:
      "Raw materials are sourced and fabric cutting begins. Supplier updates the cutting progress percentage on the platform dashboard.",
    icon: Scissors,
    duration: "Day 2–4",
  },
  {
    id: 3,
    stage: "Stage 3",
    title: "Stitching & Assembly",
    description:
      "Pieces are stitched and assembled by skilled workers. Live updates keep the buyer informed about daily production output.",
    icon: Zap,
    duration: "Day 5–12",
  },
  {
    id: 4,
    stage: "Stage 4",
    title: "Quality Check",
    description:
      "Finished products go through strict quality inspection. Any issues are flagged and resolved before moving to packaging.",
    icon: ShieldCheck,
    duration: "Day 13–14",
  },
  {
    id: 5,
    stage: "Stage 5",
    title: "Packaging",
    description:
      "Products are professionally packed as per buyer specifications — labels, tags, folding style, and box quantity all confirmed.",
    icon: Package,
    duration: "Day 15",
  },
  {
    id: 6,
    stage: "Stage 6",
    title: "Shipment & Delivery",
    description:
      "Packaged goods are handed to the logistics partner. The buyer receives the tracking number and can follow the shipment in real-time.",
    icon: Truck,
    duration: "Day 16–21",
  },
];

export const buyerBenefits: BenefitItem[] = [
  {
    id: 1,
    icon: Clock,
    title: "Save Time",
    description:
      "Reduce sourcing time from 3 weeks to just 3 days with AI matching and instant quotations.",
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Save Money",
    description:
      "Compare multiple quotes and save up to 35% on sourcing costs through competitive bidding.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Verified Suppliers",
    description:
      "Every supplier is thoroughly verified, rated, and reviewed. Zero risk of fraud or low quality.",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Full Transparency",
    description:
      "Track every production stage in real-time. Always know exactly where your order stands.",
  },
];

export const supplierBenefits: BenefitItem[] = [
  {
    id: 1,
    icon: Globe,
    title: "Global Reach",
    description:
      "Get discovered by buyers from 60+ countries. Expand your market without expensive marketing.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "3x Order Growth",
    description:
      "Suppliers on our platform see an average 3x growth in international orders within 6 months.",
  },
  {
    id: 3,
    icon: Star,
    title: "Build Your Reputation",
    description:
      "Earn ratings and reviews from buyers. A strong profile attracts premium clients automatically.",
  },
  {
    id: 4,
    icon: Users,
    title: "Direct Communication",
    description:
      "Chat directly with buyers, share files, and negotiate deals without any middlemen involved.",
  },
];

export const HOW_IT_WORKS_IMAGES = {
  hero: "/about/about-img-1.webp",
  tracking: "/banner/img-3.webp",
  cta: "/banner/img-5.webp",
} as const;
