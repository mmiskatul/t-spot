import { ArrowRight, MapPin } from "lucide-react";
import { TSPOT } from "@/lib/tspot";
import { Reveal } from "./Reveal";
import { ActionLink } from "./ui";

export function FinalCTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-accent px-6 py-14 text-center shadow-soft sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full bg-card/60 blur-3xl"
          />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold text-balance sm:text-5xl">Hungry Yet?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-pretty text-accent-foreground/80 sm:text-lg">
              Your next favorite street-food stop might be closer than you think.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionLink href="#menu" size="lg" className="w-full sm:w-auto">
                Explore Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink
                href={TSPOT.maps}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </ActionLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
