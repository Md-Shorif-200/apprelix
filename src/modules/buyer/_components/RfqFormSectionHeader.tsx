export function RfqFormSectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 ring-1 ring-teal-100">
        <Icon size={17} className="text-teal-600" />
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-700">
          {title}
        </h3>
        {subtitle && <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
}