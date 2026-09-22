import Image from "next/image";
import { notFound } from "next/navigation";
import { getProperties, getPropertyBySlug } from "@/lib/properties";
import { formatNaira } from "@/lib/utils";
import { InquiryForm } from "@/components/inquiry-form";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const all = await getProperties();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);
  if (!property) return { title: "Property" };
  return { title: property.title, description: property.description.slice(0, 160) };
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyBySlug(params.slug);
  if (!property) notFound();
  const primary = property.images.find((i) => i.isPrimary) ?? property.images[0];
  const rest = property.images.filter((i) => i.id !== primary?.id);
  const period = property.listingType === "For Rent" ? " / year" : "";
  const wa = `https://wa.me/2348094412200?text=${encodeURIComponent(`Hello, I am interested in ${property.title}`)}`;

  return (
    <article>
      <div className="relative h-[55vh] min-h-[360px] bg-sand">
        {primary && <Image src={primary.url} alt={primary.alt} fill priority className="object-cover" />}
      </div>
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-2 px-5 py-2 md:px-8">
          {rest.map((img) => (
            <div key={img.id} className="relative aspect-[16/9] bg-sand">
              <Image src={img.url} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
      <div className="mx-auto grid max-w-site gap-14 px-5 py-14 md:grid-cols-[1.4fr_0.8fr] md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mute">{property.location} · {property.listingType}</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">{property.title}</h1>
          <p className="mt-4 text-xl">{formatNaira(property.price)}<span className="text-mute">{period}</span></p>
          <p className="mt-2 text-sm text-mute">{property.address}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-6 text-sm md:grid-cols-4">
            <div><dt className="text-mute">Type</dt><dd className="mt-1">{property.propertyType}</dd></div>
            <div><dt className="text-mute">Beds</dt><dd className="mt-1">{property.bedrooms || "—"}</dd></div>
            <div><dt className="text-mute">Baths</dt><dd className="mt-1">{property.bathrooms || "—"}</dd></div>
            <div><dt className="text-mute">Size</dt><dd className="mt-1">{property.squareFeet.toLocaleString()} sqft</dd></div>
          </dl>
          <p className="mt-10 leading-relaxed">{property.description}</p>
          <h2 className="mt-12 font-serif text-2xl">Amenities</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-mute">{property.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
          <h2 className="mt-10 font-serif text-2xl">Features</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-mute">{property.features.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <aside className="h-fit border border-line bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-mute">Agent</p>
          <p className="mt-2 font-serif text-2xl">{property.agentName}</p>
          <p className="mt-1 text-sm text-mute">{property.agentPhone}</p>
          <a href={wa} className="mt-5 block border border-ink px-4 py-3 text-center text-sm hover:bg-ink hover:text-paper">WhatsApp this listing</a>
          <p className="mb-4 mt-8 font-serif text-xl">Ask about this home</p>
          <InquiryForm propertySlug={property.slug} />
        </aside>
      </div>
    </article>
  );
}
