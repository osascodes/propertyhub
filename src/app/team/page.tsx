import Image from "next/image";
import { team } from "@/lib/data";
import { Reveal } from "@/components/reveal";
export const metadata = { title: "Team" };
export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8">
      <Reveal dir="up">
        <h1 className="font-serif text-5xl">Meet the PropertyHub team</h1>
        <p className="mt-4 max-w-xl text-mist">Specialists who walk the rooms before we write about them.</p>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <Reveal key={m.name} dir={i % 2 ? "up" : "down"}>
            <div className="relative aspect-[3/4]"><Image src={m.image} alt={m.name} fill className="object-cover" /></div>
            <p className="mt-4 font-serif text-2xl">{m.name}</p>
            <p className="text-sm text-gold">{m.role}</p>
            <p className="mt-2 text-sm text-mist">{m.note}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
