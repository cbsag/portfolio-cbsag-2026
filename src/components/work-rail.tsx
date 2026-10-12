import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllDocs } from "@/lib/mdx";
import AccentButton from "@/components/accent-button";

export default function WorkRail() {
  const projects = getAllDocs("projects");
  const featured = projects.find((project) => project.slug === "bioevidence-ai") ?? projects[0];
  const secondary = projects.filter((project) => project.slug !== featured?.slug).slice(0, 2);

  const featuredCode =
    typeof featured?.frontmatter?.links?.code === "string" && !featured.frontmatter.links.code.includes("<")
      ? featured.frontmatter.links.code
      : "";
  const featuredDemo =
    typeof featured?.frontmatter?.links?.demo === "string" && !featured.frontmatter.links.demo.includes("<")
      ? featured.frontmatter.links.demo
      : "";

  return (
    <section
      id="featured-work"
      className="relative flex min-h-[calc(100svh-4rem)] items-center border-b border-[rgba(var(--line),0.12)]"
    >
      <div className="container py-14 sm:py-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow">Featured work</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Systems built to be inspected.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))] sm:text-base">
              Selected work across biomedical question answering, retrieval, evaluation, and software delivery—each
              showing how the system behaves, not only what it outputs.
            </p>
          </div>

          <Link
            className="whitespace-nowrap text-sm font-medium text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
            href="/projects"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          {featured ? (
            <article className="interface-panel grid gap-7 p-6 sm:p-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">
                  Featured case study · {featured.frontmatter.date}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{featured.frontmatter.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  {featured.frontmatter.summary}
                </p>

                {featured.frontmatter.highlight ? (
                  <p className="mt-5 border-l-2 border-[rgb(var(--accent-a))] pl-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {featured.frontmatter.highlight}
                  </p>
                ) : null}

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href={`/projects/${featured.slug}`}>
                    <AccentButton>Read case study</AccentButton>
                  </Link>
                  {featuredDemo ? (
                    <a
                      className="text-sm font-semibold underline underline-offset-4"
                      href={featuredDemo}
                    >
                      Open live demo <ArrowUpRight className="ml-1 inline h-4 w-4" />
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

              <div className="border-t border-[rgba(var(--line),0.14)] pt-5 xl:border-l xl:border-t-0 xl:pl-7 xl:pt-0">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">
                  What the product brings together
                </div>
                <div className="mt-6 divide-y divide-[rgba(var(--line),0.14)] border-y border-[rgba(var(--line),0.14)]">
                  {[
                    ["Retrieval", "Biomedical sources, ranking, and evidence selection"],
                    ["Answering", "Generation with inspectable citations and validation"],
                    ["Product", "Python APIs, Next.js, Supabase, and saved workflows"]
                  ].map(([label, text]) => (
                    <div key={label} className="grid gap-2 py-4 sm:grid-cols-[0.32fr_1fr]">
                      <div className="text-sm font-semibold">{label}</div>
                      <div className="text-sm leading-relaxed text-[rgb(var(--muted))]">{text}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-[rgb(var(--muted))]">
                  Detailed research runs remain available through the Examples view without defining the product itself.
                </p>
              </div>
            </article>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((project) => (
              <article key={project.slug} className="signal-card flex flex-col justify-between p-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-[rgb(var(--muted))] text-mono">
                    {String(project.frontmatter.date).slice(0, 4)}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-2 block text-base font-semibold tracking-tight transition hover:opacity-75"
                  >
                    {project.frontmatter.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {project.frontmatter.summary}
                  </p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 text-sm font-medium underline underline-offset-4"
                >
                  View project →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
