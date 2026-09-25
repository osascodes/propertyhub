import { Reveal } from "@/components/reveal";
export const metadata = { title: "About" };
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <Reveal dir="up">
        <p className="text-xs uppercase tracking-[0.24em] text-gold">About</p>
        <h1 className="mt-4 font-serif text-5xl">Who we are</h1>
      </Reveal>
      <Reveal dir="left" className="mt-8">
        <p className="leading-relaxed text-mist">PropertyHub is a Lagos practice. We started by walking streets in Lekki and Ikoyi and writing down which houses still felt like homes after ten years. That notebook became the desk.</p>
      </Reveal>
      <Reveal dir="right" className="mt-4">
        <p className="leading-relaxed text-mist">Today we place residences, lettings, and three developments. We do not run a feed of every listing in the city.</p>
      </Reveal>
      <div className="mt-16 grid gap-8 border-t border-line pt-10 text-center md:grid-cols-3">
        {[["10+", "Years experience"],["200+", "Properties"],["5", "Prime locations"]].map(([n,l]) => (
          <Reveal key={l} dir="up">
            <p className="text-center font-serif text-4xl text-gold">{n}</p>
            <p className="mt-2 text-center text-sm text-mist">{l}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
