"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
];

export default function Nav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLink = useMemo(
    () =>
      links.find((link) =>
        link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`)
      ) ?? links[0],
    [pathname]
  );

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(var(--line),0.10)] bg-[rgba(var(--bg),0.68)] backdrop-blur-xl">
      <div className="container flex h-14 items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center md:hidden">
          <Link
            href={activeLink.href}
            aria-current="page"
            className="inline-flex items-center rounded-full bg-[rgb(var(--fg))] px-4 py-1.5 text-sm font-medium text-[rgb(var(--bg))] shadow-[inset_0_0_0_1px_rgba(var(--line),0.08)]"
          >
            {activeLink.label}
          </Link>
        </div>

        <nav className="hidden min-w-0 flex-1 items-center gap-5 overflow-x-auto text-sm whitespace-nowrap md:flex">
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
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="hidden h-4 w-4 dark:block" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-site-nav"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-site-nav"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container pb-4">
          <nav className="interface-panel grid gap-1 p-2">
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
                    "rounded-2xl px-4 py-3 text-sm transition",
                    active
                      ? "bg-[rgb(var(--fg))] font-medium text-[rgb(var(--bg))]"
                      : "text-[rgb(var(--muted))] hover:bg-[rgba(var(--line),0.05)] hover:text-[rgb(var(--fg))]"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
