import { cn } from "@/lib/utils";

export default function AccentButton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-xl bg-[rgb(var(--fg))] px-5 text-sm font-semibold text-[rgb(var(--bg))]",
        "transition hover:-translate-y-0.5 hover:opacity-90",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
