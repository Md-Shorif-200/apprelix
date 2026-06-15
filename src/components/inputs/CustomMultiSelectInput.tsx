"use client";

import * as React from "react";
import { ChevronDown, X } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type MultiSelectOption = {
  label: string;
  value: string;
};

type CustomMultiSelectProps = {
  placeholder?: string;
  options: MultiSelectOption[];
  value: string[];
  onChange: (selectedValues: string[]) => void;
};

export default function CustomMultiSelectInput({
  placeholder = "Select options",
  options,
  value = [],
  onChange,
}: CustomMultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  // value (string) থেকে পুরো option object খুঁজে বের করার জন্য একটি ম্যাপ
  const optionsMap = React.useMemo(() => {
    return new Map(options.map((option) => [option.value, option]));
  }, [options]);

  const selectedOptions = value
    .map((val) => optionsMap.get(val))
    .filter(Boolean) as MultiSelectOption[];

  const handleSelect = (selectedValue: string) => {
    if (value.includes(selectedValue)) {
      onChange(value.filter((v) => v !== selectedValue));
    } else {
      onChange([...value, selectedValue]);
    }
  };

  const handleRemove = (e: React.MouseEvent, removedValue: string) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== removedValue));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex w-full min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:border-gray-300",
            "focus-within:border-[#0d9488] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0d9488]/15 focus-within:outline-none focus-within:ring-offset-0",
            open && "border-[#0d9488] bg-white ring-2 ring-[#0d9488]/15",
          )}
        >
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center gap-1.5 rounded-md bg-[#0d9488]/10 px-2 py-1 text-xs font-medium text-[#0d9488]"
                >
                  {option.label}
                  <button
                    type="button"
                    onClick={(e) => handleRemove(e, option.value)}
                    className="cursor-pointer rounded-full p-0.5 transition-colors hover:bg-[#0d9488]/20 focus:outline-none"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>

          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200",
              open && "rotate-180 text-[#0d9488]",
            )}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="z-50 w-[var(--radix-popover-trigger-width)] rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = value.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={handleSelect}
                    className={cn(
                      "cursor-pointer rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors",
                      isSelected &&
                        "bg-[#0d9488]/10 font-medium text-[#0d9488] data-[selected=true]:bg-[#0d9488] data-[selected=true]:text-white",
                    )}
                  >
                    {option.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
