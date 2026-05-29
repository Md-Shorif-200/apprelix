"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import {
  ShieldCheck,
  KeyRound,
  Upload,
  Users,
  Lock,
  BadgeCheck,
} from "lucide-react";

// Security data (same system like HowItWorks steps)
const securityItems = [
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

  // ➕ NEW 2 FEATURES ADDED
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

const SecurityAndTrust = () => {
  return (
    <section className="mt-14 mb-20 ">
      <Container>
        {/* Section Header */}
        <div className="mb-10">
          <SectionTitle
            label="Security & Trust"
            icon={ShieldCheck}
            title="Enterprise Grade"
            titleHighlight="Security"
            description="Your data, users, and transactions are fully protected with modern security architecture"
            align="center"
          />
        </div>

        {/* Cards Grid (same as HowItWorks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0d9488]/30"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d9488]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Step Number Style (same as HowItWorks) */}
                <span className="absolute top-5 right-5 text-4xl font-black text-gray-100 group-hover:text-[#0d9488]/10 transition-colors duration-300 select-none">
                  0{item.id}
                </span>

                {/* Icon Box */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-[#0d9488]/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0d9488] group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#0d9488] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-semibold text-gray-800 mb-3 group-hover:text-[#0d9488] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Accent Line (same system) */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0d9488] group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SecurityAndTrust;