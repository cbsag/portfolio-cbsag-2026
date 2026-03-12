export default function FocusStrip() {
  return (
    <section className="relative">
      <div className="container py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
              Current focus
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Retrieval, diagnostics, evaluation</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[rgb(var(--muted))]">
              Systems that are inspectable: stronger retrieval, clearer evidence paths, and outputs that are easier to
              trust.
            </p>

            <div className="mt-6 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
              <div>• Evidence-constrained biomedical QA and RAG evaluation</div>
              <div>• Retrieval ranking, citation faithfulness, and answer reliability</div>
              <div>• NLP signals like entities, negation, scope, and failure traces</div>
            </div>
          </div>

          <div className="interface-panel panel-tint panel-tint-project p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
              What I am building now
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
              <div>
                <span className="font-medium text-[rgb(var(--fg))]">Biomedical RAG systems:</span> retrieval +
                generation pipelines with transparent citation flow.
              </div>
              <div>
                <span className="font-medium text-[rgb(var(--fg))]">Evaluation tooling:</span> better debugging for
                retrieval quality, hallucination risk, and evidence coverage.
              </div>
              <div>
                <span className="font-medium text-[rgb(var(--fg))]">NLP diagnostics:</span> entity, negation, and
                scope signals to improve model reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
