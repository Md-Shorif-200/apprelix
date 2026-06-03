import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Bot,
  FileCheck,
  Handshake,
  Key,
  Link2,
  Mail,
  Shield,
  Smartphone,
  Upload,
  Zap,
} from "lucide-react";

export type SecurityFeature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type NotificationPreview = {
  id: string;
  iconClassName: string;
  time: string;
  message: string;
  tag: string;
  tagClassName: string;
};

export type NotificationChannel = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type RoadmapPhase = {
  id: string;
  phase: string;
  status: string;
  statusClassName: string;
  borderClassName: string;
  checkClassName: string;
  title: string;
  description: string;
  items: string[];
};

export type UpcomingFeature = {
  id: string;
  icon: LucideIcon;
  title: string;
  detail: string;
};

export const securityFeatures: SecurityFeature[] = [
  {
    id: "jwt",
    icon: Key,
    title: "JWT Authentication",
    description:
      "Every user session is protected with JSON Web Tokens, ensuring secure and verified access across the entire platform.",
  },
  {
    id: "rbac",
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Buyers, Suppliers, and Admins each have strictly defined permissions. No user can access data outside their role.",
  },
  {
    id: "verification",
    icon: FileCheck,
    title: "Supplier Verification System",
    description:
      "All suppliers go through a document verification and admin approval process before accessing the platform.",
  },
  {
    id: "uploads",
    icon: Upload,
    title: "Secure File Uploads",
    description:
      "All uploaded files — images, documents, attachments — are scanned and stored with enterprise-grade security protocols.",
  },
];

export const trustBadges = [
  "SSL Encrypted",
  "GDPR Ready",
  "ISO Aligned",
] as const;

export const notificationChannels: NotificationChannel[] = [
  {
    id: "email",
    icon: Mail,
    title: "Email Notifications",
    description:
      "Get detailed updates on RFQs, quotations, and order status directly to your inbox.",
  },
  {
    id: "in-app",
    icon: Bell,
    title: "In-App Notifications",
    description:
      "Stay informed with instant alerts inside the dashboard without leaving the platform.",
  },
  {
    id: "realtime",
    icon: Zap,
    title: "Real-Time Alerts",
    description:
      "Critical updates like production changes and shipment dispatch are pushed instantly.",
  },
];

export const notificationStats = [
  { value: "< 1s", label: "Alert Speed" },
  { value: "3x", label: "Channels" },
  { value: "99.9%", label: "Delivery Rate" },
] as const;

export const notificationPreviews: NotificationPreview[] = [
  {
    id: "rfq",
    iconClassName: "text-ds-primary",
    time: "Just now",
    message: "Your RFQ #1042 received a new quotation from SupplierCo.",
    tag: "RFQ Update",
    tagClassName: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  {
    id: "production",
    iconClassName: "text-orange-500 dark:text-orange-400",
    time: "2 min ago",
    message: "Production stage updated: Order #8821 has moved to 'Stitching'.",
    tag: "Production",
    tagClassName: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  },
  {
    id: "account",
    iconClassName: "text-ds-primary",
    time: "10 min ago",
    message: "Your account has been verified. You can now submit quotations.",
    tag: "Account",
    tagClassName: "bg-ds-primary/10 text-ds-primary",
  },
  {
    id: "shipment",
    iconClassName: "text-purple-600 dark:text-purple-400",
    time: "1 hr ago",
    message: "Shipment dispatched for Order #3345. Tracking ID: BD8823X.",
    tag: "Shipment",
    tagClassName: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    status: "Live",
    statusClassName: "bg-ds-primary/15 text-ds-primary",
    borderClassName: "border-ds-primary/30",
    checkClassName: "text-ds-primary",
    title: "Core Platform",
    description:
      "RFQ management, supplier quotations, real-time chat, production tracking, and admin controls.",
    items: ["RFQ System", "Supplier Matching", "Order Tracking", "Admin Panel"],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    status: "In Progress",
    statusClassName: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    borderClassName: "border-blue-500/30",
    checkClassName: "text-blue-500 dark:text-blue-400",
    title: "AI & Mobile",
    description:
      "Launching the mobile app and expanding AI capabilities for smarter sourcing decisions.",
    items: [
      "Mobile App (React Native)",
      "AI Chatbot Assistant",
      "Price Estimation Engine",
      "Demand Prediction",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    status: "Coming Soon",
    statusClassName: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    borderClassName: "border-orange-500/30",
    checkClassName: "text-orange-500 dark:text-orange-400",
    title: "Advanced Automation",
    description:
      "Next-generation features for fully automated and trustless supply chain management.",
    items: [
      "Auto Negotiation System",
      "Blockchain Supply Chain",
      "Smart Contracts",
      "Global Compliance Tools",
    ],
  },
];

export const upcomingFeatures: UpcomingFeature[] = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App",
    detail: "React Native",
  },
  { id: "ai", icon: Bot, title: "AI Chatbot", detail: "Smart Assistant" },
  {
    id: "negotiation",
    icon: Handshake,
    title: "Auto Negotiation",
    detail: "AI-Powered",
  },
  {
    id: "blockchain",
    icon: Link2,
    title: "Blockchain",
    detail: "Supply Chain",
  },
];
