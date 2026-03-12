import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section className="relative">
      <div className="container py-16">
        <div className="interface-panel panel-tint panel-tint-publication p-8">
          <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">Contact</div>
          <div className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s talk</div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))]">
            If you care about retrieval quality, biomedical NLP, or building practical language systems, I&apos;d be
            happy to connect.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`}>
              <AccentButton>Email</AccentButton>
            </a>
            <a
              href={site.links.trecDemo}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
            >
              TREC Viewer
            </a>
            <a
              href={site.links.github}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
