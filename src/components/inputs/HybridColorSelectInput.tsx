"use client";

import * as React from "react";
import { Check, ChevronDown, Palette, X } from "lucide-react";
import { HexColorPicker, HexColorInput } from "react-colorful";

import { Button } from "@/components/ui/button";
// আপনার কাস্টম Command কম্পোনেন্টগুলো ব্যবহার করা হচ্ছে
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"; // আপনার কাস্টম পাথে এটি থাকতে পারে
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type ColorOption = {
  label: string;
  value: string; // Hex code
};

type HybridColorSelectProps = {
  placeholder?: string;
  options: ColorOption[];
  value: string[];
  onChange: (selectedValues: string[]) => void;
};

export default function HybridColorSelectInput({
  placeholder = "Select colors",
  options,
  value = [],
  onChange,
}: HybridColorSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [isPickerOpen, setPickerOpen] = React.useState(false);
  const [customColor, setCustomColor] = React.useState("#aabbcc");

  const optionsMap = React.useMemo(() => {
    return new Map(options.map((option) => [option.value, option]));
  }, [options]);

  const selectedOptions = React.useMemo(() => {
    return value.map((val) => {
      const predefinedOption = optionsMap.get(val.toLowerCase());
      if (predefinedOption) {
        return predefinedOption;
      }
      return { label: val.toUpperCase(), value: val };
    });
  }, [value, optionsMap]);

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

  const handleAddCustomColor = () => {
    const newColor = customColor.toLowerCase();
    if (newColor && !value.includes(newColor)) {
      onChange([...value, newColor]);
    }
    setPickerOpen(false);
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex w-full min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-gray-700 transition-all focus-within:border-teal-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-teal-100">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              {selectedOptions.length > 0 ? (
                selectedOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center gap-1.5 rounded-md bg-teal-500/10 px-2 py-1 text-xs font-medium text-teal-700"
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-gray-400/50"
                      style={{ backgroundColor: option.value }}
                    />
                    <span>{option.label}</span>
                    <button
                      type="button"
                      onClick={(e) => handleRemove(e, option.value)}
                    >
                      <X size={12} className="ml-1" />
                    </button>
                  </div>
                ))
              ) : (
                <span className="text-gray-500">{placeholder}</span>
              )}
            </div>
            <ChevronDown
              className={cn("h-4 w-4 shrink-0", open && "rotate-180")}
            />
          </div>
        </PopoverTrigger>

        {/* FIXED: এখানে একটি সলিড সাদা الخلفية যোগ করা হয়েছে */}
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0 bg-white"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search colors..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  setPickerOpen(true);
                }}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors",
                  "data-[selected=true]:bg-teal-500 data-[selected=true]:text-white",
                )}
              >
                <Palette className="h-4 w-4" />
                <span>Add a Custom Color</span>
              </CommandItem>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = value.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onSelect={() => handleSelect(option.value)}
                      className={cn(
                        "flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 text-sm outline-none transition-colors",
                        "data-[selected=true]:bg-teal-500 data-[selected=true]:text-white",
                        isSelected && "bg-teal-500/10 text-teal-700",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-4 w-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: option.value }}
                        />
                        <span>{option.label}</span>
                      </div>
                      {isSelected && (
                        <Check className="h-4 w-4 text-teal-600" />
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Dialog component remains unchanged */}
      <Dialog open={isPickerOpen} onOpenChange={setPickerOpen}>
        {/* ... dialog content ... */}
      </Dialog>
    </>
  );
}
