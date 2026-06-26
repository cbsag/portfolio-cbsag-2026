import AboutProfileColumn from "@/components/about-profile-column";
import PageIntro from "@/components/page-intro";
import SectionHeader from "@/components/section-header";
import { site } from "@/lib/site";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/reveal";
import Link from "next/link";
import { experiences } from "@/lib/experience";

export default function AboutPage() {
  const snapshot = experiences.slice(0, 4);

  return (
    <div className="container pt-10">
      <PageIntro
        title="About"
        desc="A more personal view of the work, the direction I am heading, and the kind of systems I want to build next."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="order-2 space-y-8 lg:order-1">
          <Reveal>
            <Panel className="panel-tint panel-tint-project p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">About me</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Research-minded engineering, with a bias for clarity and delivery.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-200 sm:text-base">
                I&apos;m {site.name}. I&apos;m completing a master&apos;s thesis at Concordia on evidence-grounded
                biomedical question answering, and that work sharpened how I think about retrieval, evaluation, and
                reliability. More broadly, I build and evaluate ML systems, NLP pipelines, ranking workflows,
                dashboards, APIs, and practical tools that make models easier to inspect and use.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                I do my best work where research depth and engineering constraints both matter. The projects that fit
                me best usually involve modeling, measurement, interfaces, and the work needed to make a system
                understandable to other people.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {site.focusAreas.map((area) => (
                  <Badge key={area} className="text-mono">
                    {area}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/cv"
                  className="inline-flex items-center rounded-xl bg-[rgb(var(--fg))] px-4 py-2 font-medium text-[rgb(var(--bg))]"
                >
                  View CV
                </Link>
                <a
                  href={site.links.linkedin}
                  className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 py-2 font-medium text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
                >
                  LinkedIn
                </a>
              </div>
            </Panel>
          </Reveal>

          <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
            <div>
              <SectionHeader
                eyebrow="Experience"
                title="Snapshot from my CV"
                desc="A short version of the roles that shaped how I work."
              />
              <Reveal>
                <Panel className="panel-tint panel-tint-experience p-6">
                  <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    {snapshot.map((item) => (
                      <div key={item.id} className="border-b border-[rgba(var(--line),0.08)] pb-4 last:border-b-0 last:pb-0">
                        <div className="font-medium text-[rgb(var(--fg))]">{item.role}</div>
                        <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                          {item.organization} · {item.location}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400 text-mono">
                          {item.period}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/experience" className="mt-5 inline-flex text-sm underline underline-offset-4">
                    View full experience timeline →
                  </Link>
                </Panel>
              </Reveal>
            </div>

            <div className="space-y-8">
              <div>
                <SectionHeader
                  eyebrow="Approach"
                  title="How I like to work"
                  desc="The kind of teams, problems, and engineering habits that bring out my best work."
                />
                <Reveal>
                  <Panel className="panel-tint panel-tint-project p-6">
                    <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                      <div>
                        <span className="font-medium text-[rgb(var(--fg))]">Measure first.</span> I care about systems
                        that are strong enough to be useful outside a paper, not just impressive in isolation.
                      </div>
                      <div>
                        <span className="font-medium text-[rgb(var(--fg))]">Bridge research with interfaces.</span> I
                        like building evaluation views, tooling, and APIs that make model behavior easier to inspect.
                      </div>
                      <div>
                        <span className="font-medium text-[rgb(var(--fg))]">Ship clearly.</span> The strongest work
                        usually comes from turning complex pipelines into something another person can actually trust and
                        use.
                      </div>
                    </div>
                  </Panel>
                </Reveal>
              </div>

              <div>
                <SectionHeader eyebrow="Links" title="Where to find me" desc="The fastest routes to my work, writing, and contact details." />
                <Reveal>
                  <Panel className="panel-tint panel-tint-publication p-5">
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.resume}
                      >
                        CV
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={`mailto:${site.email}`}
                      >
                        Email
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.github}
                      >
                        GitHub
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.linkedin}
                      >
                        LinkedIn
                      </a>
                      <a
                        className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-3 py-2 transition hover:bg-[rgba(var(--panel-a),0.06)]"
                        href={site.links.trecDemo}
                      >
                        TREC Viewer
                      </a>
                    </div>
                  </Panel>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal delay={0.04}>
            <AboutProfileColumn
              name={site.name}
              role={site.role}
              location={site.location}
              availability={site.availability}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
