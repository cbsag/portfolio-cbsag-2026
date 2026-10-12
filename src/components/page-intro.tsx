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
    <div className={cn("relative border-b border-[rgba(var(--line),0.16)] px-0 py-8 sm:py-10", className)}>
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <div className="eyebrow">{eyebrow}</div>
        ) : null}
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h1>
        {desc ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
            {desc}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3 text-sm">{actions}</div> : null}
      </div>
    </div>
  );
}
