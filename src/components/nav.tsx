"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(var(--line),0.10)] bg-[rgba(var(--bg),0.68)] backdrop-blur-xl">
      <div className="container flex h-14 items-center gap-4">
        <nav className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto text-sm whitespace-nowrap">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1.5 text-[rgb(var(--muted))] transition",
                  "hover:bg-[rgba(var(--line),0.06)] hover:text-[rgb(var(--fg))]",
                  active &&
                    "bg-[rgb(var(--fg))] font-medium text-[rgb(var(--bg))] shadow-[inset_0_0_0_1px_rgba(var(--line),0.08)] hover:bg-[rgb(var(--fg))] hover:text-[rgb(var(--bg))]"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            className="inline-flex items-center rounded-full px-3 py-1.5 text-[rgb(var(--muted))] transition hover:bg-[rgba(var(--line),0.06)] hover:text-[rgb(var(--fg))]"
            href="/cv.pdf"
          >
            Resume
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 dark:hidden" />
          <Moon className="hidden h-4 w-4 dark:block" />
        </Button>
      </div>
    </header>
  );
}
