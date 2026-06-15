"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import RetrievalGlyph from "@/components/retrieval-glyph";
import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

export default function SceneHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 520], [0, -120]);
  const scale = useTransform(scrollY, [0, 520], [1, 0.82]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0.92]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 dark:opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06] dark:opacity-[0.10]" />
      <div className="pointer-events-none absolute inset-0 glow opacity-85 dark:opacity-95 animate-drift" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-pattern opacity-75 dark:opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--accent-b), 0.18) 0%, rgba(var(--accent-a), 0.12) 28%, rgba(var(--accent-c), 0.08) 52%, transparent 72%)"
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(var(--panel-a),0.22)] to-transparent dark:from-transparent" />

      <motion.div style={{ y, scale, opacity }} className="relative z-10 flex min-h-[100svh] items-center justify-center">
        <div className="container w-full py-12">
          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">{site.tagline}</div>

            <div className="mt-8 w-full">
              <RetrievalGlyph />
            </div>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{site.headline}</h1>
            <p className="mt-4 max-w-[640px] text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
              {site.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#enter">
                <AccentButton>View Work</AccentButton>
              </a>
              <a
                href={site.links.resume}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
              >
                View CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-[rgb(var(--muted))]">
              <span className="text-mono">{site.role}</span>
              <span className="h-1 w-1 rounded-full bg-[rgba(var(--line),0.18)]" />
              <span>{site.location}</span>
              <span className="h-1 w-1 rounded-full bg-[rgba(var(--line),0.18)]" />
              <span>{site.availability}</span>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs text-[rgb(var(--muted))]">
              <span className="text-mono">Scroll to enter</span>
              <span className="relative inline-block h-[18px] w-[10px] rounded-full border border-[rgba(var(--line),0.18)]">
                <span className="absolute left-1/2 top-[4px] h-[4px] w-[4px] rounded-full bg-[rgba(var(--line),0.35)] animate-breathe" />
              </span>
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
