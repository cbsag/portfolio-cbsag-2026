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
  const nameOpacity = useTransform(scrollY, [0, 300, 460], [1, 0.9, 0]);

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-[rgba(var(--line),0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-28" />
      <div className="pointer-events-none absolute inset-0 glow" />

      <div className="container relative z-10 w-full py-14">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-[clamp(2rem,8.2vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            <span className="sr-only">{site.name}</span>
            <span aria-hidden="true">
              <span className="flex items-center gap-[0.08em]">
                <motion.span
                  style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
                  className="site-signature relative aspect-[618/569] w-[1.12em] shrink-0 origin-center text-[rgb(var(--fg))]"
                />
                <motion.span
                  style={{ y: copyY, opacity: nameOpacity }}
                  className="whitespace-nowrap"
                >
                  anesh
                </motion.span>
              </span>
              <motion.span
                style={{ y: copyY, opacity: nameOpacity }}
                className="block whitespace-nowrap"
              >
                Chandrasekar
              </motion.span>
            </span>
          </h1>

          <motion.div
            style={{ y: copyY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl"
          >
            <div>
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
