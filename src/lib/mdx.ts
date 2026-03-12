import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export type Doc = {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
  readingTime: string;
};

export function getAllSlugs(type: "projects" | "publications" | "talks") {
  const dir = path.join(CONTENT_ROOT, type);
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export function getDocBySlug(type: "projects" | "publications" | "talks", slug: string): Doc {
  const file = path.join(CONTENT_ROOT, type, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as Record<string, any>, content, readingTime: readingTime(content).text };
}

export function getAllDocs(type: "projects" | "publications" | "talks"): Doc[] {
  return getAllSlugs(type).map((slug) => getDocBySlug(type, slug)).sort((a, b) => (b.frontmatter?.date ?? "").localeCompare(a.frontmatter?.date ?? ""));
}
