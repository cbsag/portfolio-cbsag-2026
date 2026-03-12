import { cn } from "@/lib/utils";

export default function AccentButton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-xl p-[1px]",
        "bg-[linear-gradient(90deg,rgba(var(--accent-a),0.95),rgba(var(--accent-b),0.95),rgba(var(--accent-c),0.9))]",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-[11px] border border-transparent bg-[rgb(var(--bg))]",
          "px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))]"
        )}
      >
        {children}
      </span>
    </span>
  );
}
