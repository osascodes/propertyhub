import { LOCATIONS } from "@/lib/seed-properties";

export function HeroSearch() {
  return (
    <form action="/properties" className="grid gap-3 bg-paper p-4 md:grid-cols-6 md:items-end">
      <label className="block text-xs uppercase tracking-wider text-mute">
        Location
        <select name="location" className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">All areas</option>
          {LOCATIONS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Type
        <select name="type" className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">Any type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Duplex</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Listing
        <select name="listing" className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm">
          <option value="">Sale or rent</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Min price
        <input name="min" type="number" placeholder="0" className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm" />
      </label>
      <label className="block text-xs uppercase tracking-wider text-mute">
        Max price
        <input name="max" type="number" placeholder="Any" className="mt-1 w-full border border-line bg-paper px-3 py-2.5 text-sm" />
      </label>
      <button type="submit" className="bg-ink px-4 py-2.5 text-sm text-paper hover:bg-accent-dark">
        Search
      </button>
    </form>
  );
}
