// components/common/EmptyState.tsx
import { LucideIcon, Inbox } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
}

const EmptyState = ({
  icon: Icon = Inbox,
  title = "No data found",
  description = "There is nothing to show here right now.",
}: EmptyStateProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 mb-4">
        <Icon size={28} className="text-[#14b8a6]" strokeWidth={1.75} />
      </div>

      <h3 className="text-sm font-semibold text-slate-700 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 max-w-xs">{description}</p>
    </div>
  );
};

export default EmptyState;
