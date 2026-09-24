import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { developments, properties } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return developments.map((d) => ({ slug: d.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: developments.find((d) => d.slug === params.slug)?.name || "Development" };
}
export default function DevelopmentPage({ params }: { params: { slug: string } }) {
  const d = developments.find((x) => x.slug === params.slug);
  if (!d) notFound();
  const units = properties.filter((p) => p.development === d.slug);
  return (
    <article className="pb-24 pt-20">
      <div className="relative h-[65vh]">
        <Image src={d.image} alt={d.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
        <div className="absolute bottom-0 mx-auto w-full max-w-6xl px-5 pb-12 md:px-8">
          <p className="text-xs uppercase tracking-wider text-gold">{d.location}</p>
          <h1 className="mt-2 font-serif text-5xl">{d.name}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <Reveal dir="up">
          <p className="text-lg leading-relaxed text-mist">{d.story}</p>
          <h2 className="mt-10 font-serif text-2xl">Available unit types</h2>
          <ul className="mt-4 text-mist">{d.units.map((u) => <li key={u} className="border-b border-line py-2">{u}</li>)}</ul>
        </Reveal>
      </div>
      {units.length > 0 && (
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-serif text-3xl">Homes in this development</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">{units.map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
        </div>
      )}
      <div className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
        <Link href="/contact" className="text-gold">Enquire about this development →</Link>
      </div>
    </article>
  );
}
