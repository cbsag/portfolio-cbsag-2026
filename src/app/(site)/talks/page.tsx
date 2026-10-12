import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";

const appearances = [
  {
    year: "2025",
    venue: "BioCreative IX Workshop · IJCAI 2025",
    title: "Agentic and Non-Agentic Multi-Hop Systems for Medical Question Answering",
    text: "Research on agentic evidence search and controlled Wikipedia and PubMed retrieval pipelines for multi-hop medical QA.",
    href: "https://zenodo.org/records/16875905"
  },
  {
    year: "2025",
    venue: "TREC BioGen · NIST",
    title: "Modular Sparse and Dense Retrieval for Evidence-Constrained Biomedical Question Answering",
    text: "A system description covering sparse and dense retrieval, reranking, evidence-constrained generation, and evaluation.",
    href: "/papers/trec-2025.pdf"
  }
];

export default function TalksPage() {
  return (
    <div className="container pt-10">
      <PageIntro
        eyebrow="Research dissemination"
        title="Talks & appearances"
        desc="Published workshop and shared-task work connected to my research in medical question answering and evidence-grounded retrieval."
      />

      <div className="mt-10 grid gap-5">
        {appearances.map((item, index) => (
          <Reveal key={item.title} delay={0.04 * index}>
            <Panel className="panel-tint panel-tint-publication p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Badge className="w-fit">{item.year}</Badge>
                <div className="max-w-3xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--muted))] text-mono">
                    {item.venue}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{item.text}</p>
                  <a href={item.href} className="mt-5 inline-flex text-sm font-semibold underline underline-offset-4">
                    Open publication →
                  </a>
                </div>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
