import { cn } from "@/lib/utils";
export function Panel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "interface-panel",
        className
      )}
      {...props}
    />
  );
}
