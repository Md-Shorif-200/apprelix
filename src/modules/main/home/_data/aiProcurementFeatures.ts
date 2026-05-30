import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Handshake,
  Layers3,
  TrendingUp,
  ScanSearch,
} from "lucide-react";

export type AiFeature = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  className?: string;
};

export const aiFeatures: AiFeature[] = [
  {
    id: 1,
    title: "Smart Supplier Matching",
    description:
      "AI connects buyers with the most suitable manufacturing partners based on production capability and sourcing requirements.",
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=75&w=800&auto=format&fit=crop",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    title: "AI Price Estimation",
    description:
      "Get intelligent pricing insights using market demand, materials, and production data.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Automated Workflow",
    description:
      "Streamline procurement operations through AI-powered workflow automation.",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Decision Intelligence",
    description:
      "Real-time analytics help businesses make smarter sourcing decisions faster.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Demand Forecasting",
    description:
      "Predict sourcing trends and production demand using intelligent data analysis and forecasting systems.",
    icon: ScanSearch,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=75&w=800&auto=format&fit=crop",
    className: "sm:col-span-2",
  },
];
