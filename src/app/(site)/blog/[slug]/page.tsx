import Link from "next/link";
import { getAllSlugs, getDocBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { Separator } from "@/components/ui/separator";
import { renderDocContent } from "@/lib/render-doc-content";

export function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug("blog", slug);

  return (
    <div className="container pt-10">
      <Link href="/blog" className="text-sm text-zinc-600 underline underline-offset-4 dark:text-zinc-400">
        Back to blog
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        {(doc.frontmatter.tags ?? []).map((tag: string) => (
          <Badge key={tag} className="text-mono">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{doc.frontmatter.title}</h1>
      <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">{doc.frontmatter.summary}</p>

      <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
        {doc.frontmatter.date} • {doc.readingTime}
      </div>

      <Separator />

      <Panel className="panel-tint panel-tint-publication p-6">
        <article className="prose-tight">{renderDocContent(doc.content)}</article>
      </Panel>
    </div>
  );
}
