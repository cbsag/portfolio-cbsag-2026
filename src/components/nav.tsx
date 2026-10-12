"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
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
  const { scrollY } = useScroll();
  const homeLogoOpacity = useTransform(scrollY, [0, 220], [0, 1]);
  const homeLogoScale = useTransform(scrollY, [0, 220], [0.72, 1]);

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
    <header className="sticky top-0 z-50 border-b border-[rgba(var(--line),0.12)] bg-[rgba(var(--bg),0.92)] backdrop-blur-xl">
      <div className="container flex h-16 items-center gap-4">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center text-[rgb(var(--fg))]"
          aria-label="Ganesh Chandrasekar, home"
        >
          <motion.span
            style={pathname === "/" ? { opacity: homeLogoOpacity, scale: homeLogoScale } : undefined}
            className="site-signature h-9 w-10 transition-transform duration-300 group-hover:-rotate-2"
            aria-hidden="true"
          />
        </Link>

        <div className="ml-auto flex min-w-0 items-center md:hidden">
          <span className="truncate text-xs font-medium text-[rgb(var(--muted))]">{activeLink.label}</span>
        </div>

        <nav className="ml-auto hidden min-w-0 items-center gap-0.5 overflow-x-auto text-sm whitespace-nowrap md:flex">
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
                  "inline-flex items-center rounded-lg px-2.5 py-2 text-[13px] text-[rgb(var(--muted))] transition",
                  "hover:bg-[rgba(var(--line),0.05)] hover:text-[rgb(var(--fg))]",
                  active &&
                    "bg-[rgba(var(--line),0.08)] font-semibold text-[rgb(var(--fg))] hover:bg-[rgba(var(--line),0.08)]"
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
            className="rounded-lg"
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
        <div className="container pb-4 pt-1">
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
                      ? "bg-[rgb(var(--fg))] font-semibold text-[rgb(var(--bg))]"
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
