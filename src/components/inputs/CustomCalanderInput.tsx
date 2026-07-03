"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CustomCalanderInputProps {
  label?: string;
  value?: Date;
  onChange: (date: Date | undefined) => void;
  error?: string;
  startMonth?: Date;
  endMonth?: Date;
  disablePastDates?: boolean; // ← নতুন prop
}

const CustomCalanderInput = ({
  value,
  onChange,
  error,
  startMonth,
  endMonth,
  disablePastDates = false,
}: CustomCalanderInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "group h-11 w-full justify-start text-left font-normal px-4 rounded-xl border border-gray-200 bg-gray-50/80 text-sm text-gray-700 transition-all outline-none hover:bg-gray-50/80 hover:border-[#14b8a6] focus-visible:bg-white focus-visible:border-teal-600 focus-visible:ring-2 focus-visible:ring-teal-100",
              "data-[state=open]:bg-white",
              !value && "text-gray-400",
              error &&
                "border-red-500 hover:border-red-500 focus-visible:border-red-500 focus-visible:ring-red-100 text-red-500",
            )}
          >
            <CalendarIcon
              className={cn(
                "mr-2 h-4 w-4 transition-colors",
                value
                  ? "text-teal-600"
                  : "text-gray-400 group-hover:text-teal-600",
              )}
            />

            {value ? (
              <span className="text-gray-700">{format(value, "PPP")}</span>
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-0 z-50 bg-white border border-gray-200 shadow-lg rounded-xl"
          align="start"
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setIsOpen(false);
            }}
            className="p-3 rounded-xl"
            captionLayout="dropdown"
            startMonth={startMonth}
            endMonth={endMonth}
            disabled={disablePastDates ? { before: new Date() } : undefined}
            classNames={{
              today: "bg-teal-50 text-teal-900",
            }}
          />
        </PopoverContent>
      </Popover>

      {error && (
        <span className="text-xs font-medium text-red-500">{error}</span>
      )}
    </div>
  );
};

export default CustomCalanderInput;
