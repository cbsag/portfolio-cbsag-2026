"use client";

import { motion } from "framer-motion";

const steps = [
  {
    k: "01",
    title: "Retrieve",
    desc: "Find the right documents, chunks, and signals before generation starts."
  },
  {
    k: "02",
    title: "Ground",
    desc: "Shape context so the model stays tied to evidence instead of drifting."
  },
  {
    k: "03",
    title: "Generate",
    desc: "Use LLMs where they help, but keep outputs readable, constrained, and useful."
  },
  {
    k: "04",
    title: "Evaluate",
    desc: "Measure failure modes, citation quality, and where trust breaks down."
  }
];

export default function PipelineStrip() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-2 right-2 top-2 hidden h-px interface-line md:block" />

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.k}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 * index }}
            className="relative border-l border-white/45 pl-5 dark:border-white/10 md:border-l-0 md:pl-0 md:pt-8"
          >
            <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-b))] shadow-[0_0_16px_rgba(14,165,233,0.65)] md:left-0 md:top-0 md:h-3 md:w-3" />

            <div className="text-[11px] font-semibold tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
              {step.k}
            </div>
            <div className="mt-3 text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {step.title}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
