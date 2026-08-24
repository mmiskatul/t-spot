import { ArrowRight, Quote, Star } from "lucide-react";
import { TSPOT } from "@/lib/tspot";
import { Reveal } from "./Reveal";
import { ActionLink, SectionHeading } from "./ui";

const reviews = [
  {
    text: "One of the best places in the city for chotpoti and doi fuchka at this price point. Their signature Shahi Churmur is incredibly tasty and a must try.",
    name: "Mohammad Nazmul Hasan Tareq",
  },
  {
    text: "I tried their doi fuchka, and honestly, it wasn't what I expected.",
    name: "Jakaria Islam",
  },
  {
    text: "I have tried Pagla Pani Puri, and the food was fresh. The taste was also good.",
    name: "Atiq Insight",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Reviews" title="What Customers Are Saying" />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 font-bold shadow-soft">
              <Star className="h-4 w-4 fill-tamarind text-tamarind" aria-hidden="true" />
              {TSPOT.rating} / 5
            </span>
            <span className="rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft">
              {TSPOT.reviews} Google Reviews
            </span>
          </div>
        </Reveal>

        <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={i * 80}
              className="w-[82%] shrink-0 snap-start md:w-auto"
            >
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Quote className="h-6 w-6 text-primary/60" aria-hidden="true" />
                <blockquote className="mt-4 grow text-[0.95rem] leading-relaxed text-pretty">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold">— {r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center">
          <ActionLink href={TSPOT.maps} external variant="outline" size="lg">
            See More Reviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
