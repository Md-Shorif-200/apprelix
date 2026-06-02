import Privacy from "@/modules/main/Footer/Legal/Privacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Apprelix",
  description:
    "Learn how Apprelix collects, uses, and protects your data on our AI-powered B2B apparel sourcing platform.",
};

export default function PrivacyPage() {
  return <Privacy />;
}
