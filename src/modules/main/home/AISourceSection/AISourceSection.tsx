"use client";

import Image from "next/image";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/animations/MotionStagger";

const bg_img_1 = "/AISourceSection/bg_img_1.webp";

export default function AISourceSection() {
  return (
    <section className="relative mt-20 flex h-[450px] w-full items-center justify-center overflow-hidden">
      <Image
        src={bg_img_1}
        alt="AI-powered apparel sourcing background"
        fill
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/85 pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15" />

      <MotionStagger
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl"
        stagger={0.14}
      >
        <MotionStaggerItem>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Smart Sourcing, Powered by{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Intelligent Algorithms
            </span>
          </h2>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <p className="mt-6 text-base md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Eliminate months of supplier hunting. Our advanced AI matches your
            custom RFQs with the precise production capacity, machinery
            capability, and live pricing data of ideal manufacturers{" "}
            <span className="text-teal-300 font-medium">within minutes</span>.
          </p>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-16 h-1 rounded-full bg-teal-500/50" />
            <div className="w-4 h-1 rounded-full bg-cyan-500/50" />
            <div className="w-4 h-1 rounded-full bg-emerald-500/50" />
          </div>
        </MotionStaggerItem>
      </MotionStagger>
    </section>
  );
}
