import Link from "next/link";
import SectionHeader from "@/components/section-header";

export default function ResearchPage() {
  return (
    <div className="container pt-10">
      <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        For now, the research view is the same as Work (projects + case studies).
      </p>

      <div className="mt-10">
        <SectionHeader eyebrow="Navigate" title="Go to Work" desc="Use tags and case study pages there." />
        <Link
          href="/projects"
          className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
        >
          Open Work
        </Link>
      </div>
    </div>
  );
}
