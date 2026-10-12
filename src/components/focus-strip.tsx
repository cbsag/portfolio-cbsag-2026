const capabilities = [
  {
    number: "01",
    title: "Train and evaluate models",
    text: "Build NLP and machine-learning experiments, then inspect per-label behavior, class imbalance, and the failure cases hidden by a single score.",
    tools: "PyTorch · Hugging Face · BERT · scikit-learn"
  },
  {
    number: "02",
    title: "Retrieve and verify evidence",
    text: "Design sparse and dense retrieval pipelines, rerank candidates, and check whether generated claims are supported by the sources they cite.",
    tools: "BM25 · Pyserini · MedCPT · FAISS · RAG"
  },
  {
    number: "03",
    title: "Ship the complete workflow",
    text: "Connect model behavior to reliable APIs, data, interfaces, and deployment so the work can be used and inspected outside a notebook.",
    tools: "Python · TypeScript · Next.js · REST · GCP"
  }
];

export default function FocusStrip() {
  return (
    <section className="relative border-b border-[rgba(var(--line),0.12)]">
      <div className="container py-20 sm:py-24">
        <div className="max-w-3xl">
          <div className="eyebrow">Capabilities</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            What I build—and how I evaluate it.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
            My work connects modeling, retrieval, evaluation, and software delivery. These are the three parts of that
            practice, stated without a wall of technology names.
          </p>
        </div>

        <div className="mt-10 grid border-y border-[rgba(var(--line),0.16)] md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className={`py-7 md:px-7 ${index > 0 ? "border-t border-[rgba(var(--line),0.14)] md:border-l md:border-t-0" : ""}`}
            >
              <div className="text-xs font-semibold text-[rgb(var(--accent-b))] text-mono">{capability.number}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em]">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{capability.text}</p>
              <p className="mt-5 text-xs leading-relaxed text-[rgb(var(--muted))] text-mono">{capability.tools}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
