import Link from "next/link";
import { experiences } from "@/lib/experience";

export default function ExperienceRail() {
  const preview = experiences.slice(0, 3);

  return (
    <section className="relative">
      <div className="container py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">Experience</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Research, teaching, and industry</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))]">
              Full CV roles, condensed into a clean timeline.
            </p>
          </div>

          <Link
            className="text-sm text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
            href="/experience"
          >
            Full experience →
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          {preview.map((item) => (
            <div key={item.id} className="interface-panel panel-tint panel-tint-experience p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                    {item.organization} · {item.location}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">{item.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">{item.bullets[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
