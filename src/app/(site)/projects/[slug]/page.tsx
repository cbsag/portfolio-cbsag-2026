import { getAllSlugs, getDocBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Panel } from "@/components/ui/panel";
import { renderDocContent } from "@/lib/render-doc-content";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs("projects").map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug("projects", slug);
  const links = doc.frontmatter.links ?? {};

  return (
    <div className="container pt-10">
      <div className="rounded-[2rem] border border-[rgba(var(--line),0.12)] bg-[rgba(var(--panel),0.62)] p-6 sm:p-9">
        <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--muted))] text-mono">
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        <div className="mt-7 flex flex-wrap gap-2">
          {(doc.frontmatter.tags ?? []).map((t: string) => <Badge key={t} className="text-mono">{t}</Badge>)}
        </div>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{doc.frontmatter.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[rgb(var(--muted))]">{doc.frontmatter.summary}</p>

        <div className="mt-5 text-xs uppercase tracking-[0.14em] text-[rgb(var(--muted))] text-mono">
          {doc.frontmatter.date} · {doc.readingTime}
        </div>

        <div className="mt-7 flex flex-wrap gap-2 text-sm">
          {links.demo ? <a className="inline-flex items-center rounded-xl bg-[rgb(var(--fg))] px-4 py-2 font-semibold text-[rgb(var(--bg))]" href={links.demo}>Live demo <ArrowUpRight className="ml-2 h-4 w-4" /></a> : null}
          {links.code ? <a className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-4 py-2 font-semibold" href={links.code}>Code <ArrowUpRight className="ml-2 h-4 w-4" /></a> : null}
          {links.paper ? <a className="inline-flex items-center rounded-xl border border-[rgba(var(--line),0.16)] px-4 py-2 font-semibold" href={links.paper}>Paper <ArrowUpRight className="ml-2 h-4 w-4" /></a> : null}
        </div>
      </div>

      <Separator />

      <Panel className="panel-tint panel-tint-project p-6 sm:p-9">
        <article className="prose-tight">{renderDocContent(doc.content)}</article>
      </Panel>
    </div>
  );
}
