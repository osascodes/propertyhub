"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LOCATIONS, TYPES } from "@/lib/data";

const slides = [
  { image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80", kicker: "Lagos" },
  { image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80", kicker: "Ikoyi" },
  { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80", kicker: "Lekki" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {slides.map((s, idx) => (
        <div key={s.image} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}>
          <Image src={s.image} alt="" fill priority={idx === 0} className={`object-cover ${idx === i ? "kenburns" : ""}`} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/30" />
        </div>
      ))}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">{slides[i].kicker}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">Find a place that feels like home.</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80">PropertyHub is a Lagos practice. We place houses, apartments, and a small number of developments across Lekki, Ikoyi, Victoria Island, and GRA.</p>
        <form action="/properties" className="mt-10 grid gap-3 border border-line bg-night/70 p-4 backdrop-blur md:grid-cols-4">
          <label className="text-xs uppercase tracking-wider text-mist">Location
            <select name="location" className="mt-1 w-full border border-line bg-night px-3 py-2.5 text-sm text-ivory">
              <option value="">All areas</option>
              {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </label>
          <label className="text-xs uppercase tracking-wider text-mist">Property type
            <select name="type" className="mt-1 w-full border border-line bg-night px-3 py-2.5 text-sm text-ivory">
              <option value="">Any</option>
              {TYPES.map((l) => <option key={l}>{l}</option>)}
            </select>
          </label>
          <label className="text-xs uppercase tracking-wider text-mist">Bedrooms
            <select name="beds" className="mt-1 w-full border border-line bg-night px-3 py-2.5 text-sm text-ivory">
              <option value="">Any</option>
              <option value="1">1+</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option>
            </select>
          </label>
          <button className="bg-ivory text-sm text-night md:self-end md:py-2.5">Search</button>
        </form>
        <div className="mt-6 flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)} className={`h-1 w-10 ${idx === i ? "bg-gold" : "bg-ivory/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
