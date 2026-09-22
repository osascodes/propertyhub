import { PropertyCard } from "@/components/property-card";
import { LOCATIONS } from "@/lib/seed-properties";
import { filterProperties, getProperties, parseFilters } from "@/lib/properties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description: "Browse homes and rentals across Lagos.",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const filters = parseFilters(searchParams);
  const all = await getProperties();
  const results = filterProperties(all, filters);

  return (
    <div className="mx-auto max-w-site px-5 py-14 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-mute">Listings</p>
      <h1 className="mt-2 font-serif text-5xl">Properties</h1>
      <p className="mt-3 max-w-xl text-mute">{results.length} homes currently shown.</p>
      <form className="mt-10 grid gap-3 border border-line bg-paper p-4 md:grid-cols-6">
        <input name="q" defaultValue={filters.q} placeholder="Search" className="border border-line bg-paper px-3 py-2.5 text-sm md:col-span-2" />
        <select name="location" defaultValue={filters.location} className="border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">Location</option>
          {LOCATIONS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <select name="type" defaultValue={filters.type} className="border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Duplex</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>
        <select name="listing" defaultValue={filters.listing} className="border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">Listing</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
        <select name="sort" defaultValue={filters.sort} className="border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="newest">Newest</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
        <input name="min" type="number" defaultValue={filters.min || ""} placeholder="Min ₦" className="border border-line bg-paper px-3 py-2.5 text-sm" />
        <input name="max" type="number" defaultValue={filters.max || ""} placeholder="Max ₦" className="border border-line bg-paper px-3 py-2.5 text-sm" />
        <select name="beds" defaultValue={filters.beds || ""} className="border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">Beds</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <button className="bg-ink text-sm text-paper">Apply</button>
      </form>
      {results.length === 0 ? (
        <p className="mt-16 text-center text-mute">Nothing matches those filters.</p>
      ) : (
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}
