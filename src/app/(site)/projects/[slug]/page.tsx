import { getAllSlugs, getDocBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Panel } from "@/components/ui/panel";
import { renderDocContent } from "@/lib/render-doc-content";

export function generateStaticParams() {
  return getAllSlugs("projects").map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug("projects", slug);
  const links = doc.frontmatter.links ?? {};

  return (
    <div className="container pt-10">
      <div className="flex flex-wrap gap-2">
        {(doc.frontmatter.tags ?? []).map((t: string) => <Badge key={t} className="text-mono">{t}</Badge>)}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{doc.frontmatter.title}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{doc.frontmatter.summary}</p>

      <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
        {doc.frontmatter.date} • {doc.readingTime}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {links.demo ? (
          <a className="underline underline-offset-4" href={links.demo}>
            Live viewer
          </a>
        ) : null}
        {links.code ? (
          <a className="underline underline-offset-4" href={links.code}>
            Code
          </a>
        ) : null}
        {links.paper ? (
          <a className="underline underline-offset-4" href={links.paper}>
            Paper
          </a>
        ) : null}
      </div>

      <Separator />

      <Panel className="panel-tint panel-tint-project p-6">
        <article className="prose-tight">{renderDocContent(doc.content)}</article>
      </Panel>
    </div>
  );
}
