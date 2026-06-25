import Image from "next/image";
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
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        A more personal view of the work, the direction I am heading, and what I care about building next.
      </p>

      <div className="mt-10 space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <Reveal>
              <Panel className="panel-tint panel-tint-project p-7 sm:p-8">
                <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">Profile</div>
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
                  I like work that sits between research depth and engineering usefulness: systems that are technically
                  strong, understandable, and actually usable by the people around them. Right now I&apos;m looking for
                  full-time ML, NLP, AI, or software roles where that combination matters.
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
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.04}>
              <div className="relative">
                <Panel className="panel-tint panel-tint-publication overflow-hidden p-3 sm:p-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.05rem]">
                    <Image
                      src="/profile/profil2.png"
                      alt="Portrait of Ganesh Chandrasekar"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 38vw, 100vw"
                    />
                  </div>
                </Panel>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Panel className="panel-tint panel-tint-experience p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                      Based in
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-tight">{site.location}</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      Finishing my thesis and open to full-time roles starting July 2026.
                    </p>
                  </Panel>

                  <Panel className="panel-tint panel-tint-project p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                      Working style
                    </div>
                    <div className="mt-2 text-base font-semibold tracking-tight">Research first, then ship</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      I enjoy turning experiments, evaluations, and prototypes into tools people can actually use.
                    </p>
                  </Panel>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader eyebrow="Experience" title="Snapshot from my CV" />
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

          <div className="space-y-6">
            <div>
              <SectionHeader eyebrow="Approach" title="How I like to work" />
              <Reveal>
                <Panel className="panel-tint panel-tint-project p-6">
                  <div className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    <div>I care about systems that are measurable, explainable, and strong enough to be useful outside a paper.</div>
                    <div>I like bridging model work with interfaces, evaluation, and tooling so the output is easier to trust and iterate on.</div>
                    <div>I tend to do my best work where research questions and engineering constraints both matter.</div>
                  </div>
                </Panel>
              </Reveal>
            </div>

            <div>
              <SectionHeader eyebrow="Links" title="Where to find me" />
              <Reveal>
                <Panel className="panel-tint panel-tint-publication p-5">
                  <div className="flex flex-wrap gap-4 text-sm text-zinc-700 dark:text-zinc-200">
                    <a className="underline underline-offset-4" href={site.links.resume}>CV</a>
                    <a className="underline underline-offset-4" href={`mailto:${site.email}`}>Email</a>
                    <a className="underline underline-offset-4" href={site.links.github}>GitHub</a>
                    <a className="underline underline-offset-4" href={site.links.linkedin}>LinkedIn</a>
                    <a className="underline underline-offset-4" href={site.links.trecDemo}>TREC Viewer</a>
                  </div>
                </Panel>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
