import Link from "next/link";
import PageIntro from "@/components/page-intro";

export default function ResearchPage() {
  return (
    <div className="container pt-10">
      <PageIntro
        title="Research"
        desc="For now, research is presented through the main project case studies and publication pages."
      />

      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgba(var(--line),0.18)] px-4 text-sm font-medium tracking-tight text-[rgb(var(--fg))] transition hover:bg-[rgba(var(--panel-a),0.06)]"
        >
          Open Projects
        </Link>
      </div>
    </div>
  );
}
