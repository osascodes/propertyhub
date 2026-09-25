import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { PropertyCard } from "@/components/property-card";
import { developments, locations, properties, team, testimonials } from "@/lib/data";

export default function HomePage() {
  const featured = properties.filter((p) => p.featured).slice(0, 4);
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal dir="left">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Who we are</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">A desk that still walks the street.</h2>
          </Reveal>
          <Reveal dir="right">
            <p className="leading-relaxed text-mist">PropertyHub began with notes on houses in Lekki and Ikoyi that still felt like homes after a decade. We now place a curated set of residences, lettings, and three developments.</p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-8 border-t border-line pt-10 text-center md:grid-cols-3">
          {[
            { to: 10, suffix: "+", label: "Years experience" },
            { to: 200, suffix: "+", label: "Properties placed" },
            { to: 5, suffix: "", label: "Prime locations" },
          ].map((s) => (
            <Reveal key={s.label} dir="up">
              <p className="text-center font-serif text-5xl text-gold">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-center text-sm text-mist">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <Reveal dir="up">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-4xl">Featured properties</h2>
            <Link href="/properties" className="text-sm text-mist hover:text-ivory">Explore all</Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} dir={i % 2 ? "right" : "left"}><PropertyCard p={p} /></Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-line py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal dir="up"><h2 className="font-serif text-4xl">Our developments</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {developments.map((d, i) => (
              <Reveal key={d.slug} dir={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <Link href={`/developments/${d.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
                    <div className="absolute bottom-0 p-5">
                      <p className="text-xs uppercase tracking-wider text-gold">{d.location}</p>
                      <h3 className="mt-2 font-serif text-2xl">{d.name}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal dir="left"><h2 className="font-serif text-4xl">Explore Lagos</h2></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {locations.map((l, i) => (
            <Reveal key={l.slug} dir={i % 2 ? "up" : "down"}>
              <Link href={`/properties?location=${encodeURIComponent(l.name)}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={l.image} alt={l.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-night/35" />
                  <p className="absolute bottom-4 left-4 font-serif text-2xl">{l.name}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-line py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal dir="up"><h2 className="font-serif text-4xl">Why PropertyHub</h2></Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {[["Local expertise", "Deep knowledge of Lagos streets, papers, and what a plot actually floods."], ["Curated properties", "A selected portfolio. Not every listing on the market."], ["Professional service", "From the first note to the enquiry, one desk answers."], ["Trusted experience", "Clear rooms, clear title notes, no copied flyers."]].map(([t, d], i) => (
              <Reveal key={t} dir={i < 2 ? "left" : "right"}>
                <p className="text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal dir="right"><h2 className="font-serif text-4xl">Meet the team</h2></Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} dir={i % 2 ? "up" : "down"}>
              <div className="relative aspect-[3/4] overflow-hidden"><Image src={m.image} alt={m.name} fill className="object-cover" /></div>
              <p className="mt-3 font-serif text-xl">{m.name}</p>
              <p className="text-sm text-gold">{m.role}</p>
            </Reveal>
          ))}
        </div>
        <Link href="/team" className="mt-8 inline-block text-sm text-mist">All specialists →</Link>
      </section>
      <section className="border-y border-line py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal dir="up"><h2 className="font-serif text-4xl">What clients say</h2></Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} dir={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <p className="font-serif text-2xl leading-snug">“{t.quote}”</p>
                <p className="mt-4 text-sm text-gold">{t.name} · {t.place}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 md:px-8">
        <Reveal dir="up">
          <div className="mx-auto max-w-6xl bg-ivory px-8 py-16 text-night md:px-16">
            <h2 className="font-serif text-4xl md:text-5xl">Let us find the right space for you.</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/properties" className="bg-night px-5 py-3 text-sm text-ivory">Explore properties</Link>
              <Link href="/contact" className="border border-night px-5 py-3 text-sm">Talk to us</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
