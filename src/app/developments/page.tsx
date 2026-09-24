import Image from "next/image";
import Link from "next/link";
import { developments } from "@/lib/data";
import { Reveal } from "@/components/reveal";
export const metadata = { title: "Developments" };
export default function DevelopmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <Reveal dir="up">
        <h1 className="font-serif text-5xl">Our developments</h1>
        <p className="mt-4 max-w-xl text-mist">Buildings we have finished or placed under the PropertyHub name.</p>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {developments.map((d, i) => (
          <Reveal key={d.slug} dir={i === 1 ? "up" : i === 0 ? "left" : "right"}>
            <Link href={`/developments/${d.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-gold">{d.location}</p>
              <h2 className="mt-2 font-serif text-3xl">{d.name}</h2>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
