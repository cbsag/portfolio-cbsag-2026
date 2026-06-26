"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Panel } from "@/components/ui/panel";

type AboutProfileColumnProps = {
  name: string;
  role: string;
  location: string;
  availability: string;
};

export default function AboutProfileColumn({ name, role, location, availability }: AboutProfileColumnProps) {
  const [isCompressed, setIsCompressed] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompressed(window.scrollY > 160);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "lg:sticky lg:top-24 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isCompressed && "lg:-translate-y-2"
      )}
    >
      <Panel className="panel-tint panel-tint-publication overflow-hidden p-3 sm:p-4">
        <div
          className={cn(
            "relative aspect-[4/5] origin-top overflow-hidden transition-[transform,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isCompressed ? "rounded-[1.1rem] lg:scale-[0.92]" : "rounded-[1.65rem]"
          )}
        >
          <Image
            src="/profile/profil2.png"
            alt={`Portrait of ${name}`}
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div
            className={cn(
              "absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-[rgba(12,20,33,0.72)] px-4 py-3 text-white shadow-[0_18px_40px_-28px_rgba(2,8,23,0.9)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isCompressed && "lg:-translate-y-1 lg:scale-[0.98]"
            )}
          >
            <div className="text-xs uppercase tracking-[0.18em] text-white/70 text-mono">Profile</div>
            <div className="mt-1 text-lg font-semibold tracking-tight">{name}</div>
            <div className="mt-1 text-sm text-white/78">{role}</div>
          </div>
        </div>
      </Panel>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <Panel className="panel-tint panel-tint-experience p-4">
          <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
            Based in
          </div>
          <div className="mt-2 text-base font-semibold tracking-tight">{location}</div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Research-minded engineering work, with strong delivery and evaluation habits.
          </p>
        </Panel>

        <Panel className="panel-tint panel-tint-project p-4">
          <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
            Current status
          </div>
          <div className="mt-2 text-base font-semibold tracking-tight">Finishing my thesis</div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{availability}</p>
        </Panel>
      </div>
    </div>
  );
}
