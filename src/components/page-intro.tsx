import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  className?: string;
  actions?: React.ReactNode;
};

export default function PageIntro({ eyebrow, title, desc, className, actions }: PageIntroProps) {
  return (
    <div className={cn("flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--accent-a))] dark:text-cyan-300/90">
            {eyebrow.toUpperCase()}
          </div>
        ) : null}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {desc ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            {desc}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3 text-sm">{actions}</div> : null}
    </div>
  );
}
