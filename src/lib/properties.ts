import { seedProperties } from "@/lib/seed-properties";
import type { Property } from "@/lib/types";

export type Filters = {
  q?: string;
  location?: string;
  type?: string;
  listing?: string;
  min?: number;
  max?: number;
  beds?: number;
  sort?: string;
};

export function filterProperties(list: Property[], f: Filters) {
  let result = [...list];
  if (f.q) {
    const q = f.q.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q)
    );
  }
  if (f.location) result = result.filter((p) => p.location === f.location);
  if (f.type) result = result.filter((p) => p.propertyType === f.type);
  if (f.listing) result = result.filter((p) => p.listingType === f.listing);
  if (f.min) result = result.filter((p) => p.price >= f.min!);
  if (f.max) result = result.filter((p) => p.price <= f.max!);
  if (f.beds) result = result.filter((p) => p.bedrooms >= f.beds!);
  if (f.sort === "price-asc") result.sort((a, b) => a.price - b.price);
  else if (f.sort === "price-desc") result.sort((a, b) => b.price - a.price);
  return result;
}

export async function getProperties(): Promise<Property[]> {
  return seedProperties;
}

export async function getPropertyBySlug(slug: string) {
  return seedProperties.find((p) => p.slug === slug);
}

export async function getFeatured() {
  return seedProperties.filter((p) => p.featured).slice(0, 6);
}

export function parseFilters(
  sp: Record<string, string | string[] | undefined>
): Filters {
  const g = (k: string) => {
    const v = sp[k];
    return Array.isArray(v) ? v[0] : v;
  };
  const n = (k: string) => (g(k) ? Number(g(k)) : undefined);
  return {
    q: g("q"),
    location: g("location"),
    type: g("type"),
    listing: g("listing"),
    min: n("min"),
    max: n("max"),
    beds: n("beds"),
    sort: g("sort") || "newest",
  };
}
