import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { LISTINGS, LOCATIONS, TYPES, filterProperties, properties } from "@/lib/data";
import Link from "next/link";

export const metadata = { title: "Properties" };

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const g = (k: string) => {
    const v = searchParams[k];
    return Array.isArray(v) ? v[0] : v;
  };
  const f = { q: g("q"), location: g("location"), type: g("type"), listing: g("listing"), beds: g("beds"), baths: g("baths"), min: g("min"), max: g("max") };
  const more = Boolean(f.baths || f.min || f.max || f.listing);
  const list = filterProperties(properties, f);
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <Reveal dir="up"><h1 className="font-serif text-5xl">Find your next property</h1></Reveal>
      <form className="mt-10 grid gap-3 rounded-md border border-line p-4 md:grid-cols-4">
        <input name="q" defaultValue={f.q} placeholder="Search location, neighbourhood…" className="rounded-md border border-line bg-transparent px-3 py-2 text-sm md:col-span-2" />
        <select name="location" defaultValue={f.location || ""} className="rounded-md border border-line bg-night px-3 py-2 text-sm">
          <option value="">Location</option>
          {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select name="type" defaultValue={f.type || ""} className="rounded-md border border-line bg-night px-3 py-2 text-sm">
          <option value="">Property type</option>
          {TYPES.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select name="beds" defaultValue={f.beds || ""} className="rounded-md border border-line bg-night px-3 py-2 text-sm">
          <option value="">Bedrooms</option>
          <option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option>
        </select>
        <details className="md:col-span-4" open={more}>
          <summary className="cursor-pointer text-sm text-gold">More filters</summary>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            <select name="listing" defaultValue={f.listing || ""} className="rounded-md border border-line bg-night px-3 py-2 text-sm">
              <option value="">Listing type</option>
              {LISTINGS.map((l) => <option key={l}>{l}</option>)}
            </select>
            <select name="baths" defaultValue={f.baths || ""} className="rounded-md border border-line bg-night px-3 py-2 text-sm">
              <option value="">Bathrooms</option>
              <option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option>
            </select>
            <input name="min" defaultValue={f.min} placeholder="Min sq ft" type="number" className="rounded-md border border-line bg-transparent px-3 py-2 text-sm" />
            <input name="max" defaultValue={f.max} placeholder="Max sq ft" type="number" className="rounded-md border border-line bg-transparent px-3 py-2 text-sm" />
          </div>
        </details>
        <button className="rounded-md bg-ivory py-2 text-sm text-night">Search</button>
        <Link href="/properties" className="rounded-md border border-line py-2 text-center text-sm">Reset filters</Link>
      </form>
      {list.length === 0 ? (
        <p className="mt-16 text-center text-mist">No properties match those filters.</p>
      ) : (
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} dir={i % 2 ? "right" : "left"}><PropertyCard p={p} /></Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
