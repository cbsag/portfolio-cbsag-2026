import Link from "next/link";
import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import PipelineStrip from "@/components/pipeline";

const themes = [
  {
    title: "Evidence-grounded QA",
    text: "Retrieve and rerank evidence before generation, then verify whether the final answer is supported by the cited sources."
  },
  {
    title: "Stage-aware evaluation",
    text: "Separate retrieval, answer quality, grounding, and citation behavior so failures can be traced to the right part of the system."
  },
  {
    title: "NLP under imbalance",
    text: "Compare BERT-family, CRF, hierarchical, and PPO approaches using per-label behavior and detailed error analysis."
  },
  {
    title: "Repeatable inference",
    text: "Run quantized language-model experiments through vLLM and Slurm on V100/A100 GPUs at evaluation scale."
  }
];

export default function ResearchPage() {
  return (
    <div className="container pt-10">
      <PageIntro
        eyebrow="Research profile"
        title="Research"
        desc="My graduate work focused on evidence-grounded biomedical question answering: designing systems that retrieve well, answer carefully, cite correctly, and reveal where they fail."
        actions={
          <>
            <Link href="/publications" className="underline underline-offset-4">Publications</Link>
            <Link href="/projects/trec-biogen" className="underline underline-offset-4">TREC case study</Link>
          </>
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <Reveal>
          <Panel className="panel-tint panel-tint-project p-7 sm:p-8">
            <div className="eyebrow">Master&apos;s thesis</div>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Evidence-Grounded Biomedical Question Answering: Design, Analysis, and Evaluation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
              Completed at Concordia University and defended in August 2026. The work joins biomedical retrieval,
              reranking, language-model generation, citation validation, and diagnostic evaluation into one system view.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Biomedical QA", "Information retrieval", "RAG", "Evaluation", "Citation validation"].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={0.04}>
          <Panel className="panel-tint panel-tint-publication p-7 sm:p-8">
            <div className="eyebrow">Research to product</div>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">BioEvidence</h2>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
              The research pipeline became a working application with independently inspectable stages, biomedical API
              integrations, Supabase authentication and data, and a Next.js interface.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a className="font-semibold underline underline-offset-4" href="https://bioevidence.cbsag.me/ask?mode=examples">
                Open examples
              </a>
              <Link className="font-semibold underline underline-offset-4" href="/projects/bioevidence-ai">
                Read case study
              </Link>
            </div>
          </Panel>
        </Reveal>
      </div>

      <section className="mt-16">
        <div className="eyebrow">Method</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">A complete evidence path</h2>
        <div className="mt-8">
          <PipelineStrip />
        </div>
      </section>

      <section className="mt-16 border-t border-[rgba(var(--line),0.10)] pt-10">
        <div className="eyebrow">Research themes</div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {themes.map((theme, index) => (
            <Reveal key={theme.title} delay={0.03 * index}>
              <Panel className="h-full p-6">
                <div className="text-xs font-bold text-[rgb(var(--accent-b))] text-mono">0{index + 1}</div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{theme.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{theme.text}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
