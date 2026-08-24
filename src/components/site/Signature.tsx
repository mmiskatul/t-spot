import { MapPin } from "lucide-react";
import churmur from "@/assets/shahi-churmur.jpg";
import { TSPOT } from "@/lib/tspot";
import { Reveal } from "./Reveal";
import { ActionLink } from "./ui";

export function Signature() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-float">
            <img
              src={churmur}
              loading="lazy"
              width={1200}
              height={1008}
              alt="Bowl of Shahi Churmur with crushed puri, chickpeas, potato and creamy dressing"
              className="aspect-[6/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold tracking-[0.16em] text-primary uppercase shadow-soft">
            Signature
          </span>
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold text-balance sm:text-4xl md:text-[2.75rem]">
            Meet the Signature Shahi Churmur
          </h2>
          <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg">
            One of the crowd favorites at T-Spot — rich, flavorful, crunchy, and made for serious
            street-food lovers.
          </p>
          <div className="mt-8">
            <ActionLink href={TSPOT.maps} external size="lg" className="w-full sm:w-auto">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Try It Today
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
