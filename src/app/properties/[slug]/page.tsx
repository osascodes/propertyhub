import Image from "next/image";
import { notFound } from "next/navigation";
import { properties } from "@/lib/data";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = properties.find((x) => x.slug === params.slug);
  return { title: p?.title || "Property" };
}
export default function PropertyPage({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <article className="pb-24 pt-20">
      <div className="relative h-[70vh] min-h-[420px]">
        <Image src={p.gallery[0]} alt={p.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/20" />
      </div>
      {p.gallery.length > 1 && (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 pt-3 md:px-8">
          {p.gallery.slice(1).map((src) => (
            <div key={src} className="relative aspect-[16/10]"><Image src={src} alt="" fill className="object-cover" /></div>
          ))}
        </div>
      )}
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_0.7fr] md:px-8">
        <Reveal dir="left">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{p.area}</p>
          <h1 className="mt-3 font-serif text-5xl">{p.title}</h1>
          {p.beds > 0 && <p className="mt-4 text-mist">{p.beds} Beds · {p.baths} Baths · {p.sqft.toLocaleString()} sq ft</p>}
          <p className="mt-2 text-sm text-mist">{p.type} · {p.listing}</p>
          <h2 className="mt-10 font-serif text-3xl">Overview</h2>
          <p className="mt-4 leading-relaxed text-mist">{p.overview}</p>
          <h2 className="mt-10 font-serif text-3xl">Property features</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">{p.features.map((f) => <li key={f} className="border-b border-line py-2">{f}</li>)}</ul>
          <h2 className="mt-10 font-serif text-3xl">Location</h2>
          <p className="mt-3 text-mist">{p.area}</p>
        </Reveal>
        <Reveal dir="right">
          <div className="border border-line p-6">
            <h2 className="font-serif text-2xl">Enquire about this property</h2>
            <div className="mt-6"><EnquiryForm property={p.title} /></div>
            <a href={`https://wa.me/2348094412200?text=${encodeURIComponent("Hello, I am interested in " + p.title)}`} className="mt-4 inline-block text-sm text-gold">Message on WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
