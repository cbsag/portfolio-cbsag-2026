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

      <div className="container relative z-10 grid w-full items-center gap-9 py-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <motion.div
          style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
          className="relative flex items-center justify-center text-[rgb(var(--fg))]"
        >
          <div className="absolute h-[20rem] w-[20rem] rounded-full bg-[rgba(var(--accent-b),0.07)] blur-3xl sm:h-[28rem] sm:w-[28rem]" />
          <div
            className="site-signature relative aspect-[618/569] w-[clamp(9rem,28vw,21rem)]"
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
          <div className="eyebrow">{site.role}</div>
          <h1 className="mt-5 max-w-[11ch] text-[clamp(3rem,5.6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            {site.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
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

          <div className="mt-7 text-xs text-[rgb(var(--muted))] text-mono">
            {site.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
