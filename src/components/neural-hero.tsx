"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const frameSize = 420;
const center = frameSize / 2;
const radius = 154;

const nodes = [
  { label: "Query", angle: -98, color: "rgb(var(--accent-b))", delay: 0.1 },
  { label: "Retrieval", angle: -18, color: "rgb(var(--accent-a))", delay: 0.35 },
  { label: "Context", angle: 48, color: "rgb(var(--accent-b))", delay: 0.55 },
  { label: "Grounding", angle: 122, color: "rgb(var(--accent-c))", delay: 0.8 },
  { label: "Answer", angle: 198, color: "rgb(var(--accent-a))", delay: 1.05 }
];

function getCoordinates(angle: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: center + Math.cos(radians) * radius,
    y: center + Math.sin(radians) * radius
  };
}

export default function NeuralHero({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[34rem]", className)}>
      <div className="hero-shell absolute inset-[6%] rounded-full" />
      <div className="absolute inset-[9%] rounded-full border border-white/45 dark:border-white/10" />
      <div className="absolute inset-[17%] rounded-full border border-[rgba(var(--accent-b),0.18)] dark:border-[rgba(var(--accent-b),0.26)]" />
      <div className="absolute inset-[25%] rounded-full border border-white/30 dark:border-white/10" />

      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(var(--accent-b),0.18)] animate-[spin_18s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(var(--accent-a),0.14)] animate-[spin_26s_linear_infinite_reverse]" />

      {nodes.map((node) => {
        const { x, y } = getCoordinates(node.angle);
        const dx = x - center;
        const dy = y - center;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        return (
          <div key={node.label}>
            <div
              className="interface-line absolute left-1/2 top-1/2 h-px rounded-full opacity-80"
              style={{
                width: `${(length / frameSize) * 100}%`,
                transform: `translateY(-50%) rotate(${angle}deg)`,
                transformOrigin: "0 50%"
              }}
            >
              <motion.span
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full shadow-[0_0_18px_rgba(14,165,233,0.7)]"
                style={{ backgroundColor: node.color }}
                animate={{ left: ["0%", "88%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: node.delay
                }}
              />
            </div>

            <motion.div
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/55 bg-white/[0.42] px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] text-zinc-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200"
              style={{
                left: `${(x / frameSize) * 100}%`,
                top: `${(y / frameSize) * 100}%`
              }}
              animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay
              }}
            >
              <span
                className="h-2 w-2 rounded-full shadow-[0_0_14px_rgba(14,165,233,0.55)]"
                style={{ backgroundColor: node.color }}
              />
              <span className="whitespace-nowrap">{node.label}</span>
            </motion.div>
          </div>
        );
      })}

      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(14,165,233,0.10)",
            "0 0 0 18px rgba(14,165,233,0.04)",
            "0 0 0 0 rgba(14,165,233,0.10)"
          ]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.92),rgba(255,255,255,0.38)_45%,rgba(14,165,233,0.16)_75%)] shadow-[0_24px_50px_-26px_rgba(14,165,233,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_42%,rgba(14,165,233,0.18)_72%)]">
        <div className="absolute inset-3 rounded-full border border-[rgba(var(--accent-b),0.26)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">
            Neural
          </div>
          <div className="mt-2 text-lg font-semibold tracking-[0.2em] text-zinc-950 dark:text-zinc-50">
            RAG
          </div>
        </div>
      </div>

      <div className="absolute inset-x-[15%] bottom-[13%] flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
        <span>rank</span>
        <span>ground</span>
        <span>cite</span>
      </div>
    </div>
  );
}
