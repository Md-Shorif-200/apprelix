import SectionTitle from "@/components/common/SectionTitle";
import LegalPageShell from "./components/LegalPageShell";
import LegalSectionHeader from "./components/LegalSectionHeader";
import {
  AlertTriangle,
  ArrowLeftRight,
  CheckCircle2,
  CreditCard,
  FileText,
  Lock,
  Shield,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const corePolicies = [
  {
    id: "acceptance",
    icon: ShieldCheck,
    iconColor: "text-ds-primary",
    bgColor: "bg-ds-primary/10",
    borderColor: "border-ds-primary/20",
    title: "Acceptance of Terms",
    description:
      "By accessing or using this platform, users agree to comply with all applicable policies including buyers, suppliers, and administrators.",
    points: [
      "All users must be 18 years or older",
      "Agreement required before accessing features",
      "Terms may be updated with user notification",
    ],
  },
  {
    id: "usage",
    icon: Zap,
    iconColor: "text-ds-accent",
    bgColor: "bg-ds-accent/10",
    borderColor: "border-ds-accent/20",
    title: "Platform Usage",
    description:
      "The platform must be used only for legitimate apparel sourcing activities including RFQs, quotations, and production tracking.",
    points: [
      "No unauthorized scraping or data extraction",
      "Tools must not be used for fraudulent activities",
      "Users must follow community guidelines always",
    ],
  },
  {
    id: "accounts",
    icon: Users,
    iconColor: "text-ds-primary",
    bgColor: "bg-ds-primary/10",
    borderColor: "border-ds-primary/20",
    title: "User Accounts",
    description:
      "Users are responsible for maintaining account security. Unauthorized access or misuse of credentials is strictly prohibited.",
    points: [
      "Keep your login credentials private",
      "Report suspicious activity immediately",
      "Account sharing is not permitted",
    ],
  },
];

const transactionRules = [
  {
    step: "01",
    icon: FileText,
    title: "Submit RFQ",
    description:
      "Buyers submit accurate and complete RFQ data. All submitted information must reflect real sourcing requirements.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Quotation & Agreement",
    description:
      "Suppliers respond with detailed quotations. Once accepted by both parties, quotations become legally binding.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Transaction Recording",
    description:
      "All transactions are system-managed and recorded for full transparency and compliance audit purposes.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Completion & Review",
    description:
      "Upon order completion, both parties can review and rate the experience to maintain platform quality.",
  },
];

const legalNotices = [
  {
    id: "privacy",
    icon: Lock,
    title: "Data & Privacy",
    type: "safe" as const,
    description:
      "All business data including RFQs, supplier quotations, and communication records are protected under strict privacy and security policies.",
    points: [
      "Personal data is never sold to third parties",
      "All data is encrypted using industry-standard protocols",
      "Users can request data deletion at any time",
      "GDPR and international privacy laws are fully respected",
    ],
  },
  {
    id: "limitations",
    icon: AlertTriangle,
    title: "Limitations of Liability",
    type: "warning" as const,
    description:
      "The platform is not responsible for external supplier delays, production issues, or third-party communication failures.",
    points: [
      "Platform is not liable for supplier-side production delays",
      "Third-party service disruptions are outside our control",
      "Users assume responsibility for their business decisions",
      "Force majeure events are excluded from liability claims",
    ],
  },
];

const sectionSubtitle =
  "Essential rules that govern platform usage and compliance";

const PolicyCard = ({ item }: { item: (typeof corePolicies)[0] }) => {
  const Icon = item.icon;

  return (
    <div className="ds-card-interactive p-6 flex flex-col gap-4">
      <div
        className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}
      >
        <Icon className={`w-6 h-6 ${item.iconColor}`} />
      </div>

      <div>
        <h3 className="text-lg font-bold text-ds-text mb-2">{item.title}</h3>
        <p className="text-ds-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className={`border-t ${item.borderColor}`} />

      <ul className="space-y-2">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <CheckCircle2
              className={`w-4 h-4 mt-0.5 shrink-0 ${item.iconColor}`}
            />
            <span className="text-ds-muted-foreground text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TimelineStep = ({
  item,
  isLast,
}: {
  item: (typeof transactionRules)[0];
  isLast: boolean;
}) => {
  const Icon = item.icon;

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-ds-primary text-ds-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
          {item.step}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-ds-primary/20 mt-2" />}
      </div>

      <div className={`pb-8 flex-1 ${isLast ? "pb-0" : ""}`}>
        <div className="ds-card p-5 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-ds-primary/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-ds-primary" />
            </div>
            <h3 className="font-bold text-ds-text">{item.title}</h3>
          </div>
          <p className="text-ds-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const LegalCard = ({ item }: { item: (typeof legalNotices)[0] }) => {
  const Icon = item.icon;
  const isSafe = item.type === "safe";

  return (
    <div
      className={`rounded-2xl p-6 border ${
        isSafe
          ? "bg-ds-primary/10 border-ds-primary/20"
          : "bg-ds-destructive/10 border-ds-destructive/20"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isSafe ? "bg-ds-primary/20" : "bg-ds-destructive/20"
          }`}
        >
          <Icon
            className={`w-5 h-5 ${isSafe ? "text-ds-primary" : "text-ds-destructive"}`}
          />
        </div>
        <h3 className="text-lg font-bold text-ds-text">{item.title}</h3>
      </div>

      <p
        className={`text-sm leading-relaxed mb-4 ${
          isSafe ? "text-ds-text/80" : "text-ds-destructive"
        }`}
      >
        {item.description}
      </p>

      <ul className="space-y-2.5">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <div
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                isSafe ? "bg-ds-primary" : "bg-ds-destructive"
              }`}
            />
            <span
              className={`text-sm ${
                isSafe ? "text-ds-muted-foreground" : "text-ds-destructive/90"
              }`}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TermsCondition = () => {
  return (
    <LegalPageShell className="lg:pb-24">
      <div className="mb-16">
        <SectionTitle
          animate={false}
          label="Terms & Conditions"
          icon={FileText}
          title="Platform Usage "
          titleHighlight="Agreement"
          description="These terms define how buyers, suppliers, and admins interact within the AI-powered B2B apparel sourcing ecosystem."
        />
      </div>

      <div className="mb-20">
        <LegalSectionHeader
          icon={Shield}
          title="Core"
          titleHighlight="Policies"
          subtitle={sectionSubtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePolicies.map((item) => (
            <PolicyCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mb-14">
        <LegalSectionHeader
          icon={ArrowLeftRight}
          title="Transactions &"
          titleHighlight="RFQ Process"
          subtitle={sectionSubtitle}
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="ds-card p-8">
            <div className="w-12 h-12 rounded-xl bg-ds-accent/10 flex items-center justify-center mb-5">
              <CreditCard className="w-6 h-6 text-ds-accent" />
            </div>
            <h3 className="text-xl font-bold text-ds-text mb-3">
              How Transactions Work
            </h3>
            <p className="text-ds-muted-foreground text-sm leading-relaxed mb-6">
              Our platform manages all RFQs and transactions in a structured,
              transparent, and secure process. Every step is recorded to ensure
              accountability between buyers and suppliers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-ds-accent/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-ds-accent">100%</p>
                <p className="text-xs text-ds-muted-foreground mt-1">
                  Transactions Recorded
                </p>
              </div>
              <div className="bg-ds-primary/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-ds-primary">256-bit</p>
                <p className="text-xs text-ds-muted-foreground mt-1">
                  SSL Encryption
                </p>
              </div>
            </div>
          </div>

          <div>
            {transactionRules.map((item, index) => (
              <TimelineStep
                key={item.step}
                item={item}
                isLast={index === transactionRules.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <LegalSectionHeader
          icon={AlertTriangle}
          title="Legal"
          titleHighlight="Notices"
          subtitle={sectionSubtitle}
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {legalNotices.map((item) => (
            <LegalCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 ds-card px-6 py-5">
          <p className="text-sm text-ds-muted-foreground">
            © 2026 AI-Powered B2B Apparel Platform · All rights reserved
          </p>
          <div className="flex items-center gap-2 bg-ds-primary/10 text-ds-primary text-sm font-semibold px-4 py-2 rounded-full border border-ds-primary/20">
            <Lock className="w-4 h-4" />
            <span>Secured & Verified Policy</span>
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
};

export default TermsCondition;
