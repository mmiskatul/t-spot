import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, TSPOT } from "@/lib/tspot";
import { ActionLink } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 py-2 shadow-soft backdrop-blur-xl"
          : "py-4",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground shadow-soft transition-transform duration-300 group-hover:-rotate-6">
            T
          </span>
          <span className="font-display text-xl font-bold tracking-tight">T&#8209;Spot</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ActionLink href={TSPOT.phoneHref} size="sm" className="hidden sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:text-primary lg:hidden"
          >
            {open ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-4 mt-3 rounded-3xl border border-border bg-card p-3 shadow-float sm:mx-6">
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="grid gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ActionLink href={TSPOT.phoneHref} className="mt-2 w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {TSPOT.phoneDisplay}
          </ActionLink>
        </div>
      </div>
    </header>
  );
}
