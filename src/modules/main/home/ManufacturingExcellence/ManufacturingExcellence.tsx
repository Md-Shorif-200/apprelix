// ManufacturingExcellence.tsx
import Image from "next/image";
import {
  Cpu,
  ShieldCheck,
  Users,
  ScanSearch,
  Workflow,
  Globe,
  Sparkles,
} from "lucide-react";
import Container from "@/components/common/Container";
import DarkModeSectionCard from "@/components/common/DarkModeSectionCard";

/* ─── Images ─────────────────────────────────── */
const img_1 = "/ManufacturingExcellence/img-1.webp";
const img_2 = "/ManufacturingExcellence/right-img-2.webp";

/* ─── Data ────────────────────────────────────── */
const manufacturingData = [
  {
    id: 1,
    title: "Advanced Factory Technology",
    description:
      "AI-assisted operations and automated machinery ensuring smarter, faster apparel production.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Premium Material Quality",
    description:
      "High-quality fabrics and sustainable sourcing aligned with international standards.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Skilled Workforce",
    description:
      "Experienced professionals delivering precision, consistency, and premium finishing.",
    icon: Users,
  },
  {
    id: 4,
    title: "AI Quality Inspection",
    description:
      "AI-powered systems detect defects and reduce production inconsistencies efficiently.",
    icon: ScanSearch,
  },
  {
    id: 5,
    title: "Efficient Production Workflow",
    description:
      "Real-time monitoring and optimized operations ensure faster, transparent turnaround.",
    icon: Workflow,
  },
  {
    id: 6,
    title: "Global Manufacturing Standards",
    description:
      "Certified facilities following ethical practices and export-quality compliance.",
    icon: Globe,
  },
];

/* ─── Stats Bar ───────────────────────────────── */
const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Quality Rate" },
];

/* ─── Component ───────────────────────────────── */
export const ManufacturingExcellence = () => {
  return (
    <section className="mt-14 mb-6">
      <Container>
        {/* ── Outer Wrapper ── */}
        <div
          className="
            relative
            w-full
            rounded-3xl
            overflow-hidden
            bg-gradient-to-br from-[#0F1F35] via-[#172C45] to-[#1a3a5c]
            border border-white/10
            shadow-2xl
          "
        >
          {/* ── Decorative Background Blobs ── */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Top-left blob */}
            <div
              className="
                absolute -top-24 -left-24
                w-72 h-72
                rounded-full
                bg-blue-600/15
                blur-3xl
              "
            />
            {/* Bottom-right blob */}
            <div
              className="
                absolute -bottom-24 -right-24
                w-80 h-80
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />
            {/* Center blob */}
            <div
              className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-96 h-96
                rounded-full
                bg-blue-500/5
                blur-3xl
              "
            />

            {/* Subtle dot-grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          {/* ── Inner Padding ── */}
          <div className="relative z-10 p-5 sm:p-8 xl:p-10">
            {/* ════ Two-Column Layout ════ */}
            <div className="xl:flex gap-10 items-stretch">
              {/* ── LEFT COLUMN ── */}
              <div className="xl:w-[38%] flex flex-col gap-5 mb-8 xl:mb-0">
                {/* Main Image */}
                <div
                  className="
                    relative
                    flex-1
                    min-h-72 md:min-h-96 xl:min-h-0
                    rounded-2xl
                    overflow-hidden
                    border border-white/10
                    shadow-xl
                  "
                >
                  <Image
                    src={img_1}
                    alt="Manufacturing Excellence"
                    fill
                    priority
                    quality={80}
                    className="object-cover"
                  />

                  {/* Dark gradient overlay on image */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t from-[#0F1F35]/80 via-transparent to-transparent
                    "
                  />

                  {/* Badge on image */}
                  <div
                    className="
                      absolute top-4 left-4
                      flex items-center gap-2
                      bg-white/10
                      backdrop-blur-md
                      border border-white/20
                      rounded-full
                      px-3 py-1.5
                    "
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/90 font-medium tracking-wide">
                      ISO Certified
                    </span>
                  </div>
                </div>

                {/* Stats Bar */}
                <div
                  className="
                    grid grid-cols-3
                    gap-3
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    p-4
                  "
                >
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p
                        className="
                          text-xl sm:text-2xl
                          font-bold
                          bg-gradient-to-r from-blue-300 to-cyan-300
                          bg-clip-text text-transparent
                        "
                      >
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-blue-200/60 mt-0.5 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT COLUMN ── */}
              <div className="xl:w-[62%] flex flex-col gap-6">
                {/* Section Header */}
                <div>
                  {/* Label pill */}
                  <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-4 py-1.5 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs font-semibold tracking-[0.15em] text-blue-300 uppercase">
                      Manufacturing Excellence
                    </span>
                  </div>

                  {/* Heading */}
                  <h2
                    className="
                      text-2xl sm:text-3xl
                      font-bold
                      text-white
                      leading-snug
                    "
                  >
                    Built for{" "}
                    <span
                      className="
                        bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400
                        bg-clip-text text-transparent
                      "
                    >
                      Real-World Impact
                    </span>
                  </h2>

                  {/* Sub-heading */}
                  <p className="text-sm text-blue-200/60 mt-2 max-w-lg leading-relaxed">
                    Precision-engineered production systems, skilled
                    craftsmanship, and cutting-edge technology — all under one
                    roof.
                  </p>
                </div>

                {/* ── Feature Cards + Bottom Image ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {/* Left card column: cards 1–4 */}
                  <div className="flex flex-col gap-3">
                    {manufacturingData.slice(0, 4).map((item, index) => (
                      <DarkModeSectionCard
                        key={item.id}
                        index={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                      />
                    ))}
                  </div>

                  {/* Right card column: cards 5–6 + image */}
                  <div className="flex flex-col gap-3">
                    {/* Cards 5 & 6 */}
                    {manufacturingData.slice(4, 6).map((item, index) => (
                      <DarkModeSectionCard
                        key={item.id}
                        index={index + 4}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                      />
                    ))}

                    {/* Bottom decorative image */}
                    <div
                      className="
                        relative
                        flex-1
                        min-h-44
                        rounded-2xl
                        overflow-hidden
                        border border-white/10
                        shadow-lg
                      "
                    >
                      <Image
                        src={img_2}
                        alt="Factory Floor"
                        fill
                        priority
                        quality={80}
                        className="object-cover"
                      />

                      {/* Overlay on bottom image */}
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-br from-[#172C45]/60 to-transparent
                        "
                      />

                      {/* Small label over image */}
                      <div
                        className="
                          absolute bottom-3 left-3
                          bg-white/10
                          backdrop-blur-md
                          border border-white/20
                          rounded-xl
                          px-3 py-2
                        "
                      >
                        <p className="text-[11px] font-semibold text-white/90 leading-tight">
                          State-of-the-Art
                        </p>
                        <p className="text-[10px] text-blue-200/70">
                          Production Floor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end grid */}
              </div>
              {/* end right column */}
            </div>
            {/* end two-column layout */}
          </div>
          {/* end inner padding */}
        </div>
        {/* end outer wrapper */}
      </Container>
    </section>
  );
};
