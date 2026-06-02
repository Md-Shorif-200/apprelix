import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export type ContactCardItem = {
  icon: LucideIcon;
  title: string;
  detail: string;
  sub: string;
};

export type BusinessHourRow = {
  day: string;
  time: string;
  closed: boolean;
};

export const contactCards: ContactCardItem[] = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@apparelsource.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (800) 123-4567",
    sub: "Mon - Fri, 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Fashion Street, NY",
    sub: "New York, USA 10001",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    detail: "Available on Dashboard",
    sub: "For registered users",
  },
];

export const businessHours: BusinessHourRow[] = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM", closed: false },
  { day: "Saturday", time: "10:00 AM – 2:00 PM", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

export const whyItems = [
  "Get help with RFQ creation & management",
  "Supplier verification & onboarding support",
  "Platform features & technical assistance",
  "Billing, orders, and account inquiries",
  "Partnership & enterprise solutions",
] as const;

export const ROLE_OPTIONS = [
  { value: "buyer", label: "Buyer" },
  { value: "supplier", label: "Supplier" },
  { value: "other", label: "Other" },
] as const;
