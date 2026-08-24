import { Phone } from "lucide-react";
import { NAV_LINKS, TSPOT } from "@/lib/tspot";
import { ActionLink } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream pt-14 pb-28 md:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
              T
            </span>
            <span className="font-display text-xl font-bold">T-Spot</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{TSPOT.tagline}</p>
          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Address
              </dt>
              <dd className="mt-1 font-medium">{TSPOT.addressShort}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Phone
              </dt>
              <dd className="mt-1">
                <a href={TSPOT.phoneHref} className="font-medium hover:text-primary">
                  {TSPOT.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold">Ready to order?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Dine-in or takeaway — give us a ring and we'll get your bite ready.
          </p>
          <ActionLink href={TSPOT.phoneHref} className="mt-4 w-full sm:w-auto">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </ActionLink>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-border px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6">
        © 2026 T-Spot. All rights reserved.
      </div>
    </footer>
  );
}
