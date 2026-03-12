"use client";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
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

export default function ProjectsFilter({ items, basePath }: { items: CardItem[]; basePath: string }) {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    items.forEach((it) => (it.tags ?? []).forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return items;
    return items.filter((it) => (it.tags ?? []).includes(activeTag));
  }, [items, activeTag]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant={activeTag === "All" ? "default" : "outline"} onClick={() => setActiveTag("All")}>
          All
        </Button>
        {allTags.map((t) => (
          <Button
            key={t}
            size="sm"
            variant={activeTag === t ? "default" : "outline"}
            onClick={() => setActiveTag(t)}
            className="text-mono"
          >
            {t}
          </Button>
        ))}
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
