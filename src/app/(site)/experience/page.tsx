import Reveal from "@/components/reveal";
import PageIntro from "@/components/page-intro";
import { Panel } from "@/components/ui/panel";
import { experiences } from "@/lib/experience";

export default function ExperiencePage() {
  return (
    <div className="container pt-10">
      <PageIntro
        eyebrow="Career timeline"
        title="Experience"
        desc="Research, machine learning, product engineering, and software roles—from undergraduate experimentation to graduate AI systems."
      />

      <div className="relative mt-10 space-y-5 before:absolute before:bottom-8 before:left-[1.42rem] before:top-8 before:w-px before:bg-[rgba(var(--line),0.12)] sm:before:left-[2rem]">
        {experiences.map((item, index) => (
          <Reveal key={item.id} delay={0.03 * index}>
            <Panel className="panel-tint panel-tint-experience ml-12 p-6 sm:ml-16 sm:p-7">
              <div className="absolute -left-[2.42rem] top-7 grid h-8 w-8 place-items-center rounded-full border border-[rgba(var(--line),0.14)] bg-[rgb(var(--bg))] text-[10px] font-bold text-[rgb(var(--muted))] text-mono sm:-left-[3.05rem]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{item.role}</h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.organization} · {item.location}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                  {item.period}
                </span>
              </div>

              <div className="mt-5 grid gap-3 text-sm leading-relaxed text-[rgb(var(--muted))] lg:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="signal-card p-4">{bullet}</div>
                ))}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
