// src/components/inputs/CustomSearchSelectInput.tsx

"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react"; // ChevronsUpDown এর পরিবর্তে ChevronDown ইম্পোর্ট করা হয়েছে

import { cn } from "@/lib/utils";
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

export type Option = {
  label: string;
  value: string;
  id?: string;
};

type CustomSearchSelectInputProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  notFoundText?: string;
  label?: string;
  error?: string;
  className?: string;
disabled?: boolean;
};

export default function CustomSearchSelectInput({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  notFoundText = "No option found.",
  label,
  error,
  className,
disabled = false, 
}: CustomSearchSelectInputProps) {
  const [open, setOpen] = React.useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

        <Popover open={open} onOpenChange={!disabled ? setOpen : undefined}>
        <PopoverTrigger asChild>
          <div
            role="combobox"
            aria-expanded={open}
            className={cn(
              "flex w-full min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:border-gray-300",
              "focus-within:border-teal-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-teal-100 focus-within:outline-none focus-within:ring-offset-0",
              open && "border-teal-600 bg-white ring-2 ring-teal-100"
            )}
          >
            <span className="truncate">
              {selectedOption ? (
                selectedOption.label
              ) : (
                <span className="text-gray-500">{placeholder}</span>
              )}
            </span>

            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200",
                open && "rotate-180 text-teal-600"
              )}
            />
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="z-50 w-[var(--radix-popover-trigger-width)] rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
          align="start"
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{notFoundText}</CommandEmpty>
              <CommandGroup>
                {open &&
                  options.map((option) => {
                    const isSelected = value === option.value;
                    return (
                      <CommandItem
                        key={option.id ?? option.value}
                        value={option.label}
                        onSelect={() => {
                          onChange?.(option.value);
                          setOpen(false);
                        }}
                      className={cn(
                        "cursor-pointer rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:!bg-teal-500",
                        isSelected && "bg-teal-100/60 font-medium text-teal-800"
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

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}