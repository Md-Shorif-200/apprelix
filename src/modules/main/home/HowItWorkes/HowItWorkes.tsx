import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { FileText, Users, CheckCircle, Package, Flame } from "lucide-react";
import { getAosProps } from "@/lib/animations/aos";

// Step data array - easy to modify or add more steps
const steps = [
  {
    id: 1,
    icon: FileText,
    title: "Buyer Creates RFQ",
    description:
      "Buyer submits a Request for Quotation with product details, quantity, budget, and deadline.",
  },
  {
    id: 2,
    icon: Users,
    title: "Suppliers Submit Quotes",
    description:
      "Verified suppliers review the RFQ and submit their best quotations with pricing and delivery time.",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Buyer Selects Supplier",
    description:
      "Buyer compares all quotations side by side and selects the best supplier for their needs.",
  },
  {
    id: 4,
    icon: Package,
    title: "Production & Shipment",
    description:
      "Supplier manages production stages and updates shipment tracking in real time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="mt-14">
      <Container>
        {/* Section Header */}

        <div className="mb-10">
          <SectionTitle
            label="Simple Process"
            icon={Flame}
            title="How It"
            titleHighlight="Workes"
            description="From sourcing request to delivered order — streamlined B2B apparel sourcing"
            align="center"
          />
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                {...getAosProps("fade-up", index * 80)}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 motion-safe:hover:-translate-y-2 hover:shadow-xl hover:border-[#0d9488]/30"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d9488]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Step Number - top right */}
                <span className="absolute top-5 right-5 text-4xl font-black text-gray-100 group-hover:text-[#0d9488]/10 transition-colors duration-300 select-none">
                  0{step.id}
                </span>

                {/* Icon Box */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-[#0d9488]/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0d9488] motion-safe:group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#0d9488] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-semibold text-text mb-3 group-hover:text-[#0d9488] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0d9488] group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
