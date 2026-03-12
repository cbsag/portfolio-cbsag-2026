import { getAllDocs } from "@/lib/mdx";
import SectionHeader from "@/components/section-header";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/reveal";

const actionLinkClass =
  "inline-flex h-9 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-[13px] font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]";

export default function PublicationsPage() {
  const pubs = getAllDocs("publications");

  return (
    <div className="container pt-10">
      <h1 className="text-3xl font-semibold tracking-tight">Publications</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">Papers, system descriptions, and research artifacts.</p>

      <div className="mt-10">
        <SectionHeader eyebrow="Publications" title="Selected publications" desc="Clean list with quick actions." />
        <div className="grid gap-4">
          {pubs.map((p, i) => (
            <Reveal key={p.slug} delay={0.03 * i}>
              <Panel className="panel-tint panel-tint-publication p-5">
                <div className="flex flex-wrap gap-2">
                  {(p.frontmatter.venue ? [p.frontmatter.venue] : []).map((t: string) => <Badge key={t} className="text-mono">{t}</Badge>)}
                  {(p.frontmatter.tags ?? []).slice(0, 4).map((t: string) => <Badge key={t} className="text-mono">{t}</Badge>)}
                </div>

                <h2 className="mt-3 text-lg font-semibold tracking-tight">{p.frontmatter.title}</h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.frontmatter.authors}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.frontmatter.links?.pdf ? <a href={p.frontmatter.links.pdf} className={actionLinkClass}>PDF</a> : null}
                  {p.frontmatter.links?.code ? <a href={p.frontmatter.links.code} className={actionLinkClass}>Code</a> : null}
                  {p.frontmatter.links?.demo ? <a href={p.frontmatter.links.demo} className={actionLinkClass}>Demo</a> : null}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
