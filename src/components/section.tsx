import { cn } from "@/lib/utils";
export default function Section({ id, children, className }:{
  id?: string; children: React.ReactNode; className?: string;
}) {
  return <section id={id} className={cn("py-14", className)}>{children}</section>;
}
