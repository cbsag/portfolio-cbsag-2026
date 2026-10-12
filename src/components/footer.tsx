import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[rgba(var(--line),0.10)] py-10">
      <div className="container flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-sm font-semibold">© {new Date().getFullYear()} {site.name}</div>
          <div className="mt-2 max-w-md text-xs leading-relaxed text-[rgb(var(--muted))]">
            AI/ML engineering across research, evaluation, APIs, and product delivery.
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-medium text-[rgb(var(--muted))]">
          <Link href="/projects" className="transition hover:text-[rgb(var(--fg))]">Projects</Link>
          <Link href="/publications" className="transition hover:text-[rgb(var(--fg))]">Publications</Link>
          <Link href="/research" className="transition hover:text-[rgb(var(--fg))]">Research</Link>
          <Link href="/talks" className="transition hover:text-[rgb(var(--fg))]">Talks</Link>
          <a href={site.links.github} className="transition hover:text-[rgb(var(--fg))]">GitHub</a>
          <a href={site.links.linkedin} className="transition hover:text-[rgb(var(--fg))]">LinkedIn</a>
          <a href={site.links.scholar} className="transition hover:text-[rgb(var(--fg))]">Google Scholar</a>
          <a href={site.links.thesis} className="transition hover:text-[rgb(var(--fg))]">Thesis</a>
        </div>
      </div>
    </footer>
  );
}
