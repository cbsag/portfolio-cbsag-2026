import { cn } from "@/lib/utils";

export default function AccentButton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-2xl bg-[rgb(var(--fg))] px-5 text-sm font-semibold text-[rgb(var(--bg))]",
        "shadow-[0_16px_32px_-20px_rgba(17,24,39,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-20px_rgba(17,24,39,0.95)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
