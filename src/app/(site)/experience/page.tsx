import Reveal from "@/components/reveal";
import PageIntro from "@/components/page-intro";
import { experiences } from "@/lib/experience";

export default function ExperiencePage() {
  return (
    <div className="container pt-10">
      <PageIntro
        eyebrow="Career timeline"
        title="Experience"
        desc="Five roles across biomedical AI research, procurement software, machine-learning experiments, and interactive systems."
      />

      <div className="mt-10 border-t border-[rgba(var(--line),0.16)]">
        {experiences.map((item, index) => (
          <Reveal key={item.id} delay={0.025 * index}>
            <article className="grid gap-5 border-b border-[rgba(var(--line),0.14)] py-9 lg:grid-cols-[0.2fr_0.34fr_1fr] lg:gap-10">
              <div className="text-xs uppercase tracking-[0.14em] text-[rgb(var(--muted))] text-mono">
                {String(index + 1).padStart(2, "0")}
                <div className="mt-2 normal-case leading-relaxed tracking-normal">{item.period}</div>
              </div>

              <div>
                <h2 className="text-xl font-semibold tracking-[-0.025em]">{item.role}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  {item.organization}
                  <br />
                  {item.location}
                </p>
              </div>

              <ul className="space-y-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-[0.62rem] h-1 w-1 rounded-full bg-[rgb(var(--accent-a))]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
