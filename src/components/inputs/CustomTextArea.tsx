"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { forwardRef, TextareaHTMLAttributes } from "react";

type CustomTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

const CustomTextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
  function CustomTextArea(
    { placeholder = "", label, error, id, className, ...props },
    ref,
  ) {
    const hasError = Boolean(error);

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Label htmlFor={id} className="text-xs font-medium text-gray-500">
            {label}
          </Label>
        )}

        <div
          className={`rounded-xl border bg-gray-50/80 px-3 py-2 transition focus-within:bg-white focus-within:ring-2
            ${
              hasError
                ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-100"
                : "border-gray-200 focus-within:border-teal-500 focus-within:ring-teal-100"
            }`}
        >
          <Textarea
            ref={ref}
            id={id}
            placeholder={placeholder}
            className={`min-h-[88px] resize-none border-0 bg-transparent p-0 text-sm text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 ${className ?? ""}`}
            {...props}
          />
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

export default CustomTextArea;
