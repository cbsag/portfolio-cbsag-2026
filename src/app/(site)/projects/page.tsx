import SectionHeader from "@/components/section-header";
import ProjectsFilter, { type CardItem } from "@/components/projects-filter";
import { getAllDocs } from "@/lib/mdx";

export default function ProjectsPage() {
  const docs = getAllDocs("projects");
  const items: CardItem[] = docs.map((d) => ({
    slug: d.slug,
    title: d.frontmatter.title,
    summary: d.frontmatter.summary,
    date: d.frontmatter.date,
    highlight: d.frontmatter.highlight,
    tags: d.frontmatter.tags ?? [],
    links: d.frontmatter.links ?? {}
  }));

  return (
    <div className="container pt-10">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Case studies with artifacts. Filter by tag.
      </p>

      <div className="mt-10">
        <SectionHeader eyebrow="Browse" title="Projects" desc="Click a tag to filter." />
        <ProjectsFilter items={items} basePath="/projects" />
      </div>
    </div>
  );
}
