import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/types";
import { formatNaira } from "@/lib/utils";

export function PropertyCard({ property }: { property: Property }) {
  const image = property.images.find((i) => i.isPrimary) ?? property.images[0];
  const period = property.listingType === "For Rent" ? " / year" : "";

  return (
    <article className="group">
      <Link href={`/properties/${property.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          {image && (
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          <span className="absolute left-3 top-3 bg-paper/95 px-2.5 py-1 text-[11px] uppercase tracking-wider">
            {property.listingType}
          </span>
        </div>
        <div className="pt-4">
          <p className="text-xs uppercase tracking-[0.16em] text-mute">
            {property.location} · {property.propertyType}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-snug">{property.title}</h3>
          <p className="mt-2 text-sm">
            {formatNaira(property.price)}
            <span className="text-mute">{period}</span>
          </p>
          {property.bedrooms > 0 && (
            <p className="mt-2 text-sm text-mute">
              {property.bedrooms} bed · {property.bathrooms} bath
              {property.squareFeet ? ` · ${property.squareFeet.toLocaleString()} sqft` : ""}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
