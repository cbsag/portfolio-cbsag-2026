import * as React from "react";
import { cn } from "@/lib/utils";
type Variant = "default" | "outline" | "ghost" | "accent";
type Size = "default" | "sm" | "icon";

export function Button({
  className, variant = "default", size = "default", ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium tracking-tight transition duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--accent-b),0.35)]",
        "disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" &&
          "border border-[rgba(var(--line),0.14)] bg-[rgba(var(--panel-a),0.08)] text-[rgb(var(--fg))] hover:bg-[rgba(var(--panel-a),0.12)]",
        variant === "accent" &&
          "border border-transparent bg-[rgb(var(--bg))] text-[rgb(var(--fg))] hover:bg-[rgba(var(--panel-a),0.08)]",
        variant === "outline" &&
          "border border-[rgba(var(--line),0.18)] bg-transparent text-[rgb(var(--fg))] hover:bg-[rgba(var(--panel-a),0.06)]",
        variant === "ghost" &&
          "text-[rgb(var(--muted))] hover:bg-[rgba(var(--panel-a),0.06)] hover:text-[rgb(var(--fg))]",
        size === "default" && "h-10 px-4",
        size === "sm" && "h-9 px-4 text-[13px]",
        size === "icon" && "h-9 w-9",
        className
      )}
      {...props}
    />
  );
}
