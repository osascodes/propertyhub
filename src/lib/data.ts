export const LOCATIONS = ["Lekki", "Ikoyi", "Victoria Island", "Ikeja", "Ajah"] as const;
export const TYPES = ["Apartment", "House", "Duplex", "Villa", "Land"] as const;
export const LISTINGS = ["For Sale", "For Rent", "New Development"] as const;

export type Property = {
  slug: string; title: string; location: string; area: string; type: string; listing: string;
  beds: number; baths: number; sqft: number; image: string; gallery: string[];
  overview: string; features: string[]; featured?: boolean; development?: string;
};

const img = (id: string, w = 1800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const shot = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const properties: Property[] = [
  { slug: "modern-residence-lekki", title: "Modern 3-Bedroom Residence", location: "Lekki", area: "Lekki Phase 1, Lagos", type: "House", listing: "For Sale", beds: 3, baths: 3, sqft: 2450, featured: true, development: "azure-gardens", image: img("1613490493576-7fde63acd811"), gallery: [img("1613490493576-7fde63acd811"), img("1600607687939-ce8a6c25118c", 1600), img("1600585154340-be6161a56a0c", 1600)], overview: "Set back from Admiralty Drive, this three-bedroom house opens onto a long garden and a terrace that stays cool in the late afternoon.", features: ["Swimming pool", "Fitted kitchen", "Parking for 3", "24-hour security", "Generator", "Staff quarters"] },
  { slug: "the-residence-ikoyi", title: "The Residence", location: "Ikoyi", area: "Old Ikoyi, Lagos", type: "Duplex", listing: "For Sale", beds: 3, baths: 4, sqft: 3200, featured: true, development: "meridian-residences", image: img("1600596542815-ffad4c1539a9"), gallery: [img("1600596542815-ffad4c1539a9"), img("1600566753190-17f0baa2a6c3", 1600)], overview: "A quiet duplex on Glover Road. Oak floors, a shared garden with mature trees. Inspection by appointment.", features: ["Swimming pool", "Garden", "Study", "Walk-in pantry", "Security", "Staff quarters"] },
  { slug: "conservation-penthouse", title: "West-Facing Penthouse", location: "Lekki", area: "Lekki Conservation Road, Lagos", type: "Apartment", listing: "For Rent", beds: 3, baths: 4, sqft: 3100, featured: true, image: img("1512917774080-9991f1c4c750"), gallery: [img("1512917774080-9991f1c4c750"), img("1600607687644-c7171b42498b", 1600)], overview: "The top two floors of Conservation Court, joined into one home. Open living facing west and a small roof terrace.", features: ["Roof terrace", "Lift", "Basement parking", "Gym", "Smart locks", "Generator"] },
  { slug: "gra-family-flat", title: "Family Flat in GRA", location: "Ikeja", area: "Isaac John Street, GRA Ikeja", type: "Apartment", listing: "For Rent", beds: 3, baths: 3, sqft: 1800, featured: true, image: img("1560184897-ae75f418493e"), gallery: [img("1560184897-ae75f418493e"), img("1554995207-c18c203602cb", 1600)], overview: "A ground-floor flat in a four-unit house. Large rooms, a private backyard, parking inside the compound.", features: ["Private backyard", "Compound parking", "All rooms en-suite", "Security", "Borehole"] },
  { slug: "vi-apartment-kofo", title: "High-Floor Apartment on Kofo Abayomi", location: "Victoria Island", area: "Kofo Abayomi Street, Victoria Island", type: "Apartment", listing: "For Rent", beds: 2, baths: 2, sqft: 1450, development: "palm-court", image: img("1502672260266-1c1ef2d93688"), gallery: [img("1502672260266-1c1ef2d93688"), img("1560448204-e02f11c3d0e2", 1600)], overview: "Both bedrooms are en-suite. A long balcony looks toward the lagoon edge of the island.", features: ["Balcony", "Lift", "Fitted wardrobes", "Parking for 2", "Security"] },
  { slug: "ajah-corner-plot", title: "Corner Plot near Abraham Adesanya", location: "Ajah", area: "Off Abraham Adesanya Road, Ajah", type: "Land", listing: "For Sale", beds: 0, baths: 0, sqft: 7200, image: img("1500382017468-9049fed747ef"), gallery: [img("1500382017468-9049fed747ef")], overview: "A dry rectangular corner plot above the usual flood line. Survey papers available before any payment.", features: ["Corner plot", "Fenced", "Survey available", "Motorable access"] },
  { slug: "chevron-detached", title: "Detached House off Chevron Drive", location: "Lekki", area: "Chevron Drive, Lekki", type: "Villa", listing: "For Sale", beds: 4, baths: 4, sqft: 3400, featured: true, image: img("1570129477492-45c003edd2be"), gallery: [img("1570129477492-45c003edd2be"), img("1600210492486-724fe5c67fb0", 1600)], overview: "Four bedrooms inside a gated street. Living and dining downstairs, bedrooms up. Space for three cars.", features: ["Gated street", "All rooms en-suite", "Fitted kitchen", "Parking for 3", "Generator"] },
  { slug: "sangotedo-duplex", title: "Semi-Detached in Greenfield", location: "Ajah", area: "Greenfield Estate, Sangotedo", type: "Duplex", listing: "New Development", beds: 4, baths: 4, sqft: 2800, image: img("1564013799919-ab600027ffc6"), gallery: [img("1564013799919-ab600027ffc6")], overview: "A new four-bedroom semi-detached inside a managed estate. Single gate, small playground, compact BQ.", features: ["Estate security", "Playground", "BQ", "All rooms en-suite", "Brand new"] },
];

export const developments = [
  { slug: "meridian-residences", name: "The Meridian Residences", location: "Ikoyi, Lagos", image: img("1600596542815-ffad4c1539a9"), story: "Two duplexes behind a single gate on Glover Road. The trees were already there.", units: ["5-bedroom duplex", "Garden suite", "Staff quarters"] },
  { slug: "azure-gardens", name: "Azure Gardens", location: "Lekki, Lagos", image: img("1613490493576-7fde63acd811"), story: "A small cluster on Admiralty Drive. Houses that open to water and garden.", units: ["3-bedroom residence", "4-bedroom villa"] },
  { slug: "palm-court", name: "Palm Court", location: "Victoria Island, Lagos", image: img("1502672260266-1c1ef2d93688"), story: "A well-kept block on Kofo Abayomi. High floors and a working lift.", units: ["2-bedroom apartment", "3-bedroom apartment"] },
];

export const locations = [
  { slug: "lekki", name: "Lekki", text: "Houses and new buildings from Phase 1 through Conservation Road and Chevron.", image: img("1613490493576-7fde63acd811", 1400) },
  { slug: "ikoyi", name: "Ikoyi", text: "Older plots, quieter streets, and homes that still feel like houses after ten years.", image: img("1600596542815-ffad4c1539a9", 1400) },
  { slug: "victoria-island", name: "Victoria Island", text: "Apartments close to the offices, with balconies that catch the lagoon air.", image: img("1502672260266-1c1ef2d93688", 1400) },
  { slug: "ikeja", name: "Ikeja", text: "GRA streets and compound living for families who need the airport road.", image: img("1560184897-ae75f418493e", 1400) },
  { slug: "ajah", name: "Ajah", text: "Plots and new estates on the eastern stretch of the corridor.", image: img("1564013799919-ab600027ffc6", 1400) },
];

export const team = [
  { name: "Amaka Cole", role: "Principal", note: "Leads acquisitions in Lekki and Ikoyi.", image: shot(1181686) },
  { name: "David Wright", role: "Head of Lettings", note: "Island apartments and GRA houses.", image: shot(1516680) },
  { name: "James Hart", role: "Developments", note: "New buildings and land on the eastern corridor.", image: shot(3778603) },
  { name: "Sofia Ellis", role: "Client desk", note: "Viewings, papers, and the first reply.", image: shot(3760514) },
];

export const testimonials = [
  { quote: "PropertyHub made finding our home in Ikoyi simple from the first note to the keys.", name: "Ada Cole", place: "Ikoyi" },
  { quote: "They sent three houses. We viewed two. We took the second. No theatre.", name: "James Ade", place: "Lekki" },
  { quote: "Clear papers, a working generator, and an agent who answered on the same day.", name: "Mariam Ellis", place: "Victoria Island" },
];

export function filterProperties(list: Property[], f: Record<string, string | undefined>) {
  return list.filter((p) => {
    if (f.q && !`${p.title} ${p.area} ${p.location}`.toLowerCase().includes(f.q.toLowerCase())) return false;
    if (f.location && p.location !== f.location) return false;
    if (f.type && p.type !== f.type) return false;
    if (f.listing && p.listing !== f.listing) return false;
    if (f.beds && p.beds < Number(f.beds)) return false;
    if (f.baths && p.baths < Number(f.baths)) return false;
    if (f.min && p.sqft < Number(f.min)) return false;
    if (f.max && p.sqft > Number(f.max)) return false;
    return true;
  });
}
