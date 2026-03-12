import { site } from "@/lib/site";
import { Panel } from "@/components/ui/panel";

const posts = [
  {
    title: "Inside the TREC BioGen Task-B viewer",
    summary:
      "What the viewer solves, how it helps inspect evidence-linked outputs, and why interfaces matter for evaluation.",
    href: "https://trec-biogen-taskb-viewer.vercel.app/",
    label: "Open viewer"
  },
  {
    title: "Why retrieval diagnostics matter in biomedical QA",
    summary:
      "A short note on recall loss, ranking errors, and why evidence-first systems need better debugging than a final score.",
    href: "/papers/trec-2025.pdf",
    label: "Read paper"
  },
  {
    title: "Building cleaner RAG systems",
    summary:
      "Notes on retrieval, evidence merging, and shaping outputs so the final answer is easier to trust.",
    href: `mailto:${site.email}`,
    label: "Request notes"
  }
];

export default function BlogPage() {
  return (
    <div className="container pt-10">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Short writing, system notes, and project breakdowns.
      </p>

      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <Panel key={post.title} className="panel-tint panel-tint-publication p-6">
            <div className="text-lg font-semibold tracking-tight">{post.title}</div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.summary}
            </p>
            <a
              href={post.href}
              className="mt-5 inline-flex text-sm font-medium underline underline-offset-4"
            >
              {post.label}
            </a>
          </Panel>
        ))}
      </div>
    </div>
  );
}
