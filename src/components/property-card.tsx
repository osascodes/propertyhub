import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/data";
export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group">
      <Link href={`/properties/${p.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
          <span className="absolute left-3 top-3 bg-night/80 px-2 py-1 text-[11px] uppercase tracking-wider">{p.listing}</span>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">{p.area}</p>
        <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
        {p.beds > 0 && <p className="mt-2 text-sm text-mist">{p.beds} Beds · {p.baths} Baths · {p.sqft.toLocaleString()} sq ft</p>}
      </Link>
    </article>
  );
}
