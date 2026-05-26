import Image from "next/image";

import {
  Factory,
  Cpu,
  ShieldCheck,
  Users,
  ScanSearch,
  Workflow,
  Globe,
  BookCopy,
} from "lucide-react";
import Container from "@/components/common/Container";
import DarkModeSectionCard from "@/components/common/DarkModeSectionCard";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
}

const img_1 = "/ManufacturingExcellence/img-1.jpg";
const img_2 = "/ManufacturingExcellence/img-4.jpg";
const img_3 = "/ManufacturingExcellence/img-4.jpg";

const manufacturingData = [
  {
    id: 1,
    title: "Advanced Factory Technology",
    description:
      "AI-assisted operations, automated machinery, and digital manufacturing systems ensuring smarter and faster apparel production.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Premium Material Quality",
    description:
      "High-quality fabrics, durable materials, and sustainable sourcing aligned with international manufacturing standards.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Skilled Workforce",
    description:
      "Experienced garment professionals and expert craftsmanship delivering precision, consistency, and premium finishing.",
    icon: Users,
  },
  {
    id: 4,
    title: "AI Quality Inspection",
    description:
      "AI-powered quality control systems detect defects, monitor precision, and reduce production inconsistencies efficiently.",
    icon: ScanSearch,
  },
  {
    id: 5,
    title: "Efficient Production Workflow",
    description:
      "Organized workflows, real-time monitoring, and optimized operations ensure faster turnaround and production transparency.",
    icon: Workflow,
  },
  {
    id: 6,
    title: "Global Manufacturing Standards",
    description:
      "Certified production facilities following ethical practices and export-quality international compliance standards.",
    icon: Globe,
  },
];

export const ManufacturingExcellence = () => {
  return (
    <main className="mt-14">
      <Container>
        <div className="w-full h-full xl:h-175 bg-[#172C45] rounded-md px-2 sm:px-6 py-2 sm:py-8 xl:flex gap-6">
          {/* Left Image */}
          <section className="xl:w-[40%] relative h-80 md:h-100 lg:h-130 xl:h-full  rounded-xl overflow-hidden mb-8 xl:mb-0">
            <Image
              src={img_1}
              alt="Why Choose AMYRAH"
              fill
              priority
              className="object-cover"
            />
          </section>

          {/* Right Content */}
          <section className="xl:w-[60%] h-full space-y-6">
            <div className="">
              <div className="flex items-center gap-2 text-[#ffffff] ">
                <BookCopy size="20" />
                {/* title */}
                <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-widest text-[#E6F1FF] uppercase ">
                  Manufacturing Excellence
                </h2>
              </div>

              {/* sub title */}
              <h2 className="text-[20px] sm:text-[18px] md:text-[20px] text-[#BFD7F3] capitalize font-medium mt-4 sm:mt-3">
                Manufacturing Excellence. Built for real-world impact.
              </h2>
            </div>

            {/* feature data */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {/* Feature Cards */}
              <div className="grid grid-cols-1  gap-3 ">
                {
                manufacturingData
                  .slice(0, 4)
                  .map((item,index) => (
                      <DarkModeSectionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
                  ))}
              </div>

              {/*  section content image */}

              <div className="w-full  grid grid-cols-1 gap-y-4">
                <div className="grid grid-cols-1 gap-y-2">
                   {
                manufacturingData
                  .slice(4,6)
                  .map((item,index) => (
                      <DarkModeSectionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
                  ))}
                </div>

                <div className="w-full h-50 sm:h-67 relative  rounded-xl ">
                  <Image
                    src={img_3}
                    alt="Why Choose AMYRAH"
                    fill
                    priority
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div
      className="
        bg-card 
        rounded-xl 
        p-4 
        shadow-sm 
        transition-all 
        duration-300 
        hover:shadow-lg 
        hover:scale-[1.03] 
        hover:bg-gray-50
        cursor-pointer
      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
            w-10 h-10 
            flex justify-center items-center 
            rounded-full 
            transition-colors 
            duration-300 
            bg-accent 
            text-primary 
            hover:bg-text-primary 
            hover:text-primary
          "
        >
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm md:text-base text-secondary transition-colors duration-300 hover:text-text-primary">
            {title}
          </h4>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
