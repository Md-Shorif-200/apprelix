// RegistrationContentTab.tsx
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
  { id: "buyer", label: "I'm a Buyer", icon: ShoppingBag },
  { id: "supplier", label: "I'm a Supplier", icon: Factory },
];

const buyerFeatures = [
  {
    icon: FileText,
    title: "Create RFQs",
    description: "Post sourcing requests with specs & budget",
  },
  {
    icon: GitCompare,
    title: "Compare Quotations",
    description: "View supplier quotes side by side",
  },
  {
    icon: CheckCircle,
    title: "Accept or Reject Quotes",
    description: "Full control to approve or decline offers",
  },
  {
    icon: PackageSearch,
    title: "Track Orders",
    description: "Monitor production and shipment live",
  },
  {
    icon: MessageSquare,
    title: "Chat with Suppliers",
    description: "Direct messaging with file sharing",
  },
];

const supplierFeatures = [
  {
    icon: ClipboardList,
    title: "Browse RFQs",
    description: "Filter buyer RFQs by category & budget",
  },
  {
    icon: Send,
    title: "Submit Quotations",
    description: "Send quotes with price, time & notes",
  },
  {
    icon: Layers,
    title: "Manage Production",
    description: "Track: Cutting, Stitching, QC & Packaging",
  },
  {
    icon: Truck,
    title: "Update Shipment",
    description: "Keep buyers informed in real-time",
  },
  {
    icon: MessageSquare,
    title: "Chat with Buyers",
    description: "Communicate directly through platform",
  },
];

const RegistrationContentTab = () => {
  const [activeTab, setActiveTab] = useState<TabType>("buyer");

  const features = activeTab === "buyer" ? buyerFeatures : supplierFeatures;

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 border border-white/10 p-1 rounded-xl w-fit">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                    : "text-teal-200/70 hover:text-white"
                }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Section Label */}
      <p className="text-teal-400 font-semibold text-xs mb-4 uppercase tracking-widest">
        {activeTab === "buyer"
          ? "✦ What you can do as a Buyer"
          : "✦ What you can do as a Supplier"}
      </p>

      {/* Feature Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <li
              key={index}
              className="group flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 rounded-xl px-4 py-3 transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="mt-0.5 p-2 bg-teal-500/20 group-hover:bg-teal-500/30 border border-teal-400/20 rounded-lg shrink-0 transition-all duration-300">
                <Icon className="w-3.5 h-3.5 text-teal-400" />
              </div>

              {/* Text */}
              <div>
                <p className="text-white text-sm font-semibold">
                  {feature.title}
                </p>
                <p className="text-teal-100/50 text-xs mt-0.5 leading-relaxed">
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
