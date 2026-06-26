import Reveal from "@/components/reveal";
import PageIntro from "@/components/page-intro";
import { Panel } from "@/components/ui/panel";
import { experiences } from "@/lib/experience";

export default function ExperiencePage() {
  return (
    <div className="container pt-10">
      <PageIntro title="Experience" desc="Research, teaching, and product engineering roles from my current CV." />

      <div className="mt-10 space-y-4">
        {experiences.map((item, index) => (
          <Reveal key={item.id} delay={0.03 * index}>
            <Panel className="panel-tint panel-tint-experience p-6">
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

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {item.bullets.map((bullet) => (
                  <div key={bullet}>• {bullet}</div>
                ))}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
