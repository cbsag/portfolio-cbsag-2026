export default function FocusStrip() {
  return (
    <section className="relative">
      <div className="container py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
              Current focus
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Evidence-grounded AI, from research to deployment
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[rgb(var(--muted))]">
              I defended my MCompSc thesis on evidence-grounded biomedical question answering in August 2026. I am now
              focused on ML, NLP, retrieval, AI evaluation, and software systems that need strong engineering.
            </p>

            <div className="mt-6 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
              <div>- Open to full-time AI/ML, NLP, information retrieval, and software engineering roles</div>
              <div>- Retrieval, ranking, evaluation, and evidence-grounded language systems</div>
              <div>- End-to-end delivery spanning modeling, APIs, dashboards, and analysis tooling</div>
            </div>
          </div>

          <div className="interface-panel panel-tint panel-tint-project p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
              What I bring
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
              <div>
                <span className="font-medium text-[rgb(var(--fg))]">Applied AI research:</span> model fine-tuning,
                sequence labeling, information extraction, retrieval, and QA system design.
              </div>
              <div>
                <span className="font-medium text-[rgb(var(--fg))]">Evaluation and analysis:</span> shared-task
                baselines, error analysis, LLM and human feedback loops, and inspection dashboards.
              </div>
              <div>
                <span className="font-medium text-[rgb(var(--fg))]">Software delivery:</span> Python, React, Node.js,
                APIs, cloud workflows, and practical tools that make models usable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
