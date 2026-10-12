import Link from "next/link";
import { experiences } from "@/lib/experience";

export default function ExperienceRail() {
  const preview = experiences.slice(0, 3);

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center border-b border-[rgba(var(--line),0.12)]">
      <div className="container py-20 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">Experience</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Biomedical AI research, procurement products, and software systems.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
              A career path shaped by research experiments, production workflows, and the engineering between them.
            </p>
          </div>

          <Link
            className="text-sm font-medium text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
            href="/experience"
          >
            View full timeline →
          </Link>
        </div>

        <div className="mt-10 border-t border-[rgba(var(--line),0.16)]">
          {preview.map((item, index) => (
            <article
              key={item.id}
              className="grid gap-4 border-b border-[rgba(var(--line),0.14)] py-7 md:grid-cols-[0.24fr_0.38fr_1fr] md:gap-8"
            >
              <div className="text-xs uppercase tracking-[0.14em] text-[rgb(var(--muted))] text-mono">
                {String(index + 1).padStart(2, "0")} · {item.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">{item.organization}</p>
              </div>
              <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">{item.bullets[0]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
