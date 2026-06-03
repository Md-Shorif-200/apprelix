"use client";

import { useState } from "react";
import {
  HelpCircle,
  Zap,
  Shield,
  Users,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Flame,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/common/Container";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";

/* ───────── Types ───────── */
type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type AccordionItemProps = {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

/* ───────── Data ───────── */
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does the AI supplier matching work?",
    answer:
      "Our AI analyzes your RFQ details — including product type, quantity, budget, and deadline — then automatically matches you with the most suitable verified suppliers based on ratings, past performance, and specialization.",
  },
  {
    id: 2,
    question: "How do I create my first RFQ as a buyer?",
    answer:
      "Register as a buyer, go to your dashboard, and click Create RFQ. Fill in product details like type, quantity, material, budget, and deadline. Once submitted, verified suppliers will start sending quotations within hours.",
  },
  {
    id: 3,
    question: "How are suppliers verified on the platform?",
    answer:
      "Every supplier goes through a multi-step verification process. They must submit business documents, certifications, and production capacity details. Our admin team reviews and approves each supplier before they can respond to any RFQs.",
  },
  {
    id: 4,
    question: "Can I track my order production in real time?",
    answer:
      "Yes. Once an order is confirmed, you can track every production stage — from cutting and stitching to quality check and packaging. Suppliers update each stage in real time and you receive instant notifications.",
  },
  {
    id: 5,
    question: "Is my business data and communication secure?",
    answer:
      "Absolutely. We use JWT-based authentication, role-based access control, and encrypted file uploads to keep your data safe. All communication is secured and accessible only to authorized users.",
  },
];

const features: Feature[] = [
  {
    icon: <Zap size={18} className="text-ds-primary" />,
    title: "AI-Powered Matching",
    desc: "Smart algorithms match you instantly.",
  },
  {
    icon: <Shield size={18} className="text-ds-primary" />,
    title: "Verified Suppliers",
    desc: "Every supplier is admin-approved.",
  },
  {
    icon: <Users size={18} className="text-ds-primary" />,
    title: "Multi-Role Access",
    desc: "Dashboards for Buyers, Suppliers & Admins.",
  },
];

/* ───────── Accordion Item ───────── */
function AccordionItem({ item, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div
      // {...getAosProps("fade-up", index * 60)}
      className={`group overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border border-ds-primary/30 bg-ds-card shadow-lg shadow-ds-primary/10"
          : "border border-ds-border bg-ds-card shadow-sm hover:border-ds-primary/30 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200"
      >
        {/* Number + Question */}
        <div className="flex items-center gap-4 pr-4">
          <span
            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-black transition-all duration-300 ${
              isOpen
                ? "bg-ds-primary/15 text-ds-primary"
                : "bg-ds-primary/10 text-ds-primary"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
              isOpen ? "text-ds-text" : "text-ds-text"
            }`}
          >
            {item.question}
          </span>
        </div>

        {/* Chevron */}
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            isOpen ? "rotate-180 bg-ds-primary/15" : "bg-ds-primary/10"
          }`}
        >
          <ChevronDown
            size={15}
            className={`transition-colors duration-300 ${
              isOpen ? "text-ds-primary" : "text-ds-muted-foreground"
            }`}
          />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-0 pl-[4.5rem]">
          <p className="text-sm leading-relaxed text-ds-muted-foreground">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────── Main Section ───────── */
export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-ds-background pt-10 mt-14 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ds-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ds-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <Container>
        <div className="mb-10">
          <SectionTitle
            label="FAQ"
            icon={Flame}
            title="  Frequently Asked"
            titleHighlight=" Questions"
            description=" Everything you need to know about our B2B apparel sourcing platform."
          />
        </div>

        {/* ── Two Column Layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* ── LEFT ── */}
          <div className="w-full lg:w-[38%] flex flex-col gap-5">
            {/* Info Card */}
            <div
              {...getAosProps("fade-right", 0)}
              className="relative bg-gradient-to-br from-ds-primary to-ds-accent rounded-2xl p-7 text-ds-primary-foreground overflow-hidden shadow-lg shadow-ds-primary/20"
            >
              {/* Decorative ring */}
              <div className="absolute -top-6 -right-6 w-28 h-28 border-4 border-white/10 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-white/10 rounded-full" />

              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 bg-cyan-100">
                <HelpCircle size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-extrabold mb-2 leading-tight">
                Got Questions?
                <br />
                We&apos;ve Got Answers.
              </h3>
              <p className="text-ds-primary-foreground/80 text-sm leading-relaxed">
                Our platform simplifies global apparel sourcing — connecting
                buyers with verified manufacturers, fast and transparently.
              </p>
            </div>

            {/* Features */}
            <div
              {...getAosProps("fade-right", 80)}
              className="ds-card p-5 space-y-3"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-ds-primary/5 transition-colors duration-200 group cursor-default"
                >
                  <div className="w-9 h-9 bg-ds-primary/10 group-hover:bg-ds-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-ds-text leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-ds-muted-foreground mt-0.5 truncate">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Support CTA */}
            <div
              {...getAosProps("fade-right", 160)}
              className="ds-card p-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 bg-ds-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-ds-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ds-text">
                  Still have questions?
                </p>
                <p className="text-xs text-ds-muted-foreground">
                  Support is 24/7 available.
                </p>
              </div>
              <button className="flex items-center gap-1.5 bg-gradient-to-r from-ds-primary to-ds-accent text-ds-primary-foreground text-xs font-bold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity duration-200 flex-shrink-0 shadow-md shadow-ds-primary/20">
                Chat
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="w-full lg:w-[62%] flex flex-col gap-3">
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
        <AosRefresh />
      </Container>
    </section>
  );
}
