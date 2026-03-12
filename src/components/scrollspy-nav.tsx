"use client";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
type Item = { id: string; label: string };

export default function ScrollSpyNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.2, 0.35] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return (
    <div className="sticky top-28 z-40 hidden h-fit xl:block">
      <div className="rounded-[1.5rem] border border-white/70 bg-white/75 p-2 text-sm shadow-[0_20px_45px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/[0.65] dark:shadow-[0_22px_48px_-30px_rgba(2,8,23,0.75)]">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={cn(
              "block rounded-xl px-3 py-2 text-zinc-600 transition hover:bg-white hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-zinc-50",
              active === i.id && "bg-white text-zinc-950 shadow-[0_12px_24px_-18px_rgba(15,23,42,0.45)] dark:bg-white/10 dark:text-zinc-50"
            )}
          >
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}
