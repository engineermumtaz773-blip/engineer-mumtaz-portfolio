import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, asChild, variant = "primary", size = "md", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20",
        variant === "primary" && "bg-brand text-white shadow-[0_14px_35px_-15px_rgba(37,99,235,.85)] hover:-translate-y-0.5 hover:bg-brand-dark",
        variant === "secondary" && "border border-slate-200 bg-white text-navy shadow-sm hover:-translate-y-0.5 hover:border-blue-200 hover:text-brand",
        variant === "ghost" && "text-slate-600 hover:bg-slate-100 hover:text-navy",
        variant === "dark" && "border border-white/15 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/16",
        size === "sm" && "h-10 px-4 text-sm",
        size === "md" && "h-12 px-5 text-sm",
        size === "lg" && "h-14 px-7 text-base",
        className
      )}
      {...props}
    />
  );
}
