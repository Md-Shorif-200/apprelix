import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CustomSearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const CustomSearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  disabled = false,
  className,
}: CustomSearchInputProps) => {
  const [internalValue, setInternalValue] = React.useState("");

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  // const handleClear = () => {
  //   setInternalValue("");
  //   onChange?.("");
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(currentValue);
    }
  };

  return (
    <div className="relative w-full mb-4 group">
      {/* Search Icon - Left */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors duration-200 pointer-events-none">
        <Search size={18} strokeWidth={2.2} />
      </span>

      <Input
        type="search"
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          "pl-10 pr-4 h-10 w-full transition-all duration-200 rounded-lg",
          "bg-white dark:bg-slate-900",
          "border-slate-200 dark:border-slate-800",
          "hover:border-slate-300 dark:hover:border-slate-700",
          "focus-visible:ring-2 focus-visible:ring-teal-500/20 focus-visible:border-teal-500",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-100 dark:disabled:bg-slate-800/50",
          className,
        )}
        aria-label="Search"
      />

      {/* Clear Icon - Right */}
      {/* {currentValue && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full p-0.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      )} */}
    </div>
  );
};

export default CustomSearchInput;
