import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CustomButtonProps = {
  text: string;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ComponentProps<"button">["type"];
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "outline"
    | "light"
    | "dark"
    | "ghost"
    | "solid";
  animation?: "scale" | "slide" | "none";
  className?: string;
  isActive?: boolean;
  href?: string;
  disabled?: boolean; // ✅ added
  /** Associate a submit button with a `<form id="...">` outside the form tree. */
  form?: string;
};

export const CustomButton = ({
  text,
  icon,
  activeIcon,
  onClick,
  type = "button",
  variant = "primary",
  animation = "none",
  className,
  isActive = false,
  href,
  disabled = false, // ✅ default
  form,
}: CustomButtonProps) => {
  const variantStyle = {
    primary:
      "btn_gradient text-black text-xs sm:text-sm font-semibold hover:opacity-90 disabled:opacity-60",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-60",
    danger: "bg-[#FF383C80] hover:bg-red-800  text-white disabled:opacity-60",
    success: "bg-green-600 hover:bg-green-700 text-white disabled:opacity-60",
    outline:
      "border border-(--ds-accent) text-white hover:text-(--ds-accent) bg-transparent",
    light:
      "bg-white text-gray-700 border border-gray-200 font-semibold text-sm sm:text-base disabled:opacity-60",
    dark: "bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-60",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 disabled:opacity-60",
    solid: "bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-60",
  };

  const animationStyle = {
    scale: "hover:scale-105 transition-transform",
    slide: "hover:translate-x-1 transition-all",
    none: "",
  };

  const activeStyle = isActive
    ? "btn_gradient text-black text-sm sm:text-base font-semibold"
    : "";

  const disabledStyle =
    " disabled:  disabled:!border-[#6B728080] disabled:opacity-80 disabled:cursor-not-allowed";

  const combinedClass = cn(
    "flex items-center gap-2 cursor-pointer",
    variantStyle[variant],
    animationStyle[animation],
    activeStyle,
    disabled && disabledStyle,
    className,
  );

  // ✅ icon logic
  const content = (
    <>
      {isActive && activeIcon ? (
        <>
          {activeIcon}
          {text}
        </>
      ) : icon ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        text
      )}
    </>
  );

  if (href) {
    return (
      <Button asChild className={combinedClass} disabled={disabled}>
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      type={type}
      form={form}
      className={combinedClass}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};