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
      <SelectTrigger className="w-full h-11 border border-[#0d9488] text-sm rounded-md focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="border border-[#0d9488]">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-sm"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}