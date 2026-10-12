import { cn } from "@/lib/utils";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(var(--line),0.12)] bg-[rgba(var(--panel-a),0.40)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.10em] text-[rgb(var(--muted))]",
        className
      )}
      {...props}
    />
  );
}
