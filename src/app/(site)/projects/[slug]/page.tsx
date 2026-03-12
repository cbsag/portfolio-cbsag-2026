import { getAllSlugs, getDocBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Panel } from "@/components/ui/panel";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return getAllSlugs("projects").map((slug) => ({ slug }));
}

function renderProjectContent(content: string) {
  const normalized = content.replace(/\r\n?/g, "\n").trim();
  const lines = normalized.split("\n");
  const nodes: ReactNode[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let index = 0;

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    nodes.push(
      <p key={`p-${index}`} className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
        {paragraphLines.join(" ")}
      </p>,
    );
    paragraphLines = [];
    index += 1;
  };

  const flushList = () => {
    if (!listItems.length) return;
    nodes.push(
      <ul key={`ul-${index}`} className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
        {listItems.map((item, itemIndex) => (
          <li key={`li-${index}-${itemIndex}`}>{item}</li>
        ))}
      </ul>,
    );
    listItems = [];
    index += 1;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();

      if (level <= 2) {
        nodes.push(
          <h2 key={`h-${index}`} className="mt-7 text-xl font-semibold tracking-tight first:mt-0">
            {text}
          </h2>,
        );
      } else {
        nodes.push(
          <h3 key={`h-${index}`} className="mt-6 text-lg font-semibold tracking-tight">
            {text}
          </h3>,
        );
      }
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2).trim());
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();
  return nodes;
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
        <article className="prose-tight">{renderProjectContent(doc.content)}</article>
      </Panel>
    </div>
  );
}
