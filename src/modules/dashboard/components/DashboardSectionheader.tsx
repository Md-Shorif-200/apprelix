import { cn } from "@/lib/utils";

type DashboardSectionHeaderProps = {
  title: string;
  count?: number;
  className?: string;
};

export const DashboardSectionHeader = ({
  title,
  count,
  className,
}: DashboardSectionHeaderProps) => {
  return (
    <div
      className={cn(
        "border-b border-gray-100 pb-5 dark:border-gray-800",
        className,
      )}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        {/* Title & Count Wrapper */}
        <div className="flex items-center gap-2.5">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            {title}
          </h2>

          {count !== undefined && (
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">
              {count} {count === 1 ? "item" : "items"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSectionHeader;
