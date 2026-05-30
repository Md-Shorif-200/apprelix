import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  KeyRound,
  Lock,
  ShieldCheck,
  Upload,
  Users,
} from "lucide-react";

export type SecurityItem = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const securityItems: SecurityItem[] = [
  {
    id: 1,
    icon: KeyRound,
    title: "JWT Authentication",
    description:
      "Secure token-based authentication ensures safe login and session management for all users.",
  },
  {
    id: 2,
    icon: Users,
    title: "Role-Based Access",
    description:
      "Separate permissions for Buyer, Supplier, and Admin to protect sensitive data and actions.",
  },
  {
    id: 3,
    icon: Upload,
    title: "Secure File Upload",
    description:
      "All uploaded files are validated and securely stored with encryption support.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Verified Suppliers",
    description:
      "Only approved and verified suppliers can participate in RFQ and quotation system.",
  },
  {
    id: 5,
    icon: Lock,
    title: "Data Protection",
    description:
      "End-to-end protection ensures all business data remains safe and private.",
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Secure Transactions",
    description:
      "All system operations are protected with advanced security layers and monitoring.",
  },
  {
    id: 7,
    icon: ShieldCheck,
    title: "Fraud Detection System",
    description:
      "AI-powered monitoring system detects suspicious activities and prevents fraudulent RFQs or suppliers.",
  },
  {
    id: 8,
    icon: Lock,
    title: "Encrypted Communication",
    description:
      "All chat messages and file exchanges between buyer and supplier are fully encrypted end-to-end.",
  },
];
