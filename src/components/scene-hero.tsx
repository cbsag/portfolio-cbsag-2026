"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

export default function SceneHero() {
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 460], [0, -150]);
  const logoScale = useTransform(scrollY, [0, 460], [1, 0.62]);
  const logoOpacity = useTransform(scrollY, [0, 320, 460], [1, 0.82, 0]);
  const copyY = useTransform(scrollY, [0, 460], [0, -46]);

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-[rgba(var(--line),0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-28" />
      <div className="pointer-events-none absolute inset-0 glow" />

      <div className="container relative z-10 grid w-full items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
          className="relative flex items-center justify-center text-[rgb(var(--fg))]"
        >
          <div className="absolute h-[20rem] w-[20rem] rounded-full bg-[rgba(var(--accent-b),0.07)] blur-3xl sm:h-[28rem] sm:w-[28rem]" />
          <div
            className="site-signature relative aspect-[618/569] w-[clamp(10rem,30vw,22rem)]"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          style={{ y: copyY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="eyebrow">Researcher · engineer · builder</div>
          <h1 className="mt-6 text-[clamp(3.15rem,6.5vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
            <span className="block">Hard questions.</span>
            <span className="gradient-text block">Working systems.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
            I follow ideas from research and evaluation through APIs and interfaces—building machine-learning products
            that can be tested, inspected, and used.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#featured-work">
              <AccentButton>
                View featured work
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

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[rgb(var(--muted))] text-mono">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {site.availability}
            </span>
            <span>{site.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
