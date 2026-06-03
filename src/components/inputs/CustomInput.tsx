"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  error?: string;
  /** Shown inside the file upload button */
  fileHint?: string;
};

const inputClassName = (hasLeftIcon: boolean, hasRightIcon: boolean) =>
  `
    w-full text-sm border border-gray-200 rounded-xl outline-none
    focus:border-[#0d9488] focus:ring-2 focus:ring-teal-100
    transition-all bg-gray-50/80 focus:bg-white
    placeholder:text-gray-400 text-gray-700
    ${hasLeftIcon ? "pl-9" : "pl-4"}
    ${hasRightIcon ? "pr-10" : "pr-4"}
    py-2.5
  `;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput(
    {
      type = "text",
      placeholder = "",
      label,
      leftIcon,
      rightIcon,
      onRightIconClick,
      error,
      fileHint = "Choose file to upload",
      className,
      id,
      ...props
    },
    ref
  ) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const isFile = type === "file";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;
    const hasError = Boolean(error);

    const errorBorder = hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-100"
      : "";

    if (isFile) {
      return (
        <div className="flex flex-col gap-1">
          {label && (
            <Label htmlFor={id} className="text-xs font-medium text-gray-500">
              {label}
            </Label>
          )}
          <label
            htmlFor={id}
            className={`relative flex items-center gap-2 pl-9 pr-4 py-2.5 text-sm
              border border-dashed rounded-xl cursor-pointer transition-all bg-gray-50/80 text-gray-400
              hover:border-teal-400 hover:bg-teal-50
              ${hasError ? "border-red-400" : "border-gray-300"}`}
          >
            {leftIcon && (
              <div className="absolute left-3 text-gray-400">{leftIcon}</div>
            )}
            <span>{fileHint}</span>
            <input
              ref={ref}
              id={id}
              type="file"
              className="hidden"
              {...props}
            />
          </label>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      );
    }

    const passwordToggle = isPassword && (
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors"
        tabIndex={-1}
      >
        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    );

    const customRightIcon = !isPassword && rightIcon && (
      <button
        type="button"
        onClick={onRightIconClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
      >
        {rightIcon}
      </button>
    );

    const showRightPadding = isPassword || Boolean(rightIcon);

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Label htmlFor={id} className="text-xs font-medium text-gray-500">
            {label}
          </Label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftIcon}
            </div>
          )}

          <Input
            ref={ref}
            id={id}
            type={inputType}
            placeholder={placeholder}
            className={`${inputClassName(Boolean(leftIcon), showRightPadding)} ${errorBorder} ${className ?? ""}`}
            {...props}
          />

          {passwordToggle}
          {customRightIcon}
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

export default CustomInput;
