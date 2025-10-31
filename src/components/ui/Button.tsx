import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

function getVariantClasses(variant: ButtonVariant) {
  if (variant === "secondary") {
    return "bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50";
  }

  return "bg-indigo-600 text-white hover:bg-indigo-500";
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
