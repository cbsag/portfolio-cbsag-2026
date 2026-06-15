"use client";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type CardItem = {
  slug: string;
  title: string;
  summary: string;
  date?: string;
  highlight?: string;
  tags: string[];
  links?: { code?: string; paper?: string; demo?: string };
};

const FILTERS = [
  {
    label: "All",
    matches: () => true
  },
  {
    label: "LLMs",
    matches: (item: CardItem) => ["LLMs", "RAG", "BioCreative", "Shared Task"].some((tag) => item.tags.includes(tag))
  },
  {
    label: "Retrieval",
    matches: (item: CardItem) =>
      [
        "Retrieval",
        "Information Retrieval",
        "RAG",
        "Question Answering",
        "Knowledge Graphs",
        "RDF",
        "LangChain",
        "Medical QA",
        "Biomedical QA",
        "Multi-hop"
      ].some((tag) => item.tags.includes(tag))
  },
  {
    label: "NLP",
    matches: (item: CardItem) =>
      ["NLP", "Biomedical NLP", "Clinical NLP", "Sequence Labeling", "Evidence Extraction", "Transformers"].some(
        (tag) => item.tags.includes(tag)
      )
  },
  {
    label: "Applied ML",
    matches: (item: CardItem) =>
      ["Applied AI", "Machine Learning", "Deep Learning", "Forecasting", "Classification", "RL"].some((tag) =>
        item.tags.includes(tag)
      )
  },
  {
    label: "Systems",
    matches: (item: CardItem) =>
      ["Systems", "Computer Architecture", "Security", "Authentication", "Identity", "Patent"].some((tag) =>
        item.tags.includes(tag)
      )
  },
  {
    label: "Research",
    matches: (item: CardItem) =>
      ["BioCreative", "Shared Task", "Biomedical QA", "Medical QA", "Information Retrieval", "Clinical NLP"].some(
        (tag) => item.tags.includes(tag)
      )
  }
] as const;

export default function ProjectsFilter({ items, basePath }: { items: CardItem[]; basePath: string }) {
  const filters = useMemo(() => {
    return FILTERS.filter((filter) => filter.label === "All" || items.some((item) => filter.matches(item)));
  }, [items]);

  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    const selectedFilter = filters.find((filter) => filter.label === activeTag) ?? FILTERS[0];
    return items.filter((item) => selectedFilter.matches(item));
  }, [filters, items, activeTag]);

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-[rgba(var(--line),0.10)] bg-[rgba(var(--panel-a),0.05)] p-2">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const tag = filter.label;
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "inline-flex h-8 items-center rounded-full border px-3 text-[11px] font-medium tracking-[0.08em] text-mono transition sm:text-xs",
                  active
                    ? "border-[rgba(var(--accent-a),0.30)] bg-[rgba(var(--accent-a),0.12)] text-[rgb(var(--fg))]"
                    : "border-[rgba(var(--line),0.12)] bg-[rgba(var(--panel-a),0.08)] text-[rgb(var(--muted))] hover:border-[rgba(var(--line),0.20)] hover:text-[rgb(var(--fg))]"
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <Panel key={p.slug} className="panel-tint panel-tint-project p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex flex-wrap gap-2">
              {(p.tags ?? []).slice(0, 5).map((t) => (
                <Badge key={t} className="text-mono">{t}</Badge>
              ))}
            </div>

            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                {p.date ? (
                  <div className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                    {p.date.slice(0, 4)}
                  </div>
                ) : null}
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.summary}</p>
              </div>
              <Link href={`${basePath}/${p.slug}`} className="text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50">
                Open →
              </Link>
            </div>

            {p.highlight ? (
              <div className="mt-4 rounded-xl border border-[rgba(var(--accent-a),0.34)] bg-[rgba(var(--accent-a),0.10)] p-3 text-sm dark:border-[rgba(var(--accent-a),0.42)] dark:bg-[rgba(var(--accent-a),0.17)]">
                <span className="font-medium">Key result:</span>{" "}
                <span className="text-[rgb(var(--fg))]">{p.highlight}</span>
              </div>
            ) : null}
          </Panel>
        ))}
      </div>
    </div>
  );
}
