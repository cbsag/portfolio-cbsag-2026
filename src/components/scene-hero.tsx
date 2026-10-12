"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BrainCircuit, Braces, Database, Gauge } from "lucide-react";
import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

const systemLayers = [
  {
    icon: Database,
    title: "Retrieve",
    detail: "BM25 · MedCPT · FAISS",
    tone: "bg-[rgba(var(--accent-a),0.12)] text-[rgb(var(--accent-a))]"
  },
  {
    icon: BrainCircuit,
    title: "Model",
    detail: "PyTorch · Qwen · BERT",
    tone: "bg-[rgba(var(--accent-b),0.12)] text-[rgb(var(--accent-b))]"
  },
  {
    icon: Gauge,
    title: "Evaluate",
    detail: "Grounding · citations · failure analysis",
    tone: "bg-[rgba(var(--accent-c),0.12)] text-[rgb(var(--accent-c))]"
  },
  {
    icon: Braces,
    title: "Ship",
    detail: "APIs · Next.js · GCP",
    tone: "bg-[rgba(var(--fg),0.07)] text-[rgb(var(--fg))]"
  }
];

export default function SceneHero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(var(--line),0.10)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-45" />
      <div className="pointer-events-none absolute inset-0 glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-pattern opacity-65" />

      <div className="container relative z-10 grid min-h-[calc(92svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="eyebrow">{site.tagline}</div>

          <h1 className="mt-7 text-[clamp(3.25rem,8vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            AI systems,
            <br />
            <span className="gradient-text"> built end to end.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
            {site.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#enter">
              <AccentButton>
                Explore selected work
                <ArrowDown className="ml-2 h-4 w-4" />
              </AccentButton>
            </a>
            <a
              href={site.links.resume}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-[rgba(var(--line),0.18)] bg-[rgba(var(--panel),0.58)] px-5 text-sm font-semibold text-[rgb(var(--fg))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--line),0.28)]"
            >
              View CV
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[rgb(var(--muted))] text-mono">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {site.availability}
            </span>
            <span>{site.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-[rgba(var(--accent-b),0.10)] blur-3xl" />
          <div className="interface-panel overflow-hidden p-3 sm:p-4">
            <div className="rounded-[1.2rem] border border-white/10 bg-[rgb(var(--fg))] p-5 text-[rgb(var(--bg))] dark:bg-white/[0.06] dark:text-[rgb(var(--fg))]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-mono">System map</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">Research → reliable product</div>
                </div>
                <div className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] opacity-70 text-mono">
                  04 layers
                </div>
              </div>

              <div className="mt-7 h-px bg-gradient-to-r from-emerald-400 via-blue-400 to-orange-400 opacity-80" />

              <div className="mt-6 grid gap-3">
                {systemLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  return (
                    <motion.div
                      key={layer.title}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.25 + index * 0.08 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-3.5"
                    >
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${layer.tone}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{layer.title}</div>
                        <div className="mt-0.5 truncate text-xs opacity-60 text-mono">{layer.detail}</div>
                      </div>
                      <span className="ml-auto text-xs opacity-35 text-mono">0{index + 1}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 px-2 pb-1 pt-4 text-center">
              <div>
                <div className="text-lg font-semibold tracking-tight">MCompSc</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">Research</div>
              </div>
              <div className="border-x border-[rgba(var(--line),0.10)]">
                <div className="text-lg font-semibold tracking-tight">5 roles</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">Experience</div>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight">2 papers</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">Published</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
