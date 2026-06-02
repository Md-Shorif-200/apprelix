"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Factory,
  FileText,
  GitCompare,
  CheckCircle,
  PackageSearch,
  MessageSquare,
  ClipboardList,
  Send,
  Layers,
  Truck,
} from "lucide-react";

type TabType = "buyer" | "supplier";

const tabs = [
  {
    id: "buyer",
    label: "Buyer",
    icon: ShoppingBag,
  },
  {
    id: "supplier",
    label: "Supplier",
    icon: Factory,
  },
];

const buyerFeatures = [
  {
    icon: FileText,
    title: "Create RFQs",
    description: "Post detailed sourcing requests with specs & budget",
  },
  {
    icon: GitCompare,
    title: "Compare Quotations",
    description: "View and compare multiple supplier quotes side by side",
  },
  {
    icon: CheckCircle,
    title: "Accept or Reject Quotes",
    description: "Full control to approve or decline supplier offers",
  },
  {
    icon: PackageSearch,
    title: "Track Orders",
    description: "Monitor production stages and shipment in real-time",
  },
  {
    icon: MessageSquare,
    title: "Chat with Suppliers",
    description: "Direct messaging with file sharing support",
  },
];

const supplierFeatures = [
  {
    icon: ClipboardList,
    title: "Browse RFQs",
    description: "Access all buyer RFQs filtered by category and budget",
  },
  {
    icon: Send,
    title: "Submit Quotations",
    description: "Send competitive quotes with price, time & notes",
  },
  {
    icon: Layers,
    title: "Manage Production",
    description: "Track stages: Cutting, Stitching, QC & Packaging",
  },
  {
    icon: Truck,
    title: "Update Shipment Status",
    description: "Keep buyers informed with real-time shipment updates",
  },
  {
    icon: MessageSquare,
    title: "Chat with Buyers",
    description: "Communicate directly with buyers through the platform",
  },
];

const RegistrationContentTab = () => {
  const [activeTab, setActiveTab] = useState<TabType>("buyer");

  const features =
    activeTab === "buyer" ? buyerFeatures : supplierFeatures;

  const heading =
    activeTab === "buyer"
      ? "What you can do as a Buyer"
      : "What you can do as a Supplier";

  return (
    <div className="w-full max-w-md">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              style={
                isActive
                  ? { backgroundColor: "#0d9488" }
                  : {}
              }
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Heading */}
      <p className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
        {heading}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <li
              key={index}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/15"
            >
              <div
                className="mt-0.5 p-1.5 rounded-md shrink-0"
                style={{ backgroundColor: "#0d9488" }}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>

              <div>
                <p className="text-white text-sm font-semibold">
                  {feature.title}
                </p>

                <p className="text-gray-400 text-xs mt-0.5">
                  {feature.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RegistrationContentTab;