import { Lightbulb, Eye, Files, ShieldCheck } from "lucide-react";

// ─── Sidebar Info Card ────────────────────────────────────────────────────────
function SidebarCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  subtitle,
  children,
}: {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5 border-b border-gray-100 pb-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon size={15} className={iconColor} />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">{title}</p>
          <p className="text-[11px] text-gray-400">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── Tip Row ──────────────────────────────────────────────────────────────────
function TipRow({
  children,
  dotColor = "bg-[#14b8a6]",
}: {
  children: React.ReactNode;
  dotColor?: string;
}) {
  return (
    <div className="flex items-start gap-2.5 border-b border-gray-50 py-1.5 last:border-none last:pb-0">
      <span
        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`}
      />
      <p className="text-[12px] leading-relaxed text-gray-500">{children}</p>
    </div>
  );
}

// ─── Stat Row ─────────────────────────────────────────────────────────────────
function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-50 py-1.5 last:border-none last:pb-0">
      <span className="text-[12px] text-gray-400">{label}</span>
      <span className="text-[12px] font-medium text-gray-700">{value}</span>
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────
function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${color}`}
    >
      {children}
    </span>
  );
}

// ─── RfqSidebar (default export) ─────────────────────────────────────────────
export default function RfqSidebar() {
  return (
    <aside className="sticky top-1 flex flex-col gap-3">
      {/* Card 1: Why a strong RFQ matters */}
      <SidebarCard
        icon={Lightbulb}
        iconBg="bg-teal-50"
        iconColor="text-teal-600"
        title="Why a strong RFQ matters"
        subtitle="Better details = better quotes"
      >
        <TipRow>
          Detailed specs reduce back-and-forth with suppliers by up to 60%
        </TipRow>
        <TipRow>
          Uploading a tech sheet shortens the sampling cycle significantly
        </TipRow>
        <TipRow>Clear Incoterms prevent hidden costs at destination</TipRow>
        <TipRow>
          A realistic budget filters out non-serious suppliers upfront
        </TipRow>
      </SidebarCard>

      {/* Card 2: What suppliers check first */}
      <SidebarCard
        icon={Eye}
        iconBg="bg-blue-50"
        iconColor="text-blue-600"
        title="What suppliers check first"
        subtitle="Fields they prioritize"
      >
        <StatRow label="Quantity" value="MOQ feasibility" />
        <StatRow label="Budget per piece" value="Margin check" />
        <StatRow label="Delivery date" value="Capacity planning" />
        <StatRow label="Incoterms" value="Risk allocation" />
        <StatRow label="Certifications" value="Compliance match" />
      </SidebarCard>

      {/* Card 3: Accepted file types */}
      <SidebarCard
        icon={Files}
        iconBg="bg-amber-50"
        iconColor="text-amber-600"
        title="Accepted file types"
        subtitle="For attachments"
      >
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Images
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          <Badge color="bg-teal-50 text-teal-700">JPG</Badge>
          <Badge color="bg-teal-50 text-teal-700">PNG</Badge>
          <Badge color="bg-teal-50 text-teal-700">WEBP</Badge>
        </div>
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Documents
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Badge color="bg-blue-50 text-blue-700">PDF</Badge>
          <Badge color="bg-blue-50 text-blue-700">XLS</Badge>
          <Badge color="bg-blue-50 text-blue-700">XLSX</Badge>
          <Badge color="bg-blue-50 text-blue-700">DXF</Badge>
        </div>
      </SidebarCard>

      {/* Card 4: Visibility & privacy */}
      <SidebarCard
        icon={ShieldCheck}
        iconBg="bg-purple-50"
        iconColor="text-purple-600"
        title="Visibility & privacy"
        subtitle="Who can see this RFQ"
      >
        <TipRow dotColor="bg-purple-400">
          Only verified suppliers in your category can view this RFQ
        </TipRow>
        <TipRow dotColor="bg-purple-400">
          Your contact details stay hidden until you approve a quote
        </TipRow>
        <TipRow dotColor="bg-purple-400">
          Attachments are encrypted and access-controlled per supplier
        </TipRow>
      </SidebarCard>
    </aside>
  );
}
