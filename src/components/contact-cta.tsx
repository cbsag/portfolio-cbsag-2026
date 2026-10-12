import AccentButton from "@/components/accent-button";
import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section className="relative">
      <div className="container py-20">
        <div className="interface-panel panel-tint panel-tint-publication p-8 sm:p-10">
          <div className="eyebrow">Contact</div>
          <div className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Building an AI product or team?</div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
            I&apos;m open to AI/ML and software engineering roles where thoughtful evaluation and reliable delivery both matter.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`}>
              <AccentButton>Email</AccentButton>
            </a>
            <a
              href={site.links.resume}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
            >
              View CV
            </a>
            <a
              href={site.links.bioEvidence}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
            >
              BioEvidence
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
