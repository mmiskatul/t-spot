import { ArrowRight, Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { TSPOT } from "@/lib/tspot";
import { Reveal } from "./Reveal";
import { ActionLink, SectionHeading } from "./ui";

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Visit Us" title="Come Find Your Spot" />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="grid h-full gap-4">
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg font-bold">T-Spot</h3>
                <ul className="mt-5 grid gap-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{TSPOT.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <a href={TSPOT.phoneHref} className="font-semibold hover:text-primary">
                      {TSPOT.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <UtensilsCrossed
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>Dine-in • Takeaway</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ActionLink href={TSPOT.maps} external className="w-full sm:flex-1">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </ActionLink>
                  <ActionLink
                    href={TSPOT.phoneHref}
                    variant="outline"
                    className="w-full sm:flex-1"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call T-Spot
                  </ActionLink>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">Opening Hours</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Check Google Maps for today's opening hours.
                </p>
                <a
                  href={TSPOT.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 hover:underline"
                >
                  Check Today's Hours
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft">
              <iframe
                title="Map showing T-Spot location in Dhaka"
                src="https://www.google.com/maps?q=6%20Rd%203%2C%20Dhaka%201216%2C%20Bangladesh&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full border-0 lg:h-full lg:min-h-[26rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
