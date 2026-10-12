export default function FocusStrip() {
  return (
    <section className="relative border-y border-[rgba(var(--line),0.08)] bg-[rgba(var(--panel),0.34)]">
      <div className="container py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">Capabilities</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Broad AI/ML foundations, with retrieval depth.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
              My work spans classical machine learning, transformer models, retrieval, agentic systems, and the software
              needed to make those systems observable and useful.
            </p>

            <div className="mt-7 space-y-3 text-sm leading-relaxed text-[rgb(var(--muted))] text-mono">
              <div>01 · Model training, evaluation, and error analysis</div>
              <div>02 · Retrieval, reranking, RAG, and agentic tool use</div>
              <div>03 · Python and TypeScript delivery across APIs and interfaces</div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="signal-card p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent-a))] text-mono">
                AI & machine learning
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                PyTorch, scikit-learn, Hugging Face, BERT, BioBERT, CRF, NLP, text classification, and NER.
              </p>
            </div>
            <div className="signal-card p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent-b))] text-mono">
                Retrieval & AI systems
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                BM25, Pyserini/Lucene, MedCPT, FAISS, cross-encoder reranking, LangChain, LangGraph, MCP, and smolagents.
              </p>
            </div>
            <div className="signal-card p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent-c))] text-mono">
                Software & cloud
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                REST APIs, Flask, Node.js, Next.js, Docker, GCP, AWS, Supabase, Linux, and Git.
              </p>
            </div>
            <div className="signal-card p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--fg))] text-mono">
                Model infrastructure
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                Slurm, vLLM, Ollama, GPU inference, repeatable evaluation, and inspectable failure analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
