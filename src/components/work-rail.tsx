import Link from "next/link";
import { getAllDocs } from "@/lib/mdx";
import AccentButton from "@/components/accent-button";

export default function WorkRail() {
  const projects = getAllDocs("projects");
  const featured = projects[0];
  const secondary = projects.slice(1, 3);

  const featuredCode =
    typeof featured?.frontmatter?.links?.code === "string" && !featured.frontmatter.links.code.includes("<")
      ? featured.frontmatter.links.code
      : "";
  const featuredDemo =
    typeof featured?.frontmatter?.links?.demo === "string" && !featured.frontmatter.links.demo.includes("<")
      ? featured.frontmatter.links.demo
      : "";

  return (
    <section className="relative">
      <div id="enter" />
      <div className="container py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">Featured</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Selected work</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted))]">
              One strong case study first. The rest stays light and scannable.
            </p>
          </div>

          <Link
            className="text-sm text-[rgb(var(--muted))] underline underline-offset-4 transition hover:text-[rgb(var(--fg))]"
            href="/projects"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          {featured ? (
            <div className="interface-panel panel-tint panel-tint-project p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
                {featured.frontmatter.date}
              </div>
              <div className="mt-2 text-xl font-semibold tracking-tight">{featured.frontmatter.title}</div>
              <div className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                {featured.frontmatter.summary}
              </div>

              {featured.frontmatter.highlight ? (
                <div className="mt-5 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  <span className="text-mono">Key:</span> {featured.frontmatter.highlight}
                </div>
              ) : null}

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
          ) : null}

          <div className="space-y-5">
            {secondary.map((project) => (
              <div key={project.slug} className="pb-5 interface-hairline">
                <div className="pt-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))] text-mono">
                    {project.frontmatter.date}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-2 block text-base font-semibold tracking-tight transition hover:opacity-90"
                  >
                    {project.frontmatter.title}
                  </Link>
                  <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {project.frontmatter.summary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
