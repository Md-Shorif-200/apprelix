// ── Info Pill ──
export const InfoPill = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <span className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
    {icon}
    {children}
  </span>
);

// ── Tag / Chip ──
export const Tag = ({
  label,
  variant = "gray",
}: {
  label: string;
  variant?: "gray" | "teal";
}) => {
  const styles =
    variant === "teal"
      ? "bg-teal-50 text-teal-700 border-teal-100"
      : "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <span
      className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      {label}
    </span>
  );
};

export const StatusBadge = ({
  status,
}: {
  status: "pending" | "accepted" | "rejected" | "blocked";
}) => {
  const config = {
    accepted: {
      className: "bg-green-50 text-green-700 ring-1 ring-green-200",
      dot: "bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.4)]",
      label: "Accepted",
    },
    rejected: {
      className: "bg-red-50 text-red-600 ring-1 ring-red-200",
      dot: "bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.4)]",
      label: "Rejected",
    },
    blocked: {
      className: "bg-gray-100 text-gray-600 ring-1 ring-gray-200",
      dot: "bg-gray-400 shadow-[0_0_6px_2px_rgba(156,163,175,0.4)]",
      label: "Blocked",
    },
    pending: {
      className:
        "bg-amber-100/80 text-amber-900 ring-1 ring-amber-300/80 font-medium",
      dot: "bg-amber-500 shadow-[0_0_8px_2px_rgba(245,158,11,0.5)]",
      label: "Pending",
    },
  };

  const { className, dot, label } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
};

// ── Helpers ──
export const getInitials = (name: string) => {
  if (!name) return "??";
  return name.slice(0, 2).toUpperCase();
};

export const renderValue = (value: unknown): string | React.ReactNode => {
  if (!value || (Array.isArray(value) && value.length === 0)) return "N/A";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
};
