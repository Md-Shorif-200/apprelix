import type { Metadata } from "next";
import AboutPage from "@/modules/main/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Apprelix",
  description:
    "Learn about Apprelix — a complete B2B apparel sourcing ecosystem with AI-assisted matching, verified suppliers, and global supply chain tools.",
};

export default function About() {
  return <AboutPage />;
}
