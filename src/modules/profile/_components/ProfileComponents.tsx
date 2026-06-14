// ── Info Pill ──
export const InfoPill = ({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) => (
  <span className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
    {icon}
    {children}
  </span>
)

// ── Tag / Chip ──
export const Tag = ({
  label,
  variant = "gray",
}: {
  label: string
  variant?: "gray" | "teal"
}) => {
  const styles =
    variant === "teal"
      ? "bg-teal-50 text-teal-700 border-teal-100"
      : "bg-gray-100 text-gray-600 border-gray-200"

  return (
    <span className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${styles}`}>
      {label}
    </span>
  )
}

// ── Helpers ──
export const getInitials = (name: string) => {
  if (!name) return "??"
  return name.slice(0, 2).toUpperCase()
}

export const renderValue = (value: unknown): string | React.ReactNode => {
  if (!value || (Array.isArray(value) && value.length === 0)) return "N/A"
  if (Array.isArray(value)) return value.join(", ")
  return String(value)
}