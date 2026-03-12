import SectionHeader from "@/components/section-header";
import { site } from "@/lib/site";
import { Panel } from "@/components/ui/panel";
import Reveal from "@/components/reveal";
import Link from "next/link";
import { experiences } from "@/lib/experience";

export default function AboutPage() {
  const snapshot = experiences.slice(0, 4);

  return (
    <div className="container pt-10">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        The short version: I build retrieval-first AI systems and production software, with research depth and
        engineering delivery.
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <SectionHeader
            eyebrow="Focus"
            title="What I work on"
            desc="TREC-style retrieval systems, evidence-linked QA, output viewers, and evaluation workflows."
          />
          <Reveal>
            <Panel className="panel-tint panel-tint-project p-6">
              <p className="leading-relaxed text-zinc-700 dark:text-zinc-200">
                I&apos;m {site.name}. I&apos;m a graduate student at Concordia working across biomedical retrieval, RAG,
                and practical NLP tooling, with a strong interest in bioinformatics-adjacent problems. My recent work
                focuses on systems where the evidence path is visible and the outputs can be inspected by humans. That
                includes the TREC BioGen Task-B pipeline, a live results viewer, and diagnostics for retrieval and
                citation quality.
              </p>
            </Panel>
          </Reveal>
        </div>

        <div>
          <SectionHeader eyebrow="Experience" title="Snapshot from my CV" />
          <Reveal>
            <Panel className="panel-tint panel-tint-experience p-6">
              <div className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {snapshot.map((item) => (
                  <div key={item.id}>
                    <span className="font-medium">{item.role}</span> · {item.organization}
                    <span className="ml-2 text-zinc-500 dark:text-zinc-400">({item.period})</span>
                  </div>
                ))}
              </div>
              <Link href="/experience" className="mt-4 inline-flex text-sm underline underline-offset-4">
                View full experience timeline →
              </Link>
            </Panel>
          </Reveal>
        </div>

        <div>
          <SectionHeader eyebrow="Links" title="Where to find me" />
          <Reveal>
            <Panel className="panel-tint panel-tint-publication p-5">
              <div className="flex flex-wrap gap-4 text-sm text-zinc-700 dark:text-zinc-200">
                <a className="underline underline-offset-4" href={`mailto:${site.email}`}>Email</a>
                <a className="underline underline-offset-4" href={site.links.github}>GitHub</a>
                <a className="underline underline-offset-4" href={site.links.linkedin}>LinkedIn</a>
                <a className="underline underline-offset-4" href={site.links.trecDemo}>TREC Viewer</a>
              </div>
            </Panel>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
