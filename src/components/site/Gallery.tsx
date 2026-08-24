import { useEffect, useState } from "react";
import { X } from "lucide-react";
import fuchka from "@/assets/fuchka.jpg";
import chotpoti from "@/assets/chotpoti.jpg";
import doiFuchka from "@/assets/doi-fuchka.jpg";
import churmur from "@/assets/shahi-churmur.jpg";
import chaat from "@/assets/chaat.jpg";
import malai from "@/assets/malai-chaat.jpg";
import pani from "@/assets/pagla-pani-puri.jpg";
import atmosphere from "@/assets/atmosphere.jpg";
import closeup from "@/assets/closeup.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const shots = [
  { src: churmur, alt: "Shahi Churmur bowl at T-Spot", span: "sm:row-span-2" },
  { src: fuchka, alt: "Crispy fuchka shells with spiced filling" },
  { src: chotpoti, alt: "Chotpoti bowl with egg and onion" },
  { src: atmosphere, alt: "Bright dining area inside T-Spot", span: "sm:col-span-2" },
  { src: doiFuchka, alt: "Doi fuchka topped with yogurt" },
  { src: closeup, alt: "Close-up of a fuchka with tamarind water" },
  { src: chaat, alt: "Chaat plate with chutneys and sev" },
  { src: malai, alt: "Malai chaat with nuts and saffron" },
  { src: pani, alt: "Glasses of spiced pani for pani puri" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="gallery"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-28"
    >
      <Reveal>
        <SectionHeading eyebrow="Gallery" title="A Little Taste of T-Spot" />
      </Reveal>

      <div className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:grid-cols-3 lg:grid-cols-4">
        {shots.map((s, i) => (
          <Reveal key={s.alt} delay={(i % 4) * 60} className={s.span ?? ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View larger: ${s.alt}`}
              className="group h-full w-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={s.src}
                loading="lazy"
                alt={s.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex animate-in items-center justify-center bg-ink/80 p-4 fade-in duration-200 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-card text-foreground shadow-lift"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={shots[active]!.src}
            alt={shots[active]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] w-auto max-w-full animate-in rounded-[1.75rem] object-contain shadow-float zoom-in-95 duration-300"
          />
        </div>
      ) : null}
    </section>
  );
}
