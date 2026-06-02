import Image from "next/image";
import {
  Ban,
  CheckCircle,
  Flame,
  Gavel,
  ShieldAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import LegalPageShell from "./components/LegalPageShell";

const LEGAL_IMAGES = {
  foundation: "/about/about-img-1.webp",
  rules: "/ManufacturingExcellence/img-1.webp",
  enforcement: "/about/about-img-2.webp",
} as const;

const rules: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: "respect",
    icon: Users,
    title: "Respectful Communication",
    description:
      "All platform members must maintain professional and respectful communication at all times. Harassment, discrimination, or offensive language of any kind will not be tolerated between buyers, suppliers, or any other parties on this platform.",
  },
  {
    id: "fair-business",
    icon: Gavel,
    title: "Fair Business Practices",
    description:
      "All transactions, quotations, and negotiations must be conducted with honesty and transparency. Misrepresentation of products, pricing, or capabilities is strictly prohibited and may result in permanent account suspension.",
  },
  {
    id: "data-privacy",
    icon: ShieldAlert,
    title: "Data Privacy & Security",
    description:
      "Users must respect the confidentiality of all shared business information. Unauthorized sharing, selling, or misuse of another party's data, documents, or intellectual property is a serious violation of platform policy.",
  },
  {
    id: "zero-tolerance",
    icon: Ban,
    title: "Zero Tolerance Policy",
    description:
      "Fraudulent activity, fake listings, spam RFQs, or any attempt to manipulate the platform's AI systems or review mechanisms will result in immediate account termination and potential legal action.",
  },
];

const commitments = [
  "All suppliers are verified before activation",
  "Every RFQ is reviewed for authenticity",
  "Disputes are resolved within 48 hours",
  "Data is encrypted and never sold to third parties",
  "Platform integrity is audited on a monthly basis",
];

const CodeOfConduct = () => {
  return (
    <LegalPageShell>
      <div className="mb-14">
        <SectionTitle
          animate={false}
          label="Platform Standards"
          icon={Flame}
          title="Code of "
          titleHighlight="Conduct"
          description="Our platform is built on trust, integrity, and mutual respect. Every buyer and supplier is expected to uphold these core standards to ensure a safe, fair, and professional sourcing environment for all."
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-14 items-stretch mb-16">
        <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-0">
          <div className="relative w-full h-full min-h-[350px] rounded-3xl overflow-hidden">
            <Image
              src={LEGAL_IMAGES.foundation}
              alt="Professional team meeting representing platform conduct"
              fill
              priority
              quality={75}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-ds-primary" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-widest text-ds-primary uppercase">
            Our Foundation
          </span>
          <h3 className="text-2xl font-bold text-ds-text mt-2 mb-5">
            Why These Standards Exist
          </h3>
          <p className="text-ds-muted-foreground text-sm leading-8 mb-4">
            The apparel sourcing industry depends on relationships built over
            years of consistent, honest collaboration. We designed this platform
            to digitize that trust — making it transparent, measurable, and
            enforceable for every stakeholder involved.
          </p>
          <p className="text-ds-muted-foreground text-sm leading-8 mb-4">
            Whether you are a buyer placing your first RFQ or an experienced
            supplier managing dozens of production orders, the same standard of
            conduct applies universally. There are no exceptions based on order
            size, tenure, or account tier.
          </p>
          <p className="text-ds-muted-foreground text-sm leading-8">
            These guidelines are not bureaucratic formality — they are the
            operating principles that allow this ecosystem to function
            efficiently, safely, and at scale across global markets.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-14 items-stretch mb-20">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-widest text-ds-primary uppercase">
            Core Rules
          </span>
          <h3 className="text-2xl font-bold text-ds-text mt-2 mb-8">
            What We Expect From Everyone
          </h3>

          <div className="space-y-8">
            {rules.map((rule, index) => {
              const Icon = rule.icon;

              return (
                <div key={rule.id} className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-9 h-9 rounded-full bg-ds-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ds-primary" />
                    </div>
                    {index !== rules.length - 1 && (
                      <div className="w-px flex-1 bg-ds-primary/20 mt-1" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h4 className="text-base font-semibold text-ds-text mb-1">
                      {rule.title}
                    </h4>
                    <p className="text-ds-muted-foreground text-sm leading-7">
                      {rule.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
          <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={LEGAL_IMAGES.rules}
              alt="Apparel sourcing and manufacturing quality standards"
              fill
              quality={75}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute top-6 left-6 ds-card backdrop-blur-sm rounded-2xl px-5 py-3 bg-ds-card/90">
              <p className="text-ds-primary font-bold text-lg leading-none">
                4 Core
              </p>
              <p className="text-ds-muted-foreground text-xs mt-0.5">
                Platform Rules
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-14 items-stretch">
        <div className="w-full lg:w-5/12 min-h-[350px] lg:min-h-0">
          <div className="relative w-full h-full min-h-[350px] rounded-3xl overflow-hidden">
            <Image
              src={LEGAL_IMAGES.enforcement}
              alt="Legal and compliance team reviewing platform violations"
              fill
              quality={75}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-widest text-ds-primary uppercase">
            Enforcement
          </span>
          <h3 className="text-2xl font-bold text-ds-text mt-2 mb-5">
            Violations & Consequences
          </h3>
          <p className="text-ds-muted-foreground text-sm leading-8 mb-4">
            Any breach of this Code of Conduct is taken seriously by our
            compliance team. Upon receiving a report, our team initiates a
            structured review process that is transparent, fair, and
            time-bound. Both parties are given the opportunity to present their
            case before any action is taken.
          </p>
          <p className="text-ds-muted-foreground text-sm leading-8 mb-6">
            Depending on the severity and frequency of the violation, actions
            may range from a formal warning and temporary account restriction to
            permanent removal from the platform and referral to relevant legal
            authorities where applicable.
          </p>

          <div className="w-full h-px bg-ds-border mb-6" />

          <p className="text-ds-text text-sm font-semibold mb-4">
            Our Platform Commitments to You:
          </p>
          <ul className="space-y-3">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-ds-primary mt-0.5 shrink-0" />
                <span className="text-ds-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LegalPageShell>
  );
};

export default CodeOfConduct;
