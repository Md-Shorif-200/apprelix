import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { ShieldCheck } from "lucide-react";
import { securityItems } from "./_data/securityItems";
import { getAosProps } from "@/lib/animations/aos";
import { AosRefresh } from "@/components/animations/AosRefresh";

const SecurityAndTrust = () => {
  return (
    <section className="mt-14 mb-20">
      <Container>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                {...getAosProps("fade-up", index * 80)}
                className="ds-card-interactive group relative p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ds-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="absolute top-5 right-5 text-4xl font-black text-ds-border group-hover:text-ds-primary/10 transition-colors duration-300 select-none">
                  0{item.id}
                </span>

                <div className="relative z-10 w-14 h-14 rounded-xl bg-ds-primary/10 flex items-center justify-center mb-6 transition-[background-color,transform] duration-300 group-hover:bg-ds-primary motion-safe:group-hover:scale-110">
                  <Icon className="w-6 h-6 text-ds-primary transition-colors duration-300 group-hover:text-ds-primary-foreground" />
                </div>

                <h3 className="relative z-10 text-lg font-semibold text-ds-text mb-3 group-hover:text-ds-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="relative z-10 text-sm text-ds-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-ds-primary group-hover:w-full transition-[width] duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
        <AosRefresh />
      </Container>
    </section>
  );
};

export default SecurityAndTrust;
