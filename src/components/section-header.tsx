import { cn } from "@/lib/utils";
export default function SectionHeader({ eyebrow, title, desc, className }:{
  eyebrow?: string; title: string; desc?: string; className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      {eyebrow ? (
        <div className="eyebrow">{eyebrow}</div>
      ) : null}
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">{desc}</p> : null}
    </div>
  );
}
