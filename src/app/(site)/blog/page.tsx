import Link from "next/link";
import Reveal from "@/components/reveal";
import PageIntro from "@/components/page-intro";
import { Badge } from "@/components/ui/badge";
import { Panel } from "@/components/ui/panel";
import { getAllDocs } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllDocs("blog");

  return (
    <div className="container pt-10">
      <PageIntro
        eyebrow="Notes"
        title="Blog"
        desc="Notes on research, career direction, systems thinking, and the process of making technical work easier to understand."
      />

      <div className="mt-10 grid gap-4">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={0.03 * index}>
            <Panel className="panel-tint panel-tint-publication p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {(post.frontmatter.tags ?? []).map((tag: string) => (
                  <Badge key={tag} className="text-mono">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-4 text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 text-mono">
                {post.frontmatter.date} • {post.readingTime}
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{post.frontmatter.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.frontmatter.summary}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex text-sm font-medium underline underline-offset-4"
              >
                Read post →
              </Link>
            </Panel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
