import { MapPin, Star, UtensilsCrossed, Wallet } from "lucide-react";
import { TSPOT } from "@/lib/tspot";
import { Reveal } from "./Reveal";

const items = [
  { icon: MapPin, label: "Location", value: TSPOT.addressShort },
  { icon: UtensilsCrossed, label: "Dining", value: "Dine-in & Takeaway" },
  { icon: Wallet, label: "Price", value: TSPOT.price },
  { icon: Star, label: "Rating", value: `${TSPOT.rating} / 5 from ${TSPOT.reviews} reviews` },
];

export function InfoStrip() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6" aria-label="Quick information">
      <Reveal className="rounded-[1.75rem] border border-border bg-card p-2 shadow-soft">
        <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-3xl px-4 py-4 transition-colors hover:bg-muted"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="truncate text-sm font-semibold">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
