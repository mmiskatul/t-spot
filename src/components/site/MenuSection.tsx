import { ArrowRight } from "lucide-react";
import fuchka from "@/assets/fuchka.jpg";
import chotpoti from "@/assets/chotpoti.jpg";
import doiFuchka from "@/assets/doi-fuchka.jpg";
import churmur from "@/assets/shahi-churmur.jpg";
import pani from "@/assets/pagla-pani-puri.jpg";
import chaat from "@/assets/chaat.jpg";
import malai from "@/assets/malai-chaat.jpg";
import { TSPOT } from "@/lib/tspot";
import { Reveal } from "./Reveal";
import { ActionLink, SectionHeading } from "./ui";

const dishes = [
  {
    name: "Fuchka",
    img: fuchka,
    desc: "Crisp puri shells stuffed with spiced potato and a kick of green chili.",
    popular: true,
  },
  {
    name: "Chotpoti",
    img: chotpoti,
    desc: "Warm chickpea and potato bowl with egg, onion and tangy masala.",
    popular: true,
  },
  {
    name: "Doi Fuchka",
    img: doiFuchka,
    desc: "Cool yogurt poured over crunchy shells with sweet tamarind drizzle.",
  },
  {
    name: "Shahi Churmur",
    img: churmur,
    desc: "Crushed puri tossed with potato, chickpeas and creamy signature dressing.",
    popular: true,
  },
  {
    name: "Pagla Pani Puri",
    img: pani,
    desc: "Sharp, herby pani served ice-cold with freshly fried puri.",
  },
  {
    name: "Chaat",
    img: chaat,
    desc: "Crispy papri layered with chutneys, yogurt and crunchy sev.",
  },
  {
    name: "Malai Chaat",
    img: malai,
    desc: "Rich malai topping with nuts over a light, crisp base.",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="The Menu"
          title="What Are You Craving?"
          subtitle="Your favorite street-food classics, packed with flavor."
        />
      </Reveal>

      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
        {dishes.map((d, i) => (
          <Reveal
            as="li"
            key={d.name}
            delay={(i % 3) * 80}
            className="w-[78%] shrink-0 snap-start sm:w-auto"
          >
            <article className="group h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
              <div className="relative overflow-hidden">
                <img
                  src={d.img}
                  loading="lazy"
                  width={800}
                  height={800}
                  alt={`${d.name} served at T-Spot`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {d.popular ? (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-soft">
                    Popular
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                <p className="mt-4 text-xs font-semibold tracking-wide text-primary uppercase">
                  Price available at restaurant
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex justify-center">
        <ActionLink href={TSPOT.maps} external variant="outline" size="lg">
          View Full Menu
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ActionLink>
      </Reveal>
    </section>
  );
}
