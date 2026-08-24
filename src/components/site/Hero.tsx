import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-streetfood.jpg";
import { TSPOT } from "@/lib/tspot";
import { ActionLink } from "./ui";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-accent/70 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground shadow-soft">
            <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
            Asian Street Food • Dhaka 1216
          </span>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.03] font-bold text-balance sm:text-6xl">
            Taste the Street. <span className="text-primary">Love the Spot.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-pretty text-muted-foreground sm:text-lg">
            Fresh, flavorful Asian street food made for those who love bold taste, good vibes, and
            unforgettable bites.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-float">
            <img
              src={heroImg}
              width={1408}
              height={1408}
              alt="Plate of crispy fuchka with a bowl of chotpoti, tamarind water and fresh toppings at T-Spot"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -top-4 -left-3 flex items-center gap-2 rounded-2xl border border-border bg-card/95 px-3.5 py-2.5 shadow-lift backdrop-blur sm:-left-6">
            <Star className="h-4 w-4 fill-tamarind text-tamarind" aria-hidden="true" />
            <div className="leading-tight">
              <p className="text-sm font-bold">{TSPOT.rating} ★</p>
              <p className="text-[0.7rem] text-muted-foreground">{TSPOT.reviews} Reviews</p>
            </div>
          </div>

          <div className="absolute -right-2 bottom-16 rounded-2xl border border-border bg-card/95 px-3.5 py-2.5 shadow-lift backdrop-blur sm:-right-5">
            <p className="text-sm font-bold">৳1–200</p>
            <p className="text-[0.7rem] text-muted-foreground">Affordable bites</p>
          </div>

          <div className="absolute -bottom-4 left-4 rounded-2xl border border-border bg-card/95 px-3.5 py-2.5 text-sm font-semibold shadow-lift backdrop-blur sm:left-8">
            Dine-in • Takeaway
          </div>
        </div>
      </div>
    </section>
  );
}
