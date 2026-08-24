import { MapPin, Phone } from "lucide-react";
import { TSPOT } from "@/lib/tspot";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={TSPOT.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-lift"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={TSPOT.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card font-semibold text-foreground shadow-soft"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
