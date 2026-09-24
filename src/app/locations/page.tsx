import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/data";
import { Reveal } from "@/components/reveal";
export const metadata = { title: "Locations" };
export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <Reveal dir="up"><h1 className="font-serif text-5xl">Explore Lagos</h1></Reveal>
      <div className="mt-12 space-y-16">
        {locations.map((l, i) => (
          <Reveal key={l.slug} dir={i % 2 ? "right" : "left"}>
            <Link href={`/properties?location=${encodeURIComponent(l.name)}`} className="grid items-center gap-8 md:grid-cols-2">
              <div className={`relative aspect-[16/10] ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={l.image} alt={l.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-4xl">{l.name}</h2>
                <p className="mt-4 leading-relaxed text-mist">{l.text}</p>
                <span className="mt-4 inline-block text-sm text-gold">View properties →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
