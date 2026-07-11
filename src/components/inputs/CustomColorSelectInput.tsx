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
  code?: string;
  name?: string;
};

type ColorSelectionValue = { name: string; code: string } | string;

type CustomColorSelectProps = {
  placeholder?: string;
  options: MultiSelectOption[];
  value: ColorSelectionValue[];
  onChange: (selectedValues: ColorSelectionValue[]) => void;
  emitObjects?: boolean;
};

export default function CustomColorSelectInput({
  placeholder = "Select options",
  options,
  value = [],
  onChange,
  emitObjects = false,
}: CustomColorSelectProps) {
  const [open, setOpen] = React.useState(false);

  const getOptionKey = (option: MultiSelectOption) => option.code ?? option.value;

  const normalizeValue = (item: ColorSelectionValue) => {
    if (typeof item === "string") {
      return { name: item, code: item };
    }
    return item;
  };

  const isSameSelection = (item: ColorSelectionValue, option: MultiSelectOption) => {
    const normalized = normalizeValue(item);
    return (
      normalized.code === getOptionKey(option) ||
      normalized.name === option.label ||
      normalized.name === option.name
    );
  };

  // Build a map for quick option lookup by value
  const optionsMap = React.useMemo(() => {
    return new Map(options.map((option) => [getOptionKey(option), option]));
  }, [options]);

  // Get full option objects for currently selected values
  const selectedOptions = value
    .map((val) => {
      const normalized = normalizeValue(val);
      return optionsMap.get(normalized.code);
    })
    .filter(Boolean) as MultiSelectOption[];

  // Toggle select/deselect on item click
  const handleSelect = (selectedValue: string) => {
    const selectedOption = options.find(
      (option) => getOptionKey(option) === selectedValue,
    );

    if (!selectedOption) return;

    const isSelected = value.some((item) => isSameSelection(item, selectedOption));

    if (isSelected) {
      onChange(value.filter((item) => !isSameSelection(item, selectedOption)));
      return;
    }

    const nextValue = emitObjects
      ? [...value, { name: selectedOption.label, code: getOptionKey(selectedOption) }]
      : [...value, getOptionKey(selectedOption)];

    onChange(nextValue);
  };

  // Remove a single selected item
  const handleRemove = (e: React.MouseEvent, removedValue: string) => {
    e.stopPropagation();

    const nextValue = value.filter((item) => {
      if (typeof item === "string") {
        return item !== removedValue;
      }
      return item.code !== removedValue && item.name !== removedValue;
    });

    onChange(nextValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {/* Trigger box that shows selected color badges */}
        <div
          className={cn(
            "flex w-full min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:border-gray-300",
            open && "border-[#0d9488] bg-white ring-2 ring-[#0d9488]/15",
          )}
        >
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                // Badge for each selected color with a color box preview
                <div
                  key={option.value}
                  className="flex items-center gap-1.5 rounded-md bg-[#0d9488]/10 px-2 py-1 text-xs font-medium text-[#0d9488]"
                >
                  {/* Small color preview box */}
                  <span
                    className="inline-block h-3.5 w-3.5 rounded border border-black/10"
                    style={{ backgroundColor: option.value }}
                  />
                  <span className="flex flex-col leading-none">
                    <span>{option.label}</span>
                    <span className="text-[10px] font-normal text-[#0f766e]">
                      {getOptionKey(option)}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleRemove(e, getOptionKey(option))}
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

          {/* Chevron icon rotates when popover is open */}
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200",
              open && "rotate-180 text-[#0d9488]",
            )}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="z-50 w-(--radix-popover-trigger-width) rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = value.some((item) => isSameSelection(item, option));
                return (
                  // Each dropdown option with color box + label
                  <CommandItem
                    key={option.value}
                    value={option.label} // use label so search works by name
                    onSelect={() => handleSelect(option.value)}
                    className={cn(
                      "cursor-pointer rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors",
                      isSelected &&
                        "bg-[#0d9488]/10 font-medium text-[#0d9488]",
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Color preview box inside dropdown */}
                      <span
                        className="inline-block h-4 w-4  rounded border border-black/10"
                        style={{ backgroundColor: option.value }}
                      />
                      <span className="flex flex-col">
                        <span>{option.label}</span>
                        <span className="text-[11px] text-gray-400">
                          {getOptionKey(option)}
                        </span>
                      </span>
                    </div>
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
