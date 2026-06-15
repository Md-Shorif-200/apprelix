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
      badge: "bg-green-50 text-green-700 border-green-100",
      dot: "bg-green-500",
      label: "Accepted",
    },
    rejected: {
      badge: "bg-red-50 text-red-700 border-red-100",
      dot: "bg-red-500",
      label: "Rejected",
    },
    blocked: {
      badge: "bg-gray-100 text-gray-700 border-gray-200",
      dot: "bg-gray-500",
      label: "Blocked",
    },
    pending: {
      badge: "bg-yellow-100 text-yellow-700 border-yellow-100",
      dot: "bg-yellow-500",
      label: "Pending",
    },
  };

  const { badge, dot, label } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${badge}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
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
