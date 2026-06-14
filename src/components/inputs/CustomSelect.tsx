"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  placeholder?: string;
  options: Option[];
  onChange?: (value: string) => void;
};

export default function CustomSelect({
  placeholder = "Select option",
  options,
  onChange,
}: CustomSelectProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full !h-11 rounded-xl border border-gray-200 bg-gray-50/80 px-4 text-sm text-gray-700 transition-all duration-200 hover:border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 focus:bg-white focus:outline-none focus:ring-offset-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-xl z-50 p-1.5">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-sm py-2 px-3 text-gray-700 cursor-pointer rounded-lg focus:bg-ds-primary focus:text-teal-800 data-[highlighted]:bg-teal-500 data-[highlighted]:text-teal-800"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}