"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

export default function SceneHero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(var(--line),0.10)]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 glow" />

      <div className="container relative z-10 grid min-h-[calc(94svh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.18fr_0.82fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="eyebrow">{site.tagline}</div>

          <h1 className="mt-7 text-[clamp(3.2rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.052em]">
            <span className="block">AI systems,</span>
            <span className="gradient-text block">built end to end.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
            {site.subheadline}
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-[rgba(var(--line),0.16)] pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
        >
          <div className="eyebrow">Research into product</div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">BioEvidence</h2>
          <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
            A biomedical question-answering system where retrieval, reranking, generated answers, and citations can be
            inspected independently—including detailed TREC BioGen runs.
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[rgba(var(--line),0.14)] py-6">
            <div>
              <dt className="text-2xl font-semibold tracking-[-0.035em]">26.8M</dt>
              <dd className="mt-1 text-xs leading-relaxed text-[rgb(var(--muted))]">PubMed documents evaluated</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold tracking-[-0.035em]">TREC 2025</dt>
              <dd className="mt-1 text-xs leading-relaxed text-[rgb(var(--muted))]">Evidence-linked system runs</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a href={site.links.trecDemo} className="font-semibold underline underline-offset-4">
              Open live examples <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </a>
            <Link href="/projects/bioevidence-ai" className="text-[rgb(var(--muted))] underline underline-offset-4">
              Read the case study
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
