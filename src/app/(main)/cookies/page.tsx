import CookiePolicy from "@/modules/main/Footer/Legal/CookiePolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Apprelix",
  description:
    "Understand how Apprelix uses cookies for authentication, preferences, analytics, and platform performance.",
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
