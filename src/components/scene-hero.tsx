"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

export default function SceneHero() {
  const { scrollY } = useScroll();
  const wordmarkY = useTransform(scrollY, [0, 460], [0, 350]);
  const logoScale = useTransform(scrollY, [0, 460], [1, 0.2]);
  const nameX = useTransform(scrollY, [0, 460], [0, -140]);
  const nameScale = useTransform(scrollY, [0, 460], [1, 0.28]);
  const wordmarkOpacity = useTransform(scrollY, [0, 260, 460], [1, 1, 0]);
  const copyY = useTransform(scrollY, [0, 460], [0, -46]);
  const copyOpacity = useTransform(scrollY, [0, 32, 100], [1, 1, 0]);

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-[rgba(var(--line),0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-28" />
      <div className="pointer-events-none absolute inset-0 glow" />

      <div className="container relative z-10 w-full py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="grid grid-cols-[clamp(4rem,14vw,12.5rem)_minmax(0,1fr)] items-start gap-x-[clamp(0.2rem,0.75vw,0.75rem)]">
            <span className="sr-only">{site.name}</span>
            <motion.span
              style={{ y: wordmarkY, scale: logoScale, opacity: wordmarkOpacity }}
              className="site-signature relative aspect-[618/569] w-full origin-top-left text-[rgb(var(--fg))]"
              aria-hidden="true"
            />
            <motion.span
              style={{
                x: nameX,
                y: wordmarkY,
                scale: nameScale,
                opacity: wordmarkOpacity,
                transformOrigin: "left top"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0 text-[clamp(2.25rem,8.8vw,6.1rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
              aria-hidden="true"
            >
              <span className="flex h-[clamp(3.68rem,12.89vw,11.51rem)] items-end whitespace-nowrap">
                anesh
              </span>
              <span className="block whitespace-nowrap">Chandrasekar</span>
            </motion.span>
          </h1>

          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="mt-7 grid grid-cols-[clamp(4rem,14vw,12.5rem)_minmax(0,1fr)] gap-x-[clamp(0.2rem,0.75vw,0.75rem)]"
          >
            <div className="col-span-2 sm:col-span-1 sm:col-start-2">
              <div className="eyebrow">{site.role}</div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
                {site.introduction}
              </p>

              {site.currentFocus.active ? (
                <div className="mt-5 inline-flex items-center gap-2.5 text-sm font-medium text-[rgb(var(--fg))]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                  {site.currentFocus.label}
                </div>
              ) : null}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#featured-work">
                  <AccentButton>
                    View projects
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </AccentButton>
                </a>
                <a
                  href={site.links.resume}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[rgba(var(--line),0.20)] px-5 text-sm font-semibold text-[rgb(var(--fg))] transition hover:border-[rgba(var(--line),0.36)]"
                >
                  View CV
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 text-xs text-[rgb(var(--muted))] text-mono">{site.location}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
