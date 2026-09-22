import Image from "next/image";
import Link from "next/link";
import { HeroSearch } from "@/components/hero-search";
import { PropertyCard } from "@/components/property-card";
import { getFeatured } from "@/lib/properties";

const places = [
  { name: "Lekki", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80" },
  { name: "Ikoyi", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80" },
  { name: "Victoria Island", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80" },
  { name: "Ikeja", image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=80" },
  { name: "Ajah", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80" },
];

export default async function HomePage() {
  const featured = await getFeatured();

  return (
    <>
      <section className="relative min-h-[88vh]">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt="A Lagos residence at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-site flex-col justify-end px-5 pb-12 pt-32 md:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-paper/80">Lagos · Sales & rentals</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.05] text-paper md:text-7xl">
            Find a place that feels like home.
          </h1>
          <p className="mt-5 max-w-lg text-base text-paper/85">
            Houses, apartments, and measured investments across Lekki, Ikoyi, Victoria Island, and the rest of the city.
          </p>
          <div className="mt-8">
            <HeroSearch />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-5 py-20 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mute">Selected work</p>
            <h2 className="mt-2 font-serif text-4xl">Featured properties</h2>
          </div>
          <Link href="/properties" className="hidden text-sm text-accent md:inline">View all</Link>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
      <section className="bg-sand/60 py-20">
        <div className="mx-auto max-w-site px-5 md:px-8">
          <h2 className="font-serif text-4xl">Popular locations</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {places.map((place) => (
              <Link key={place.name} href={`/properties?location=${encodeURIComponent(place.name)}`} className="group relative aspect-[3/4] overflow-hidden">
                <Image src={place.image} alt={place.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/30" />
                <span className="absolute bottom-4 left-4 font-serif text-2xl text-paper">{place.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mute">Why PropertyHub</p>
            <h2 className="mt-2 font-serif text-4xl">Fewer listings. Better notes.</h2>
            <p className="mt-5 max-w-md text-mute leading-relaxed">
              We do not publish every house that comes across the desk. Each listing is visited, photographed, and written so you can decide whether it is worth the drive.
            </p>
          </div>
          <ol className="space-y-8">
            <li><p className="font-serif text-2xl">01 — Discover</p><p className="mt-2 text-sm text-mute">Search by neighbourhood, type, and budget.</p></li>
            <li><p className="font-serif text-2xl">02 — Explore</p><p className="mt-2 text-sm text-mute">Read the rooms, the street, and the numbers before you book a viewing.</p></li>
            <li><p className="font-serif text-2xl">03 — Contact</p><p className="mt-2 text-sm text-mute">Write to the agent on the listing, or WhatsApp for a faster reply.</p></li>
          </ol>
        </div>
      </section>
      <section className="border-t border-line px-5 py-20 md:px-8">
        <div className="mx-auto max-w-site text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Looking for something specific?</h2>
          <p className="mx-auto mt-4 max-w-md text-mute">Tell us the area and the budget. We will reply with what is actually available.</p>
          <Link href="/contact" className="mt-8 inline-block bg-ink px-6 py-3 text-sm text-paper">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
