import Link from "next/link";
import AccentButton from "@/components/accent-button";
import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getAllDocs, type Doc } from "@/lib/mdx";

const curatedGroups = [
  {
    eyebrow: "Research systems",
    title: "Retrieval, grounding, and evaluation work",
    desc: "Projects where evidence quality, system behavior, and inspection mattered as much as raw model output.",
    slugs: ["medhopqa", "insomnia-shared-task", "bert-negation-biomedical"]
  },
  {
    eyebrow: "Applied builds",
    title: "Product and platform work",
    desc: "Systems shaped by workflows, users, and constraints beyond a paper or benchmark.",
    slugs: ["course-enrollment-hybrid-retrieval", "gov-id-sso-patent"]
  },
  {
    eyebrow: "Foundations",
    title: "Experiments and systems fundamentals",
    desc: "Smaller builds that still show how I think about modeling, performance, and implementation details.",
    slugs: ["flight-delay-prediction", "dynamic-branch-predictor"]
  }
] as const;

type FeaturedSignal = {
  label: string;
  value: string;
};

function getExternalLink(value: unknown) {
  return typeof value === "string" && value && !value.includes("<") ? value : "";
}

function isDoc(item: Doc | undefined): item is Doc {
  return Boolean(item);
}

export default function ProjectsPage() {
  const docs = getAllDocs("projects");
  const bySlug = new Map(docs.map((doc) => [doc.slug, doc]));
  const featured = bySlug.get("trec-biogen") ?? docs[0];
  const groups = curatedGroups
    .map((group) => ({
      ...group,
      items: group.slugs.map((slug) => bySlug.get(slug)).filter(isDoc)
    }))
    .filter((group) => group.items.length > 0);

  const featuredCode = getExternalLink(featured?.frontmatter.links?.code);
  const featuredDemo = getExternalLink(featured?.frontmatter.links?.demo);
  const featuredPaper = getExternalLink(featured?.frontmatter.links?.paper);
  const featuredSignals: FeaturedSignal[] =
    featured?.slug === "trec-biogen"
      ? [
          { label: "Corpus", value: "26.8M PubMed documents" },
          { label: "Pipeline", value: "Sparse + dense retrieval with reranking" },
          { label: "Output", value: "Evidence-linked inspection viewer" }
        ]
      : (featured?.frontmatter.tags ?? []).slice(0, 3).map((tag: string) => ({
          label: "Focus",
          value: tag
        }));

  return (
    <div className="container pt-10">
      <PageIntro
        title="Projects"
        desc="A curated view of research systems, applied builds, and smaller experiments. Start with the strongest case study, then scan the rest by type."
      />

      <div className="mt-10 space-y-12">
        {featured ? (
          <Reveal>
            <Panel className="panel-tint panel-tint-project p-7 sm:p-8">
              <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
                    Featured case study
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featured.frontmatter.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-200 sm:text-base">
                    {featured.frontmatter.summary}
                  </p>

                  {featured.frontmatter.highlight ? (
                    <div className="mt-5 rounded-2xl border border-[rgba(var(--accent-a),0.24)] bg-[rgba(var(--accent-a),0.10)] p-4 text-sm leading-relaxed text-zinc-700 dark:border-[rgba(var(--accent-a),0.36)] dark:bg-[rgba(var(--accent-a),0.16)] dark:text-zinc-100">
                      <span className="font-medium">Why it matters:</span> {featured.frontmatter.highlight}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {(featured.frontmatter.tags ?? []).slice(0, 5).map((tag: string) => (
                      <Badge key={tag} className="text-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link href={`/projects/${featured.slug}`}>
                      <AccentButton>Open case study</AccentButton>
                    </Link>
                    {featuredDemo ? (
                      <a
                        className="text-sm text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
                        href={featuredDemo}
                      >
                        Live viewer
                      </a>
                    ) : null}
                    {featuredPaper ? (
                      <a
                        className="text-sm text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
                        href={featuredPaper}
                      >
                        Paper
                      </a>
                    ) : null}
                    {featuredCode ? (
                      <a
                        className="text-sm text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
                        href={featuredCode}
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  {featuredSignals.map((signal) => (
                    <div
                      key={`${signal.label}-${signal.value}`}
                      className="rounded-2xl border border-[rgba(var(--line),0.10)] bg-[rgba(var(--panel-a),0.30)] p-4"
                    >
                      <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                        {signal.label}
                      </div>
                      <div className="mt-2 text-sm font-medium leading-relaxed text-[rgb(var(--fg))]">
                        {signal.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </Reveal>
        ) : null}

        {groups.map((group, groupIndex) => (
          <section key={group.title}>
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
                {group.eyebrow}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{group.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                {group.desc}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {group.items.map((project, projectIndex) => {
                const projectCode = getExternalLink(project.frontmatter.links?.code);
                const projectDemo = getExternalLink(project.frontmatter.links?.demo);
                const projectPaper = getExternalLink(project.frontmatter.links?.paper);

                return (
                  <Reveal key={project.slug} delay={0.03 * (groupIndex + projectIndex)}>
                    <Panel className="panel-tint panel-tint-project p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                      <div className="flex flex-wrap gap-2">
                        {(project.frontmatter.tags ?? []).slice(0, 4).map((tag: string) => (
                          <Badge key={tag} className="text-mono">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-4 flex items-start justify-between gap-4">
                        <div>
                          {project.frontmatter.date ? (
                            <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                              {String(project.frontmatter.date).slice(0, 4)}
                            </div>
                          ) : null}
                          <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.frontmatter.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {project.frontmatter.summary}
                          </p>
                        </div>

                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
                        >
                          Open →
                        </Link>
                      </div>

                      {project.frontmatter.highlight ? (
                        <div className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                          <span className="font-medium">Key result:</span> {project.frontmatter.highlight}
                        </div>
                      ) : null}

                      {projectCode || projectDemo || projectPaper ? (
                        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[rgb(var(--muted))]">
                          {projectDemo ? (
                            <a className="underline underline-offset-4 transition hover:text-[rgb(var(--fg))]" href={projectDemo}>
                              Demo
                            </a>
                          ) : null}
                          {projectPaper ? (
                            <a className="underline underline-offset-4 transition hover:text-[rgb(var(--fg))]" href={projectPaper}>
                              Paper
                            </a>
                          ) : null}
                          {projectCode ? (
                            <a className="underline underline-offset-4 transition hover:text-[rgb(var(--fg))]" href={projectCode}>
                              Code
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </Panel>
                  </Reveal>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
