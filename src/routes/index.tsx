import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { InfoStrip } from "@/components/site/InfoStrip";
import { MenuSection } from "@/components/site/MenuSection";
import { Signature } from "@/components/site/Signature";
import { Why } from "@/components/site/Why";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { TSPOT } from "@/lib/tspot";

const TITLE = "T-Spot | Asian Street Food in Dhaka";
const DESCRIPTION =
  "Discover T-Spot in Dhaka for flavorful fuchka, chotpoti, churmur, chaat and more. Visit us at 6 Rd 3, Dhaka 1216.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "T-Spot",
          description: DESCRIPTION,
          servesCuisine: ["Asian", "Street Food", "Bangladeshi"],
          priceRange: "৳1–200",
          telephone: "+8801675555705",
          hasMap: TSPOT.maps,
          url: TSPOT.maps,
          address: {
            "@type": "PostalAddress",
            streetAddress: "6 Rd 3",
            addressLocality: "Dhaka",
            postalCode: "1216",
            addressCountry: "BD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "3.7",
            reviewCount: "147",
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Dine-in", value: true },
            { "@type": "LocationFeatureSpecification", name: "Takeaway", value: true },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <InfoStrip />
        <MenuSection />
        <Signature />
        <Why />
        <Reviews />
        <Gallery />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
