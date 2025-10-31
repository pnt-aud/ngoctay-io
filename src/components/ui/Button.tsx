import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

function getVariantClasses(variant: ButtonVariant) {
  if (variant === "secondary") {
    return "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50";
  }

  return "bg-blue-600 text-white hover:bg-blue-500";
}

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition-colors ${getVariantClasses(
        variant
      )} ${className}`.trim()}
      {...props}
    />
  );
}
