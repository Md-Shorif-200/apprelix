"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  error?: string;
  fileHint?: string;
  fileName?: string; // ✅ NEW
};

const inputClassName = (left: boolean, right: boolean) => `
  h-11 w-full rounded-xl border border-gray-200 bg-gray-50/80 text-sm text-gray-700
  transition-all outline-none
  placeholder:text-gray-400
  focus:border-teal-600 focus:ring-2 focus:ring-teal-100 focus:bg-white
  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
  ${left ? "pl-10" : "pl-4"}
  ${right ? "pr-10" : "pr-4"}
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
      fileHint = "Choose file",
      fileName,
      className,
      id,
      ...props
    },
    ref,
  ) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const isFile = type === "file";

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    const hasRight = isPassword || Boolean(rightIcon);

    const passwordToggle = isPassword && (
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShowPassword((p) => !p)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    );

    const customRightIcon = !isPassword && rightIcon && (
      <button
        type="button"
        onClick={onRightIconClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        {rightIcon}
      </button>
    );

    // ✅ FILE INPUT UI FIX
    if (isFile) {
      return (
        <div className="flex flex-col gap-1.5">
          {label && (
            <Label htmlFor={id} className="text-sm font-medium text-gray-700">
              {label}
            </Label>
          )}

          <label
            htmlFor={id}
            className="flex h-11 cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 hover:border-teal-500"
          >
            <span className="text-sm text-gray-500 truncate">
              {fileName ? fileName : fileHint}
            </span>

            <span className="text-xs bg-teal-600 text-white px-3 py-1 rounded-md">
              Browse
            </span>

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

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <Label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
          </Label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          <Input
            ref={ref}
            id={id}
            type={inputType}
            placeholder={placeholder}
            className={`${inputClassName(Boolean(leftIcon), hasRight)} ${className ?? ""}`}
            {...props}
          />

          {passwordToggle}
          {customRightIcon}
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
