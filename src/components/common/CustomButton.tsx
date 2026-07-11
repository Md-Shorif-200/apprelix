import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Link from "next/link";

type CustomButtonProps = {
  text: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ComponentProps<"button">["type"];
  variant?: "primary" | "secondary" | "danger" | "outline" | "light" | "accent";
  animation?: "scale" | "slide" | "none";
  className?: string;
  isActive?: boolean;
  href?: string;
  disabled?: boolean;
  /** Associate a submit button with a `<form id="...">` outside the form tree. */
  form?: string;
};

export const CustomButton = ({
  text,
  icon,
  isLoading,
  onClick,
  type = "button",
  variant = "primary",
  animation = "none",
  className,
  href,
  disabled = false,
  form,
}: CustomButtonProps) => {
  const variantStyle = {
    primary:
      "bg-ds-primary  text-ds-secondary  transition-colors duration-200  border-none outline-none hover:shadow-lg hover:shadow-ds-primary/30 hover:brightness-105 hover:-translate-y-0.2 ",
    secondary:
      "bg-gray-600 hover:bg-gray-700 text-white disabled:opacity-60 border-none outline-none",
    danger:
      "bg-[#FF383C80] hover:bg-red-800  text-white disabled:opacity-60 border-none outline-none",
    outline:
      "border border-(--ds-accent) text-white hover:text-(--ds-accent) bg-transparent border-none outline-none",
    light:
      "bg-white text-gray-700 border border-gray-200 font-semibold text-sm sm:text-base disabled:opacity-60 border-none outline-none",
    accent:
      "bg-gradient-to-r from-ds-primary to-ds-accent hover:from-teal-600 hover:to-cyan-600 text-ds-secondary transition-colors duration-200 border-none outline-none  ",
  };

  const animationStyle = {
    scale: "hover:scale-105 transition-transform",
    slide: "hover:translate-x-1 transition-all",
    none: "",
  };

  const disabledStyle =
    " disabled:  disabled:!border-[#6B728080] disabled:opacity-80 disabled:cursor-not-allowed";

  const combinedClass = cn(
    "flex items-center gap-2 cursor-pointer h-auto",
    variantStyle[variant],
    animationStyle[animation],
    disabled && disabledStyle,
    className,
  );

  //  icon logic
  const content = (
    <>
      {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : icon}

      {text}
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
