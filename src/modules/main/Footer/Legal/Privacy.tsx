import SectionTitle from "@/components/common/SectionTitle";
import {
  Building2,
  CheckCircle2,
  Flame,
  Lock,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import LegalPageShell from "./components/LegalPageShell";

const privacyCards = [
  {
    id: "storage",
    icon: ShieldCheck,
    title: "Secure Data Storage",
    description:
      "All business and sourcing data is securely stored and protected.",
  },
  {
    id: "communication",
    icon: Lock,
    title: "Protected Communication",
    description:
      "Messages, files, and supplier discussions remain confidential.",
  },
  {
    id: "access",
    icon: UserCheck,
    title: "Verified Access",
    description:
      "Role-based permissions ensure only authorized users access data.",
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Privacy",
    description:
      "Company information and sourcing activities are kept secure.",
  },
];

const protectedData = [
  "Company & Business Information",
  "RFQ (Request for Quotation) Details",
  "Supplier Quotations & Pricing",
  "Production & Shipment Records",
  "Chat Messages & File Attachments",
  "Transaction & Activity History",
];

const Privacy = () => {
  return (
    <LegalPageShell>
      <div className="mb-10">
        <SectionTitle
          animate={false}
          label="Privacy & Data Protection"
          icon={Flame}
          title="Your Business Data Is "
          titleHighlight="Protected"
          description="We are committed to protecting buyer, supplier, and company information through secure infrastructure, controlled access, and enterprise-grade privacy practices."
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {privacyCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="group ds-card-interactive p-6"
            >
              <div className="w-14 h-14 rounded-xl bg-ds-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-ds-primary" />
              </div>

              <h3 className="text-lg font-semibold text-ds-text mb-3">
                {item.title}
              </h3>

              <p className="text-ds-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-ds-primary/10 to-ds-card border border-ds-primary/20 rounded-3xl p-8 md:p-12 mb-16">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-bold text-ds-text mb-5">
            Our Privacy Commitment
          </h3>

          <p className="text-ds-muted-foreground leading-8">
            Our platform is designed for professional apparel sourcing and supply
            chain management. We collect only the information required to
            facilitate RFQ creation, supplier matching, quotation management,
            production tracking, and business communication. Sensitive company
            information, uploaded documents, and conversations are protected
            through secure authentication, encrypted storage practices, and strict
            access controls.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-ds-text mb-5">
            Information We Protect
          </h3>

          <p className="text-ds-muted-foreground mb-8 leading-7">
            We take privacy seriously and implement security measures to
            safeguard important business and sourcing information across the
            platform.
          </p>

          <div className="space-y-4">
            {protectedData.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-ds-primary shrink-0" />
                <span className="text-ds-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ds-primary rounded-3xl p-10 text-ds-primary-foreground">
          <ShieldCheck className="w-14 h-14 mb-6" />

          <h3 className="text-2xl font-bold mb-4">Enterprise-Level Security</h3>

          <p className="leading-8 text-ds-primary-foreground/80">
            From supplier verification and JWT authentication to secure file
            uploads and role-based permissions, every layer of the platform is
            designed to keep your sourcing operations safe, reliable, and
            protected.
          </p>
        </div>
      </div>
    </LegalPageShell>
  );
};

export default Privacy;
