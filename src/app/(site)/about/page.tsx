import AboutProfileColumn from "@/components/about-profile-column";
import PageIntro from "@/components/page-intro";
import SectionHeader from "@/components/section-header";
import { site } from "@/lib/site";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/reveal";
import Link from "next/link";
import { experiences } from "@/lib/experience";

export default function AboutPage() {
  const snapshot = experiences;

  return (
    <div className="container pt-10">
      <PageIntro
        eyebrow="Profile"
        title="About"
        desc="An AI/ML engineer who moves comfortably between experiments, evaluation, backend services, and product interfaces."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="order-2 space-y-8 lg:order-1">
          <Reveal>
            <Panel className="panel-tint panel-tint-project p-7 sm:p-8">
              <div className="eyebrow">About me</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                I connect model behavior to the product around it.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-200 sm:text-base">
                I&apos;m {site.name}, an AI/ML engineer with a Master of Computer Science from Concordia University. My
                work includes model training and evaluation, retrieval and LLM systems, APIs, and user-facing
                applications across research and product environments.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                My thesis on evidence-grounded biomedical question answering brought together retrieval, reranking,
                generation, citation validation, and stage-by-stage evaluation. Before that, I built procurement
                workflows and GCP-backed integrations for Kissflow, ML research pipelines, and interactive software.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {site.focusAreas.map((area) => (
                  <Badge key={area} className="text-mono">
                    {area}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/cv"
                  className="inline-flex items-center rounded-xl bg-[rgb(var(--fg))] px-4 py-2 font-medium text-[rgb(var(--bg))]"
                >
                  View CV
                </Link>
                <a
                  href={site.links.linkedin}
                  className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 py-2 font-medium text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
                >
                  LinkedIn
                </a>
              </div>
            </Panel>
          </Reveal>

          <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
            <div>
              <SectionHeader
                eyebrow="Experience"
                title="Snapshot from my CV"
                desc="The research, product, and software roles that shaped how I work."
              />
              <Reveal>
                <Panel className="panel-tint panel-tint-experience p-6">
                  <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    {snapshot.map((item) => (
                      <div key={item.id} className="border-b border-[rgba(var(--line),0.08)] pb-4 last:border-b-0 last:pb-0">
                        <div className="font-medium text-[rgb(var(--fg))]">{item.role}</div>
                        <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                          {item.organization} · {item.location}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400 text-mono">
                          {item.period}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/experience" className="mt-5 inline-flex text-sm underline underline-offset-4">
                    View full experience timeline →
                  </Link>
                </Panel>
              </Reveal>
            </div>

            <div className="space-y-8">
              <div>
                <SectionHeader
                  eyebrow="Approach"
                  title="How I approach systems"
                  desc="The habits I bring to machine learning and software delivery."
                />
                <Reveal>
                  <Panel className="panel-tint panel-tint-project p-6">
                    <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                      <div>
                        <span className="font-medium text-[rgb(var(--fg))]">Separate the stages.</span> Retrieval,
                        modeling, grounding, and citation behavior need their own measurements and failure analysis.
                      </div>
                      <div>
                        <span className="font-medium text-[rgb(var(--fg))]">Make behavior inspectable.</span> I build
                        evaluation views, tooling, and APIs that make model decisions easier to understand.
                      </div>
                      <div>
                        <span className="font-medium text-[rgb(var(--fg))]">Finish the product path.</span> Strong
                        models still need reliable services, validations, interfaces, and thoughtful user workflows.
                      </div>
                    </div>
                  </Panel>
                </Reveal>
              </div>

              <div>
                <SectionHeader eyebrow="Links" title="Where to find me" desc="The fastest routes to my work, writing, and contact details." />
                <Reveal>
                  <Panel className="panel-tint panel-tint-publication p-5">
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.resume}
                      >
                        CV
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={`mailto:${site.email}`}
                      >
                        Email
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.github}
                      >
                        GitHub
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.linkedin}
                      >
                        LinkedIn
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.scholar}
                      >
                        Google Scholar
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.thesis}
                      >
                        Published thesis
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.bioEvidence}
                      >
                        BioEvidence
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.trecDemo}
                      >
                        TREC Examples
                      </a>
                    </div>
                  </Panel>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal delay={0.04}>
            <AboutProfileColumn
              name={site.name}
              role={site.role}
              location={site.location}
              availability={site.currentFocus.label}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
