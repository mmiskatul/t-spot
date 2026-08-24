import { Leaf, MapPin, Wallet, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const features = [
  {
    icon: Leaf,
    title: "Fresh & Flavorful",
    desc: "Street-food favorites prepared with attention to freshness and taste.",
  },
  { icon: Wallet, title: "Affordable", desc: "Great food without a heavy price tag." },
  {
    icon: MapPin,
    title: "Local Favorite",
    desc: "A growing spot for chotpoti, fuchka, chaat and more.",
  },
  {
    icon: Zap,
    title: "Quick & Casual",
    desc: "Perfect for a quick bite, takeaway, or casual hangout.",
  },
];

export function Why() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Why T-Spot" title="Why People Stop at T-Spot" />
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal as="li" key={f.title} delay={i * 70}>
            <div className="h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
