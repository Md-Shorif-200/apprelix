"use client";

import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";
import { getAosProps } from "@/lib/animations/aos";
import { supplierBenefits } from "../_data/aiFeatureCards";
import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const SUPPLIER_IMAGE = "/banner/img-4.webp";

const SupplierAISection = () => (
  <section className="py-10">
    <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
      <MotionReveal className="relative w-full lg:w-1/2" direction="left">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={SUPPLIER_IMAGE}
            alt="Supplier AI Dashboard"
            fill
            quality={75}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-ds-foreground/55 via-transparent to-transparent" />

          <div
            {...getAosProps("zoom-in", 120)}
            className="absolute top-5 left-5 min-w-[170px] space-y-1 rounded-xl border border-ds-border bg-ds-card p-4 shadow-lg"
          >
            <p className="text-xs font-medium text-ds-muted-foreground">
              Demand Forecast — Next Month
            </p>
            <p className="text-xl font-extrabold text-ds-text">+34%</p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ds-muted">
              <div className="h-full w-[68%] rounded-full bg-ds-primary" />
            </div>
            <p className="text-xs font-medium text-ds-primary">T-Shirt Category</p>
          </div>

          <div
            {...getAosProps("fade-left", 200)}
            className="absolute right-5 bottom-5 rounded-full bg-ds-foreground px-3 py-1.5 text-xs font-semibold text-ds-background shadow"
          >
            ✦ AI Demand Engine
          </div>
        </div>

        <div
          aria-hidden
          className="absolute -top-6 -right-6 -z-10 h-40 w-40 rounded-full bg-ds-muted opacity-70 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-ds-primary/20 opacity-60 blur-2xl"
        />
      </MotionReveal>

      <MotionStagger
        className="w-full space-y-6 lg:w-1/2"
        stagger={0.08}
        delay={0.05}
      >
        <MotionStaggerItem>
          <span className="ds-badge">
            <BarChart3 className="h-4 w-4" />
            For Suppliers
          </span>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <h2 className="text-2xl leading-tight font-bold text-ds-text md:text-3xl">
            AI Helps Suppliers{" "}
            <span className="text-ds-primary">Win More Orders</span> & Grow Faster
          </h2>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="text-sm leading-relaxed text-ds-muted-foreground md:text-base">
            As a supplier, you no longer need to manually search for relevant
            orders. Our AI engine automatically surfaces the most relevant RFQs,
            predicts future demand, and helps you price competitively.
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="space-y-3" {...getAosProps("fade-up", 80)}>
            <p className="text-sm font-semibold tracking-wider text-ds-muted-foreground uppercase">
              AI Advantages for Suppliers
            </p>
            <ul className="space-y-2">
              {supplierBenefits.map((item, index) => (
                <li
                  key={item}
                  {...getAosProps("fade-right", index * 60)}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-ds-primary" />
                  <span className="text-sm text-ds-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ds-primary px-6 py-3 font-semibold text-ds-primary-foreground shadow-md shadow-ds-primary/20 transition-colors duration-200 hover:bg-ds-primary/90"
            >
              Join as Supplier
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ds-border px-6 py-3 font-semibold text-ds-text transition-colors duration-200 hover:border-ds-primary hover:text-ds-primary"
            >
              View Dashboard Demo
            </button>
          </div>
        </MotionStaggerItem>
      </MotionStagger>
    </div>
  </section>
);

export default SupplierAISection;
